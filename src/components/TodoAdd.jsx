import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { ListContext } from '../context/ListContext';

export default function TodoAdd() {
  const { todoList, addTodoList } = useContext(ListContext);
  const { darkMode } = useContext(DarkModeContext);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addButtonClick = () => {
    addTodoList({
      active: false,
      detail: inputValue,
    });
    setInputValue('');
  };

  return darkMode ? (
    <div className="font-bold pl-6 pr-6 pt-3 pb-3 flex justify-center items-center w-full h-16 bg-[#1A1C34]">
      <input
        className="rounded-s-md pl-3 h-full w-full bg-[#22243A]"
        type="text"
        placeholder="Add Todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-orange-500 hover:bg-orange-400 rounded-e-md text-white w-2/12 h-full"
        onClick={addButtonClick}
      >
        Add
      </button>
    </div>
  ) : (
    <div className="font-bold pl-6 pr-6 pt-3 pb-3 flex justify-center items-center w-full h-16 bg-orange-100">
      <input
        className="rounded-s-md pl-3 h-full w-full"
        type="text"
        placeholder="Add Todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-orange-500 hover:bg-orange-400 rounded-e-md text-white w-2/12 h-full"
        onClick={addButtonClick}
      >
        Add
      </button>
    </div>
  );
}
