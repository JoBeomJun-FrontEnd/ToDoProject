import { createContext, useState } from 'react';

export const ListContext = createContext();

export function ListProvider({ children }) {
  const [todoList, setTodoList] = useState(list);
  const addTodoList = ({ active, detail }) => {
    let count = 0;
    todoList.todoContents.map((content) => {
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

  return (
    <ListContext.Provider value={{ todoList, addTodoList, deleteTodoList }}>
      {children}
    </ListContext.Provider>
  );
}

const list = {
  todoContents: [],
};
