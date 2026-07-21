import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Base API configuration URL targeting Rentora AI Gateway
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.rentora.ai/v1';

// Custom in-memory storage for JWT access token
let accessToken: string | null = null;

// Callback listener list to hold requests while refreshing token
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (cb: (token: string) => void) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (token: string) => {
  refreshSubscribers.map((cb) => cb(token));
  refreshSubscribers = [];
};

// Create Axios Client
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Getter and Setter for JWT (Zustand store will hook into this)
export const getLocalAccessToken = () => accessToken;
export const setLocalAccessToken = (token: string | null) => {
  accessToken = token;
};

// Request Interceptor: Attach JWT Access Token dynamically
apiClient.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    // Add unique request Correlation-ID for telemetry and auditing
    if (config.headers) {
      config.headers['X-Correlation-ID'] = crypto.randomUUID();
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Refresh JWT token on 401 Unauthorized
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const { config, response } = error;
    const originalRequest = config;

    // Check if error is 401 and we have not already attempted to retry
    if (response && response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Queue the request while token refresh is in progress
        return new Promise((resolve) => {
          subscribeTokenRefresh((token: string) => {
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] = `Bearer ${token}`;
            }
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Fire POST refresh request to gateway (using HTTP-Only Secure cookie)
        const refreshResponse = await axios.post(
          `${API_BASE_URL}/auth/refresh-token`,
          {},
          { withCredentials: true }
        );

        const newAccessToken = refreshResponse.data.accessToken;
        setLocalAccessToken(newAccessToken);
        
        isRefreshing = false;
        onRefreshed(newAccessToken);

        // Retry the original request
        if (originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        }
        return apiClient(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        refreshSubscribers = [];
        setLocalAccessToken(null);
        
        // Session expired, redirect to login page (safely checking window availability)
        if (typeof window !== 'undefined') {
          window.location.href = `/login?expired=true&returnUrl=${encodeURIComponent(
            window.location.pathname
          )}`;
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Helper client wrappers for clean services exports
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    apiClient.get<T>(url, config).then((res) => res.data),
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    apiClient.post<T>(url, data, config).then((res) => res.data),
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    apiClient.put<T>(url, data, config).then((res) => res.data),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    apiClient.delete<T>(url, config).then((res) => res.data),
};
