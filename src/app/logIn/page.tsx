'use client'
import React, { useRef } from 'react'
import TextBox from '@/components/elements/TextBox';
import Button from '@/components/elements/Button';
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useSession } from "next-auth/react";

const logINPage = () => {
const {data:session}= useSession()
 if(session){
  redirect('/');
 }


  
  const email = useRef("");
  const passWord = useRef(""); 
  const onSubmit = async () => {
    
    const result = await signIn("credentials", {
      email: email.current,
      password: passWord.current,
      redirect: true,
      callbackUrl: "/",
    });
  
  // console.log({email,passWord});
  };

  const handleGitHubSignIn =async () => {
    const result = await  signIn('github',{callbackUrl: "/",});
     
  };

  const handleGoogleSignIn =async () => {
    const result = await  signIn('google',{callbackUrl: "/",});
     
  };


  const handleFaceBookSignIn =async () => {
    const result = await  signIn('facebook',{callbackUrl: "/",});
     
  };
  return (
    <div
      className={
        "flex flex-col justify-center items-center  h-screen "
      }
    >
    

      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <TextBox lableText="Email" onChange={(e) => (email.current = e.target.value)} />
        <TextBox
          lableText="Password"
          type={"password"}
          onChange={(e) => (passWord.current = e.target.value)}
        />
        {/* <Button  className='primary'onClick={onSubmit}>Login</Button> */}
        <button  onClick={onSubmit}  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
  Log In
</button>
      
      <div className="flex justify-center space-x-2">
              <button
               onClick={handleGoogleSignIn}
                type="button"
                className="w-10 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded flex items-center justify-center"
              >
                <FaGoogle />
                
              </button>
              <button
              onClick={handleGitHubSignIn}
                type="button"
                className="w-10 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 rounded flex items-center justify-center"
              >
                <FaGithub />
                
              </button>
              <button
               onClick={handleFaceBookSignIn}
                type="button"
                className="w-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-0 rounded flex items-center justify-center"
              >
                <FaFacebook />
                
              </button>

            </div>
            <div>don't have an account ? <Link href="/register" className="text-blue-500">register</Link></div>
            </div>
    </div>

);
    
  
};

export default logINPage
