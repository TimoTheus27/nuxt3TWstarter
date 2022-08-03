<script setup lang="ts">
const { open } = useModal()
</script>

<template>
  <div class="flex flex-col items-center">
    <RouteProperties class=" mb-2" />
    <ClientOnly>
      <Teleport :disabled="!open" to="#teleportTarget">
        <div
          class=" h-40 w-100 bg-emerald-300 text-center text-white text-lg p-2 flex flex-col justify-center"
          @click="open = !open"
        >
          <span>I'm the element to teleport :)</span>
          <br>
          <span>Click me to toggle fullscreen width</span>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>
