import React, { useContext, useState } from 'react'
import { MenuItems } from './MenuItems'
import "./NavBarStyle.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';
const NavBar = () => {
  const ctx=useContext(AuthContext);
  const navigate=useNavigate();
  const[icon,setIcon]=useState(true);
  const handleMenuIcon=()=>{
    setIcon(!icon)
  }
  const handleSignup=()=>{
     navigate('/')
  }
  const logoutHandler=()=>{
    ctx.isLoggedOut();
    
  }
  return (
    <>
    <nav className="navItems">
    <div className='nav-title'><h1>Trek Wonder</h1></div>
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
   {!ctx.isLogged&&<button onClick={handleSignup}>Sign Up</button>}
   {ctx.isLogged&&<button onClick={logoutHandler}>Log Out</button>}
    </ul>
    </nav>
   
    
    </>
  )
}

export default NavBar