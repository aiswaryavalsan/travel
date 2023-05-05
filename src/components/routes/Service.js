import React from 'react'
import NavBar from '../NavBar'
import MainPage from '../MainPage'
import image from '../../assets/service.jpeg'
const Service = () => {
  return (
   <>
   <NavBar></NavBar>
   <MainPage cName="aboutPage"
   altText="image" 
   url={image}
   title="Service"  btncName='hide'>
   </MainPage>
 
 
   </>
  )
}

export default Service