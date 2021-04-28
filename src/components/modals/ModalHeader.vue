<template>
    <div class="modal-header">
        <button type="button" class="modal-close-button" data-bs-dismiss="modal" aria-label="Затвори">
            <span aria-hidden="true">
              <i class="fas fa-times text-danger"></i>
              <span class="ml-2 font-weight-light">Затвори</span>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: "ModalButton.vue"
}
</script>

<style scoped>
button {
    border:0;
    background-color: transparent;
    font-size: 1.5rem;
    color: darkgray;
    margin-left: auto;
}

button [class^=fa] {
    margin-right: .5rem;
}

button:hover {
    color: black
}
</style>
