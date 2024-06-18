import React from 'react'
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
import Profile from './components/b1_Profile'
import Profiles from './components/b2_Profiles'
import Products from './components/b3_Products'
import Count from './components/b4_Count'
import Random from './components/b5_Random'
import ChangeState from './components/b6_ChangeState'
import Light from'./components/b7_b8_Lightning'
import Register from './components/Register'
import Login from './components/Login'
export default function App() {
  return (
    <div>
      <Profile></Profile>
      <br />
      <Profiles></Profiles>
      <br />
      <Products></Products>
      <br />
      <Count></Count>
      <br />
      <Random></Random>
      <br />
      <ChangeState></ChangeState>
      <br />
      <Light></Light>
      <br />
      <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
    </div>
  )
}
