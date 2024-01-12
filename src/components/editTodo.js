
import React, { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import '../App.css';

const EditTodo = ({sendTask,task}) => {
    const [value,setValue] =useState('');
    const handleChange = (change)=>{
        change.preventDefault();
        setValue(change.target.value);
    }

    const submit = ()=>{
        // sending from child to parent like output in angular
        sendTask(value,task.id);
        setValue('') //to clear the form
    }
  return (
    <>
      <form className="grid">
        <div>

        <TextField
          id="taskDescription"
          label="Task"
          value={value}
          onChange={handleChange}
        variant="filled"
        />
        </div>
       <div>
       <Button variant="contained" color="primary" onClick={submit}>
          Update Task
        </Button>
       </div>
        
      </form>
    </>
  );
};

export default EditTodo;
