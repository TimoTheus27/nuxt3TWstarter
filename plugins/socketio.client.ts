import { io } from 'socket.io-client'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      socketIOClient: io()
    }
  }
})
