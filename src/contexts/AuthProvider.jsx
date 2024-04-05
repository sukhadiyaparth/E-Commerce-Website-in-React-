import React, { createContext, useEffect, useState } from 'react'
import {GoogleAuthProvider , getAuth,  onAuthStateChanged,  signInWithPopup} from "firebase/auth"
import app from "../firebase/firebase.config"

 export const AuthContext = createContext()

const provider = new GoogleAuthProvider()
const auth = getAuth()


function AuthProvider({children}) {
 const[user,setuser] = useState(null)
 const[loading,setloading] = useState(true)

const createUser =(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signupWithGmail = ()=>{
    setloading(true)
  return  signInWithPopup(auth, provider)
}


const login = (email,password)=>{
    setloading(true)
  return  signInWithEmailAndPassword(auth, email,password)
}

const logout = ()=>{
    
  return  signOut(auth)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,current=>{
        setuser(current)
        setloading(false)
    });
    return ()=>{
      return unsubscribe()
    }
})

    const authinfo={
        user,
        loading,
        createUser,
        signupWithGmail,
        login,
        logout 
    }
  return (
<AuthContext.Provider value={authinfo}>
    {children}
</AuthContext.Provider>
    )
}

export default AuthProvider