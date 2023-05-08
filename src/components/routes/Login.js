import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../store/AuthContext';
const Login = () => {
  const emailRef=useRef();
  const passwordRef=useRef();
  const ctx=useContext(AuthContext);
  const loginHandler=async(e)=>{
    e.preventDefault();
    try{
    const response= await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmDHJEqz3uqIpS9VUZtsfpqhht-7eOsKo",
    {method:'POST', body:JSON.stringify({email:emailRef.current.value,password:passwordRef.current.value,returnSecureToken:true}),
    headers:{'content-type':'application/json'}});
    const data=await response.json();
    if(!response.ok){
      throw new Error(data.error.message);
    }
    else{
     
      console.log(data);
      ctx.isLoggedIn(data.idToken)
      alert("logined")
    }
  }
  catch(error){
 alert(error);
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
      <h1>Log In</h1>
      
      <input placeholder='Email' type='email' ref={emailRef}></input>
      <input placeholder='Password' type='password' ref={passwordRef}></input>
    
      <button onClick={loginHandler}>Log In</button>
      <Link>Forgotton Password</Link>
      <hr/>
       <Link to={'/'}>Create A New Account</Link>
      </div>
      <div>
      
      </div>

      </form>
      </div>
      </div>
     
      </>
    
  )
}

export default Login
