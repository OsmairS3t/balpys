import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

const prisma = new PrismaClient()

export async function categoryRoutes(app: FastifyInstance) {
  app.get('/', async() => {
    const categories = prisma.category.findMany()
    return categories
  })

  app.post('/', async(request: FastifyRequest, reply: FastifyReply) => {
    const categoryParamSchema = z.object({
      name: z.string()
    })
    const body = categoryParamSchema.parse(request.body)
    try {
      await prisma.category.create({
        data: {
          name: body.name
        }
      })
      return reply.status(201).send()
    } catch (error) {
      return reply.send(error)
    }
  })
}