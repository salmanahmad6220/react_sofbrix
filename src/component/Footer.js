import React from 'react'
import './footer.css'
import Smheading from './Smheading'
import Button from './Button'
export default function Footer() {
    return (
        <div className='container-fluid footer text-light '>
            <div className='container-xl text-center footer-container'>
                <Smheading name='LET CREATE SOMETHING AWESOME' ></Smheading>
                <h1 className='footer-head px-5'>Create Something awesome and extraordinary with us</h1>
                <p className='fs-5 fw-normal pb-5'>With a lot of creativity, we can make your dream come true</p>
                <Button name="Let's work togather" text='text-light' bg='bg-info'  size='fs-5 fw-normal px-3 p-2' />

            </div>
            <div className='container-xl footer-container'>
                <div className='row justify-content-between'>
                    <div className='col-md-4'><h1 className='Brand-name '>SOF<span>BRIX</span></h1>
                        <div className='social-media'>
                            <span className='social-logo fb me-1 fs-3 '> <i class="fa-brands fa-facebook-f  fa-2xs "></i></span>
                            <span className='social-logo twi mx-1 fs-3 '><i class="fa-brands fa-twitter fa-2xs "></i></span>
                            <span className='social-logo twi mx-1 fs-3'><i class="fa-brands fa-linkedin-in fa-2xs"></i></span>
                            <span className='social-logo twi mx-1 fs-3'><i class="fa-brands fa-instagram fa-2xs" ></i></span>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row justify-content-between'>
                            <div className='col fs-5  fw-normal'>
                                <p >Company</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Our Team</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Our Value</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Blog</p>

                            </div>
                            <div className='col fs-5 opcaity-75 fw-normal'>
                                <p>Product</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Feature</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Integration</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Pricing</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Changelog</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Roadmap</p>
                            </div>
                            <div className='col fs-5 opcaity-75 fw-normal'>
                                <p>Company</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Our Team</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Our Value</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Blog</p>

                            </div>
                            <div className='col fs-5 opcaity-75 fw-normal'>
                                <p >Resources</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Downloads</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Documentation</p>
                                <p className='fs-6 fw-nomal pt-2 ps-1 opacity-75'>Contact</p>

                            </div>
                        </div>
                    </div>
                </div>
 
                
            </div>
            <div className='container-xl'>
            <div className='row p-5 ps-2 justify-content-between'>
                    <span className='col-md-auto fs-6 fw-normal'>Privacy Policy | Term of Condition</span>
                    <span className='col-md-auto fs-6 fw-normal '>Sofbrix All Right Reserved</span>
                </div>
                </div>
        </div>
    )
}
