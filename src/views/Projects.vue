<template>
    <single-article v-if="!loading" :articles="data.results.projects"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import SingleArticle from "@/components/article/SingleArticle";
export default {
    setup() {
        const {data, loading, error} = fetchData('projects');
        return {data, loading, error};
    },
    components: {
        SingleArticle
    }
}
</script>
