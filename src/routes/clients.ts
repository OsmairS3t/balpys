import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from 'zod';

const prisma = new PrismaClient()

export async function clientRoutes(app: any) {
  app.get('/', async() => {
    const clients = prisma.client.findMany()
    return clients
  })

  app.post('/', async(request: FastifyRequest, reply: FastifyReply) => {
    const clientParamSchema = z.object({
      name: z.string(),
      photo: z.string()
    })
    const body = clientParamSchema.parse(request.params)
    await prisma.client.create({
      data: {
        name: body.name,
        photo: body.photo
      }
    })
    return reply.status(201).send()
  })
}