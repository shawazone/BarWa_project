"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import next from 'public/barwa-low-resolution-logo-black-on-transparent-background.png'

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-400 shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href="/" className="text-gray-600">
            <Image src={next} alt="My Image"  width={60} />
            </Link>
          </div>

          <div className=" sm:flex sm:items-center">
            <a
              href="/"
              className="text-gray-800 text-sm font-semibold hover:text-gray-600 mr-4"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-gray-800 text-sm font-semibold hover:text-gray-600 mr-4"
            >
              Dashboard
            </a>
            <a
              href="/transactions"
              className="text-gray-800 text-sm font-semibold hover:text-gray-600 mr-4"
            >
              Transactions
            </a>
            <a
              href="/products"
              className="text-gray-800 text-sm font-semibold hover:text-gray-600 mr-4"
            >
              Products
            </a>
          </div>
          <div className="absolute right-32">
            <div
              onClick={toggleDropdown}
              className="rounded-full w-10 h-10 flex items-center hover:cursor-pointer"
            >
             Settings
            </div>

            <div
              className={`${
                dropdownOpen
                  ? "opacity-100 visible"
                  : "top-[5%] invisible opacity-0"
              } absolute top-12 z-40 mt-1 border-[5px] border-light bg-gray-100 rounded-xl py-5 shadow-card transition-all hover:shadow-g`}
            >
              <a
                href="javascript:void(0)"
                className="block py-2 px-5 text-base font-semibold hover:bg-gray-300 text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
              >
                Dashboard
              </a>
              <a
                href="javascript:void(0)"
                className="block py-2 px-5 text-base font-semibold hover:bg-gray-300 text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
              >
                Settings
              </a>
              <a
                href="javascript:void(0)"
                className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary    text-black hover:bg-red-300 hover:rounded-lg  hover:border-transparent hover:border-1
                 hover:border-red-700
  "

              >
                Logout
              </a>
            </div>
          </div>
          <Link
            href="/login"
            className="focus:outline-none text-gray-800 bg-gray-100 hover:bg-gray-300 focus:ring-4 focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 "
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
