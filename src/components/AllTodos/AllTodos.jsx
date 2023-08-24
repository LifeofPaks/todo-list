import React from "react";

const AllTodos = ({
  item,
  handleCheck,
  handleDelete,
  darkMode,
  dragStart,
  dragEnter,
  drop,
}) => {
  return (
    <>
      { item && 
       item.map((list, index) => (
        <section
          key={list.id}
          className="todoItems "
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={e=> dragEnter(e, index)}
          onDragEnd={drop}
        >
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
            {list.todo}
          </p>
          {darkMode ? (
            <img
              onClick={() => handleDelete(list.id)}
              className="delete"
              src="https://img.icons8.com/material-rounded/48/cacde8/filled-trash.png"
              alt="filled-trash"
            />
          ) : (
            <img
              onClick={() => handleDelete(list.id)}
              className="delete"
              src="https://img.icons8.com/material-rounded/48/484b6a/filled-trash.png"
              alt="filled-trash"
            />
          )}
        </section>
      ))}
    </>
  );
};

export default AllTodos;
