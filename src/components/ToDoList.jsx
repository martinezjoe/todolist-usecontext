import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';

const ToDoList = () => {
  const { listShow, deleteTodo, completedTodo } = useContext(ToDoContext);

  return (
    <tbody>
      {listShow.map((list) => {
        return (
          <tr key={list.id}>
            <th scope="row">{list.id} </th>
            <td>{list.title}</td>
            <td colSpan="4">{list.description}</td>
            <td>
              {list.completed ? (
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckCheckedDisabled"
                    checked
                    onClick={() => completedTodo(list.id)}
                  />
                </div>
              ) : (
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDisabled"
                    onClick={() => completedTodo(list.id)}
                  />
                </div>
              )}
            </td>
            <td className={list.completed ? 'completed' : 'pending'}>
              {list.completed ? 'Completed' : 'Pending'}
            </td>
            <td>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => deleteTodo(list.id)}
              ></button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ToDoList;
