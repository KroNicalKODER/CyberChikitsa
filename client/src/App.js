import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="">
      App
      <motion.div className='w-44 h-44 bg-black' animate={{ x: 100 }} />
    </div>
  );
}

export default App;
