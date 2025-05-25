import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from './TaskList';

const mockTasks = [
  {
    id: '1',
    title: 'Low Priority Task',
    description: 'This is low priority',
    priority: 'low',
    status: 'to-do',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2', 
    title: 'High Priority Task',
    description: 'This is high priority',
    priority: 'high',
    status: 'in-progress',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    title: 'Medium Priority Task', 
    description: 'This is medium priority',
    priority: 'medium',
    status: 'done',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe('TaskList Component', () => {
  test('renders task list with correct count', () => {
    render(<TaskList tasks={mockTasks} />);
    
    expect(screen.getByText('Tasks (3)')).toBeInTheDocument();
  });

  test('displays tasks sorted by priority (high → medium → low)', () => {
    render(<TaskList tasks={mockTasks} />);
    
    const taskElements = screen.getAllByTestId('task-item');
    
    expect(taskElements[0]).toHaveTextContent('High Priority Task');
    expect(taskElements[1]).toHaveTextContent('Medium Priority Task');
    expect(taskElements[2]).toHaveTextContent('Low Priority Task');
  });

  test('shows empty state when no tasks', () => {
    render(<TaskList tasks={[]} />);
    
    expect(screen.getByText('Tasks (0)')).toBeInTheDocument();
    expect(screen.getByText('No tasks yet. Create your first task above!')).toBeInTheDocument();
  });

  test('displays task details correctly', () => {
    render(<TaskList tasks={[mockTasks[0]]} />);
    
    expect(screen.getByText('Low Priority Task')).toBeInTheDocument();
    expect(screen.getByText(/Priority: low/)).toBeInTheDocument();
    expect(screen.getByText(/Status: to-do/)).toBeInTheDocument();
  });
});