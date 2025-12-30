<script setup>
import { useCardStore } from '@/stores/card.store'
import { templates } from '@/data/templates'

const store = useCardStore()

function applyTemplate(t) {
  store.content.title = t.title
  store.content.message = t.message
  store.typography.fontFamily = t.font
  store.background.color = t.background
}
</script>

<template>
  <section class="panel">
    <h4>Templates</h4>

    <div class="template-list">
      <button
        v-for="t in templates"
        :key="t.id"
        @click="applyTemplate(t)"
      >
        {{ t.title }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.template-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
button {
  padding: 0.5rem;
  border-radius: 8px;
  background: #f5f5f5;
}
</style>