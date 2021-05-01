<template>
    <section v-if="!loading" class="container">
        <div class="bg-white py-5 px-3 shadow mb-3" ref="article">
            <h1 v-html="handleData('title')" class="text-center"></h1>
            <div v-html="handleData('description')"></div>
        </div>
    </section>
    <a href="https://www.pgmet-knezha.bg/assets/uploads/1-1_5d0a9dd5c78fa.jpg" data-lightbox="image-1" data-title="My caption">Image #1</a>
</template>

<script>
import fetchData from '@/composable/fetchData';
import _ from 'lodash'

export default {
    props: ['id', 'page'],
    setup(props) {
        const {data, loading, error} = fetchData(props.page);
        return {data, loading, error};
    },
    data() {
        return {
            subject: 'page',
            description: ''
        }
    },
    methods: {
        handleData(key) {
            return _.find(this.data.results[this.page], {'id': this.id})[key]
        }
    }
}
</script>

<style scoped>

</style>
