import { api } from './api-client';
import type { CommunityPost } from '@/types/models';
import type { CreatePostRequest, CreatePostResponse, ApiResponse } from '@/types/api';

/**
 * Community Service — Forum posts, engagement, and social features.
 */

// Get all community posts (paginated)
export function getCommunityPosts(page: number = 1, category?: string) {
  return api.get<ApiResponse<CommunityPost[]>>('/community/posts', {
    params: { page, category },
  });
}

// Get a single post by ID
export function getPostById(id: string) {
  return api.get<{ post: CommunityPost }>(`/community/posts/${id}`);
}

// Create a new community post
export function createPost(data: CreatePostRequest) {
  return api.post<CreatePostResponse>('/community/posts', data);
}

// Update an existing post
export function updatePost(id: string, data: Partial<CreatePostRequest>) {
  return api.put<{ post: CommunityPost }>(`/community/posts/${id}`, data);
}

// Delete a post
export function deletePost(id: string) {
  return api.delete<{ message: string }>(`/community/posts/${id}`);
}

// Like/unlike a post
export function togglePostLike(id: string) {
  return api.post<{ liked: boolean; likesCount: number }>(`/community/posts/${id}/like`);
}

// Get comments for a post
export function getPostComments(postId: string) {
  return api.get<ApiResponse<{ id: string; content: string; authorName: string; createdAt: string }[]>>(
    `/community/posts/${postId}/comments`
  );
}

// Add a comment to a post
export function addComment(postId: string, content: string) {
  return api.post<{ comment: { id: string; content: string } }>(`/community/posts/${postId}/comments`, { content });
}
