<template>
    <Slides v-if="!loading" :slidesData="data.results.slides"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import HelloWorld from '@/components/HelloWorld.vue'
import Slides from '@/components/home/Slides'


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
        HelloWorld,
        Slides
    }
}
</script>
