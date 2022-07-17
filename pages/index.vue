<script setup lang="ts">
const route = useRoute()

const routeProperties: string[] = [
  `Route name: ${String(route.name)}`,
  `Route path: ${route.path}`
]
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center align-middle items-center">
    <h1
      class="bg-emerald-300 p-5 text-5xl font-bold text-white"
    >
      {{ $route.name }}-page
    </h1>
    <p
      v-for="(prop, i) in routeProperties"
      :key="i"
      class="bg-emerald-300 mt-2 text-white p-2"
    >
      {{ prop }}
    </p>
    <p
      v-for="(param, i) in $route.query"
      :key="i"
      class="bg-emerald-300 mt-2 text-white p-2"
    >
      {{ param }}
    </p>
  </div>
</template>
