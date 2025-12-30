<script setup>
import { useCardStore } from '../stores/cardStore'
const store = useCardStore()

const fonts = ['Poppins', 'Playfair Display', 'Courier New', 'Montserrat']
const backgrounds = ['bg1', 'bg2', 'bg3', 'bg4']
</script>

<template>
  <div class="editor">
    <h3>Editor</h3>

    <textarea
      v-model="store.text"
      rows="5"
      placeholder="Your message..."
    />

    <label>Font</label>
    <select v-model="store.fontFamily">
      <option v-for="f in fonts" :key="f">{{ f }}</option>
    </select>

    <label>Size</label>
    <input type="range" min="18" max="40" v-model="store.fontSize" />

    <label>Weight</label>
    <select v-model="store.fontWeight">
      <option :value="400">Normal</option>
      <option :value="500">Medium</option>
      <option :value="700">Bold</option>
    </select>

    <label>Background</label>
    <div class="bg-list">
      <button
        v-for="bg in backgrounds"
        :key="bg"
        @click="store.background = bg"
      >
        {{ bg }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.editor {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

textarea {
  resize: none;
}

.bg-list {
  display: flex;
  gap: 0.5rem;
}
</style>