import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './app'

function FirstApp(){
    return(
        <h1>
          <App/>
        </h1>
    )
}
ReactDOM.render(<FirstApp/>,document.querySelector('#root'))