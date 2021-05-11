<template>
    <div id="top-menu" class="row p-3">
        <div class="col-md-6 ps-0 text-start">
            <a :href="nav.facebook" class="text-white me-3" title="Facebook" target="_new">
                <i class="fab fa-facebook-square fa-lg"></i>
            </a>
            <a :href="'tel:+359' + nav.phone" class="d-md-none text-white me-3" title="Телефон">
                <i class="fas fa-phone-square fa-lg"></i>
            </a>
            <a :href="nav.mapDirection" class="text-white me-3" :title="'Упътвания до ' +  shortName + ' в Google Карти'" target="_new">
                <i class="fas fa-directions fa-lg"></i>
            </a>
            <a :href="'mailto:' + nav.email" class="text-white me-3" title="Email" target="_new">
                <i class="fas fa-envelope fa-lg"></i>
            </a>
        </div>
        <div class="col-md-6 pe-0 text-end">
            <a class="text-white ms-3" :href="nav.buyerProfile" target="_new" title="Профил на купувача">Профил на купувача</a>
            <router-link :to="contact.path" class="text-white ms-3" :title="contact.name">{{ contact.name }}</router-link>
        </div>
    </div>
</template>

<script>
import { contact } from '@/router/contact';

export default {
    props: ['nav', 'shortName'],
    data() {
        return {
            contact
        }
    }
}
</script>
