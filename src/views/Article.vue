<template>
    <article-item v-if="!loading" :articles="data.results[slug]" :type="slug"/>
</template>

<script>
import fetchData from '@/composable/fetchData';
import ArticleItem from '@/components/article/ArticleItem';
import SingleArticle from '@/components/article/SingleArticle'
export default {
    props: ['slug', 'id'],
    setup(props) {
        const {data, loading, error} = fetchData(props.slug);
        return {data, loading, error};
    },
    components: {
        ArticleItem,
        SingleArticle
    }
}
</script>

