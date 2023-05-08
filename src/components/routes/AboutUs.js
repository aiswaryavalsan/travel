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
   <div>
   <h1>Our story</h1>
   <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
   <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
   </div>
    <Footer></Footer>
    </>
  )
}

export default AboutUs