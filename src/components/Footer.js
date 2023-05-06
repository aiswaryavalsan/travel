import React from 'react'
import  './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    
    <div className='top'>
    <div>
    <h1>TrekWonder</h1>
    <p>Choose Your Favourate Destination</p>
     </div>
     <div>
     <a href="https://www.facebook.com/"> <i className="fa-brands fa-square-facebook"></i></a>
    <a href="https://www.instagram.com/"> <i class="fa-brands fa-square-instagram"></i></a>
    <a href='https://twitter.com/'><i class="fa-brands fa-square-twitter"></i></a>
    
     </div>
    </div>
    <div className='bottom'></div>
      
    </div>
  )
}

export default Footer
