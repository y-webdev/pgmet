<template>
    <section>
        <div class="container">
            <div class="row flex-wrap-reverse">
                <Principal :principal="contentData.principal"/>
                <div class="col-md-8 mb-4">
                    <Video :video="contentData.video"/>
                    <div class="row">
                        <single-item :items="contentData.news" header="Последни новини" slug="news"/>
                        <single-item :items="contentData.projects" header="Проекти" slug="projects"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Principal from '@/components/home/content/Principal'
import Video from '@/components/home/content/Video'
import SingleItem from '@/components/home/content/SingleItem'
export default {
    props: ['contentData'],
    components: {
        Principal,
        Video,
        SingleItem
    }
}
</script>

<style scoped>

</style>
