<template>
    <section class="container">
        <div class="bg-white py-5 px-3 shadow mb-3">
            <h1 v-if="!!data.length" class="text-center mb-3">
                {{ header }}
                <span v-if="heading" class="d-block text-info h3">Сесия - {{ heading }}</span>
            </h1>
            <h2 v-else>Информацията все още не е налична</h2>
            <div v-for="item in data" class="row py-3 border-bottom">
                <div class="col-md-8 my-auto">{{ item.action }}</div>
                <div class="col-md-4 text-end">
                    <span class="small text-muted">Дата/Период:</span>
                    <span class="fw-bold d-block">{{ item.period }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['data', 'session', 'header', 'heading']
}
</script>
