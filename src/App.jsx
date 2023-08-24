import react, { useRef, useState } from "react";
import "./App.scss";
import Todo from "./components/Todo/Todo";
import { lists } from "./Helper/data/Data";
import Footer from "./components/Footer/Footer";
import { Routes, useNavigate } from "react-router-dom";


function App() {
  const [item, setItem] = useState(lists);
  const [darkMode, setDarkMode] = useState(false);
  const [addItem, setAddItem] = useState("");
  const [actives, setActives] = useState([]);
  const [completed, setCompleted] = useState([]);


  const navigate = useNavigate()
  const dragItem = useRef()
  const dragOverItem = useRef()


  // HANDLE CHECK AND COMPLETED
  const handleCheck = (id) => {
    const completed = item.map((list) =>
      list.id === id ? { ...list, checked: !list.checked } : list
    );

    setItem(completed);
  };

  // HANDLE DELETE
  const handleDelete = (id) => {
    const deleteItem = item.filter((todo) => todo.id !== id);

    setItem(deleteItem);
    navigate('/')
  };

  // SWITCH DISPLAY MODE
  const switchDisplayMode = () => {
    setDarkMode(!darkMode);
  };

  // ADD TODO

  const addTodo = (e) => {
    e.preventDefault();
    const id = item.length ? item[item.length - 1].id + 1 : 1;
    const newTodo = { id: id, checked: false, todo: addItem };
    setItem([...item, newTodo]);
    setAddItem("");
  };

  // SHOWALL ITEMS ON LIST
  const showAll = () => {
    setItem(item);
  };

  // CLEAR ALL ITEMS
  const clearAll = () => {
    setItem([]);
    setActives([])
    setCompleted([])
  };


  // SHOW ONLY ACTIVE LIST
  const active = () => {
    const activeTodo = item.filter((todo) => todo.checked === false);
    setActives(activeTodo);
  };


  // SHOW ONLY COMPLETED LIST
  const completedTodo = () => {
    const completedTask = item.filter((todo) => todo.checked !== false);
    setCompleted(completedTask);
  };

  // DRAG AND DROP ITEM==========================

  // DRAG START
  const dragStart = (e, position) =>{
    dragItem.current = position
  }

  // DRAG ENTER
  const dragEnter =(e, position)=>{
    dragOverItem.current.position
  }

  // DROP

  const drop = (e) => {
    const copyListItems = [...lists];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setItem(copyListItems);
  };

  return (
    <div>
      <Todo
        item={item}
        handleCheck={handleCheck}
        switchDisplayMode={switchDisplayMode}
        darkMode={darkMode}
        handleDelete={handleDelete}
        addItem={addItem}
        setAddItem={setAddItem}
        addTodo={addTodo}
        clearAll={clearAll}
        active={active}
        showAll={showAll}
        actives={actives}
        completedTodo={completedTodo}
        completed={completed}
        dragStart={dragStart}
        dragEnter={dragEnter}
        drop={drop}
      />

      <Footer />
    </div>
  );
}

export default App;
