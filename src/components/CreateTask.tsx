import React, { useState } from 'react';
import { CreateTaskData, TaskPriority, TaskStatus } from '../types/Task';

interface CreateTaskProps {
  onCreateTask: (taskData: CreateTaskData) => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ onCreateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<TaskPriority>('medium');
  const [status, setStatus] = useState<TaskStatus>('to-do');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return; // Don't submit if title is empty
    }

    onCreateTask({
      title: title.trim(),
      description: description.trim() || undefined,
      priority,
      status
    });

    // Reset form
    setTitle('');
    setDescription('');
    setPriority('medium');
    setStatus('to-do');
  };

  return (
    <form onSubmit={handleSubmit} className="create-task-form">
      <div>
        <label htmlFor="task-title">Task Title</label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>

      <div>
        <label htmlFor="task-description">Description</label>
        <textarea
          id="task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description (optional)"
        />
      </div>

      <div>
        <label htmlFor="task-priority">Priority</label>
        <select
          id="task-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as TaskPriority)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label htmlFor="task-status">Status</label>
        <select
          id="task-status"
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
        >
          <option value="to-do">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;