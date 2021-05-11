<template>
    <div class="modal fade" id="fileSizeModal" tabindex="-1" aria-labelledby="fileSizeError" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-danger">
                    <p>Файлът, който се опитвате да прикачите е твърде голям за да бъде изпратен. </p>
                    <p>Моля, изберете друг файл.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Затвори</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
