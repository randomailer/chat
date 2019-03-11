const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-ws'))

const clients = new Map()
const indexByClient = new Map()
const messages = []

const sendMessages = (socket, data) => {
  socket.send(JSON.stringify(data))
}

fastify.ready(err => {
  if (err) throw err

  console.log('Server started.')

  fastify.ws
    .on('connection', (socket) => {
      indexByClient.set(socket, indexByClient.size + 1)
      clients.set(socket, socket)

      sendMessages(socket, messages.slice(messages.length - 10)) // get latest 10 messages on start

      socket.on('message', message => {
        try {
          const obj = JSON.parse(message)
          const messageObj = {
            date: (new Date()).getTime(),
            text: obj.message,
            userName: obj.userName || `User ${indexByClient.get(socket)}`
          }
          messages.push(messageObj)

          clients.forEach((iSocket) => {
            if (socket === iSocket) {
              sendMessages(iSocket, [ { ...messageObj, yours: true } ])
              return
            }
            sendMessages(iSocket, [ messageObj ])
          })

        } catch (error) {}
      })

      socket.on('close', () => {
        indexByClient.delete(socket)
        clients.delete(socket);
        console.log('remove client')
      })
    })
})

fastify.listen(3001)