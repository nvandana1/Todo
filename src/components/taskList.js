import React, { PureComponent, useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import "./taskList.css";
import Button from "@mui/material/Button";

const TaskList = ({ task }) => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [taskItem, setTask] = useState(storedTasks);
  useEffect(() => {
    if (task) {
      const list = { task, completed: false };
      console.log(task);
      setTask((prev) => [...prev, list]);
    }
  }, [task]);
  const handleCheckboxChange = (i) => {
    setTask((prevTaskLists) => {
      const updatedTaskLists = [...prevTaskLists];
      updatedTaskLists[i].completed = !updatedTaskLists[i].completed;
      return updatedTaskLists;
    });
  };
  const save = () => {
    localStorage.setItem("tasks", JSON.stringify(taskItem));
  };
  return (
    <>
      <div className="grid col-1 fit-content card-width">
        <Typography variant="h5" color="initial">
          Task List
        </Typography>
        <div className="grid col-1">
          {taskItem.length > 0 ? (
            <div className="task-list">
              {taskItem.map((item, index) => (
                <div key={index}>
                  <Checkbox
                    checked={item.completed}
                    onChange={() => handleCheckboxChange(index)}
                    color="primary"
                  />
                  <span
                    style={{
                      textDecoration: item.completed ? "line-through" : "none",
                    }}
                  >
                    {item.task}
                  </span>
                </div>
              ))}

              <Button variant="contained" onClick={save}>
                Save
              </Button>
            </div>
          ) : (
            <p>No tasks available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskList;
