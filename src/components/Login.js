//rafce- react arrow function 
import React from 'react'
import { useState ,useRef} from 'react';
import Header from './Header';
import {checkValidData} from "../utils/validate.js"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { USER_AVATAR } from '../utils/constants.js';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState();
  const dispatch=useDispatch();
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick=()=>
    {
      const message=checkValidData(email.current.value,password.current.value);
      setErrorMessage(message)
      if(message) return;

      //if no message perform Sign in or Sign up Login
      if(!isSignInForm)
        {
          //Sign Up Login here

          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => 
          {
            const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current.value, 
                   photoURL:USER_AVATAR
                  // photoURL: "https://media.licdn.com/dms/image/D5603AQGwTwUY-pQ3WA/profile-displayphoto-shrink_200_200/0/1683558540699?e=2147483647&v=beta&t=a1ZwbSGxKokz5-_xw-coeHywjfb5IIaYr3lTtInMug8"
                  }).then(() => {

                   
                  const {uid,email,displayName,photoURL} = auth.currentUser;
                  dispatch(addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL}));
                  

                  }).catch((error) => {
                 
                    setErrorMessage(error.message)
                  });
           
               }).catch((error) => {

                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode+"-"+errorMessage);
           });

        }
      else
      {
          //Sign In Logic here

          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        
        
    
       })
         .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode+"-"+errorMessage);
        });
      }


      
    }

  return (
    <div>
      <Header />
      <div>
        <img
          className='absolute'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg"
          alt="netflix_login" />
      </div>


      <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col w-1/4  h-fit absolute  p-8 my-32 max-w-screen-sm mx-auto right-0 left-0 text-white bg-black opacity-85'>
        <h1 className='p-2 m-2 font-bold text-xl'>
          {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && 
        (<input 
          ref={name}
          className='p-2 m-2 rounded-md bg-inherit border border-solid' 
          type='text' placeholder='Full Name' />)}
        
        <input 
        ref={email}
        className='p-2 m-2 rounded-md bg-inherit border border-solid' 
        type='text'
        placeholder='Email or mobile number' />
        
        <input 
        ref={password}
        className='p-2 m-2 rounded-md bg-inherit border border-solid' 
        type='password' 
        placeholder='Password' />
        
        {errorMessage && <p className='p-2 m-2 text-bold text-red-500 text-lg'>{errorMessage}</p>}
        <button 
        className='p-2 m-2 rounded-md bg-red-600'
        onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='text-gray-400 p-2 m-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix? Sign Up Now" : "Already Registred Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login