import bcrypt from 'bcrypt'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
// auth options with credentials provider
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';
// import { CredentialsProvider } from 'next-auth/providers';


const prisma = new PrismaClient();

export const authOptions= {


  
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
  providers:
   [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email ?? '' },
        });

        if (!user) {
          // User not found
          return null;
        }

        const temp = credentials?.password;
        if (typeof temp !== 'string') {
          // Invalid password value
          return null;
        }

        // const hashedPassword = await bcrypt.hash(temp, 10);   this is useless here as we are not storing the password in the database

        if (await bcrypt.compare(temp, user.password)) {
          return { id: user.id.toString() }; // Return the user object if credentials are valid
        
        }

        return null; // Return null if credentials are invalid
      },

      callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //   return true
        // },
        // async redirect({ url, baseUrl }) {
        //   return baseUrl
        // },
        async session({ session, token, user }) {
        
          return session
        },
        // async jwt({ token, user, account, profile, isNewUser }) {
        //   return token
        // }
      }
    }),

   


  ],




      
  pages: {
    signIn:'/logIn'
  },
};
