import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const prisma = new PrismaClient()

export async function saleRoutes(app: any) {
  app.get('/', async () => {
    const sales = await prisma.sale.findMany()
    return sales;
  })

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const saleParamSchema = z.object({
      amount: z.number(),
      price: z.number(),
      isPaid: z.boolean(),
      dateSale: z.string(),
      clientId: z.number(),
      productId: z.number(),
    })
    const body = saleParamSchema.parse(request.body)
    await prisma.sale.create({
      data: {
        amount: body.amount,
        price: body.price,
        isPaid: body.isPaid,
        dateSale: body.dateSale,
        clientId: body.clientId,
        productId: body.productId
      }
    })
    return reply.status(201).send()
  })
}