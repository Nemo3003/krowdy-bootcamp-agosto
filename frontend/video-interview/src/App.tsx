import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter,Link, Route, Routes} from 'react-router-dom'
import {Login} from './auth/page/Login'
import { FirstPage } from './views/MainPage/FirstPage'
import { Admin } from './views/AdminPage/Admin'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route  path="/" element={<Login />} />
          <Route path="/home" element={<FirstPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
