import React, { useContext } from 'react';
import { ListContext } from '../context/ListContext';
import { FaRegTrashCan } from 'react-icons/fa6';

export default function TodoList() {
  const { todoList, deleteTodoList } = useContext(ListContext);

  const handleCanClick = (event) => {
    deleteTodoList(event.currentTarget.getAttribute('data-content'));
  };

  return (
    <ul className="flex flex-col h-full">
      {todoList.todoContents.map((todo) => (
        <article className="flex flex-row items-center justify-between w-full h-8 text-2xl">
          <div>
            <input className="ml-4 scale-125" type="checkbox" name="" id="" />
            <span className="pl-6">{todo.detail}</span>
          </div>
          <FaRegTrashCan
            data-content={todo.detail}
            className="mr-4 hover:text-red-500"
            onClick={handleCanClick}
          />
        </article>
      ))}
    </ul>
  );
}
