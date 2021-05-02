<template>
    <section v-if="!loading" class="container">
        <div class="bg-white py-5 px-3 shadow mb-3" ref="article">
            <h1 v-html="handleData('title')" class="text-center"></h1>
            <div v-html="parseBBCode(handleData('description'))"></div>
        </div>
    </section>
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
