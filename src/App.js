import Demo from "./components/Demo";
import Inputform from "./components/Inputform";
import MainTaskInput from "./components/MainTaskInput";
import Navbar from "./components/Navbar";
import { motion } from 'framer-motion';
import Divider from '@mui/material/Divider';


import React, { useEffect, useState } from 'react';
import MainTodoList from "./components/MainTodoList";

export const GlobalState = React.createContext();
export const GlobalFormState = React.createContext();


////////////////////////// read before start//////////////////////////////////////
//maintodoinfo should be in one array 
//having problem with setting maintodoinfo list
function App() {
    const [maintask, setmaintask] = useState(true)
    
    //inputform states
    const [mainTaskList,setMainTaskList]=useState([])
    const [todoInfoList,setTodoInfoList]=useState([])
    // input form states
  
  return (
    <GlobalFormState.Provider value={{todoInfoList,setTodoInfoList}}>
    <GlobalState.Provider value={{setmaintask,mainTaskList,setMainTaskList}}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {
          !maintask ? (
              <>
              <Inputform />
              </>
          ) :
            (
            <>
            <MainTaskInput />
              </>
            )
        }
      
      </motion.div>
    </GlobalState.Provider>
    </GlobalFormState.Provider>
  );
}
export default App;
