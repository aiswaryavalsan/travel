import React from 'react'
import NavBar from '../NavBar'
import MainPage from '../MainPage'
import aboutimage from '../../assets/about.jpeg'
const AboutUs = () => {
  return (
    <>
    <NavBar></NavBar>
    <MainPage cName="aboutPage"
   altText="image" 
   url={aboutimage}
   title="About"  btncName='hide'>
   </MainPage>
 
    </>
  )
}

export default AboutUs