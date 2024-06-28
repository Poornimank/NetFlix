//rafce- react arrow function 
import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Login = () => {
const[isSignInForm,setIsSignInForm]=useState(true);

const toggleSignInForm=()=>
  {
      setIsSignInForm(!isSignInForm);
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


      <form className='flex flex-col w-fit absolute  p-12 my-32 mx-auto right-0 left-0 text-white bg-black '>
        <h1 className='p-2 m-2 font-bold text-xl'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input className='p-2 m-2 rounded-md bg-inherit border border-solid' type='text' placeholder='Full Name'/>}
        <input className='p-2 m-2 rounded-md bg-inherit border border-solid' type='text' placeholder='Email or mobile number'/>
        <input className='p-2 m-2 rounded-md bg-inherit border border-solid' type='password' placeholder='Password'/>
        <button className='p-2 m-2 rounded-md bg-red-600'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='text-gray-400 p-2 m-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to NetFlix? Sign Up Now":"Already Registred Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login