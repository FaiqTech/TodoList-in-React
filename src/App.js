// App.js
import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import TodoList from "./components/todolist/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>MY TODO LIST</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
