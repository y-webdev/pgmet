<template>
    <div class="col-md-4 mb-4">
        <div class="bg-white shadow">
            <div class="p-3">
                <h3>{{ principal.header }}</h3>
                <div class="text-justify">{{ principal.description }}</div>
                <p class="fw-bold">{{ principal.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['principal']
}
</script>

<style></style>
