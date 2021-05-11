<template>
    <section v-if="!!items.length" class="container">
        <div class="bg-white py-5 px-3 shadow mb-3">
            <h2 v-if="index === 0" class="text-center border-bottom pb-3">Прием {{ year }} учебна година</h2>
            <div class="row">
                <div class="card border-0">
                    <h4 class="text-center bg-dark-blue text-white py-2 mb-0">{{ heading }}</h4>
                </div>
                <div v-for="item in items" class="col-12 mb-3">
                    <div class="border-bottom py-5">
                        <p class="m-0">
                            <span class="fw-bold text-uppercase">Професия:</span>
                            {{ item.profession }}
                        </p>
                        <p class="m-0">
                            <span class="fw-bold text-uppercase">Специалност:</span>
                            {{ item.specialty }}
                        </p>
                        <div class="row flex-wrap-reverse">
                            <div class="col-md-10 mt-3">
                                <span class="fw-bold text-uppercase">Описание:</span>
                                <div class="d-inline text-justify" v-html="parseBBCode(item.description)"></div>
                            </div>
                            <div class="col-md-2 mt-3">
                                <a class="example-image-link" :href="imagePath + item.image" :data-lightbox="`single-image-${index}-${item.id}`"
                                   :data-title="item.profession">
                                    <img :src="imagePath + item.image" class="w-100 border p-1" :alt="`Изображение на професията ${item.profession}`">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['items', 'heading', 'index', 'year']
}
</script>
