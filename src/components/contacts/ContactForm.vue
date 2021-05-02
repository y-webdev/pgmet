<template>
    <div class="row border-bottom py-4 position-relative">
        <form ref="contactForm" class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
                <div class="input-group has-validation">
                    <label for="name" class="input-group-text bg-danger" id="groupName" data-bs-toggle="popover" data-bs-trigger="hover focus" title="<span class='text-danger'>Задължително поле</span>" data-bs-placement="top" data-bs-content="<span class='text-danger'>Пишете само на кирилица.</span><br>Трябва да съдържа минимум 3 символа.">
                        <i class="fas fa-user-tie text-white"></i>
                    </label>
                    <input type="text" class="form-control" id="name" aria-describedby="groupName" placeholder="Име и фамилия" @input="typeOnlyCyrillic($event)" minlength="3" required>
                </div>

            </div>
            <div class="col-md-4">
                <div class="input-group has-validation">
                    <label for="email" class="input-group-text bg-danger" id="groupEmail" data-bs-toggle="popover" data-bs-trigger="hover focus" title="<span class='text-danger'>Задължително поле</span>" data-bs-placement="top" data-bs-content="Въведете валиден E-mail адрес. Например: mail@example.com">
                        <i class="fas fa-envelope text-white"></i>
                    </label>
                    <input type="email" class="form-control" id="email" aria-describedby="groupEmail" placeholder="Вашият E-mail" required>
                </div>
            </div>
            <div class="col-md-4">
                <div class="input-group has-validation">
                    <label for="phone" class="input-group-text" id="groupPhone" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-placement="top" data-bs-content="Трябва да съдържа само цифри. Например: 088123456789">
                        <i class="fas fa-phone">

                        </i></label>
                    <input type="number" class="form-control" id="phone" aria-describedby="groupPhone" placeholder="Вашият телефонен номер">
                </div>
            </div>
            <div class="col-12">
                <div class="input-group has-validation">
                    <label for="file" class="input-group-text bg-warning" id="groupFile" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-placement="top" data-bs-content="<p>Разрешени файлови формати:<br>.pdf, .doc, .docx, .xls, .xlsx, .jpg, .jpeg, .png</p><p>Максимален размер на файла:<br>8MB</p>">
                        <i class="fas fa-file-alt text-white"></i>
                    </label>
                    <input type="file" class="form-control" id="file" aria-describedby="groupFile">
                </div>
            </div>
            <div class="col-12">
                <div class="input-group has-validation">
                    <label for="message" class="input-group-text bg-danger" id="groupText" data-bs-toggle="popover" data-bs-trigger="hover focus" title="<span class='text-danger'>Задължително поле</span>" data-bs-placement="top" data-bs-content="<span class='text-danger'>Пишете само на кирилица.</span><br>Минимум: 10 символа.<br>Максимум: 1200 символа.">
                        <i class="fas fa-font text-white"></i>
                    </label>
                    <textarea class="form-control" id="message" aria-describedby="groupText" placeholder="Вашият E-mail" rows="8" minlength="10" maxlength="1200" @input="typeOnlyCyrillic($event)" required></textarea>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary d-block ms-auto px-5 py-2" type="submit" @click="validateForm($event)">Изпрати</button>
            </div>
        </form>
        <div v-if="false" class="loader-container">
            <Loader loaderText="изпращане"/>
        </div>
    </div>
</template>

<script>
import Loader from '@/components/Loader'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default {
    props: ['contactForm'],
    components: {
        Loader
    },
    mounted() {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl, {
                html: true
            })
        })
    },
    methods: {
        validateForm(event) {
            const form = this.$refs.contactForm;
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()

                form.classList.add('was-validated')

                return false;
            }
            return true;
        },
        typeOnlyCyrillic(event) {
            event.target.value = event.target.value.replace(/[a-z]/gmi, '')
        }
    }
}
</script>

<style scoped>
.loader-container {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    width: 100%;
    height: 100%;
}

.loader {
    position: absolute;
}
</style>
