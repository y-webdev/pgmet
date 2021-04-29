<template>
    <footer class="bg-dark-blue text-white p-3">
        <div v-if="!loading" class="row text-center border-bottom pb-3 mb-3">
            <div v-for="link in data.results.links" class="col-md-3">
                <a :href=link.link rel="nofollow" :title="link.name" target="_blank">{{ link.name }}</a>
            </div>
        </div>
        <div class="row text-center small">
            <div class="col-md-4 small p-3">
                &copy; {{ copyright() }}.
            </div>
            <div class="col-md-4 m-auto small">
                <router-link v-for="item in footerNavItems" :to="item.path" rel="nofollow" :title="item.name" class="pe-2"><i :class="`${item.icon} text-white`"></i>
                    {{ item.name }}</router-link>
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
import { footerNavItems } from '@/router/footerNavItems'
import fetchData from "@/composable/fetchData";

export default {
    data() {
        return {
            websiteInfo,
            webmaster,
            footerNavItems
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
