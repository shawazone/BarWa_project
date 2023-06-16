

// auth options with credentials provider
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
import { CredentialsProvider } from 'next-auth/providers';


const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  // providers: [
  //   Credentials({
  //     name: "Credentials",
  //     credentials: {
  //       email: { label: "Email" },
  //       password: { label: "password" }, //hash it
  //     },
  //     authorize(credentials, req) {
        
  //       // Perform database operations
  //       if (
  //         credentials?.email === "admin@example.com" &&
  //         credentials.password === "admin"
  //       ) {
  //         return {
  //           id: "1",
  //           email: "admin@example.com",
  //         };
  //       }
  //       return null;
  //     },
  //   }),
  // ], 
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });
  
        if (credentials?.password=== user?.password) {
          return {
            id:' '} // Return the user object if credentials are valid
        }
  
        return null; // Return null if credentials are invalid
      },
    }),
  ],  


      
  pages: {
    signIn:'/api/auth/logIn'
  },
};
