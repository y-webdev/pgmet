<template>
    <div class="col-12 text-center mt-4">
        <h3 class="bg-dark-blue p-2 text-white" :class="{'d-none': !items}">{{ header }}</h3>
    </div>
    <div v-for="item in items"  class="mt-3" :class="[{'col-md-12': items.length === 1}, {'col-md-6': items.length > 1}]">
        <div class="bg-white h-100 position-relative shadow">
            <img class="square-img w-100" :src="path + item.image" alt="name">
            <div class="p-3">
                <h4 v-html="item.title"></h4>
                <p class="pb-2">{{ item.subject }}</p>
            </div>
            <!-- TODO: Must set url when single news is ready -->
            <router-link to="/" class="btn btn-primary w-100 position-absolute bottom-0">чети още...</router-link>
<!--            <a class="btn btn-primary w-100 position-absolute bottom-0" href="https://google.com">чети още...</a>-->
        </div>
    </div>
</template>

<script>
export default {
    props: ['items', 'header'],
    data(){
        return {
            path: process.env.VUE_APP_IMAGE_PATH
        }
    }
}
</script>
