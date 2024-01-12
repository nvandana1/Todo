import React, { useEffect, useState } from "react";
import TodoForm from "./todoForm";
import uuid from "react-uuid";
import Todo from "./todo";
import "./todo.css";

const TodoWrapper = () => {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  const appendTaskToList = (task) => {
    if (task === "") return;
    setTodos((prev) => [...prev, { id: uuid(), task, completed: false }]);
  };
  useEffect(() => {
    // onChange in angular
    console.log(todos);
  }, [todos]);
  return (
    <>
      <TodoForm sendTask={appendTaskToList}></TodoForm>
      <div className="todo-list">
        {todos.map((task, index) => (
          <Todo task={task} key={index} className="todo-list"></Todo>
        ))}
      </div>
    </>
  );
};

export default TodoWrapper;
