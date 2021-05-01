<template>
    <Loader v-if="loader"/>
    <div v-else>
        <Header/>
        <router-view/>
        <Footer/>
    </div>

</template>

<script>
import Loader from './components/Loader';
import Header from './components/basic/Header';
import Footer from './components/basic/Footer';
import router from "./router";

export default {
    components: {
        Loader,
        Header,
        Footer
    },
    data() {
        return {
            loader: false
        }
    },
    mounted() {
        router.beforeEach((to, from, next) => {
            this.loader = true
            next()
        })

        router.afterEach(() => {
            setTimeout(() => this.loader = false, 500)
        })
    }
}
</script>
<style>
@font-face {
    font-family: Repo;
    src: url("assets/fonts/Repo-Light.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/Repo-Light.otf") format("opentype"),
    url("assets/fonts/Repo-Light.woff") format("woff"),
    url("assets/fonts/Repo-Light.ttf") format("truetype"),
    url("assets/fonts/Repo-Light.svg#Repo-Light") format("svg");
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: Repo;
    src: url("assets/fonts/Repo.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/Repo.otf") format("opentype"),
    url("assets/fonts/Repo.woff") format("woff"),
    url("assets/fonts/Repo.ttf") format("truetype"),
    url("assets/fonts/Repo.svg#Repo") format("svg");
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: Repo;
    src: url("assets/fonts/Repo-Medium.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/Repo-Medium.otf") format("opentype"),
    url("assets/fonts/Repo-Medium.woff") format("woff"),
    url("assets/fonts/Repo-Medium.ttf") format("truetype"),
    url("assets/fonts/Repo-Medium.svg#Repo-Medium") format("svg");
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: Repo-DemiBold;
    src: url("assets/fonts/Repo-DemiBold.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/Repo-DemiBold.otf") format("opentype"),
    url("assets/fonts/Repo-DemiBold.woff") format("woff"),
    url("assets/fonts/Repo-DemiBold.ttf") format("truetype"),
    url("assets/fonts/Repo-DemiBold.svg#Repo-DemiBold") format("svg");
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: Repo;
    src: url("assets/fonts/Repo-Bold.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/Repo-Bold.otf") format("opentype"),
    url("assets/fonts/Repo-Bold.woff") format("woff"),
    url("assets/fonts/Repo-Bold.ttf") format("truetype"),
    url("assets/fonts/Repo-Bold.svg#Repo-Bold") format("svg");
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: Repo;
    src: url("assets/fonts/Repo-ExtraBold.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/Repo-ExtraBold.otf") format("opentype"),
    url("assets/fonts/Repo-ExtraBold.woff") format("woff"),
    url("assets/fonts/Repo-ExtraBold.ttf") format("truetype"),
    url("assets/fonts/Repo-ExtraBold.svg#Repo-ExtraBold") format("svg");
    font-weight: 800;
    font-style: normal;
}
@font-face {
    font-family: Repo;
    src: url("assets/fonts/Repo-Black.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/Repo-Black.otf") format("opentype"),
    url("assets/fonts/Repo-Black.woff") format("woff"),
    url("assets/fonts/Repo-Black.ttf") format("truetype"),
    url("assets/fonts/Repo-Black.svg#Repo-Black") format("svg");
    font-weight: 900;
    font-style: normal;
}

#app {
    font-family: Repo, sans-serif;
    overflow-x: hidden;
}

#app a {
    text-decoration: none;
}

#app *{
    border-radius: 0;
}

#app a:hover {
    text-decoration: underline;
}

.text-justify {
    text-align: justify;
}

.bg-dark-blue {
    background-color: #1a3156;
}

section {
    position: relative;
    margin-top: -2.5rem;
    z-index: 0;
}

section.container {
    padding-top: 2.5rem;
}

.iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
}

.iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.square-img {
    object-fit: cover;
}

.iframe-modal-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 71px);
}

.iframe-modal-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

a.pdf:hover,
button.pdf:hover {
    text-decoration: none !important;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

.pdf::after {
    content: "\f1c1";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 2rem;
    color: #dc3545;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
}
.dd-link {
    word-break: break-all;
}
</style>
