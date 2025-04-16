import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
