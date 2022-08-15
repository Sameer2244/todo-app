import React, { useState, useContext, useEffect } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { motion } from 'framer-motion';
import { GlobalState } from '../App';
import Button from '@mui/material/Button';
import { GlobalFormState } from '../App';
import MainTodoList from "./MainTodoList";
import Divider from '@mui/material/Divider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function Inputform() {
    //inputform states
    const [inputMaintask, settempMaintask] = useState('');
    const [inputAssingedDate, setinputAssingedDate] = useState(new Date(''));
    const [inputExpectedDate, setinputExpectedDate] = useState(new Date(''));
    const [inputCompletionDate, setinputCompletionDate] = useState('');
    const [inputStatus, setinputStatus] = useState('');
    const [inputComment, setinputComment] = useState('');
    const [inputSubtask, setinputSubtask] = useState('');

    const handleChange = (event) => {
        settempMaintask(event.target.value);
    };

    // useEffect(() => {
    //   console.log(todoInfoList);
    // },)



    // usecontent
    const { setmaintask, mainTaskList, setMainTaskList } = useContext(GlobalState);
    const { todoInfoList, setTodoInfoList } = useContext(GlobalFormState);

    const [forceRender,setForceRender]=useState(true);
    const addAllTodoInfo = (prevTodo) => {
        const temp = { maintask: inputMaintask, todoinfo: [{ subtask: inputSubtask, date1: inputAssingedDate, date2: inputExpectedDate, date3: inputCompletionDate, status: inputStatus, comment: inputComment }] };
        // prevTodo = prevTodo.concat(temp);
        // setTodoInfoList(prevTodo);
        let isThere = false;
        prevTodo.map(e => {
            if (e.maintask == inputMaintask) {
                isThere = true;
                e.todoinfo.push(temp.todoinfo[0])
            }
        })
        if (!isThere) {
            prevTodo = prevTodo.concat(temp);
        }
        setForceRender(!forceRender);
        setTodoInfoList(prevTodo);
        console.log(prevTodo);
        /// add sub task where main task matches of the list
    }
    const formContainer = {
        background: '#fff',
        width: 'fit-content',
        margin: '3rem auto',
        padding: '3rem',
        borderRadius: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

    }

    return (
        <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: '80vh' }}
        >
            <div style={formContainer}>
                <h2 style={{ margin: '1rem 0' }}>Enter your todo details</h2>
                <h4 style={{ margin: '0.5rem 0', color: '#5f5f5f' }}>Select Main task</h4>
                <FormControl sx={{ minWidth: 600 }}>
                    <InputLabel id="select-maintask">Main tasks</InputLabel>
                    <Select
                        labelId="select-maintask-select-label"
                        id="select-maintask-select"
                        value={inputMaintask}
                        label="Main tasks"
                        onChange={handleChange}
                    >

                        {
                            mainTaskList.map((e, i) => {
                                return (
                                    <MenuItem key={i} value={e}>{e}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </FormControl>
                <h4 style={{ margin: '0.5rem 0', color: '#5f5f5f' }}>Sub task</h4>
                <TextField sx={{ minWidth: 600, color: 'white' }}
                    id="main-task-basic" label="subtask"
                    variant="outlined" value={inputSubtask}
                    onChange={(e) => { setinputSubtask(e.target.value) }} />

                {/* dates and status */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <h4 style={{ margin: '0.5rem 0', color: '#5f5f5f' }}>Select Assigned date</h4>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Select Assigned date"
                                value={inputAssingedDate}
                                onChange={(e) => setinputAssingedDate(e)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <h4 style={{ margin: '0.5rem 0', color: '#5f5f5f' }}>Select Completion date</h4>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Select Completion date"
                                value={inputCompletionDate}
                                onChange={(e) => setinputCompletionDate(e)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>

                    <div>
                        <h4 style={{ margin: '0.5rem 0', color: '#5f5f5f' }}>Select Expected date</h4>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                inputFormat="MM/dd/yyyy"
                                label="Select Expected date"
                                value={inputExpectedDate}
                                onChange={(e) => setinputExpectedDate(e)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                        {/* status */}

                        <h4 style={{ margin: '0.5rem 0', color: '#5f5f5f' }}>Select status</h4>
                        <FormControl sx={{ minWidth: 250 }}>
                            <InputLabel id="select-status">status</InputLabel>
                            <Select
                                labelId="select-status-select-label"
                                id="select-status-select"
                                value={inputStatus}
                                label="status"
                                onChange={(e) => setinputStatus(e.target.value)}
                            >
                                <MenuItem value={10}>Red</MenuItem>
                                <MenuItem value={20}>Orange</MenuItem>
                                <MenuItem value={30}>Green</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                </div>

                {/* comment */}

                <h4 style={{ margin: '0.5rem 0', color: '#5f5f5f' }}>Add Comment</h4>
                <TextField sx={{ minWidth: 600, color: 'white' }}
                    id="main-task-basic" label="comment"
                    variant="outlined" value={inputComment}
                    onChange={(e) => { setinputComment(e.target.value) }} />
                <div style={{ marginTop: '1rem', }}>
                    <Button variant="outlined" onClick={() => { addAllTodoInfo(todoInfoList) }}>+ Add Todo</Button>
                </div>
            </div>
        </motion.div>
        

        <Divider sx={{ background: '#f5f5f5' }} />
        <h2 style={{ color: '#f5f5f5', padding: '1rem 0.5rem' }}>Your Todo List goes here..</h2>
        <MainTodoList />
        </>
    )
}
