<script setup>
import { useCardStore } from '@/stores/card.store'
const store = useCardStore()
</script>

<template>
  <section class="panel">
    <h4>Message</h4>

    <input
      v-model="store.content.title"
      placeholder="Card title"
      class="title-input"
    />

    <textarea
      v-model="store.content.message"
      rows="4"
      placeholder="Your dedication message"
    />
  </section>
</template>

<style scoped>
.panel {
  background: white;
  padding: 1rem;
  border-radius: 14px;
}
.title-input {
  font-size: 1.1rem;
  font-weight: 600;
}
</style>