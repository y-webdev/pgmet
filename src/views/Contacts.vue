<template>
    <section v-if="!loading"  class="container">
        <div class="bg-white py-5 px-3 shadow mb-3">
            <Location :location="data.results.location"/>
            <contact-form v-if="data.results.contactForm === 'enable'"/>
            <div class="row">
                <contact-person v-for="contact in data.results.contacts" :contact="contact"/>
            </div>
        </div>
    </section>
</template>

<script>
import fetchData from "@/composable/fetchData";
import Location from '@/components/contacts/Location'
import ContactPerson from '@/components/contacts/ContactPerson'
import ContactForm from '@/components/contacts/ContactForm'

export default {
    setup() {
        const {data, loading, error} = fetchData('contacts');
        return {data, loading, error};
    },
    components: {
        Location,
        ContactPerson,
        ContactForm
    }
}
</script>
