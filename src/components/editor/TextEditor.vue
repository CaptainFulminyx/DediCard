<script setup>
import { useCardStore } from "@/stores/card.store";
const store = useCardStore();
</script>

<template>
    <section class="panel">
        <h4>Message...</h4>

        <input
            v-model="store.content.title"
            placeholder="Card title"
            class="title-input"
        />

        <textarea
            v-model="store.content.message"
            rows="4"
            placeholder="Your dedication message"
            class="sub-text"
        />
    </section>
</template>

<style scoped>
.sub-text {
    resize: none;
}
</style>
