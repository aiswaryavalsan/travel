import React from 'react'
import MainPage from '../MainPage'
import image from '../../assets/contact.jpeg'
import NavBar from '../NavBar'
import Footer from '../Footer'
const ContactUs = () => {
  return (
    <>
    <NavBar></NavBar>
    <MainPage cName="mPage"
   altText="image" 
   url={image}
   title="Contact Us"  btncName='hide'>
   </MainPage>
    <Footer></Footer>
    </>
  )
}

export default ContactUs