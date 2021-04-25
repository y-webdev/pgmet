<template>
    <section v-if="slidesData" class="top-section">
        <vueper-slides :bullets="false" autoplay>
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

</style>
