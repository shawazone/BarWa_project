import "server-only"
import { PrismaClient } from '@prisma/client';
// import { db } from '../../../../lib/db';
import prisma from "../../../../prisma/client";
// const prisma = new PrismaClient();



export async function createUser(username :any, email : any, password :any) {
  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });

    console.log('User created:', newUser);

    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}