<script setup>
import { useCardStore } from '@/stores/card.store'
import { exportCard } from '@/utils/exportCanvas'

const store = useCardStore()

function exportSquare() {
  exportCard(store, 1080, 1080)
}

function exportPortrait() {
  exportCard(store, 1080, 1350)
}
</script>

<template>
  <section class="export">
    <button @click="exportSquare">Download Square</button>
    <button @click="exportPortrait">Download Portrait</button>
  </section>
</template>

<style scoped>
.export {
  display: flex;
  gap: 0.75rem;
}
button {
  flex: 1;
  padding: 0.6rem;
  border-radius: 10px;
  background: black;
  color: white;
}
</style>