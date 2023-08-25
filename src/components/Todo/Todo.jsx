import React from "react";
import "./Todo.scss";
import TodoList from "../TodoList/TodoList";
import DarkBg from "../../assets/bg-desktop-dark.jpg";
import DarkBgMobile from "../../assets/bg-mobile-dark.jpg";
import LightBg from "../../assets/bg-desktop-light.jpg";
import LightBgMobile from "../../assets/bg-mobile-light.jpg";

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

    // GREETING
    let greeting
    const date = new Date()
    const hour = date.getHours()
    
    
    if(hour < 12){
      greeting = 'Good Morning!'
    }
     else if(hour >= 12 && hour < 16){
      greeting = 'Good Afternoon!'
    } 
    else {
      greeting = 'Good Evening!'
    } 

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

        <p className="greeting"> {greeting}</p>

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
            <button>
            <img src="https://img.icons8.com/ios-filled/100/484b6a/add--v1.png" alt="add--v1"/>
            </button>
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
      {/* {darkMode ? (
        <picture className="backgroundImg">
          <source media="(max-width : 480px)" srcSet={DarkBgMobile} />
          <img src={DarkBg} alt="darkbg"  />
        </picture>
      ) : (
        <picture className="backgroundImg">
          <source media="(max-width : 480px)" srcSet={LightBgMobile} />
          <img src={LightBg} alt="darkbg"  />
        </picture>
      )}
      {darkMode && <div className="background"></div>} */}
    </div>
  );
};

export default Todo;
