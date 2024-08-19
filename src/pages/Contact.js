import React from 'react'
import Navbar from '../component/Navbar'
import Lightmain from '../component/Lightmain'
import Frameimg from '../component/images/frameimg.png'
import Talk from '../component/Talk'
import Comment from '../component/Comments'
import Footer from '../component/Footer'
export default function Contact() {
  return (
    <div >
      <Navbar name="Let's Talk" color='text-light bg-color' value4='active'/>
      <Lightmain head1="What's on your mind? We can" head2='make it works.'color='text-Black ' img={Frameimg} />
      <Talk/>
      <Comment/>
      <Footer/>
    </div>
  )
}
