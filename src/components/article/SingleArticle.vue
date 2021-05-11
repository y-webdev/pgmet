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
//import _ from 'lodash' // TODO: must be removed

export default {
    props: ['id', 'page'],
    setup(props) {
        const {data, loading, error} = fetchData(props.page);
        return {data, loading, error};
    },
    methods: {
        handleData(key) {
            return _.find(this.data.results[this.page], {'id': this.id})[key]
        }
    },
    updated() {
        const xpath = '(//img[contains(@class, "special-img")]//ancestor::section//h1)[1]';
        const xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
            .singleNodeValue

        if (xpathResult) {
            xpathResult.classList.add('text-white')
        }
    }
}
</script>
