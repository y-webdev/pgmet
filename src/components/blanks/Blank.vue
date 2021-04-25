<template>
    <section class="container">
        <div class="bg-white py-5 px-3 shadow mb-3">
            <h1 class="text-center">{{ header }}</h1>
            <div class="text-justify">{{ data.description }}</div>
            <div class="small text-end mt-5 text-secondary">Последна актуализация: <span class="fw-bold">{{ data.updated_date }}</span></div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['data', 'header']
}
</script>
