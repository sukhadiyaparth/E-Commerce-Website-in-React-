import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


 export const AuthContext = createContext()
const auth = getAuth();

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setuser]= useState(null)
    const [loading ,setLoading]= useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)};
      
 

    //create use using gmail

    const signupWithGmail = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const Logout = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            setuser(currentuser)
            setLoading(false)
        })

        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signupWithGmail,
        login,
        Logout
    }
  return (
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
)
}

export default AuthProvider