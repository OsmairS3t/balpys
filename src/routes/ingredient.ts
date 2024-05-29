import { PrismaClient } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const prisma = new PrismaClient()

export async function ingredientRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    const ingredients = await prisma.ingredient.findMany()
    return ingredients;
  })

  app.post('/:idrecipe', async (request: FastifyRequest, reply: FastifyReply) => {
    const recipeParamSchema = z.object({
      idrecipe: z.number()
    })
    const ingredientParamSchema = z.object({
      name: z.string(),
      amount: z.string(),
      conditions: z.string(),
      recipeId: z.number(),
    })
    const { idrecipe } = recipeParamSchema.parse(request.params)
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: idrecipe
      }
    })
    const body = ingredientParamSchema.parse(request.body)
    if(recipe) {
      await prisma.ingredient.create({
        data: {
          name: body.name,
          amount: body.amount,
          conditions: body.conditions,
          recipeId: recipe.id
        }
      })
      return reply.status(201).send()
    } else {
      return reply.status(500).send('Receita não encontrada')
    }
  })
}
