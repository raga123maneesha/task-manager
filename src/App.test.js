import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Task Manager heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Task Manager/i);
  expect(headingElement).toBeInTheDocument();
});

test('allows adding a new task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const buttonElement = screen.getByText(/add/i);

  fireEvent.change(inputElement, { target: { value: 'Test Task' } });
  fireEvent.click(buttonElement);

  const taskElement = screen.getByText(/Test Task/i);
  expect(taskElement).toBeInTheDocument();
});

test('allows deleting a task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const addButton = screen.getByText(/add/i);

  // Add a task
  fireEvent.change(inputElement, { target: { value: 'Task to Delete' } });
  fireEvent.click(addButton);

  // Task should appear
  const taskElement = screen.getByText(/Task to Delete/i);
  expect(taskElement).toBeInTheDocument();

  // Delete the task
  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  // Task should no longer be in the document
  expect(screen.queryByText(/Task to Delete/i)).not.toBeInTheDocument();
});
