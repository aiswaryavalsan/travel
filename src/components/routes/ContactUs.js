import React from 'react'
import MainPage from '../MainPage'
import image from '../../assets/contact.jpeg'
import NavBar from '../NavBar'
const ContactUs = () => {
  return (
    <>
    <NavBar></NavBar>
    <MainPage cName="aboutPage"
   altText="image" 
   url={image}
   title="Contact Us"  btncName='hide'>
   </MainPage>
 
    </>
  )
}

export default ContactUs