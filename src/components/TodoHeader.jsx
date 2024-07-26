import React, { useState } from 'react';
import { IoSunny } from 'react-icons/io5';
import TodoMenu from './TodoMenu';
import { FaMoon } from 'react-icons/fa';

export default function TodoHeader() {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeClick = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <header className="h-12 pl-4 pr-4 pt-2 pb-2 flex justify-between items-center w-full bg-orange-100">
      {darkMode ? (
        <FaMoon
          className="text-gray-600 hover:text-orange-500"
          onClick={darkModeClick}
        />
      ) : (
        <IoSunny
          className="text-gray-600 hover:text-orange-500"
          onClick={darkModeClick}
        />
      )}

      <TodoMenu />
    </header>
  );
}
