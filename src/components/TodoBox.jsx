import React, { useContext } from 'react';
import TodoHeader from './TodoHeader';
import TodoListContainer from './TodoListContainer';
import { DarkModeContext } from '../context/DarkModeContext';
import { HeaderMenuProvider } from '../context/HeaderMenuContext';

export default function TodoBox() {
  const { darkMode } = useContext(DarkModeContext);
  return darkMode ? (
    <div className="flex flex-col max-w-xl w-full h-3/5 bg-[#22243A] rounded-2xl overflow-hidden">
      <HeaderMenuProvider>
        <TodoHeader />
        <TodoListContainer />
      </HeaderMenuProvider>
    </div>
  ) : (
    <div className="flex flex-col max-w-xl w-full h-3/5 bg-white rounded-2xl overflow-hidden">
      <HeaderMenuProvider>
        <TodoHeader />
        <TodoListContainer />
      </HeaderMenuProvider>
    </div>
  );
}
