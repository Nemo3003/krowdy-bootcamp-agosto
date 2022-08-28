import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {QuestionDetailContainer} from './views/Questions/QuestionDetailContainer'
import {CardsContainer} from  './views/Questions/CardsContainer'
import './App.css'
import { Login } from './components/auth/pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/home" element={<CardsContainer/>}/>
        <Route path='/question/:detailId' element={<QuestionDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App