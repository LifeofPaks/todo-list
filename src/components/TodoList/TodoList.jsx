import React from "react";
import "./TodoList.scss";
import ActiveList from "../ActiveList/ActiveList";
import AllTodos from "../AllTodos/AllTodos";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import CompletedTask from "../CompletedTask/CompletedTask";

const TodoList = ({
  item,
  handleCheck,
  handleDelete,
  darkMode,
  clearAll,
  active,
  inActive,
  showAll,
  actives,
  completedTodo,
  completed,
  dragStart,
  dragEnter,
  drop,
}) => {
  return (
    <div className={`todoList ${darkMode ? "darkMode" : ""}`}>
      <Routes>
        <Route
          path="/"
          element={
            <AllTodos
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              darkMode={darkMode}
              dragStart={dragStart}
              dragEnter={dragEnter}
              drop={drop}
            />
          }
        />
        <Route
          path="active"
          element={
            <ActiveList
              actives={actives}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              darkMode={darkMode}
            />
          }
        />

        <Route
          path="completed"
          element={
            <CompletedTask
              completed={completed}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              darkMode={darkMode}
            />
          }
        />
      </Routes>

      <section className="summary">
        <p className="itemsleft">
          {item.length > 1
            ? `${item.length} items left`
            : item.length === 1
            ? `${item.length} item left`
            : "Your list is empty"}
        </p>
        <div className="action">
          <NavLink className="link" to="/" activeclassname="active">
            <p onClick={showAll}> All </p>
          </NavLink>
          <NavLink className="link" to="active">
            {" "}
            <p onClick={active}>Active</p>
          </NavLink>
          <NavLink className="link" to="completed">
            <p onClick={completedTodo}>Completed</p>
          </NavLink>
        </div>
        <p className="clear" onClick={clearAll}>
          Clear Completed
        </p>
      </section>
    </div>
  );
};

export default TodoList;
