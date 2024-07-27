import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config'

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const LoginDemo = () => {
    const handleLogin = ()=>{
        console.log("hiii");
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
  
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    alert("Login Successfully done!")
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
   console.log(errorMessage,"dd");
    // ...
  });
    }
  return (
    <div className='m-5 p-5'>
        <button className='bg-primary px-4 text-white ' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginDemo