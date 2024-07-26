import React from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

export default function TodoListContainer() {
  return (
    <section className="flex flex-col h-full">
      <TodoList />
      <TodoAdd />
    </section>
  );
}
