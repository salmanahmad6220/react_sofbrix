import React from 'react'
import './service.css'
import Bwheading from './Bwheading'
import Img from './images/image.png'
export default function service(props) {
    return (
        <div className={`container-fluid service ${props.color}`}>
            <div className='container-xl'>
               <Bwheading head1='Service' head2='Think,Design and Develop' color='bg-light text-dark'/>
                <div className='row justify-content-between pt-3'>
                    <div className='col-md-5 service-para1 '>We offer several <i>Service</i> for you</div>
                    <div className='col-md-4 '>
                        <div className='fw-normal fs-6 '>  sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
                        <div className=' text-center my-5 col-md-8 '>
                            <div className='border rounded-pill p-1'>
                                <div className='border rounded-pill p-1'>
                                    <div className='border rounded-pill fs-6 text-dark bg-light p-3'>Explore Our Services<i class="fa-solid fa-arrow-right service-arrow"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  </div>
            <div className='row justify-content-between mt-5 pt-3'>
                <div className='col-md-8 '>
                    <div className='first-para '>
                        <div className='num pb-2 fs-2'>01</div>
                        <div className='service-head py-1 fs-2'>Development</div>
                        <p className='fs-6 fw-normal pt-3 para-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                    </div>
                    <div className='sec-para py-2'>
                        <div className='num py-1 fs-2'>02</div>
                        <div className='service-head py-1 fs-2'>Design</div>
                        <p className='fs-6 fw-normal pt-3 para-text'>Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium deteremque lauden.</p>
                    </div>
                    <div className='third-para py-2'>
                        <div className='num py-1 fs-2'>03</div>
                        <div className='service-head py-1 fs-2'>Brand Strategy</div>
                        <p className='fs-6 fw-normal pt-3 para-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam unde omnis iste natus error sit volup</p>
                    </div>
                </div>
                <div className='col-md-4  text-center'>
                    <img className='img-fluid service-img pt-3' alt='imagepng' src={Img}/>
                </div>
            </div>

          
            

        </div>
    )
}
