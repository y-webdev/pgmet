<template>
        <div class="row border-bottom pb-2">
            <div class="col-md-6 align-self-center text-center">
                <p>{{ location.city }}<br>{{ location.street }}</p>
                <p>
                    <i class="fas fa-phone"></i>
                    <a class="ms-1" :href="'tel:+359' + location.tel.replace(/\s+/g,'')" title="Телефон" target="_new">{{ '0' + location.tel }}</a>
                </p>
                <p>
                    <i class="fas fa-envelope"></i>
                    <a class="ms-1" :href="'mailto:' + location.email" title="Имейл" target="_new">{{ location.email.replace('@', '[at]') }}</a>
                </p>
            </div>
            <div class="col-md-6">
                <div class="iframe-container">
                    <iframe :src="location.maplink" width="600" height="450" style="border:0" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['location']
}
</script>
