import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useState } from 'react'
import { Navbar } from './navbar'
import {Sum} from './components/Sum'
import Nav from "./navbar/Nav"

function App() {

  const[count, setCount]=  useState("hola")

  const handleIncrement = () => {
    setCount(count + "hi")
  }
  
  return (
    <div className="App">
     <h1>Hola</h1>
     <Nav/> 
     <Sum initialValue={20}/>
    </div>
  )
}

export default App
