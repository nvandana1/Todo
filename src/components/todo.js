import React from "react";
import './todo.css';
import '../App.css';

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Todo = ({task}) => {
  return (
    <>
      <div className="todo card">
        <div>{task.task}</div>
        <div className="cursor">
          <EditIcon color="primary"></EditIcon>
        </div>
        <div className="cursor">
          <DeleteIcon color="error" />
        </div>
      </div>
    </>
  );
};
export default Todo;
