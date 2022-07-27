<script setup lang="ts">
const apiData = await $fetch('/api/hello?test=123')
</script>

<template>
  <div class="">
    <RouteProperties class="mb-1"/>
    <div class="text-center">
      {{ apiData }}
    </div>
  </div>
</template>
