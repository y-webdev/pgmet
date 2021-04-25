<template>
    <section class="container">
        <div class="bg-white py-5 px-3 shadow mb-3" ref="article">
            <div v-for="article in articles" class="row border-bottom mx-0 my-3 p-3">
                <div class="col-md-3">
                    <img class="square-img w-100" :src="path + article.image" :alt="article.id" ref="squareImg">
                </div>
                <div class="col-md-9">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.subject }}</p>
                </div>
                <!-- TODO: FIX BUTTON POSITION -->
                <a href="#" class="btn btn-warning float-end text-white fw-bold" title="">чети още...</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['articles'],
    data() {
        return {
            path: process.env.VUE_APP_IMAGE_PATH
        }
    },
    mounted() {
        this.$refs.article.children.forEach(article => {
            let img = article.querySelector('.square-img');
            img.setAttribute('height', `${img.offsetWidth}px`)
        })
    }
}
</script>

<style scoped>
.btn {
    width: inherit;
}
</style>
