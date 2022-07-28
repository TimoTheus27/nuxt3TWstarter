<script setup lang="ts">
const apiData = await $fetch('/api/hello?test=123')
const { $socketIOServer } = useNuxtApp()

const socketServer = computed(() => {
  return $socketIOServer || 'Unable to access'
})

if (process.server) {
  console.log('Use socketServer on serverside: ', socketServer.value.emit('test'))
}

if (process.client) {
  console.log('Log Clientside socketServerValue: ', socketServer.value)
}
</script>

<template>
  <div class="">
    <RouteProperties class="mb-1" />
    <div class="text-center">
      {{ apiData }}
    </div>
    <div class="text-center">
      SocketIO Server: {{ socketServer.toString() }}
    </div>
  </div>
</template>
