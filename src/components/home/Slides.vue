<template>
    <section v-if="slidesData">
        <vueper-slides
            :bullets="false"
            :arrows="false"
            :fade="true"
            autoplay>
            <vueper-slide v-for="(slides, i) in slidesData" :key="i" :image="path + slides.image" />
        </vueper-slides>
    </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    props: ['slidesData'],
    components: {
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            path: process.env.VUE_APP_IMAGE_PATH
        }
    }
}
</script>

<style scoped>
section {
    z-index: -1;
}
</style>
