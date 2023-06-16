import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation";
import react from "react";
import { PrismaClient } from "@prisma/client";


export default async function Home() {
const session = await getServerSession(authOptions);
   if(!session) {

       redirect("/api/auth/signin")
   }
   redirect('/');
  //  const prisma = new PrismaClient();
  //  const users = await prisma.user.findMany();

   
  
  //   return (
  //     <div>
  //        <h1> you are signed in!</h1>
  //     <div className="flex h-screen items-center justify-center">
      
  //       <h2>here is the list of users:</h2>
         
  //     {users.map((user)=>(
  //       <p>{user.username}</p>
  //     ))}
  
  //     </div>
  //     </div>
  //   );
  }