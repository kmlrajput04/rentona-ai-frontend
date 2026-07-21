'use client';

/**
 * Relocation Feature Module
 * Progress tracking, checklist management, and settlement milestones.
 */

import type { RelocationTask, RelocationChecklist } from '@/types/models';

// Task category configuration
export const TASK_CATEGORIES = [
  { key: 'visa', label: 'Visa & Immigration', icon: '🛂', color: 'sky' },
  { key: 'finance', label: 'Banking & Finance', icon: '💰', color: 'emerald' },
  { key: 'housing', label: 'Housing Setup', icon: '🏠', color: 'indigo' },
  { key: 'travel', label: 'Travel & Transport', icon: '✈️', color: 'purple' },
  { key: 'compliance', label: 'Compliance', icon: '📋', color: 'amber' },
] as const;

// Get tasks filtered by category
export function getTasksByCategory(tasks: RelocationTask[], category: string): RelocationTask[] {
  return tasks.filter((task) => task.category === category);
}

// Calculate progress by category
export function getCategoryProgress(tasks: RelocationTask[], category: string): number {
  const categoryTasks = getTasksByCategory(tasks, category);
  if (categoryTasks.length === 0) return 0;
  const completed = categoryTasks.filter((t) => t.status === 'completed').length;
  return Math.round((completed / categoryTasks.length) * 100);
}

// Get overdue tasks
export function getOverdueTasks(tasks: RelocationTask[]): RelocationTask[] {
  const now = new Date();
  return tasks.filter((task) => {
    if (task.status === 'completed' || !task.dueDate) return false;
    return new Date(task.dueDate) < now;
  });
}

// Sort tasks by priority (overdue first, then pending, then in_progress, then completed)
export function sortTasksByPriority(tasks: RelocationTask[]): RelocationTask[] {
  const priorityOrder = { pending: 0, in_progress: 1, completed: 2 };
  return [...tasks].sort((a, b) => priorityOrder[a.status] - priorityOrder[b.status]);
}
