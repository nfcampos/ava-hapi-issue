import Hapi from 'hapi'

const server = new Hapi.Server()

server.connection({ port: 10000 })

server.route({
  method: 'GET',
  path: '/blah',
  config: {
    handler: (req, reply) => reply({yay: 2})
  }
})

export default server
