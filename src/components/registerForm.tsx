"use client";
import React from "react";
import { useState } from "react";
// import { createUser } from "@/app/api/handler/route";

const RegisterForm = () => {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const submitHandler =  async (e :any) => {
    
     e.preventDefault();
    
     try {
      // const newUser = await createUser(username, email, password);
      // Call any other functions or perform any actions with the newUser object
    } catch (error) {
      // Handle the error
    }
      
    setUserName('');
    setEmail('');
    setPassword('');
  };



  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center">
        <div className="w-96">
          <form
            className="border border-gray-400 rounded p-4"
            onSubmit={submitHandler}
          >
            <h1 className="mb-4 text-center text-2xl font-bold">Register</h1>

            <div className="mb-4">
              <label className="block mb-2" htmlFor="name_field">
                Name
              </label>
              <input
                type="text"
                id="name_field"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2" htmlFor="email_field">
                Email address
              </label>
              <input
                type="email"
                id="email_field"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;