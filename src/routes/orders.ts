import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const prisma = new PrismaClient()

export async function orderRoutes(app: any) {
  app.get('/', async () => {
    const orders = await prisma.order.findMany()
    return orders;
  })

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const orderParamSchema = z.object({
      amount: z.number(),
      price: z.number(),
      obs: z.string(),
      clientId: z.number(),
      productId: z.number(),
    })
    const body = orderParamSchema.parse(request.body)
    await prisma.order.create({
      data: {
        amount: body.amount,
        price: body.price,
        obs: body.obs,
        clientId: body.clientId,
        productId: body.productId
      }
    })
    return reply.status(201).send()
  })
}