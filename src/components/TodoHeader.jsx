import React, { useContext } from 'react';
import TodoMenu from './TodoMenu';
import TodoDarkMode from './TodoDarkMode';
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoHeader() {
  const { darkMode } = useContext(DarkModeContext);

  return darkMode ? (
    <header className="h-12 pl-4 pr-4 pt-2 pb-2 flex justify-between items-center w-full bg-[#1A1C34]">
      <TodoDarkMode />
      <TodoMenu />
    </header>
  ) : (
    <header className="h-12 pl-4 pr-4 pt-2 pb-2 flex justify-between items-center w-full bg-orange-100">
      <TodoDarkMode />
      <TodoMenu />
    </header>
  );
}
