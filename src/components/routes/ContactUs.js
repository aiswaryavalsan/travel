import React from 'react'
import MainPage from '../MainPage'
import image from '../../assets/contact.jpeg'
import NavBar from '../NavBar'
import Footer from '../Footer'
import './ContactUs.css'
const ContactUs = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("submitted");
  }
  return (
    <>
    <NavBar></NavBar>
    <MainPage cName="mPage"
   altText="image" 
   url={image}
   title="Contact Us"  btncName='hide'>
   </MainPage>
    <div className='container'>
    <form >
    <input placeholder='name' type="text"/>
    <input placeholder='email' type="email"/>
    <input placeholder='message' type="text-area"/>
    <button onClick={submitHandler}>submit</button>
    </form>
    </div>
    <Footer></Footer>
    </>
  )
}

export default ContactUs