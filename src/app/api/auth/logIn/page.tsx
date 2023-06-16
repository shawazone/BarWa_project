'use client'
import React, { useRef } from 'react'
import TextBox from '@/components/elements/TextBox';
import Button from '@/components/elements/Button';
import { signIn } from "next-auth/react";
const logINPage = () => {

  const email = useRef("");
  const passWord = useRef(""); 
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: email.current,
      password: passWord.current,
      redirect: true,
      callbackUrl: "/",
    });
  
  console.log({email,passWord});
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
        <Button onClick={onSubmit}>Login</Button>
      </div>
    </div>

);
};

export default logINPage
