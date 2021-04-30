<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" :id="id + '-dropdown'" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ name }}
        </a>
        <ul class="dropdown-menu" :aria-labelledby="id + '-dropdown'">
            <li v-if="journal">
                <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#e-journal">
                    <span>Дневник</span>
                </a>
            </li>
            <li v-for="link in links">
                <router-link :to="link.path" class="dropdown-item">
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
