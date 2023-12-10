import React, { useState } from "react";
import TaskForm from "./taskForm";
import TaskList from "./taskList";
import Typography from "@mui/material/Typography";

function Main() {
  const title = "ToDo List";
  const [task, setTask] = useState();
  const getTask = (data) => {
    setTask(data);
  };
  return (
    <>
      <Typography variant="h4" color="initial">
        {title}
      </Typography>
      <TaskForm onTaskAdded={getTask}></TaskForm>
      <TaskList task={task}></TaskList>
    </>
  );
}

export default Main;
