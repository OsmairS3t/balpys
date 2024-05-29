import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const prisma = new PrismaClient()

export async function buyRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const buys = await prisma.buy.findMany()
    return buys;
  })

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const buyParamSchema = z.object({
      name: z.string(),
      amount: z.number(),
      price: z.number(),
      datebuy: z.string()
    })
    const body = buyParamSchema.parse(request.body)
    await prisma.buy.create({
      data: {
        name: body.name,
        amount: body.amount,
        price: body.price,
        datebuy: body.datebuy
      }
    })
    return reply.status(201).send()
  })
}