<template>
    <header v-if="data.results"  class="container">
        <top-menu :data="data" :shortName="websiteInfo.shortName"/>
        <Navigation :data="data"/>
    </header>
</template>

<script>
import { websiteInfo } from '../../composable/staticData';
import fetchData from '../../composable/fetchData';
import TopMenu from './header/TopMenu'
import Navigation from './header/Navigation'

export default {
    data() {
        return {
            websiteInfo
        }
    },
    components: {
        TopMenu,
        Navigation
    },
    setup() {
        const {data, error, load} = fetchData('nav');
        load();
        return {data, error};
    }
}
</script>

<style scoped>
header:before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 11.625rem;
    background: #428dc9;
    z-index: -1;
}
</style>
