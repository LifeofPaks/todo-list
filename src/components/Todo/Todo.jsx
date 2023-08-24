import React from "react";
import "./Todo.scss";
import TodoList from "../TodoList/TodoList";
import DarkBg from "../../assets/bg-desktop-dark.jpg";
import LightBg from "../../assets/bg-desktop-light.jpg";
import ActiveList from "../ActiveList/ActiveList";

const Todo = ({
  item,
  handleCheck,
  switchDisplayMode,
  darkMode,
  handleDelete,
  addItem,
  setAddItem,
  addTodo,
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
    <div className="todo">
      <div className="container">
        <header>
          <h1 className="title">todo</h1>
          <div className="displayMode" onClick={switchDisplayMode}>
            {darkMode ? (
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/sun--v1.png"
                alt="sun--v1"
              />
            ) : (
              <img
                src="https://img.icons8.com/ios-glyphs/90/FFFFFF/moon-symbol.png"
                alt="moon-symbol"
              />
            )}
          </div>
        </header>

        <section className={`typeHere ${darkMode ? "darkMode" : ""}`}>
          <img
            className="unchecked"
            src="https://img.icons8.com/material-outlined/24/484b6a/unchecked-radio-button.png"
            alt="unchecked-radio-button"
          />
          <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Create a new todo..."
            value={addItem}
            onChange={(e) => setAddItem(e.target.value)}
          />
          </form>
        
        </section>

        <TodoList
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          darkMode={darkMode}
          clearAll={clearAll}
          active={active}
          inActive={inActive}
          showAll={showAll}
            actives={actives}
            completedTodo={completedTodo}
            completed={completed}
            dragStart={dragStart}
            dragEnter={dragEnter}
            drop={drop}
        />
        
      </div>
      {darkMode ? (
        <img src={DarkBg} alt="darkbg" className="backgroundImg" />
      ) : (
        <img src={LightBg} alt="darkbg" className="backgroundImg" />
      )}
      {darkMode && <div className="background"></div>}
    </div>
  );
};

export default Todo;
