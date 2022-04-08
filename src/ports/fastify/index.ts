import fastifyCors from 'fastify-cors'
import fastify from 'fastify'

const app = fastify({ logger: true })

app.register(fastifyCors, { origin: true })

app.get('/', (_request, reply) => {
  reply.send({ hello: 'world' })
})

export const start = async () => {
  try {
    await app.listen({ port: +(process.env.PORT ?? 3000) })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
