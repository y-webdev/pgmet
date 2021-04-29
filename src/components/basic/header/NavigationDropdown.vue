<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" :id="links.id + '-dropdown'" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ links.name }}
        </a>
        <ul class="dropdown-menu" :aria-labelledby="links.id + '-dropdown'">
            <li v-if="journal">
                <a href="#" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#e-journal">
                    <span>Дневник</span>
                </a>
            </li>
            <li v-for="item in links.routes">
                <router-link :to="item.path" class="dropdown-item">
                    <span>{{ item.name }}</span>
                </router-link>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['links', 'journal']
}
</script>

<style scoped>

</style>
