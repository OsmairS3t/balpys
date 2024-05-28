import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

const prisma = new PrismaClient()

export async function productRoutes(app: FastifyInstance) {
  app.get('/', async() => {
    const products = prisma.product.findMany({
      include: {
        category: true
      }
    })
    return products
  })

  app.post('/', async(request: FastifyRequest, reply: FastifyReply) => {
    const categoryParamSchema = z.object({
      name: z.string()
    })
    const body = categoryParamSchema.parse(request.params)
    await prisma.category.create({
      data: {
        name: body.name
      }
    })
    return reply.status(201).send()
  })
}