/**
 * Rentora AI — Regex Validation Helpers
 */

/** Returns true if the given string is a valid email address. */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Returns true if the given string meets minimum password complexity (12+ chars, uppercase, number, special char). */
export function isStrongPassword(password: string): boolean {
  return password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password);
}

/** Checks password strength and returns a score from 0 (weak) to 4 (very strong). */
export function passwordStrength(password: string): 0 | 1 | 2 | 3 | 4 {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score as 0 | 1 | 2 | 3 | 4;
}

/** Validates a UK phone number format. */
export function isValidUKPhone(phone: string): boolean {
  return /^(\+44|0)7\d{9}$/.test(phone.replace(/\s/g, ''));
}

/** Validates a UK postcode. */
export function isValidPostcode(postcode: string): boolean {
  return /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(postcode.trim());
}

/** Validates that a string contains only alphanumeric characters and basic punctuation. */
export function isSafeText(text: string): boolean {
  return /^[a-zA-Z0-9\s.,!?'"-]*$/.test(text);
}

/** Validates a URL string. */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/** Validates a date string (ISO 8601 format). */
export function isValidDate(dateStr: string): boolean {
  const date = new Date(dateStr);
  return !isNaN(date.getTime());
}

/** Checks if a string is within a specified character range. */
export function isWithinLength(str: string, min: number, max: number): boolean {
  return str.length >= min && str.length <= max;
}
