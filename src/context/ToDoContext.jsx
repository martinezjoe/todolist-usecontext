import { createContext, useState, useEffect } from 'react';

export const ToDoContext = createContext();

export const ToDoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [listShow, setListShow] = useState(todoList);
  const [filter, setFilter] = useState('SHOW_ALL');

  function addTodo(value) {
    if (todoList.length > 0) {
      value.id = todoList[todoList.length - 1].id + 1;
    } else {
      value.id = 1;
    }
    setTodoList([...todoList, value]);
  }

  function deleteTodo(value) {
    const temp = todoList;
    const result = temp.filter((list) => list.id != value);
    setTodoList([...result]);
  }

  function completedTodo(value) {
    const temp = todoList;
    const index = temp.findIndex((t) => t.id == value);
    temp[index].completed = !temp[index].completed;
    setTodoList([...temp]);
  }

  function showAll() {
    setFilter('SHOW_ALL');
  }

  function showPending() {
    setFilter('SHOW_PENDING');
  }

  function showCompleted() {
    setFilter('SHOW_COMPLETED');
  }

  useEffect(() => {
    filterShow(filter);
  });

  function filterShow(filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return setListShow(todoList);
      case 'SHOW_COMPLETED':
        const tempCompleted = todoList;
        const resultCompleted = tempCompleted.filter(
          (list) => list.completed != false
        );
        return setListShow([...resultCompleted]);
      case 'SHOW_PENDING':
        const tempPending = todoList;
        const resultPending = tempPending.filter(
          (list) => list.completed != true
        );
        return setListShow([...resultPending]);

      default:
        return setListShow(todoList);
    }
  }

  return (
    <ToDoContext.Provider
      value={{
        todoList,
        addTodo,
        deleteTodo,
        completedTodo,
        listShow,
        showAll,
        showCompleted,
        showPending,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
