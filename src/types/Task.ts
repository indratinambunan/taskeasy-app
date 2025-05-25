export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'to-do' | 'in-progress' | 'done';
  createdAt: Date;
  updatedAt: Date;
}

export type TaskPriority = Task['priority'];
export type TaskStatus = Task['status'];

export interface CreateTaskData {
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
}