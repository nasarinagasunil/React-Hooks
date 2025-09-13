import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from './pages/home/home.jsx'
import { About } from './pages/about/about.jsx'
import { Cart } from './pages/cart/cart.jsx'
import { Login } from './pages/login/login.jsx'
import { PrivateRouter } from './component/PrivateRouter/privateRouter.jsx'
function App() {

  const getStyles = ({isActive}) => {
    return {
      color: isActive ? "red" : "",
    }
  }

  return (
    <>
      <div>
        <NavLink to="/" style={getStyles}>Home || </NavLink>
        <NavLink to="/about" style={getStyles}>About || </NavLink>
        <NavLink to="/cart" style={getStyles}>Cart || </NavLink>
        <NavLink to="/login" style={getStyles}>Login</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<PrivateRouter><Cart /></PrivateRouter>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
