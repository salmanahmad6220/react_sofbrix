import React from 'react'

export default function Button(props) {
  return (
    <span className={`p-1  ${props.bg} ${props.text} ${props.border} ${props.size} `}>
      {props.name} <i class={`fa-solid fa-arrow-right fa-xs ${props.text} nav-arrow`}/>
    </span>
  )
}
