import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const prisma = new PrismaClient()

export async function recipeRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const recipes = await prisma.recipe.findMany()
    return recipes;
  })

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const recipeParamSchema = z.object({
      nameproduct: z.string(),
      preparation: z.string(),
      cooking: z.string(),
    })
    const body = recipeParamSchema.parse(request.body)
    await prisma.recipe.create({
      data: {
        nameproduct: body.nameproduct,
        preparation: body.preparation,
        cooking: body.cooking,
      }
    })
    return reply.status(201).send()
  })
}
