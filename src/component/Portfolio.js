import React from 'react'
import './portfolio.css'
import pueblo from './images/pueblo.png'
import dapper from './images/dapper.png'
import fintrade from './images/fintrade.png'
import trading from './images/trading.png'
import Bwheading from './Bwheading'
import Smheading from './Smheading'
import Button from './Button'
export default function portfolio(props) {
    return (

        <div className={`countainer-fluid portfolio ${props.color}`}>
            <div className='container-xl pb-5 px-2 pt-3'>
              <Smheading name='Sofbrix portfolio'/>
              <div className='row justify-content-between'>
                <div className={props.size}>
                <h1 className={`${props.head}   pt-3` }>Enhancing the <i className='text-info'>Value of our clients'</i> Product to unmatched heights.</h1>
                </div>
               {props.btn}
              </div>
                <div className='row  justify-content-evenly mt-4'>
                    <div className='col-md-5 m-3'>
                        <img className='img-fluid py-3 p-3' src={pueblo} alt='pueblo img' />
                        <h1 className='p-1 fs-2 fw-normal'>Pueblo</h1>
                        <p className='p-1 fs-6 opacity-75 fw-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
                        <div className='row justify-content-between mt-5 mx-2'>
                            
                            <div className='col-auto pt-3 '>
                                <span className='fs-6 fw-normal border rounded-pill p-1 px-2 m-1'>Website</span>
                                <span className='fs-6 fw-normal border rounded-pill p-1 px-2 m-1'>Backend</span>
                            </div>
                            <div className='col-auto pt-3 '>

                                <span className='circle-ring2'>
                                    <span className='circle-ring1 '>
                                        <span className='border px-2 rounded-circle arrow-circle'>
                                            <i class="fa-solid fa-arrow-right fa-2xs portfolio-arrow  p-1 "></i></span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3'>
                        <img className='img-fluid py-3 p-3' src={fintrade} alt='pueblo img' />
                        <h1 className='p-1 fs-2 fw-normal'>FinTrade</h1>
                        <p className='p-1 fs-6  opacity-75 fw-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
                        <div className='row justify-content-between mt-5 mx-2'>
                            <div className='col-auto pt-3 mx-2'>
                                <span className='fs-6 fw-normal border rounded-pill p-1 px-2 m-1'>Website</span>
                                <span className='fs-6 fw-normal border rounded-pill p-1 px-2 m-1'>Mobile App</span>
                                <span className='fs-6 fw-normal border rounded-pill p-1 px-2 m-1'>Backend</span>
                            </div>
                            <div className='col-auto pt-3 '>

                                <span className='circle-ring2'>
                                    <span className='circle-ring1 '>
                                        <span className='border px-2 rounded-circle arrow-circle'>
                                            <i class="fa-solid fa-arrow-right fa-2xs portfolio-arrow  p-1 "></i></span></span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row justify-content-evenly mt-4 '>
                    <div className='col-md-5 m-3'>
                        <img className='img-fluid py-3 p-3' src={trading} alt='pueblo img' />
                        <h1 className='p-1 fs-2 fw-normal'>Trading UI kit</h1>
                        <p className='p-1  opacity-75 fs-6 fw-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
                        <div className='row justify-content-between mt-5 mx-2'>
                            <div className='col-auto pt-3 '>
                                <span className='fs-6 fw-normal border rounded-pill p-1 px-2 m-1'>Mobile App</span>
                                <span className='fs-6 fw-normal border rounded-pill p-1 px-2 m-1'>UI kit</span>
                            </div>
                            <div className='col-auto pt-3'>

                                <span className='circle-ring2'>
                                    <span className='circle-ring1 '>
                                        <span className='border px-2 rounded-circle arrow-circle'>
                                            <i class="fa-solid fa-arrow-right fa-2xs portfolio-arrow  p-1 "></i></span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3'>
                        <img className='img-fluid py-3 p-3' src={dapper} alt='pueblo img' />
                        <h1 className='p-1 fs-2 fw-normal'>Dapper</h1>
                        <p className='p-1  opacity-75 fs-6 fw-normal'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
                        <div className='row justify-content-between mt-5 mx-2'>
                            <div className='col-auto pt-3 '>
                                <span className='fs-6 fw-normal border rounded-pill p-1 px-2 m-1'>Website</span>
                                <span className='fs-6 fw-normal border rounded-pill p-1 px-2 m-1'>Backend</span>
                            </div>
                            <div className='col-auto pt-3 '>

                                <span className='circle-ring2'>
                                    <span className='circle-ring1 '>
                                        <span className='border px-2 rounded-circle arrow-circle'>
                                            <i class="fa-solid fa-arrow-right fa-2xs portfolio-arrow  p-1 "></i></span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
