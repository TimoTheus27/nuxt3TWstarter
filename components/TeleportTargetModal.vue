<script setup>
const { open } = useModal()
</script>

<template>
  <div :class="!!open ? 'modal' : 'hidden'" class="flex items-stretch">
    <div
      class="grow bg-slate-400 bg-opacity-75 flex items-center justify-center"
    >
      <div
        id="teleportTarget"
        class=""
      />
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
}
</style>
