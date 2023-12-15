
import React, { useState, useRef } from 'react';
import './App.css'; 

function App() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();

  const addTodo = () => {
    const text = todoRef.current.value;
    if (text !== '') {
      setTodos((prevTodos) => [...prevTodos, text]);
      todoRef.current.value = '';
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>ToDo List</h1>
        <div className="input-container">
          <input type="text" ref={todoRef} />
          <button onClick={addTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={index % 2 === 0 ? 'even' : 'odd'}
              onClick={() => removeTodo(index)}
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
