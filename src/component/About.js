import React from 'react'
import './about.css'
import Bwheading from './Bwheading'


export default function about(props) {
    return (
        <div className={`countainer-fluid about ${props.color}` }>
            <div className='container-xl main-heading pb-5 px-2'>
              
                    <Bwheading head1='About Us' head2='creative working' color='bg-light text-dark'/>
                
                <h1 className='about-head pt-4 '>Offering exceptional services with <i>pioneering ideas </i> that embrace uniqueness.</h1>
            </div>
            <div className='container-xl '>
                <div className='row justify-content-between '>
                    <div className='col-md-7 fs-6 fw-normal my-4'>Professional teams in each field, including plannoing, design, and development, provide services more as a technical partner to customers than as a simple outsourced development project. Experience.</div>
                    <div className='col-md-2 text-center my-4'>
                        <div className='border rounded-pill p-1'>
                            <div className='border rounded-pill p-1'>
                                <div className='border rounded-pill fs-6 text-dark bg-light p-2'>Explore More<i class="fa-solid fa-arrow-right about-arrow fa-sm"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
