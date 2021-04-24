<template>
    <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img :src="require(`@/assets/${websiteInfo.logo}`)" :alt="websiteInfo.shortName + ' лого'">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-ellipsis-h fa-2x nav-menu-btn position-relative"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav text-uppercase m-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <!--                    <li class="nav-item dropdown">-->
                    <!--                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
                    <!--                            Dropdown-->
                    <!--                        </a>-->
                    <!--                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">-->
                    <!--                            <li><a class="dropdown-item" href="#">Action</a></li>-->
                    <!--                            <li><a class="dropdown-item" href="#">Another action</a></li>-->
                    <!--                            <li><hr class="dropdown-divider"></li>-->
                    <!--                            <li><a class="dropdown-item" href="#">Something else here</a></li>-->
                    <!--                        </ul>-->
                    <!--                    </li>-->
                </ul>
            </div>
        </div>
    </nav>
    <nav-footer :data="data"/>
</template>

<script>
import { navItems, websiteInfo } from '../../../composable/staticData';
import NavFooter from './NavFooter'

export default {
    props: ['data'],
    data() {
        return {
            navItems,
            websiteInfo
        }
    },
    components: {
        NavFooter
    }
}
</script>

<style scoped>
.navbar-toggler:focus {
    box-shadow: none;
}

.nav-menu-btn:after {
    content: "МЕНЮ";
    position: absolute;
    left: 0;
    bottom: -5px;
    font-size: 0.77rem;
    font-family: "Repo", sans-serif;
}

a.router-link-exact-active {
    color: #42b983;
}

</style>
