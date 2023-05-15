
import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <header > 
   <div className="header   bg-blue-900 text-white p-4 border-b-4 border-white">

     <div className='logo'>
     </div>

      <div className=' gap-3'>
        
       <Link href="/products" >products</Link>
       <Link href="/logIn" >log in</Link>
       
       
      
          
      </div>
    </div>
    </header>
  )
}

export default Header
