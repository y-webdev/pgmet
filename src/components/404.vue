<template>
    <div class="fixed-top w-100 h-100 bg-white">
        <div class="container">
            <div>
                <h1>404</h1>
            </div>
            <h2>Ooпс! Тази страница не може да бъде намерена</h2>
            <p>За съжаление страницата, която търсите, не съществува, е премахната, името е променено или временно не е налице</p>
            <router-link to="/" class="btn btn-primary">Към началото</router-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
    font-size: 15vw;
    font-weight: 900;
    margin: 0;
    color: lightgray;
}
</style>
