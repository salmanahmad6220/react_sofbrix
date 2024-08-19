import React from 'react'
import Smheading from './Smheading'
import './oursuper.css'
import Zeshan from '../component/images/zeshan.png'
import Usama from '../component/images/usama.png'
import Majid from '../component/images/majid.png'
import Hammad from '../component/images/hammad.png'

export default function Oursuper() {
  return (
    <div className='container-fluid oursuper'>
      <div className='container'>
        <Smheading name='Our super heroes'/>
        <h1 className=' our-head mt-3'>Introducing our<i> team of superheroes</i> comitted to assisting your business in reaching the pinnacle</h1>
        <p className='fs-5 opacity-75 our-para'>Sed  ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque Jaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
      <div className='row pt-5'>
        <div className='col-md'>
            <img className='img-fluid' src={Zeshan} alt='img'/>
            <h2 className='fs-3 pt-3'>Zeeshan Khan</h2>
            <p className='fs-6 opacity-75 pt-2'>Founder & CEO</p>
        </div>
        <div className='col-md'>
            <img className='img-fluid' src={Hammad} alt='img'/>
            <h2 className='fs-3 pt-3'>Hammad Nasir</h2>
            <p className='fs-6 opacity-75 pt-2'>Dev Team Lead</p>
        </div>
        <div className='col-md'>
            <img className='img-fluid' src={Majid} alt='img'/>
            <h2 className='fs-3 pt-3'>Majid Ali</h2>
            <p className='fs-6 opacity-75 pt-2'>Design Team Lead</p>
        </div>
        <div className='col-md'>
            <img className='img-fluid usama' src={Usama} alt='img'/>
            <h2 className='fs-3 pt-3'>Usama Nazir</h2>
            <p className='fs-6 opacity-75 pt-2'>SEO Team Lead</p>
        </div>
      </div>
      </div>
    </div>
  )
}
