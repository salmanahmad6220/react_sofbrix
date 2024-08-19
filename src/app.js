import React from 'react'

import DarkLanding from './pages/DarkLanding'
import Portfoliopage from './pages/Portfoliopage'
import Aboutpage from './pages/Aboutpage'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, NavLink, BrowserRouter, Routes } from "react-router-dom";
export default function app(){
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<DarkLanding/>}/>
    <Route path='/About' element={<Aboutpage/>}/>
    <Route path='/Portfolio' element={<Portfoliopage/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    
   </BrowserRouter>
  )
}
