import { createContext } from "react";

export const AuthContext=createContext({
    token:'',
    isLogged:true,
    isLoggedIn:(token)=>{},
    isLoggedOut:()=>{}
})

