import { PrismaClient, User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export async function GET(request: Request) {
 return new Response('hi')
  //   const { body } = req;
  //   const userData: User = JSON.parse(body);

  //   try {
  //     const user = await prisma.user.create({ data: userData });
  //     res.json(user);
  //   } catch (error) {
  //     res.status(500).json({ error: 'An error occurred while creating the movie.' });
  //   }
  // } else {
  //   res.status(405).json({ error: 'Method not allowed' });
  // }
}

export async function POST(req: Request){
   const body = await req.json()
   const res =new Response()
  console.log(body)

  //    const userData: User = JSON.parse(body);

    try {
      const user = await prisma.user.create({ data: 
      body
       });
      return res.ok
    } catch (error) {
      res.status
    }


  // console.log(body)
// console.log('hello');
  return 
}