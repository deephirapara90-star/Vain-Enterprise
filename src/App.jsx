import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Product'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App