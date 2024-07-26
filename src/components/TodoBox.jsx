import React from 'react';
import TodoHeader from './TodoHeader';
import TodoListContainer from './TodoListContainer';

export default function TodoBox() {
  return (
    <div className="flex flex-col max-w-xl w-full h-3/5 bg-white rounded-2xl overflow-hidden">
      <TodoHeader />
      <TodoListContainer />
    </div>
  );
}
