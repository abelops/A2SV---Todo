// @ts-nocheck
import React from 'react';
import { render, fireEvent, screen,  } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import InputFeild from '../src/components/InputFeild'
import TodoList from '../src/components/TodoList';
import App from '../src/App'

import '@testing-library/jest-dom/extend-expect'
import { todo } from 'node:test';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


describe('InputField component', () => {
  test('typing and submitting input', () => {
    const setTodo = jest.fn();
    const handleAdd = jest.fn();

    render(
      <InputFeild todo="" setTodo={setTodo} handleAdd={handleAdd} />
    );

    const inputElement = screen.getByPlaceholderText('Enter a task');
    const submitButton = screen.getByText('GO');

    // Simulate typing into the input
    userEvent.type(inputElement, 'N');

    // Check if the setTodo function was called with the correct value
    expect(setTodo).toHaveBeenCalledWith('N');

    // Simulate form submission
    fireEvent.submit(submitButton);

    // Check if the handleAdd function was called
    expect(handleAdd).toHaveBeenCalled();

    // Check if input field is cleared after submission
    expect(inputElement.value).toBe('');
  });
});


describe('Todo list component', () => {
  test('typing and submitting input', () => {
    const setTodos = jest.fn();
    const todos = []
    
    const setTodo = jest.fn();
    const handleAdd = jest.fn();
    
    render(
      <InputFeild todo="" setTodo={setTodo} handleAdd={handleAdd} />
      );
    render(
      <TodoList todos={todos} setTodos={setTodos} />
    );
      
      const inputElement = screen.getByPlaceholderText('Enter a task');
      const submitButton = screen.getByText('GO');
      
      // Simulate typing into the input
      userEvent.type(inputElement, 'N');
      
      // Check if the setTodo function was called with the correct value
      expect(setTodo).toHaveBeenCalledWith('N');
      
      // Simulate form submission
      fireEvent.submit(submitButton);
      
      // const doneButton = screen.getByTestId('done');
      // fireEvent.click(doneButton);

      const todoItem = screen.getByText('N');
      expect(todoItem).toHaveStyle('text-decoration: line-through');
    });
    


});