import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="bg-red-300 py-3 flex justify-center">
        <div className="flex bg-red-600 space-x-4">
          <Link href="/products" className="text-gray-800 hover:text-gray-600">
            Products
          </Link>
          <Link href="/login" className="text-gray-800 hover:text-gray-600">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
