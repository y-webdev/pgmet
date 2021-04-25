<template>
    <Header/>
    <router-view/>
    <Footer/>
</template>

<script>
import Header from './components/basic/Header';
import Footer from './components/basic/Footer';

export default {
    components: {
        Header,
        Footer
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
}

.bg-dark-blue {
    background-color: #1a3156;
}

.top-section {
    position: relative;
    top: -2.5rem;
}
</style>
