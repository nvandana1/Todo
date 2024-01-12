import React, { useEffect, useState } from "react";
import TodoForm from "./todoForm";
import EditTodo from "./editTodo";
import uuid from "react-uuid";
import Todo from "./todo";
import "./todo.css";

const TodoWrapper = () => {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  const appendTaskToList = (task) => {
    if (task === "") return;
    setTodos((prev) => [
      ...prev,
      { id: uuid(), task, completed: false, isEditing: false },
    ]);
  };
  useEffect(() => {
    // onChange in angular
    console.log(todos);
  }, [todos]);
  const taskCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const del = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };
  const editTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const updateTask = (updatedValue, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: updatedValue, isEditing: !todo.isEditing }
          : todo
      )
    );
  };
  return (
    <>
      <h2>Todo app</h2>

      <TodoForm sendTask={appendTaskToList}></TodoForm>
      <div className="todo-list">
        {todos.length > 0 ? (
          <>
            {todos.map((task, index) =>
              task.isEditing ? (
                <EditTodo
                  task={task}
                  key={index}
                  sendTask={updateTask}
                ></EditTodo>
              ) : (
                <Todo
                  task={task}
                  key={index}
                  className="todo-list"
                  taskCompleted={taskCompleted}
                  deleteTask={del}
                  editTask={editTask}
                ></Todo>
              )
            )}
          </>
        ) : (
          <>Add task</>
        )}
      </div>
    </>
  );
};

export default TodoWrapper;
