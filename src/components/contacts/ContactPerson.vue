<template>
        <div class="col-md-4 mt-4">
            <div class="border text-center">
                <h5 class="bg-dark-blue text-white p-2 m-0">{{ contact.name }}</h5>
                <p class="pt-1">{{ contact.position }}</p>
                <p><i class="fas fa-phone"></i>
                    <a class="ms-1" :href="'tel:+359' + contact.tel.replace(/\s+/g,'')" title="Телефон" target="_new">{{ '0' + contact.tel }}</a>
                </p>
                <p>
                    <i class="fas fa-mobile-alt"></i>
                    <a class="ms-1" :href="'tel:+359' + contact.mobil.replace(/\s+/g,'')" title="Мобилен" target="_new">{{ '0' + contact.mobil }}</a>
                </p>
            </div>
        </div>
</template>

<script>
export default {
    props: ['contact']
}
</script>
