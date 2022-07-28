import { defineNuxtPlugin } from '#app'
import { Server } from 'socket.io'

// https://v3.nuxtjs.org/guide/going-further/internals/#the-nuxtapp-interface
export default defineNuxtPlugin(() => {
  const socketIOServer = new Server({ /* options */ })
  console.log('socketIOServer created!')

  return {
    provide: {
      socketIOServer
    }
  }
})
