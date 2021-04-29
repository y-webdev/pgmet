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
                            <router-link :to="startRouter.path" class="nav-link">
                                <i :class="startRouter.icon"></i>
                            </router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ documents.name }}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li v-for="item in documents.routes">
                                    <router-link :to="item.path" class="dropdown-item">
                                        <span>{{ item.name }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li v-for="item in singleNavItems" class="nav-item m-auto">
                            <router-link :to="item.path" class="nav-link">
                                <i v-if="item.icon" :class="item.icon"></i>
                                <span v-else>{{ item.name }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav-footer :data="data"/>
    </div>
</template>

<script>
import { websiteInfo } from '@/composable/staticData';
import { startRouter } from '@/router/startRouter';
import { singleNavItems } from '@/router/singleNavItems';
import { documents } from '@/router/documents';
import NavFooter from '@/components/basic/header/NavFooter'

export default {
    props: ['data'],
    data() {
        return {
            startRouter,
            singleNavItems,
            websiteInfo,
            documents
        }
    },
    components: {
        NavFooter
    },
    mounted() {
        window.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY;
            const el = this.$refs.fixedMenu;
            if (scrollPosition > 62) {
                el.classList.add('fixed-top');
                el.querySelector('.navbar-brand img').classList.add('w-50')

            } else {
                el.classList.remove('fixed-top');
                el.querySelector('.navbar-brand img').classList.remove('w-50')
            }
        });
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
