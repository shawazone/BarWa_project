import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request){
    const body = await req.json()
    const res =new Response()
    const productInfo= {
        name: body.name,
        description: body.description,
        price: body.price,
        // ...(body.image && { image: body.image })
        image: body.image
    }
     try {
       const product = await prisma.product.create({ data: 
         productInfo
        });
       return res.ok
     } catch (error) {
       res.status
     }
   return 
 }
 