"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import next from "public/barwa-low-resolution-logo-black-on-transparent-background.png";
import { useSession } from "next-auth/react";
import userIcon from "public/user.svg";


const Header = () => {



 const {data: session}= useSession();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const session =  getServerSession(authOptions);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-400 shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href="/" className="text-gray-600">
              <Image src={next} alt="My Image" width={60} />
            </Link>
          </div>

          <div className=" sm:flex sm:items-center">
            <Link
              href="/"
              className="text-gray-800 text-sm font-semibold hover:text-gray-600 mr-4"
            >
              Home
            </Link>
            <Link
              href="/dashBoard"
              className="text-gray-800 text-sm font-semibold hover:text-gray-600 mr-4"
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className="text-gray-800 text-sm font-semibold hover:text-gray-600 mr-4"
            >
              Transactions
            </Link>
            <Link
              href="/productsPage"
              className="text-gray-800 text-sm font-semibold hover:text-gray-600 mr-4"
            >
              Products
            </Link>
          </div>
          {/* {session?.user ?(   
             <p> welcome {session.user.name}</p>     
        
            ):''} */}
          <div>
          
        
          {session?.user ?(
            <div className="right right-2 flex justify-end">
              
             <div
               onClick={toggleDropdown}
               className="rounded-full w-10 h-10 flex items-left hover:cursor-pointer"
             >
            <img src={session?.user?.image ?? userIcon.src} alt="img" className="w-10 h-10 rounded-full shadow-md" />
             </div>
 
             <div
               className={`${
                 dropdownOpen
                   ? "opacity-100 visible"
                   : "top-[5%]  invisible opacity-0"
               }   absolute top-12 z-40 mt-1 border-[5px] border-light bg-gray-100 rounded-xl py-5 shadow-card transition-all hover:shadow-g`}
             >

               <p 
                className="block py-2 px-5 text-base font-semibold bg-gray-300"
               >
                  {session.user.name}
               </p>
               <Link
                 href="javascript:void(0)"
                 className="block py-2 px-5 text-base font-semibold hover:bg-gray-600 text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
               >
                 Dashboard
               </Link>
               <Link
                 href="javascript:void(0)"
                 className="block py-2 px-5 text-base font-semibold hover:bg-gray-600 text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
               >
                 Settings 
               </Link>

               <Link
                 href="/addProduct"
                 className="block py-2 px-5 text-base font-semibold hover:bg-gray-600 text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
               >
                 add a product
               </Link>

               <Link
                 href="/testAddingAProduct"
                 className="block py-2 px-5 text-base font-semibold hover:bg-gray-600 text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
               >
                 testAddingAProduct
               </Link>
          
           
               {session?.user ?(
               <Link
                 href="javascript:void(0)"
                 className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary    text-black hover:bg-red-300 hover:rounded-lg  hover:border-transparent hover:border-1
                  hover:border-red-700"
                 onClick={() => signOut()}
               >
                 sign out
               </Link>
 
               ):''}
             </div>
           </div>
          ):(
            <div style={{ display: 'flex', gap: '10px' }}>
            

          
            <Link
              href="/logIn"
              className="focus:outline-none text-gray-800 bg-gray-100 hover:bg-gray-300 focus:ring-4 focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              signin
            </Link>
          </div>
          
          )}
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
