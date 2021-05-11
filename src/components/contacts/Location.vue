<template>
        <div class="row border-bottom pb-2">
            <div class="d-lg-none d-block col-12 align-self-center text-center">
                <p>{{ location.street }}<br>{{ location.city }}</p>
                <p>
                    <i class="fas fa-phone"></i>
                    <a class="ms-1" :href="'tel:+359' + location.tel.replace(/\s+/g,'')" title="Телефон" target="_new">{{ '0' + location.tel }}</a>
                </p>
                <p>
                    <i class="fas fa-envelope"></i>
                    <a class="ms-1" :href="'mailto:' + location.email" title="Имейл" target="_new">{{ location.email.replace('@', '[at]') }}</a>
                </p>
            </div>
            <div class="col-12 position-relative">
                <div class="iframe-container">
                    <iframe :src="location.maplink" width="600" height="350" style="border:0" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="address bg-white shadow-sm d-lg-block d-none">
                    <div class="py-2 px-3">
                        <p class="position-relative">
                            <span>{{ location.street }}<br>{{ location.city }}</span>
                            <a class="expand" :href="location.expandMap" data-bs-toggle="tooltip" title="Преглед на по-голяма карта" target="_blank">
                                <i class="fas fa-expand fa-lg"></i>
                            </a>
                        </p>
                        <p class="mb-0">
                            <i class="fas fa-phone"></i>
                            <a class="ms-1" :href="'tel:+359' + location.tel.replace(/\s+/g,'')" title="Телефон"
                               target="_new">{{ '0' + location.tel }}</a>
                        </p>
                        <p>
                            <i class="fas fa-envelope"></i>
                            <a class="ms-1" :href="'mailto:' + location.email" title="Имейл"
                               target="_new">{{ location.email.replace('@', '[at]') }}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['location']
}
</script>
<style scoped>
.iframe-container {
    padding-bottom: 40%
}

.address {
    position: absolute;
    top: .5rem;
    left: 1.3rem;
    min-width: 20rem;
    min-height: 7.5rem;
}

.expand {
    position: absolute;
    top: 1rem;
    right: 1rem;
}
</style>
