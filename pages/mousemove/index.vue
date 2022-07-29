<script setup lang="ts">
import { CSSProperties } from 'vue'
const eventName = 'mousemove'

type Point = {
    x: number,
    y: number
}
const events = ref<Point[]>([])

function getStyles (point: Point): CSSProperties {
  return {
    transform: `translate(${point.x}px, ${point.y}px)`,
    position: 'fixed'
  }
}

onMounted(() => {
  const { $socketIOClient } = useNuxtApp()
  $socketIOClient.on(eventName, (event) => {
    events.value.push(event)
  })

  window.addEventListener(eventName, (event) => {
    $socketIOClient.emit(eventName,
      { x: event.clientX, y: event.clientY }
    )
  })
})
</script>

<template>
  <div class="">
    <div
      v-for="(event, i) in events"
      :key="i"
      class=" bg-emerald-400 text-white text-lg w-2 h-2 rounded-full"
      :style="getStyles(event)"
    />
    <RouteProperties class="mb-1" />
  </div>
</template>
