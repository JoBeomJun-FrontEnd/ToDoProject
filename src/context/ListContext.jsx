import { createContext, useState } from 'react';

export const ListContext = createContext();

export function ListProvider({ children }) {
  const [todoList, setTodoList] = useState(list);
  const addTodoList = ({ active, detail }) => {
    let count = 0;
    todoList.todoContents.forEach((content) => {
      if (content.detail === detail) {
        count++;
      }
    });
    count === 0
      ? setTodoList((prev) => ({
          todoContents: [...prev.todoContents, { active, detail }],
        }))
      : alert('같은 Todo가 이미 있습니다.');
  };

  const deleteTodoList = (del) => {
    setTodoList((prev) => ({
      todoContents: prev.todoContents.filter(
        (content) => content.detail !== del
      ),
    }));
  };

  const activeChange = (detail) => {
    console.log('s');
    setTodoList((prev) => ({
      todoContents: prev.todoContents.map((content) =>
        content.detail === detail
          ? { ...content, active: !content.active }
          : content
      ),
    }));
  };

  return (
    <ListContext.Provider
      value={{ todoList, addTodoList, deleteTodoList, activeChange }}
    >
      {children}
    </ListContext.Provider>
  );
}

const list = {
  todoContents: [],
};
