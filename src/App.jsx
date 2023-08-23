import react, { useState } from "react";
import "./App.scss";
import Todo from "./components/Todo/Todo";
import { lists } from "./Helper/data/Data";
import Footer from "./components/Footer/Footer";

function App() {
  const [item, setItem] = useState(lists);
  const [darkMode, setDarkMode] = useState(false)


  // HANDLE CHECK AND COMPLETED
  const handleCheck = (id) =>{
    const completed = item.map(list =>(
      list.id === id ? {...list, checked: !list.checked} : list
    ))

    setItem(completed)
  }

  // HANDLE DELETE
  const handleDelete = (id) =>{
    const deleteItem = item.filter(todo=>(
      todo.id !== id
    ))

    setItem(deleteItem)
  }

  // SWITCH DISPLAY MODE
  const switchDisplayMode = () =>{
    setDarkMode(!darkMode)
  }



  return (
    <div>
      <Todo
        item={item}
        handleCheck={handleCheck}
        switchDisplayMode={switchDisplayMode}
        darkMode={darkMode}
        handleDelete={handleDelete}
      />

      <Footer/>
   
    </div>
  );
}

export default App;
