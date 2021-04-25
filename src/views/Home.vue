<template>
    <Slides v-if="!loading" :slidesData="data.results.slides"/>
    <Content v-if="!loading"  :contentData="data.results"/>
    <autoload-modal v-if="!loading" :autoloadContent="data.results.autoloadmodal[0]"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import Slides from '@/components/home/Slides'
import Content from '@/components/home/Content'
import AutoloadModal from '@/components/home/content/AutoloadModal'

export default {
    data() {
      return {
          loading: false
      }
    },
    setup() {
        const {data, loading, error} = fetchData('home');
        return {data, loading, error};
    },
    components: {
        Slides,
        Content,
        AutoloadModal
    }
}
</script>
