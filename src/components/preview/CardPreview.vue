<script setup>
import { useCardStore } from '@/stores/card.store'
const store = useCardStore()
</script>

<template>
  <div
    class="card"
    :style="{
      background: store.background.color,
      width: store.layout.width / 4 + 'px',
      height: store.layout.height / 4 + 'px'
    }"
  >
    <h1 :style="{ fontSize: store.typography.titleSize / 2 + 'px' }">
      {{ store.content.title }}
    </h1>

    <p :style="{ fontSize: store.typography.bodySize / 2 + 'px' }">
      {{ store.content.message }}
    </p>
  </div>
</template>

<style scoped>
.card {
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>