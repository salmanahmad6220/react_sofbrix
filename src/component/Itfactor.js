import React from 'react'
import Smheading from './Smheading'
import './itfactor.css'
import Itimg from './images/Itimg.png'
import Video from './images/video.png'
import Button from './Button'
export default function Itfactor() {
  return (
    <div className='container-fluid itfactor p-5'>
      <div className='container-xl '>
        <div className='row justify-content-between'>
            <div className='col-md-6 pt-4'>
                <Smheading name='The "it " factor'/>
                <h1 className='it-head pt-5'>Sofbrix embodies the <i className='text-info'>"It" factor </i>, evident in our name, repeated twice.</h1>
                <p className='fs-6 opacity-50 pt-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaba. 
                    <p className='pt-5'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur out odit aut fugit, sed quia consequuntur magni dolores eas qui ratione voluptatem aquí esciunt</p></p>
            </div>
            <div className='col-md-5'>
                <img src={Itimg} alt='img' className='img-fluid'></img>
            </div>
        </div>

       
      </div>
      <div className='container-xl mt-5 '>
            <img src={Video} alt='video' className='img-fluid'></img>
           
            <div className='row mt-5 justify-content-between'>
                <div className='col-md-4 pt-5'>
                    <Smheading name='The "IT" Factor'/>
                    <div className='it-head2 py-4'>Why We're it</div>
                    <div className='pt-5'><Button name='Meet out team' text='text-light' bg='bg-info' size='fs-6 fw-normal px-4 p-3' /></div>
                </div>
                <div className='col-md-6 '>
                <p className='fs-5 fw-normal opacity-50 py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaba.Nemo enim ipsam voluptatem quia voluptas sit aspernatur out odit aut fugit, sed quia consequuntur magni dolores eas qui ratione voluptatem aquí esciunt.
                    <p className='pt-5'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veilt, sed quia non numquam</p></p>
                </div>
            </div>
            </div>
    </div>
  )
}
