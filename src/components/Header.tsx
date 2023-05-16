import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
      <div className="bg-gray-400 py-3 flex justify-center">
        <div className="flex  space-x-4">
          <Link href='/' className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <br/>
          <Link href="/products" className="text-gray-800 hover:text-gray-600">
            Products
          </Link>
          <br/>
          <Link href="/logIn" className="text-gray-800 hover:text-gray-600">
            Login
          </Link>
          <Link href="/dashBoard" className="text-gray-800 hover:text-gray-600">
            dashBoard
          </Link>
          <Link href="/transactions" className="text-gray-800 hover:text-gray-600">
            Transctions
          </Link>
        </div>
      </div>
      </nav>    
    </header>
  );
};

export default Header;
