import React, { useState, useContext } from 'react'
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import { GlobalState } from '../App';
import MainTodoList from "./MainTodoList";
import Divider from '@mui/material/Divider';

export default function MainTaskInput() {
  const formContainer = {
    background: '#fff',
    width: 'fit-content',
    margin: '3rem auto',
    padding: '3rem',
    borderRadius: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    color: '#000',
  }
  const { setmaintask, mainTaskList, setMainTaskList } = useContext(GlobalState);

  const [inputVal, setinputVal] = useState('')
  return (

    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ minHeight: '80vh' }}
      >
        <div style={formContainer}>
          <h2 style={{ margin: '1rem 0' }}>Enter your Main Task</h2>
          <TextField sx={{ minWidth: 600, color: 'white' }} id="main-task-basic" label="Main Task" variant="outlined" value={inputVal} onChange={(e) => { setinputVal(e.target.value) }} />
          <div style={{ marginTop: '1rem', }}>
            <Button variant="outlined" onClick={() => {
              setMainTaskList(e => [...e, inputVal]);
              setinputVal('');
            }}>+ Add Task</Button>
          </div>
        </div>
      </motion.div>


      <Divider sx={{ background: '#f5f5f5' }} />
      <h2 style={{ color: '#f5f5f5', padding: '1rem 0.5rem' }}>Your Todo List goes here..</h2>
      <MainTodoList />
      </>
  )
}
