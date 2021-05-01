<template>
    <section class="container">
        <div class="bg-white py-5 px-3 shadow mb-3" ref="article">
            <p>{{'Single article' + $route.params.id }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "SingleArticle.vue"
}
</script>

<style scoped>

</style>
