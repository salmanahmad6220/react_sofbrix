import React from 'react'
import './Bwheading.css'
export default function bwheadin(props) {
  return (
   
      <span className='rounded-pill border font-size px-1 pe-2 py-1 bwheading d-flex gap-1'>
        <span className={`rounded-pill border ${props.color} p-2 py-1`}>
          {props.head1}
        </span><span className=' py-1'> {props.head2}</span>

      </span>

  )
}
