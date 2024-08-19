import React from 'react'
import './main.css'
import ImgOverlay from './images/imgoverlay.png'

export default function main(props) {
  return (
    <div className={`container-fluid main ${props.color} text-center`}>
      <h1 className='container-xl main-head '>Crafting your fantasies with a twist of <i>creativity.</i>
        <p className='fs-5 para'>We are digital agency that specialize in building and scaling cutting-edge digital product for startups and industrial Giants</p>
      </h1>
     <div className='arrow'><i class="fa-solid fa-arrow-right  main-arrow"></i></div>
      <div className='px-3 img-container container-xl'>
        <img src={ImgOverlay} alt='Backgroundimg' className='img-fluid' />
      </div>
    </div>
  )
}
