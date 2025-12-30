<script setup>
import { useCardStore } from '@/stores/card.store'
import { backgrounds } from '@/data/backgrounds'

const store = useCardStore()
</script>

<template>
  <section class="panel">
    <h4>Background</h4>

    <div class="bg-grid">
      <button
        v-for="bg in backgrounds"
        :key="bg.id"
        :style="{ background: bg.color }"
        @click="store.background = bg"
      />
    </div>
  </section>
</template>

<style scoped>
.bg-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}
button {
  aspect-ratio: 1;
  border-radius: 10px;
}
</style>