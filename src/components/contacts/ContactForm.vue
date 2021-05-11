<template>
    <div class="row border-bottom py-4 position-relative">
        <form ref="contactForm" class="row g-3" novalidate>
            <div class="col-md-4">
                <div class="input-group">
                    <label for="name" class="input-group-text bg-danger border-danger" id="groupName"
                           data-bs-toggle="popover" data-bs-trigger="hover focus"
                           title="<span class='text-danger'>Задължително поле</span>" data-bs-placement="top"
                           data-bs-content="<span class='text-danger'>Пишете само на кирилица.</span><br>Трябва да съдържа минимум 3 символа.">
                        <i class="fas fa-user-tie fa-fw text-white"></i>
                    </label>
                    <input type="text" class="form-control" id="name" aria-describedby="groupName"
                           placeholder="Име и фамилия" @input="typeOnlyCyrillic($event); validateFields($event)"
                           minlength="3" maxlength="50" required>
                </div>

            </div>
            <div class="col-md-4">
                <div class="input-group">
                    <label for="email" class="input-group-text bg-danger border-danger" id="groupEmail"
                           data-bs-toggle="popover" data-bs-trigger="hover focus"
                           title="<span class='text-danger'>Задължително поле</span>" data-bs-placement="top"
                           data-bs-content="Въведете валиден E-mail адрес. Например: mail@example.com">
                        <i class="fas fa-envelope fa-fw text-white"></i>
                    </label>
                    <input type="email" class="form-control" id="email" aria-describedby="groupEmail"
                           placeholder="Вашият E-mail" @input="typeOnlyLatin($event); validateFields($event)" required>
                </div>
            </div>
            <div class="col-md-4">
                <div class="input-group">
                    <label for="phone" class="input-group-text" id="groupPhone" data-bs-toggle="popover"
                           data-bs-trigger="hover focus" data-bs-placement="top"
                           data-bs-content="Трябва да съдържа само цифри. Например: 088123456789">
                        <i class="fas fa-phone fa-fw"></i>
                    </label>
                    <input type="number" class="form-control" id="phone" aria-describedby="groupPhone"
                           placeholder="Вашият телефонен номер">
                </div>
            </div>
            <div class="col-12">
                <div class="input-group position-relative">
                    <input type="file" class="form-control" id="file" aria-describedby="groupFile"
                           accept=".pdf, .doc, .docx, .xls, .xlsx, .jpg, .jpeg, .png" name="file"
                           @change="validateFileSize($event)">
                    <label for="file" class="input-group-text h-100 bg-warning border-warning" id="groupFile"
                           data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-placement="top"
                           data-bs-content="<p>Разрешени файлови формати:<br>.pdf, .doc, .docx, .xls, .xlsx, .jpg, .jpeg, .png</p><p>Максимален размер на файла:<br>8MB</p>">
                        <i class="fas fa-file-alt fa-fw text-white"></i>
                    </label>
                </div>
            </div>
            <div class="col-12 position-relative">
                <span class="counter text-muted bg-white">Въвели сте {{ counted }} от 1200 симвила.</span>
                <div class="input-group">
                    <label for="message" class="input-group-text bg-danger border-danger" id="groupText"
                           data-bs-toggle="popover" data-bs-trigger="hover focus"
                           title="<span class='text-danger'>Задължително поле</span>" data-bs-placement="top"
                           data-bs-content="<span class='text-danger'>Пишете само на кирилица.</span><br>Минимум: 10 символа.<br>Максимум: 1200 символа.">
                        <i class="fas fa-font fa-fw text-white"></i>
                    </label>
                    <textarea class="form-control" id="message" aria-describedby="groupText"
                              placeholder="Напишете вашето съобщение тук ..." rows="12" minlength="10" maxlength="1200"
                              @input="typeOnlyCyrillic($event); characterCounter($event); validateFields($event)"
                              required></textarea>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary d-block ms-auto px-5 py-2 text-uppercase" type="submit"
                        @click="validateForm($event)">Изпрати
                </button>
            </div>
        </form>
        <div v-if="false" class="loader-container">
            <Loader loaderText="изпращане"/>
        </div>
    </div>
</template>

<script>
import Loader from '@/components/Loader'
import { fileSizeErrorModal } from "../../composable/functions";
// TODO: must add send form post request
export default {
    props: ['contactForm'],
    data() {
        return {
            counted: 0
        }
    },
    components: {
        Loader
    },
    methods: {
        typeOnlyCyrillic(event) {
            event.preventDefault();
            event.target.value = event.target.value.replace(/\w/gmi, '');
        },
        typeOnlyLatin(event) {
            event.preventDefault();
            event.target.value = event.target.value.replace(/[а-я]/gmi, '')
        },
        validateForm(event) {
            const form = this.$refs.contactForm;
            const valid = form.checkValidity();
            if (!valid) {
                event.preventDefault()
                event.stopPropagation()

                form.classList.add('was-validated')

                return false;
            }
        },
        validateFields(event) {
            const regex = event.target.type.match('text') ? `.{${event.target.minLength},${event.target.maxLength}}` : '^\\S+@\\S+\\.\\S{2,}$';

            event.preventDefault();

            if (!event.target.value.match(new RegExp(regex, "g"))) {
                event.target.classList.add('is-invalid')
                return;
            }

            event.target.classList.remove('is-invalid')
            event.target.classList.add('is-valid')
        },
        validateFileSize(event) {
            event.preventDefault();
            if (event.target.files[0].size > 100) {
                fileSizeErrorModal(document.querySelector('#fileSizeModal')).show()
                event.target.value = ''
            }
        },
        characterCounter(event) {
            this.counted = event.target.value.length
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

::-webkit-file-upload-button {
    width: 2.5rem;
}

input,
textarea {
    border-left: none;
}

input:focus,
textarea:focus {
    box-shadow: none !important;
}

input[type='file'] + label {
    position: absolute;
    left: 0;
    z-index: 9;
}

.counter {
    position: absolute;
    bottom: .07rem;
    right: 1.5rem;
    font-size: .7rem;
    z-index: 9;
}

</style>
