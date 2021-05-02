<template>
    <section class="container">
        <div class="bg-white py-5 px-3 shadow mb-3" ref="article">
            <div v-if="articles.length > 0" v-for="article in articles" :key="article.id" class="row border-bottom mx-0 my-3 p-3">
                <div class="col-md-3">
                    <img class="square-img w-100" :src="imagePath + article.image" :alt="`Изображение за ${article.title}`">
                </div>
                <div class="col-md-9">
                    <h3 v-html="article.title"/>
                    <p v-html="article.subject"/>
                </div>
                <div class="col-12">
                    <router-link :to="`/${type}/${article.id}`" class="btn btn-warning float-end text-white fw-bold" title="">
                        чети още...
                    </router-link>
                </div>

            </div>
            <h3 v-else class="text-center">Няма налична информация</h3>
        </div>
    </section>
</template>

<script>
export default {
    props: ['articles', 'type']
}
</script>

<style scoped>
</style>
