<template>
    <single-article v-if="!loading" :articles="data.results.news"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import SingleArticle from "@/components/article/SingleArticle";
export default {
    setup() {
        const {data, loading, error} = fetchData('news');
        return {data, loading, error};
    },
    components: {
        SingleArticle
    }
}
</script>

