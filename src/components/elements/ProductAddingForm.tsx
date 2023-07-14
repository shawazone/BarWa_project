
import Link from 'next/link'
import React from 'react'
import { PrismaClient ,} from '@prisma/client';
import {redirect} from 'next/navigation';



const prisma = new PrismaClient();



async function addProduct(data:FormData) {
    "use server"
const name = data.get("productName")?.valueOf()
if(!name || typeof name !== 'string' ||name.length===0) {
    throw new Error("Product name is required")
}

const description = data.get("description")?.valueOf()
if(!description || typeof description !== 'string' ||description.length===0) {
    throw new Error("Description is required")
  
}
const price = data.get("price")?.valueOf() 

if(!price || typeof price !=="string" ) {
    throw new Error("Price is required")
    
}

const image = data.get("imageUrl")?.valueOf()
if(!image || typeof image !== 'string' ||image.length===0) {
    throw new Error("Image URL is required")    
}



await prisma.product.create({ data : {name, description, price:parseFloat(price), image}});

// location.reload();
redirect('/productsPage');
}

 



const ProductAddingForm = () => {
  return (
    <div className='flex justify-center  h-screen py-4 border'>
    <div className=' border-gray-900 shadow-md p-5'>

    <form action={addProduct} className='flex gap-2 flex-col'>
    <div className='flex flex-col gap-3 '>
      <label htmlFor="productName" >Product Name:</label>
      <input
        type="text"
        name="productName"
        className="border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100"
        required     
     />
    </div>
    <div  className='flex flex-col gap-3'>
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        className="border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100"
        required
        />
    </div>
    <div  className='flex flex-col gap-3'>
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        name="price"
        className="border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100"
        required
        />
    </div>
    <div  className='flex flex-col gap-3'>
      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="text"
        name="imageUrl"
        className="border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100"
        required
        
      />
      <div className='flex gap-1 justify-start'>
        <Link
          href='..'
          className="border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 focus-within:bg-gray-700 outline-none"
          >
          Cancel
        </Link>
        <button
          type='submit'
          className="border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 focus-within:bg-gray-700 outline-none"
          >
          Add
        </button>
      </div>
    </div>
  </form>
          </div>
  </div>
  )
}

export default ProductAddingForm
