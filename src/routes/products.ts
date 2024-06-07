import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

const prisma = new PrismaClient()

export async function productRoutes(app: any) {
  app.get('/', async() => {
    const products = prisma.product.findMany({
      include: {
        category: true
      }
    })
    return products
  })

  app.post('/', async(request: FastifyRequest, reply: FastifyReply) => {
    const productParamSchema = z.object({
      name: z.string(),
      price: z.number(),
      photo: z.string(),
      categoryId: z.number(),
      stockId: z.number(),
    })
    const body = productParamSchema.parse(request.body)
    const category = await prisma.category.findFirst({
      where: {
        id: body.categoryId,
      }
    })
    if(category) {
      try {
        await prisma.product.create({
          data: {
            name: body.name,
            price: body.price,
            photo: body.photo,
            categoryId: body.categoryId,
            stockId: 0
          }
        })
        return reply.status(201).send()
      } catch (error) {
        return reply.send(error)      
      }
    } else {
      return reply.status(501).send('Categoria não encontrada')
    }
  })
}