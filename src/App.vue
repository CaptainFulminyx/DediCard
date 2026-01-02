<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import TextEditor from "@/components/editor/TextEditor.vue";
import TypographyControls from "@/components/editor/TypographyControls.vue";
import BackgroundPicker from "@/components/editor/BackgroundPicker.vue";
import TemplatePicker from "@/components/editor/TemplatePicker.vue";

import CardPreview from "@/components/preview/CardPreview.vue";
import ExportPanel from "@/components/preview/ExportPanel.vue";
</script>

<template>
    <AppHeader />

    <main class="container">
        <section class="hero">
            <h1>Create a beautiful dedication card</h1>
            <p>No sign-up. Just write and download.</p>
        </section>

        <section class="workspace">
            <div class="editor">
                <TemplatePicker />
                <TextEditor />
                <TypographyControls />
                <BackgroundPicker />
            </div>

            <!--  <aside class="preview">
        <CardPreview />
        <ExportPanel />
      </aside>-->
        </section>
    </main>

    <AppFooter />
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: auto;
    padding: 2rem;
}

.hero {
    text-align: center;
    margin-bottom: 2rem;
}

.workspace {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.editor {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.preview {
    position: sticky;
    top: 2rem;
}
</style>
