import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import ToDoList from './ToDoList';
import TodoForm from './ToDoForm';

const ToDoContainer = () => {
  const { todoList, showAll, showCompleted, showPending } =
    useContext(ToDoContext);

  return (
    <div>
      <div className="table-container">
        <h4 className="table-title p-3 mb-2 bg-primary text-white">
          YOUR TO DOs LIST
        </h4>

        <div className="buttons">
          <button type="button" className="btn btn-success" onClick={showAll}>
            Show All
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={showCompleted}
          >
            Show Completed
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={showPending}
          >
            Show Pending
          </button>
        </div>

        <table className="table table-list">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title </th>
              <th scope="col" colSpan="4">
                Description
              </th>
              <th scope="col">Completed</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {todoList.length == 0 ? (
            <p className="table-subtitle">Please create a new one...</p>
          ) : (
            <ToDoList />
          )}
        </table>
      </div>
      <TodoForm />
    </div>
  );
};

export default ToDoContainer;
