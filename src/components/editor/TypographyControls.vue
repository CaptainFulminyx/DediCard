<script setup>
import { useCardStore } from '@/stores/card.store'
import { fonts } from '@/data/fonts'
const store = useCardStore()
</script>

<template>
  <section class="panel">
    <h4>Typography</h4>

    <select v-model="store.typography.fontFamily">
      <option v-for="f in fonts" :key="f.name">
        {{ f.name }} – {{ f.mood }}
      </option>
    </select>

    <label>Title Size</label>
    <input type="range" min="28" max="52" v-model="store.typography.titleSize" />

    <label>Body Size</label>
    <input type="range" min="16" max="28" v-model="store.typography.bodySize" />
  </section>
</template>