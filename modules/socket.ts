import { Server } from 'socket.io'

import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    // Usually  npm package name of your module
    name: '@nuxtjs/socketio-server',
    // The key in `nuxt.config` that holds your module options
    configKey: 'sample',
    // Compatibility constraints
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options for your module
  defaults: {},
  hooks: {},
  setup (_moduleOptions, nuxt) {
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
          server.emit(eventName, ...args)
        })
      })
    })
  }
})
