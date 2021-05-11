<template>
    <header v-if="nav"  class="container">
        <top-menu :nav="nav" :shortName="websiteInfo.shortName"/>
        <Navigation :nav="nav"/>
    </header>
</template>

<script>
import { websiteInfo } from '../../composable/staticData';
import TopMenu from './header/TopMenu'
import Navigation from './header/Navigation'

export default {
    props: ['nav'],
    data() {
        return {
            websiteInfo
        }
    },
    components: {
        TopMenu,
        Navigation
    }
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
