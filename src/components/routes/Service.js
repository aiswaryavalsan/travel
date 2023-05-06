import React from 'react'
import NavBar from '../NavBar'
import MainPage from '../MainPage'
import image from '../../assets/service.jpeg'
import Trip from '../Trip'
import Footer from '../Footer'
const Service = () => {
  return (
   <>
   <NavBar></NavBar>
   <MainPage cName="mPage"
   altText="image" 
   url={image}
   title="Service"  btncName='hide'>
   </MainPage>
   <Trip></Trip>
   <Footer></Footer>
 
 
   </>
  )
}

export default Service