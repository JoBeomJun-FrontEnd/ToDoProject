import React, { useContext } from 'react';
import { ListContext } from '../context/ListContext';
import { FaRegTrashCan } from 'react-icons/fa6';
import { HeaderMenuContext } from '../context/HeaderMenuContext';
import { DarkModeContext } from '../context/DarkModeContext';

const TodoItem = ({ todo, handelInputChange, handleCanClick }) => (
  <article
    className="flex flex-row items-center justify-between w-full h-8 text-2xl"
    data-detail={todo.detail}
  >
    <div>
      <input
        className="ml-4 scale-125"
        type="checkbox"
        name="checkbox"
        id={`checkbox-${todo.detail}`}
        checked={todo.active}
        onChange={handelInputChange}
      />
      <span className={`pl-6 ${todo.active ? 'line-through ' : ''}`}>
        {todo.detail}
      </span>
    </div>
    <FaRegTrashCan
      className="mr-4 hover:text-red-500"
      onClick={handleCanClick}
    />
  </article>
);

export default function TodoList() {
  const { darkMode } = useContext(DarkModeContext);
  const { todoList, deleteTodoList, activeChange } = useContext(ListContext);
  const { selectMenu } = useContext(HeaderMenuContext);

  const getFilteredTodos = () => {
    switch (selectMenu) {
      case 'All':
        return todoList.todoContents;
      case 'Active':
        return todoList.todoContents.filter((todo) => !todo.active);
      case 'Completed':
        return todoList.todoContents.filter((todo) => todo.active);
      default:
        return [];
    }
  };

  const handleCanClick = (event) => {
    deleteTodoList(event.target.closest('article').getAttribute('data-detail'));
  };

  const handelInputChange = (event) => {
    const target = event.target.closest('article');
    activeChange(target.getAttribute('data-detail'));
  };

  const darkState = darkMode ? 'text-white' : '';

  return (
    <ul className={`flex flex-col h-full ${darkState}`}>
      {getFilteredTodos().map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          handelInputChange={handelInputChange}
          handleCanClick={handleCanClick}
        />
      ))}
    </ul>
  );
}
