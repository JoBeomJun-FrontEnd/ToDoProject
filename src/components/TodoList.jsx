import React, { useContext } from 'react';
import { ListContext } from '../context/ListContext';
import { FaRegTrashCan } from 'react-icons/fa6';
import { HeaderMenuContext } from '../context/HeaderMenuContext';
import { DarkModeContext } from '../context/DarkModeContext';

export default function TodoList() {
  const { darkMode } = useContext(DarkModeContext);
  const { todoList, deleteTodoList, activeChange } = useContext(ListContext);
  const { selectMenu } = useContext(HeaderMenuContext);

  const handleCanClick = (event) => {
    deleteTodoList(event.target.closest('article').getAttribute('data-detail'));
  };

  const handelInputChange = (event) => {
    const target = event.target.closest('article');
    activeChange(target.getAttribute('data-detail'));
  };

  return darkMode ? (
    <ul className="flex flex-col h-full text-white">
      {todoList.todoContents.map((todo, index) => {
        if (selectMenu === 'All') {
          return (
            <article
              key={index}
              className="flex flex-row items-center justify-between w-full h-8 text-2xl"
              data-detail={todo.detail}
            >
              <div>
                <input
                  className="ml-4 scale-125"
                  type="checkbox"
                  name="checkbox"
                  id="active-checkbox"
                  checked={todo.active}
                  onChange={handelInputChange}
                />
                <span className="pl-6">{todo.detail}</span>
              </div>
              <FaRegTrashCan
                className="mr-4 hover:text-red-500"
                onClick={handleCanClick}
              />
            </article>
          );
        } else if (selectMenu === 'Active' && !todo.active) {
          return (
            <article
              key={index}
              className="flex flex-row items-center justify-between w-full h-8 text-2xl"
              data-detail={todo.detail}
            >
              <div>
                <input
                  className="ml-4 scale-125"
                  type="checkbox"
                  name="checkbox"
                  id="active-checkbox"
                  checked={todo.active}
                  onChange={handelInputChange}
                />
                <span className="pl-6">{todo.detail}</span>
              </div>
              <FaRegTrashCan
                className="mr-4 hover:text-red-500"
                onClick={handleCanClick}
              />
            </article>
          );
        } else if (selectMenu === 'Completed' && todo.active) {
          return (
            <article
              key={index}
              className="flex flex-row items-center justify-between w-full h-8 text-2xl"
              data-detail={todo.detail}
            >
              <div>
                <input
                  className="ml-4 scale-125"
                  type="checkbox"
                  name="checkbox"
                  id="active-checkbox"
                  checked={todo.active}
                  onChange={handelInputChange}
                />
                <span className="pl-6">{todo.detail}</span>
              </div>
              <FaRegTrashCan
                className="mr-4 hover:text-red-500"
                onClick={handleCanClick}
              />
            </article>
          );
        }
      })}
    </ul>
  ) : (
    <ul className="flex flex-col h-full">
      {todoList.todoContents.map((todo, index) => {
        if (selectMenu === 'All') {
          return (
            <article
              key={index}
              className="flex flex-row items-center justify-between w-full h-8 text-2xl"
              data-detail={todo.detail}
            >
              <div>
                <input
                  className="ml-4 scale-125"
                  type="checkbox"
                  name="checkbox"
                  id="active-checkbox"
                  checked={todo.active}
                  onChange={handelInputChange}
                />
                <span className="pl-6">{todo.detail}</span>
              </div>
              <FaRegTrashCan
                className="mr-4 hover:text-red-500"
                onClick={handleCanClick}
              />
            </article>
          );
        } else if (selectMenu === 'Active' && !todo.active) {
          return (
            <article
              key={index}
              className="flex flex-row items-center justify-between w-full h-8 text-2xl"
              data-detail={todo.detail}
            >
              <div>
                <input
                  className="ml-4 scale-125"
                  type="checkbox"
                  name="checkbox"
                  id="active-checkbox"
                  checked={todo.active}
                  onChange={handelInputChange}
                />
                <span className="pl-6">{todo.detail}</span>
              </div>
              <FaRegTrashCan
                className="mr-4 hover:text-red-500"
                onClick={handleCanClick}
              />
            </article>
          );
        } else if (selectMenu === 'Completed' && todo.active) {
          return (
            <article
              key={index}
              className="flex flex-row items-center justify-between w-full h-8 text-2xl"
              data-detail={todo.detail}
            >
              <div>
                <input
                  className="ml-4 scale-125"
                  type="checkbox"
                  name="checkbox"
                  id="active-checkbox"
                  checked={todo.active}
                  onChange={handelInputChange}
                />
                <span className="pl-6">{todo.detail}</span>
              </div>
              <FaRegTrashCan
                className="mr-4 hover:text-red-500"
                onClick={handleCanClick}
              />
            </article>
          );
        }
      })}
    </ul>
  );
}
