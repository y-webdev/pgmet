<template>
    <section class="container">
        <div class="bg-white py-5 px-3 shadow mb-3">
            <h2 v-if="docs.length === 0" class="text-center mb-3">Информацията все още не е налична</h2>
            <h2 v-else class="text-center mb-3">{{ heading }}</h2>
            <button v-if="!mobileDetect" v-for="doc in docs" :key="doc.id" :class="elClass + ' w-100'" data-bs-toggle="modal" data-bs-target="#docs-modal" @click="editModal(doc.document)" v-html="doc.name"></button>
            <a v-else v-for="doc in docs" :href="path + doc.document" :class="elClass + ' d-block'">{{ doc.name }}</a>
        </div>
    </section>
</template>

<script>
import { isMobile } from 'mobile-device-detect';

export default {
    props: ['docs', 'heading'],
    data() {
        return {
            path: process.env.VUE_APP_DOCS_PATH,
            mobileDetect: isMobile,
            elClass: 'btn border mb-3 ps-5 position-relative pdf'
        }
    },
    methods: {
        editModal(data) {
            this.$emit('filePath', this.path + data);
        }
    }
}
</script>

