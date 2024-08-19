import React from 'react'
import Navbar from '../component/Navbar'
import Main from '../component/Main'
import About from '../component/About'
import Service from '../component/Service'
import Portfolio from '../component/Portfolio'
import Footer from '../component/Footer'
export default function DarkLanding() {
    return (
      
        <div>
            <Navbar color='bg-black text-light' btncolor='bg-light text-black' radius=' rounded-pill' value1='active'  name='lets talk'/>
            <Main color='bg-black text-light' />
            <About color='bg-black text-light'/>
            <Service color='bg-black text-light'/>
            <Portfolio size='col-md-auto' head='portfolio-head'  color='text-light bg-black'/>
            <Footer/>
        </div>
           
 
    )
}
