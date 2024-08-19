import React from 'react'
import './learn.css'
import Smheading from './Smheading'
export default function Learnabout() {
  return (
    <div className='container-fluid learn-about'>
      <div className='container pt-5'>
        <span ><Smheading name='Learn more about sofbrix'/></span>
        <h1 className='learn-head pt-5'>We offer ingenius concepts while infusing the <i>essence of success</i> into your brand</h1>
       <div className='row pt-5 justify-content-between'>
        <div className='col-md-8 fw-normal learn-para fs-5  opacity-75'> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Jaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</div>
      
       <div className='col-md-2 aqua'><i class="fa-solid fa-arrow-left  px-2"></i><i class="fa-solid fa-arrow-right  px-2"></i></div>
       </div>
       <div className='row gap-2 justify-content-evenly grid '>
        <div className='col bg-light m-2'>
            <h1 className=' pt-5 p-2'><i class=" logo p-2 fa-solid fa-layer-group"></i></h1>
            <h1 className='fs-3 p-2'>UI/UX design</h1>
            <p className='fs-6 p-2  opacity-75'>Sed  ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Jaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
        </div>
        <div className='col bg-light m-2'>
            <h1 className='pt-5 p-2'><i class=" logo p-2 fa-solid fa-globe"></i></h1>
            <h1 className=' fs-3 p-2'>UI/UX design</h1>
            <p className='fs-6 p-2 opacity-75'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Jaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
        </div>
        <div className='col bg-light m-2'>
            <h1 className='pt-5 p-2'><i class=" logo p-2 fa-solid fa-clipboard-list"></i></h1>
            <h1 className='fs-3 p-2'>UI/UX design</h1>
            <p className='fs-6 p-2 opacity-75'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Jaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
        </div>
        <div className='col bg-light m-2'>
            <h1 className='pt-5 p-2'><i class="fa-solid fa-volume-high logo p-2"></i></h1>
            <h1 className='fs-3 p-2'>UI/UX design</h1>
            <p className='fs-6 p-2 opacity-75'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Jaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
        </div>
      </div>
     
       </div>
    </div>
  )
}
