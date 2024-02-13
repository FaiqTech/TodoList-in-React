// components/Form.js
import React, { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      alert("Input alanı boş geçilemez!");
      return;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random().toString() },
    ]);
    setInputText("");
  };

  return (
    <form>
      <div className="search">
        <input
          value={inputText}
          type="text"
          className="todo-input"
          placeholder="Add..."
          onChange={inputTextHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
    </form>
  );
};

export default Form;
