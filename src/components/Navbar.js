import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

import { GlobalState } from '../App';

export default function Navbar() {

  const {setmaintask}=React.useContext(GlobalState);
  return (
    <motion.div
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5,bounce:false,duration:1.5 }}
            >
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ color: 'white' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
            Monthly Todo
        </Typography>

        <Button onClick={()=>{setmaintask(true)}} sx={{ margin: '0 1rem', fontWeight: 'bold' }} color="inherit">Main Task</Button>
        <Button onClick={()=>{setmaintask(false)}} sx={{ margin: '0 1rem', fontWeight: 'bold' }} color="inherit">Sub Task</Button>
        <Button sx={{ margin: '0 1rem', fontWeight: 'bold' }} color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    </Box >
    </motion.div>
  );
}
