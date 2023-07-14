import Image from 'next/image';
import React from 'react';
type productProp ={
  id:number
  name:string
  description:string  
  price:number 
  image:string

}

const Product = ({id,name,description,price,image }:productProp) => {
  return (
  //   <div className="max-w-lg rounded overflow-hidden shadow-lg m-5">
  //   <img  src='' alt="Product Image" className="w-sm h-auto" />
  //   <div className="px-6 py-4">
  //     <div className="font-bold text-xl mb-2">{name}</div>
  //     <p className="text-gray-700 text-base">{description}</p>
  //   </div>
  //   <div className="px-6 pt-4 pb-2">
  //     <p className="font-bold">{price}</p>
  //   </div>
  // </div>
  <div className='flex flex-col gap-3 p-4 shadow-lg w-[300px]  h-[300px]'>
     <div>
      <Image src='' alt="product image " width={70} height={70} /> 
      {/* put the product names in the alt */}
       </div>
       
       <div className='flex flex-row justify-between'>
        <p>{id}</p>
        <p>{name}</p>
        <p>{price}$</p>
   
       </div>
       <div>
        <p>{description}</p>
       </div>
        
  
  </div>
    
  );
};

export default Product;