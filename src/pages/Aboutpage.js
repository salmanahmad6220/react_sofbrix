import React from 'react'
import Navbar from '../component/Navbar'
import Lightmain from '../component/Lightmain'
import Frameimg2 from '../component/images/Frameimg2.png'
import Itfactor from '../component/Itfactor'
import Portfolio from '../component/Portfolio'
import Oursuper from '../component/Oursuper'
import Comment from '../component/Comments'
import Footer from '../component/Footer'
import Button from '../component/Button'
export default function Aboutpage() {
  return (
    <div >
      <Navbar name="Let's Talk" color='bg-color' value3='active'  />
      <Lightmain head1='Let Sofbrix help you Deliver the' head2='"it" factor' color='text-info ' img={Frameimg2} />
      <Itfactor />
      <Portfolio size='col-md-7' head='portfolio-head2' btn={<div className='col-md-auto mt-5 pt-2'><Button name='Check Our work' bg='bg-info' text='text-light' size='fs-6 fw-normal  p-3' /></div>} />
      <Oursuper />
      <Comment />
      <Footer />
  </div>
  )
}
