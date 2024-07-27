import React, { useContext } from 'react';
import TodoHeader from './TodoHeader';
import TodoListContainer from './TodoListContainer';
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoBox() {
  const { darkMode } = useContext(DarkModeContext);
  return darkMode ? (
    <div className="flex flex-col max-w-xl w-full h-3/5 bg-[#22243A] rounded-2xl overflow-hidden">
      <TodoHeader />
      <TodoListContainer />
    </div>
  ) : (
    <div className="flex flex-col max-w-xl w-full h-3/5 bg-white rounded-2xl overflow-hidden">
      <TodoHeader />
      <TodoListContainer />
    </div>
  );
}
