import { api } from './api-client';
import type { RelocationChecklist, RelocationTask } from '@/types/models';
import type { UpdateTaskStatusRequest, ApiResponse } from '@/types/api';

/**
 * Relocation Service — Settlement checklists, task management, and progress tracking.
 */

// Get user's relocation checklist
export function getRelocationChecklist() {
  return api.get<{ checklist: RelocationChecklist }>('/relocation/checklist');
}

// Update a task's status
export function updateTaskStatus(data: UpdateTaskStatusRequest) {
  return api.put<{ task: RelocationTask }>(`/relocation/tasks/${data.taskId}`, {
    status: data.status,
  });
}

// Get all relocation tasks
export function getRelocationTasks() {
  return api.get<ApiResponse<RelocationTask[]>>('/relocation/tasks');
}

// Create a custom relocation task
export function createRelocationTask(data: Partial<RelocationTask>) {
  return api.post<{ task: RelocationTask }>('/relocation/tasks', data);
}

// Delete a relocation task
export function deleteRelocationTask(taskId: string) {
  return api.delete<{ message: string }>(`/relocation/tasks/${taskId}`);
}

// Get AI-generated relocation recommendations
export function getRelocationRecommendations(destination: string) {
  return api.get<{ recommendations: RelocationTask[] }>('/relocation/recommendations', {
    params: { destination },
  });
}
