import React from "react";

const LoginPage = () => {
  return (    
  <div className="flex items-center justify-center  min-h-screen  ">
  <div className="border border-gray-300 p-6 max-w-xs">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded mb-2 w-full">
      Sign in with Google
    </button>
    <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded mb-2 w-full">
      Sign in with Facebook
    </button>
    <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded mb-2 w-full">
      Sign in with GitHub
    </button>
  </div>
</div>
  )
};

export default LoginPage;
