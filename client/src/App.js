import './App.css';
import { useState, useEffect } from 'react'
import Home from "./pages/home"

function App() {




  return (
    <div className="App">
      <div className='something' style={{top: '-18%', right: '0'}}></div>
      <div className='something' style={{top: '36%', left: '-8rem'}}></div>
      <Home/>
    </div>
  );
}

export default App;
