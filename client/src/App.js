import React from 'react';
import './App.css';
import Register from './Pages/register';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage';
import Nav from './components/Nav';
import ContactUs from './Pages/ContactUs'

function App() {
  return (
    <div className="overflow-hidden bg-bg-violet"> 
      {/* App */}
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route exact path='/register' element = {<Register/>} />
          <Route exact path='/' element = {<Homepage/>}/>
          <Route exact path='/contactus' element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
      
      {/* <motion.div className='w-44 h-44 bg-black' animate={{ x: 100 }} /> */}
    </div>
  );
}

export default App;
