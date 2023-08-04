import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Navbar from './component/Header/Navbar'
import Acharya from './component/Acharya-ji/Acharya'


const App = () => {
  return (
    <BrowserRouter>
        <Navbar>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/acharya_ji'element={<Acharya/>}/>
        </Routes>
        </Navbar>
        </BrowserRouter>
  )
}

export default App
