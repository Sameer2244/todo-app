import React, { useState, useContext, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GlobalState } from '../App';
import { GlobalFormState } from '../App';


function createData(subtask, assigned, expected, completion, status, comment) {
    return { subtask, assigned, expected, completion, status, comment };
}


export default function MainTodoList() {
    const { setmaintask, mainTaskList, setMainTaskList } = useContext(GlobalState);
    const { todoInfoList, setTodoInfoList } = useContext(GlobalFormState);





    return (
        <div>
            {
                todoInfoList.map((e, i) => {
                    return (
                        < div key = { i } >
                            
                            <h3 style={{ color: 'white', fontWeight: '600', margin: '0 0.75rem' }}>{e.maintask}</h3>
                            <TableContainer >
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow >
                                            <TableCell sx={{ color: 'white', fontWeight: '600' }}>Sub Task</TableCell>
                                            <TableCell sx={{ color: 'white', fontWeight: '600' }} align="right">Assigned date</TableCell>
                                            <TableCell sx={{ color: 'white', fontWeight: '600' }} align="right">Expected date</TableCell>
                                            <TableCell sx={{ color: 'white', fontWeight: '600' }} align="right">Completion date</TableCell>
                                            <TableCell sx={{ color: 'white', fontWeight: '600' }} align="right">Status</TableCell>
                                            <TableCell sx={{ color: 'white', fontWeight: '600' }} align="right">Comment</TableCell>
                                        </TableRow>
                                        
                                    </TableHead>
                                    
                                    <TableBody>
                                        {e.todoinfo.map((row, i) => (
                                            
                                            <TableRow
                                                key={i}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell sx={{ color: 'white' }} component="th" scope="row">
                                                    {/* {console.log(row)}

                                                    {console.log(row.subtask)} */}
                                                    {row.subtask}
                                                </TableCell>

                                                <TableCell sx={{ color: 'white' }} align="right">{row.date1.toString().substring(4, 15)}</TableCell>
                                                <TableCell sx={{ color: 'white' }} align="right">{row.date2.toString().substring(4, 15)}</TableCell>
                                                <TableCell sx={{ color: 'white' }} align="right">{row.date3.toString().substring(4, 15)}</TableCell>
                                                <TableCell sx={{ color: 'white' }} align="right">{row.status}</TableCell>
                                                <TableCell sx={{ color: 'white' }} align="right">{row.comment}</TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
    )
})
            }

        </div >
    );
}
