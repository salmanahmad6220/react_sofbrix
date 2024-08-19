import React from 'react'
import './moreabout.css'
import Aboutimg from '../component/images/aboutimg.png'
import Smheading from './Smheading'
export default function Moreabout() {
  return (
    <div className='container-fluid moreabout mt-2'>
      <div className='container sm-container py-5 '>
        <div className='row justify-content-between gap-4 pt-5'>
          <div className='col-md-5'>
            <img className='img-fluid aboutimg' src={Aboutimg} alt='aboutimg'></img>
          </div>
          <div className='col-md-6 '>
          <Smheading name='learn more about sofbrix'/>
            <h1 className='more-head mt-2 '>Offering exceptional services with <i>Pioneering ideas</i> that embrace uniqueness.</h1>
            <p className='more-para fs-5 pt-5'>Help find solutions with Ul/Ux designs that are intuitive and in accordance with client business gook. We provide a high quality service in UI/UX Design & Development.</p>
            <div className='row headings text-center justify-content-between'>
              <div className='col '>
                <h1 className='md-heading'>99+</h1>
                <p className='fs-6 opacity-75'>Team member</p>
              </div>
              <div className='col'>
                <h1 className='md-heading'>3K+</h1>
                <p className='fs-6 opacity-75'>Happy clients</p>
              </div>
              <div className='col '>
                <h1 className='md-heading'>99%</h1>
                <p className='fs-6 opacity-75' >Satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
