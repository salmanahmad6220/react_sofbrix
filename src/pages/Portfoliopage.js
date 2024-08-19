import React from 'react'
import Navbar from '../component/Navbar'
import Lightmain from '../component/Lightmain'
import Moreabout from '../component/Moreabout'
import Learnabout from '../component/Learnabout'
import Portfolio from '../component/Portfolio'
import Oursuper from '../component/Oursuper'
import Comments from '../component/Comments'
import Footer from '../component/Footer'
import Frameimg from '../component/images/frameimg.png'
import Button from '../component/Button'
export default function LightLanding() {
  return (
    <div>
       <Navbar name="Let's Talk" color='text-light bg-color ' value2='active'/>
      <Lightmain head1='Crafting your Fantisies with a twist of' head2='creativity.' img={Frameimg} />
      <Moreabout />
      <Learnabout />
      <Portfolio size='col-md-7' head='portfolio-head2' btn={<div className='col-md-auto mt-5 pt-2'><Button name='Check Our work' bg='bg-info' text='text-light' size='fs-6 fw-normal  p-3' /></div>} />
      <Oursuper />
      <Comments />
      <Footer />
    </div>
  )
}
