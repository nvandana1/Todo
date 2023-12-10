import React, { useState } from 'react';

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const TaskForm = ({onTaskAdded})=>{
    const [taskDescription,setTaskDescription]=useState('');
    const handleValueChange = (e)=>{
        const task = e.target.value;
        setTaskDescription(task);
    }
    const addTask = ()=>{
        onTaskAdded(taskDescription);
    }
    return ( <>
    <div className="grid half fit-content card-width col-1">
            <div className="grid col-1">
              <TextField
                id="standard-basic"
                required
                label="Task"
                variant="standard"
                value={taskDescription}
                onChange={handleValueChange}
              />
              <Button variant="contained" onClick={addTask}>Add</Button>
            </div>
      </div>
    </> );
}

export default TaskForm;