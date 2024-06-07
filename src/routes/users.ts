import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

export async function userRoutes(app: any) {
  app.get('/', async () => {
    const users = await prisma.user.findMany()
    return users
  })

  app.get('/:email', async (request: FastifyRequest) => {
    const userParamSchema = z.object({
      email: z.string(),
    })
    const { email } = userParamSchema.parse(request.params)
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    return user
  })

  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const createUserBodySchema = z.object({
      email: z.string(),
      name: z.string(),
      password: z.string(),
      photo: z.string(),
    })
    const body = createUserBodySchema.parse(request.body)
    try {
      await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password: body.password,
          photo: body.photo
        }
      })
      return reply.status(201).send()
    } catch (error) {
      return reply.send(error)
    }
  })

  // app.put('/', async (request: FastifyRequest, reply: FastifyReply) => {
  //   const updateGroupBodySchema = z.object({
  //     id: z.number(),
  //     descricao: z.string(),
  //   })
  //   const { id, descricao } = updateGroupBodySchema.parse(request.body)
  //   await knex('grupos').where('id', id).update({
  //     id,
  //     descricao,
  //   })
  //   return reply.status(201).send()
  // })

  // app.delete('/:id', async (request: FastifyRequest, reply: FastifyReply) => {
  //   const deleteGroupParamSchema = z.object({
  //     id: z.string(),
  //   })
  //   const { id } = deleteGroupParamSchema.parse(request.params)
  //   await knex('grupos').where('id', id).del()
  //   return reply.status(201).send()
  // })
}
