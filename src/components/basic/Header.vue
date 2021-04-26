<template>
    <header v-if="!loading && data.results"  class="container">
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
        const {data, loading, error} = fetchData('nav');
        return {data, loading, error};
    },
}
</script>

<style scoped>
header {
    position:relative;
    height: 11.6rem;
    margin-bottom: 2.5rem;
    z-index: 1;
}
header:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    background: #428dc9;
    z-index: -1;
}
</style>
