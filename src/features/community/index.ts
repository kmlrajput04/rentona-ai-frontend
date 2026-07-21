'use client';

/**
 * Community Feature Module
 * Forum panels, post management, and category utilities.
 */

import type { CommunityPost } from '@/types/models';

// Community categories configuration
export const COMMUNITY_CATEGORIES = [
  { key: 'roommates', label: 'Roommates', icon: '👥', color: 'indigo' },
  { key: 'marketplace', label: 'Marketplace', icon: '🛒', color: 'emerald' },
  { key: 'events', label: 'Events', icon: '📅', color: 'purple' },
  { key: 'circles', label: 'Social Circles', icon: '🤝', color: 'amber' },
  { key: 'general', label: 'General', icon: '💬', color: 'slate' },
] as const;

export type CommunityCategory = typeof COMMUNITY_CATEGORIES[number]['key'];

// Filter posts by category
export function filterByCategory(posts: CommunityPost[], category: CommunityCategory): CommunityPost[] {
  return posts.filter((post) => post.category === category);
}

// Sort posts by engagement (likes + comments)
export function sortByEngagement(posts: CommunityPost[]): CommunityPost[] {
  return [...posts].sort((a, b) => (b.likesCount + b.commentsCount) - (a.likesCount + a.commentsCount));
}

// Sort posts by newest
export function sortByNewest(posts: CommunityPost[]): CommunityPost[] {
  return [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

// Get category config by key
export function getCategoryConfig(key: CommunityCategory) {
  return COMMUNITY_CATEGORIES.find((c) => c.key === key);
}
