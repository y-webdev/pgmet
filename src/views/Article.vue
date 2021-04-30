<template>
    <article-item v-if="!loading" :articles="data.results[slug]"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import articleItem from "@/components/article/articleItem";
export default {
    props: ['slug'],
    setup(props) {
        console.log(props.query)
        const {data, loading, error} = fetchData(props.slug);
        return {data, loading, error};
    },
    components: {
        articleItem
    }
}
</script>

