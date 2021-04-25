<template>
    <footer class="bg-dark-blue text-white p-3">

        <div v-if="!loading" class="row text-center border-bottom pb-3 mb-3">
            <div v-for="link in data.results.links" class="col-md-3">
                <a :href=link.link rel="nofollow" :title="link.name" target="_blank">{{ link.name }}</a>
            </div>
        </div>
        <div v-if="loading">Still load</div>
        <div class="row text-center small">
            <div class="col-md-4 small p-3">
                &copy; {{ copyright() }}.
            </div>
            <div class="col-md-4 m-auto small">
                <a class="pe-2" href="#" rel="nofollow" title="Поверителност"><i class="fas fa-user-shield text-white"></i> Поверителност</a>
                <a class="ms-2" href="#" rel="nofollow" title="Бисквитки"><i class="fas fa-cookie-bite text-white"></i> Бисквитки</a>
            </div>
            <div class="col-md-4 small p-3">
                {{ webmaster.text }}:
                <a :href="webmaster.url" :title="webmaster.text" target="_new"><img style="height:20px" :src="require(`@/assets/${webmaster.logo}`)" :alt="webmaster.name + ' лого'"></a>
            </div>
        </div>
    </footer>
</template>

<script>
import { websiteInfo, webmaster } from '@/composable/staticData';
import fetchData from "@/composable/fetchData";

export default {
    data() {
        return {
            websiteInfo,
            webmaster
        }
    },
    setup() {
        const {data, loading, error} = fetchData('footer');
        return {data, loading, error};
    },
    methods: {
        copyright() {
            const year = new Date().getFullYear();
            return `${year} ${this.websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`
        }
    }
}
</script>

<style scoped>

</style>
