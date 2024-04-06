import fastify from 'fastify'
const server = fastify({ logger: true })
server.get('/', (_request, reply) => {
  reply.status(200).send('Hello World')
})

server.listen(50051, '0.0.0.0', (error) => {
  if (error) {
    process.exit(1)
  }
})
