import React from 'react'
import './comment.css'
import Smheading from './Smheading'
import Raph from '../component/images/raph.png'
import Trever from '../component/images/trever.png'
import Demi from '../component/images/demi.png'
import Firstcomment from '../component/images/firstcomment.png'
import Seccomment from '../component/images/seccomment.png'
import Thirdcomment from '../component/images/thirdcomment.png'
export default function Comments() {
    return (
        <div className='container-fluid comment'>
            <div className='container'>
                <Smheading name='SOFBRIX PORTFOLIO' />
                <h1 className='comment-head pt-5'>Here's what our <i>fantastic customers</i> are saying about Sofbrix</h1>
                <p className='comment-para pb-5 fs-5 opacity-75'>Sed  ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>

                <div className='row p-3 m-3 mt-5 comment-box justify-content-between'>
                    <div className='col-md-8 '>
                        <h1 className='fs-5 pt-4'>"Sofbrix Inhouse is very organized and very methodical about how they set up project in figma, whick we loved." </h1>
                        <div className='d-flex pt-2'>
                            <img src={Raph} alt='img' className='img-fluid p-3 px-1' />
                            <span className='fw-bold name pt-4 px-2'>Raaphael Dwamena</span>
                            . <span className=' opacity-75 name pt-4 px-2' > Founder & CEO    </span>
                            <i className='fw-bold name pt-4 px-2'>MetaMarkatz</i>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img src={Firstcomment} className='img-fluid p-0 m-0' alt='img'></img>
                    </div>
                </div>
                <div className='row p-3 m-3 comment-box justify-content-between'>
                    <div className='col-md-8 '>
                        <h1 className='fs-5 pt-4'>"Sofbrix has provided UI/UX design for an insurance platform. They are ready to work and understand our needs very well." </h1>
                        <div className='d-flex pt-2'>
                            <img src={Trever} alt='img' className='img-fluid p-3 px-1' />
                            <span className='fw-bold name pt-4 px-2'>Trever Engelson</span>
                            . <span className=' opacity-75 name pt-4 px-2' > Co-founder    </span>
                            <i className='fw-bold name pt-4 px-2'> AmericanDeliver</i>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img src={Firstcomment} className='img-fluid p-0 m-0' alt='img'></img>
                    </div>
                </div>
                <div className='row p-3 m-3 comment-box justify-content-between'>
                    <div className='col-md-8 '>
                        <h1 className='fs-5 pt-4'>"The high-quality Sofbrix's team  was able to deliver in such a quick timeframe and budget was impressive." </h1>
                        <div className='d-flex pt-2'>
                            <img src={Trever} alt='img' className='img-fluid p-3 px-1' />
                            <span className='fw-bold name pt-4 px-2'>Trever Engelson</span>
                            . <span className=' opacity-75 name pt-4 px-2' > Co-founder    </span>
                            <i className='fw-bold name pt-4 px-2'> AmericanDeliver</i>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <img src={Firstcomment} className='img-fluid p-0 m-0' alt='img'></img>
                    </div>
                </div>
            </div>

        </div>
    )
}
