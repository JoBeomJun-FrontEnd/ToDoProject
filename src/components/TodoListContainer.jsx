import React from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { ListProvider } from '../context/ListContext';

export default function TodoListContainer() {
  return (
    <ListProvider>
      <section className="flex flex-col h-full">
        <TodoList />
        <TodoAdd />
      </section>
    </ListProvider>
  );
}
