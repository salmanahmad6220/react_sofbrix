import React from 'react'
import './lightmain.css'
import Scrolldown from '../component/images/scrolldown.png'
import Clients from '../component/images/clients.png'
import Bwheading from './Bwheading'
export default function Lightmain(props) {
  return (
    <div className='container-fluid light-main'>
      <div className='row justify-content-between '>
        <div className='col-md-5 main-container'>
         <Bwheading head1='Our mission' head2='Creative working' color='bg-light text-black'/>
          <h1 className='text-light light-head pe-5'>{props.head1} <i className='text-info'>{props.head2}</i></h1>
          <p className=' text-light fw-light fs-5 light-para pt-4 pe-5'>We are digital agency focusing on creating and expanding state-of-the-art digital solution for both startups and industry leaders</p>
          <a href='/ ' className='fs-5 link fw-normal'>Explore more solution <i class="fa-solid fa-arrow-right fa-xs lightarrow fa-sm"></i></a>
          <div> <img className='img-fluid scroll-down' src={Scrolldown} alt='scrolldown'></img></div>
       
        </div>
        <div className='col-md-5 main-container2'>
          <img src={props.img} className='img-fluid' alt='frameimg' />
        </div>
       
      </div>
<div className='client-div'><img className='img-fluid clients' src={Clients} alt='client.png'/></div>
    </div>

  )
}
