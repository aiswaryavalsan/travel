import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
const AuthContextProvider = (props) => {
    const[token,setToken]=useState();
    const isLoggedIn=(token)=>{
        setToken(token)
    }
    const isLoggedOut=()=>{
        setToken(null);
    }
    const isLogged=!!token;
    const authCtx={
        token:token,
        isLogged:isLogged,
        isLoggedIn,
        isLoggedOut

    }
  return (
    <div>
      <AuthContext.Provider value={authCtx}>{props.children}</AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
