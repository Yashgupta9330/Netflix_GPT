import React, { useState } from 'react';
import Headers from './Header';

const Login = () => {
  const [isSignIn,setIsSignIn]=useState(true);
  const toggleisSignInform=()=>{
         setIsSignIn(!isSignIn);
  }
  return (
    <div>
        <Headers />
        <div className="absolute">
        <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
        </div>
     <form className="rounded-lg w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white z-20 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
         {isSignIn?"Sign In":"Sign Up"}
         </h1>

          {!isSignIn && <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg p-4 my-4 w-full bg-gray-700"
           /> }
        
        <input
          type="text"
          placeholder="Email Address"
          className="rounded-lg p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg p-4 my-4 w-full bg-gray-700"
        />
  
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleisSignInform} >
        {isSignIn ? "New to Netflix? Sign Up Now" :"Already registered? Sign In Now..."}
        </p>
      </form> 
         
    </div>
  );
};

export default Login;