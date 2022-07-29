import { Server } from 'socket.io'

export default (_, nuxt) => {
  nuxt.hook('listen', (server) => {
    const io = new Server(server, {
      cors: {
        origin: '*'
      }
    })
    nuxt.hook('close', () => io.close())
    io.on('connection', (socket) => {
      console.log('New client connected: ', socket.id)
      socket.onAny((eventName, ...args) => {
        io.emit(eventName, ...args)
      })
    })
  })
}
