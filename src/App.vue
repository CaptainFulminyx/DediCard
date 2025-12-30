<template>
    <Header />

    <main class="layout">
        <section class="hero">
            <h1>Create a Dedication Card</h1>
            <p>Simple. Fast. Shareable.</p>
        </section>

        <section class="editor-area">
            <Editor />
            <Preview />
        </section>
    </main>

    <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Editor from "./components/Editor.vue";
import Preview from "./components/Preview.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.layout {
    max-width: 1200px;
    margin: auto;
    padding: 2rem;
}

.hero {
    text-align: center;
    margin-bottom: 2rem;
}

.editor-area {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 2rem;
}

@media (max-width: 900px) {
    .editor-area {
        grid-template-columns: 1fr;
    }
}
</style>
