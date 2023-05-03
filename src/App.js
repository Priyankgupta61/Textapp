
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
const [mode,setMode]=useState('light');
const toggleMode =()=>{
  if(mode==='light'){
    setMode('dark')
  }
  else{
    setMode('light')
  }
}
  return (
   <>
   <Navbar mode={mode} toggleMode={toggleMode}/>
  <div className='container my-3'>

  <TextForm heading="Enter your text here"/>
 
  </div>


   
   </>
  );
}

export default App;
