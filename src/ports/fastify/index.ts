import fastifyCors from 'fastify-cors'
import fastify from 'fastify'

export const app = fastify({ logger: true })
const PORT = 'PORT'

app.get('/products/:id', (_request, reply) => {
  reply.send({ hello: 'world' })
})

app.register(fastifyCors, { origin: true })

export const start = async () => {
  try {
    await app.listen({ port: +(process.env[PORT] ?? 3000) })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
