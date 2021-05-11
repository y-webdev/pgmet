<template>
    <section class="container">
        <div class="bg-white py-5 px-3 shadow mb-3">
            <h2 v-if="docs.length === 0" class="text-center mb-3">Информацията все още не е налична</h2>
            <h2 v-else class="text-center mb-3">{{ heading }}</h2>
            <button v-if="!isMobile" v-for="doc in docs" :key="doc.id" :class="elClass + ' w-100'" data-bs-toggle="modal" data-bs-target="#docs-modal" @click="blankModalSrc(docPath + doc.document)" v-html="doc.name"></button>
            <a v-else v-for="doc in docs" :href="docPath + doc.document" :class="elClass + ' d-block'">{{ doc.name }}</a>
        </div>
    </section>
</template>

<script>
export default {
    props: ['docs', 'heading'],
    data() {
        return {
            elClass: 'btn border mb-3 ps-5 position-relative pdf'
        }
    }
}
</script>

