import React, { useContext } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoDarkMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      {darkMode ? (
        <FaMoon
          className="text-orange-500 hover:text-yellow-400"
          onClick={() => toggleDarkMode()}
        />
      ) : (
        <IoSunny
          className="text-gray-600 hover:text-orange-500"
          onClick={() => toggleDarkMode()}
        />
      )}
    </div>
  );
}
