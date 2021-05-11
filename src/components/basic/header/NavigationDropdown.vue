<template>
    <li class="nav-item dropdown m-auto w-100">
        <a class="nav-link dropdown-toggle text-center" href="#" :id="id + '-dropdown'" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ name }}
        </a>
        <ul class="dropdown-menu shadow" :aria-labelledby="id + '-dropdown'">
            <li v-if="journal" class="text-center text-lg-start">
                <a href="#" role="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#e-journal">
                    <span>Дневник</span>
                </a>
            </li>
            <li v-for="link in links" class="text-center text-lg-start">
                <router-link :to="link.path" class="dropdown-item" :title="link.name">
                    <span>{{ link.name }}</span>
                </router-link>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['name', 'links', 'id', 'journal']
}
</script>

<style scoped>

</style>
