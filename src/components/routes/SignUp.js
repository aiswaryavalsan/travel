import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
  const emailRef=useRef();
  const passwordRef=useRef();
  const submitHandler=async(e)=>{
    e.preventDefault();
   const email=emailRef.current.value;
   const password=passwordRef.current.value;

   const response=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmDHJEqz3uqIpS9VUZtsfpqhht-7eOsKo",
   {method:'POST',
    body:JSON.stringify({email:email,password:password, returnSecureToken:true}),
    headers:{'Content-type':'application/json'}})
      const data=await response.json();
      if(data&&data.error&&data.error.message){
        alert(data.error.message)
      }
      else{
        alert("user has successfully registered")
      }
      
  }
  return (
  
    <>
    <div className='form-container'>
    <img alt="river" src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
    <div className='headtab'>
    <h1>Trek Wonder</h1>
    <p>Choose Your Favourate Destination</p>
    </div>
   
    <div className='sub-container'>
   
      <form>
      
      <div className='container'>
      <h1>Sign Up</h1>
      <button className='closebtn'>X</button>
      <input placeholder='Name'></input>
      
      
      <input placeholder='LastName' type="text"></input>
      <input placeholder='Email' type="email" ref={emailRef}></input>
      <input placeholder='Password' type="password" ref={passwordRef}></input>
      <input placeholder='Confirm Password' type="password"></input>
      <button onClick={submitHandler}>Sign Up</button>
      <hr/>
      <Link to='/login'><p>Already signed up Login</p></Link>
      </div>
      
      
      </form>
      </div>
      
      </div>
     
      </>
 
  )
}

export default SignUp
