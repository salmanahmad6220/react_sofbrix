import React from 'react'
import './smheading.css'
export default function Smheading(props) {
  return (
    <span className='heading font-size'>
      {props.name}
    </span>
  )
}
