
import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from 'next/navigation'
import ProductAddingForm from '@/components/elements/ProductAddingForm';




const addPoduct =async () => {
 

  const session = await getServerSession(authOptions);
   if(!session) {

       redirect("/logIn")
   }
  
  return (
    <div>
     <ProductAddingForm/>  
    </div>
  );


}

export default addPoduct
