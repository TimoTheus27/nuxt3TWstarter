import { io } from 'socket.io-client'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  return {
    provide: {
      socketIOClient: io(
        config.socketIOServerUrl
      )
    }
  }
})
