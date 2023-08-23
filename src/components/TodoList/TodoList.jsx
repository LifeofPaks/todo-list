import React from "react";
import "./TodoList.scss";

const TodoList = ({ item, handleCheck, handleDelete, darkMode}) => {
  return (
    <div className={`todoList ${darkMode ? 'darkMode': ''}`}>
      {item.map((list) => (
        <section key={list.id} className="todoItems ">
          {list.checked ? (
            <img
              className="checked"
              src="https://img.icons8.com/material-rounded/48/484b6a/checked-radio-button.png"
              alt="checked-radio-button"
            />
          ) : (
            <img
              className="unchecked"
              src="https://img.icons8.com/material-outlined/24/484b6a/unchecked-radio-button.png"
              alt="unchecked-radio-button"
            />
          )}
          <p
            onClick={() => handleCheck(list.id)}
            className={`todoItem ${list.checked ? "completed" : ""}`}
          >
            {list.todo}{" "}
          </p>
          <img
            onClick={() => handleDelete(list.id)}
            className="delete"
            src="https://img.icons8.com/material-rounded/48/484b6a/filled-trash.png"
            alt="filled-trash"
          />
        </section>
      ))}

      <section className="summary">
        <p className="itemsleft">
          {item.length > 1
            ? `${item.length} items left`
            : item.length === 1
            ? `${item.length} item left`
            : "Your list is empty"}
        </p>
        <div className="action">
          <p className="all">All</p>
          <p className="active">Active</p>
          <p className="completed">Completed</p>
        </div>
        <p className="clear">Clear Completed</p>
      </section>
    </div>
  );
};

export default TodoList;
