import { motion,AnimateSharedLayout  } from 'framer-motion';
import { useState } from 'react';
import '../App.css';

export default function Demo() {
    const [open, setopen] = useState(false)
  return (
    <AnimateSharedLayout>
    <div className="App">
      <motion.div transition={{layout:{duration:1,type:'spring'}}} layout onClick={()=>{setopen(!open)}} className='form-container'>
        <motion.h2 layout="position">
          Enter your todo details
        </motion.h2>
        {
          open && (
            <motion.p style={{transition:'2s ease-out'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui corrupti modi culpa commodi ex! Aliquam saepe velit placeat ullam maxime?
            </motion.p>
          )
        }
      </motion.div>
    </div>
    </AnimateSharedLayout>
  )
}
