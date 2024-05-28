import fastify from "fastify";
import { userRoutes } from "./routes/users";

const app = fastify({ logger: true })

// app.register(cors, {
//   origin: true,
// })

app.register(userRoutes, {
  prefix: 'users',
})

app.listen({ port: 3333, host: '192.168.1.93' }).then(() => {
  console.log('HTTP Server Running at port 3333!')
})