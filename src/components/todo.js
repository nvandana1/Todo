import React from "react";
import './todo.css';
import '../App.css';

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Todo = ({task,taskCompleted,deleteTask,editTask}) => {
  return (
    <>
      <div className="todo card">
        <div onClick={()=>taskCompleted(task.id)} className={`${task.completed?'strike-through cursor':'cursor'}`}>{task.task}</div>
        <div className="cursor" onClick={()=>editTask(task.id)}>
          <EditIcon color="primary"></EditIcon>
        </div>
        <div className="cursor" onClick={()=>deleteTask(task.id)}>
          <DeleteIcon color="error" />
        </div>
      </div>
    </>
  );
};
export default Todo;
