import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/users";
import { categoryRoutes } from "./routes/categories";
import { productRoutes } from "./routes/products";
import { clientRoutes } from "./routes/clients";
import { buyRoutes } from "./routes/buys";
import { saleRoutes } from "./routes/sales";
import { stockRoutes } from "./routes/stocks";
import { recipeRoutes } from "./routes/recipe";
import { ingredientRoutes } from "./routes/ingredient";

const app:FastifyInstance = fastify({ logger: true })

app.register(userRoutes, {
  prefix: 'users',
})

app.register(categoryRoutes, {
  prefix: 'categories',
})

app.register(productRoutes, {
  prefix: 'products',
})

app.register(clientRoutes, {
  prefix: 'clients',
})

app.register(buyRoutes, {
  prefix: 'buys',
})

app.register(saleRoutes, {
  prefix: 'sales',
})

app.register(stockRoutes, {
  prefix: 'stocks',
})

app.register(recipeRoutes, {
  prefix: 'recipes',
})

app.register(ingredientRoutes, {
  prefix: 'ingredients',
})

// app.listen({ port: 2323, host: '192.168.1.93' }).then(() => {
//   console.log('HTTP Server Running at port 2323!')
// })

app.listen({ port: 2323 }).then(() => {
  console.log('HTTP Server Running at port 2323!')
})
