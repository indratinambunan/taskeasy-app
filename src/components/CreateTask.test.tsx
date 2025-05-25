import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateTask from './CreateTask';

describe('CreateTask Component', () => {
  test('renders create task form', () => {
    render(<CreateTask onCreateTask={() => {}} />);
    
    expect(screen.getByLabelText(/task title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/priority/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create task/i })).toBeInTheDocument();
  });

  test('calls onCreateTask when form is submitted with valid data', () => {
    const mockOnCreateTask = jest.fn();
    render(<CreateTask onCreateTask={mockOnCreateTask} />);
    
    fireEvent.change(screen.getByLabelText(/task title/i), {
      target: { value: 'Test Task' }
    });
    
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: 'Test Description' }
    });
    
    fireEvent.change(screen.getByLabelText(/priority/i), {
      target: { value: 'high' }
    });
    
    fireEvent.change(screen.getByLabelText(/status/i), {
      target: { value: 'to-do' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /create task/i }));
    
    expect(mockOnCreateTask).toHaveBeenCalledWith({
      title: 'Test Task',
      description: 'Test Description',
      priority: 'high',
      status: 'to-do'
    });
  });

  test('does not submit form when title is empty', () => {
    const mockOnCreateTask = jest.fn();
    render(<CreateTask onCreateTask={mockOnCreateTask} />);
    
    fireEvent.click(screen.getByRole('button', { name: /create task/i }));
    
    expect(mockOnCreateTask).not.toHaveBeenCalled();
  });
});