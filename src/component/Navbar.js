import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function navbar(props) {
  return (
    <nav className={`navbar ${props.color} container-fluid p-1`}>
        <div className=' row  justify-content-around nav-row'>
          <h1 className='px-4 navbrand fs-3 col-auto text-light  m-2 '>SOF<span className='aqua'>BRIX</span></h1>
          <div className={`navitems ${props.radius} text-light justify-content-between m-2 px-1 d-flex col-auto`}>
           
            <Link to="/" className = {`m-1 p-1 nav-btn ${props.radius} text-light px-2 fs-6 ${props.value1}`} > Home</Link>
             
              <Link to="/Portfolio" className = {`m-1 p-1 ${props.radius} nav-btn text-light px-2 fs-6 ${props.value2}`} > Portfolio</Link>
            
            
            <Link to="/About" className = {`m-1 p-1 text-light ${props.radius} nav-btn px-2 fs-6 ${props.value3}`}>About us </Link>
           
        
            <Link to="/Contact" className = {`m-1 p-1 text-light ${props.radius} nav-btn px-2 fs-6 ${props.value4}`}> Let's talk </Link>
              
          </div>
          <div className='px-3 link-btn col-auto d-flex m-2'>
            <span className={`${props.radius} ${props.btncolor}  fs-6 border  p-2 px-3`}>{props.name} <i class={`fa-solid fa-arrow-right fa-xs ${props.btncolor} nav-arrow`}></i> </span>
          </div>
        </div>
     
    </nav>

  )
}
