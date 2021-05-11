<template>
    <div class="col-12 text-center mt-4">
        <h3 class="bg-dark-blue p-2 text-white" :class="{'d-none': !items}">{{ header }}</h3>
    </div>
    <div v-for="item in items"  class="mt-3" :class="[{'col-md-12': items.length === 1}, {'col-md-6': items.length > 1}]">
        <div class="bg-white h-100 position-relative shadow">
            <img class="square-img w-100" :src="imagePath + item.image" alt="name">
            <div class="p-3">
                <h4 v-html="item.title"></h4>
                <p class="pb-2">{{ item.subject }}</p>
            </div>
            <router-link :to="`/${slug}/${item.id}`" class="btn btn-primary w-100 position-absolute bottom-0">чети още...</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items', 'header', 'slug']
}
</script>
