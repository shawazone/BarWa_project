"use client";
import Link from "next/link";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
// import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e:any) => {
    e.preventDefault();

  //   try {
  //     const data = await signIn("credentials", {
  //       redirect: false,
  //       email,
  //       password,
  //     });

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center">
        <div className="w-96">
          <form
            className="border border-gray-400 rounded p-4"
            onSubmit={submitHandler}
          >
            <h1 className="mb-4 text-center text-2xl font-bold">Login</h1>
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
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded mb-4"
            >
              Sign in
            </button>

            <div className="text-center mb-4">
              <p>
                Not a member?{" "}
                <Link href="/register">
                 Register
                </Link>
              </p>
            </div>

            <div className="flex justify-center space-x-2">
              <button
                type="button"
                className="w-10 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded flex items-center justify-center"
              >
                <FaGoogle />
                
              </button>
              <button
                type="button"
                className="w-10 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 rounded flex items-center justify-center"
              >
                <FaGithub />
                
              </button>
              <button
                type="button"
                className="w-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-0 rounded flex items-center justify-center"
              >
                <FaFacebook />
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

};

export default Login;