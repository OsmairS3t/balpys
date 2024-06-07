import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const prisma = new PrismaClient();

export async function stockRoutes(app: any) {
  app.get('/', async() => {
    const stocks = prisma.stock.findMany()
    return stocks;
  })

  app.post('/', async(request: FastifyRequest, reply: FastifyReply) => {
    const stockParamsSchema = z.object({
      productid: z.number(),
      amount: z.number(),
      hasstock: z.boolean()
    });
    const body = stockParamsSchema.parse(request.body)
    
    try {
      await prisma.stock.create({
        data: {
          productId: body.productid,
          amount: body.amount,
          hasstock: body.hasstock
        }
      })
      return reply.status(201).send()
    } catch (error) {
      return reply.send(error)
    }
  })
}