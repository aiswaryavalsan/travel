import React from 'react'
import NavBar from '../NavBar'
import MainPage from '../MainPage'
import aboutimage from '../../assets/about.jpeg'
import Footer from '../Footer'
const AboutUs = () => {
  return (
    <>
    <NavBar></NavBar>
    <MainPage cName="mPage"
   altText="image" 
   url={aboutimage}
   title="About"  btncName='hide'>
   </MainPage>
    <Footer></Footer>
    </>
  )
}

export default AboutUs