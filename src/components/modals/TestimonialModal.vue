<template>
    <div class="modal fade bd-example-modal-lg" id="testimonialModal" tabindex="-1" aria-labelledby="testimonialModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="testimonialModalLabel">Leave Brandon a Testimonial</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="author-name" class="col-form-label">Your Name:</label>
                            <input type="text" class="form-control" id="author-name">
                        </div>
                        <div class="mb-3">
                            <label for="author-company" class="col-form-label">Your Company:</label>
                            <input type="text" class="form-control" id="author-company">
                        </div>
                        <div class="mb-3">
                            <label for="author-website" class="col-form-label">Your (Company) Website:</label>
                            <input type="url" class="form-control" id="author-website">
                        </div>
                        <div class="mb-3">
                            <label for="testimonial-text" class="col-form-label">Testimonial:</label>
                            <textarea rows="10" cols="50" class="form-control" id="testimonial-text"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-start">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                    <button type="button" class="btn btn-primary btn-lg rounded-3">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    label {
        font-weight: 400;
        font-size: 14px !important;
    }
</style>