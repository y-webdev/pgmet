<template>
    <div ref="fixedMenu">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img :src="require(`@/assets/${websiteInfo.logo}`)" :alt="websiteInfo.shortName + ' лого'">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-ellipsis-h fa-2x nav-menu-btn position-relative"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav text-uppercase m-auto">
                        <li class="nav-item m-auto">
                            <router-link :to="startRouter.path" class="nav-link" :title="startRouter.name">
                                <i :class="startRouter.icon"></i>
                            </router-link>
                        </li>
                        <navigation-dropdown :name="aboutUs.name" :id="aboutUs.id" :links="aboutUs.routes" :journal="false"/>
                        <navigation-dropdown :name="acceptance.name" :id="acceptance.id" :links="acceptance.routes" :journal="false"/>
                        <navigation-dropdown :name="aboutStudents.name" :id="aboutStudents.id" :links="aboutStudents.routes" :journal="true"/>
                        <navigation-dropdown :name="documents.name" :id="documents.id" :links="documents.children" :journal="false"/>
                        <li v-for="item in singleNavItems" class="nav-item m-auto">
                            <router-link :to="item.path" class="nav-link" :title="item.name">
                                <i v-if="item.icon" :class="item.icon"></i>
                                <span v-else>{{ item.name }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav-footer v-if="footerNav" :homeNews="nav.homeNews"/>
    </div>
</template>

<script>
import { websiteInfo } from '@/composable/staticData';
import { startRouter } from '@/router/startRouter';
import { singleNavItems } from '@/router/singleNavItems';
import {aboutUs} from '@/router/aboutUs'
import {acceptance} from '@/router/acceptance'
import {aboutStudents} from '@/router/aboutStudents'
import { documents } from '@/router/documents';
import NavigationDropdown from '@/components/basic/header/NavigationDropdown'
import NavFooter from '@/components/basic/header/NavFooter'

export default {
    props: ['nav'],
    data() {
        return {
            startRouter,
            singleNavItems,
            websiteInfo,
            aboutUs,
            acceptance,
            aboutStudents,
            documents,
            footerNav: true
        }
    },
    components: {
        NavigationDropdown,
        NavFooter
    },
    methods: {
        handleScroll() {
            const el = this.$refs.fixedMenu;

            if (window.scrollY > 62) {
                el.classList.add('fixed-top', 'shadow');
                el.querySelector('.navbar-brand img').classList.add('w-50')
                this.footerNav = false
            } else {
                el.classList.remove('fixed-top', 'shadow');
                el.querySelector('.navbar-brand img').classList.remove('w-50')
                this.footerNav = true
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
.navbar-light .navbar-toggler:focus {
    box-shadow: none;
}

.navbar-light .navbar-toggler {
    border: none;
}

.nav-menu-btn:after {
    content: "МЕНЮ";
    position: absolute;
    left: 0;
    bottom: -5px;
    font-size: 0.77rem;
    font-family: "Repo", sans-serif;
}

.navbar-light a.router-link-exact-active span,
.navbar-light a.router-link-exact-active i {
    color: #428dc9;
}
</style>
