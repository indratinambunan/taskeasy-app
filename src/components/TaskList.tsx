import React from 'react';

const TaskList = ({ tasks }) => {
  // Sort tasks by priority: high → medium → low
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <div className="tasks-section">
      <h2>Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet. Create your first task above!</p>
      ) : (
        <div className="tasks-list">
          {sortedTasks.map((task) => (
            <div 
              key={task.id} 
              className={`task-item priority-${task.priority}`}
              data-testid="task-item"
            >
              <div className="task-header">
                <h3>{task.title}</h3>
                <span className={`priority-badge ${task.priority}`}>
                  {task.priority.toUpperCase()}
                </span>
              </div>
              
              {task.description && (
                <p className="task-description">{task.description}</p>
              )}
              
              <div className="task-meta">
                <span className={`status-badge ${task.status}`}>
                  {task.status.replace('-', ' ').toUpperCase()}
                </span>
                <span className="task-date">
                  Created: {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;