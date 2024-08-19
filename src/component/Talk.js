import React from 'react'
import './talk.css'
import Smheading from './Smheading'
export default function Talk() {
    return (
        <div className='container-fluid talk'>
            <div className='container-xl '>
                <div className='row justify-content-between'>
                    <div className='col-md-5'>
                        <Smheading name="LET'S TALK" />
                        <h1 className='talk-head pt-4'>
                            Sofbrix embodies the <i className='text-info'>"it" factor</i>, evident in our name, repeated twice.
                        </h1>
                        <p className='fs-6 fw-normal opacity-50 py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicaba.Nemo enim ipsam voluptatem quia voluptas sit aspernatur out odit aut fugit, sed quia consequuntur magni dolores eas qui ratione voluptatem aquí esciunt.
                            <p className='pt-5'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veilt, sed quia non numquam</p></p>

                    </div>
                    <div className='col-md-6 '>
                    <form className='bg-light'>
                        <div class="m-1 mx-4">
                                <label for="name" className='fs-6 fw-normal p-2' >Full Name</label>
                                <input type="text" class="form-control p-2  fs-6 " placeholder='Jimmy Carter'/>
                            </div>
                        <div class="m-1 mx-4">
                                <label for="name" className='fs-6 fw-normal p-2' >Contact Number</label>
                                <input type="number" class="form-control p-3 fs-6 " placeholder='+92-300-0000000' />
                            </div>
                            <div class="m-1 mx-4">
                                <label for="mail" className='fs-6 fw-normal p-2'>Email address</label>
                                <input type="email" class="form-control p-3 fs-6 " placeholder='jimmycarter@example.com'  />
                               
                            </div>
                            <div class="m-1 mx-4 row">
                                <label for="message" className='fs-6 fw-normal p-2'>Message</label><br/>
                                <textarea placeholder='Type message textarea' className=' p-3 fs-6 col-md-12' rows={5}  ></textarea>
                               
                            </div>
                            
                            <div class="row  m-1 mx-4 pb-4">
                            <button type="submit" class="btn btn-info col-md-12 fs-6 mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}
