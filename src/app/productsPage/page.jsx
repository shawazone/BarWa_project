import React from "react";
import Product from "@/components/Product";
import Button from "@/components/elements/Button";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const HomePage = async() => {
 const  products = await prisma.product.findMany();


  return (
<section className="flex justify-center">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
  
   {products.map(product => (
     <Product key={product.id} {...product} />
     ))}

{/* {products.map(product => (
  <Product key={product.id} product={product} />  // for best practice we can pass the whole object as a prop
))} */}

    </div>
</section>
  );
};

export default HomePage;