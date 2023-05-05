import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import "./NavBarStyle.css"
import { Link } from 'react-router-dom';
const NavBar = () => {
  const[icon,setIcon]=useState(true);
  const handleMenuIcon=()=>{
    setIcon(!icon)
  }
  return (
    <>
    <nav className="navItems">
    <div className='nav-title'><h1>TRECKWONDER</h1></div>
    <div className='menuIcons' onClick={handleMenuIcon}>
    <i className={icon?'fas fa-bars':'fas fa-times'}></i>
    </div>
    <ul className={icon?'navMenu active':'navMenu '}>
   { MenuItems.map((item,index)=>{
    return(
      <li key={index}  >
      <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
      </li>
    )
   })}
   <button>SignUp</button>
    </ul>
    </nav>
   
    
    </>
  )
}

export default NavBar