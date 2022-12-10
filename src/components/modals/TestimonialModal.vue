<template>
    <div 
        class="modal fade bd-example-modal-lg" 
        id="testimonialModal" 
        tabindex="-1" 
        aria-labelledby="testimonialModalLabel" 
        aria-hidden="true"
        @click="resetAll"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="testimonialModalLabel">Leave Brandon a Testimonial</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetAll"></button>
                </div>
                <div class="modal-body">
                    <div v-if="showErrorMessage" class="alert alert-danger font-weight-bold">
                        {{errorMessage}}
                    </div>
                    <div v-if="showSuccessMessage" class="alert alert-success font-weight-bold">
                        {{successMessage}}
                        <button class="btn btn-link text-dark exit-button" data-bs-dismiss="modal" aria-label="Close"><i>Close this form</i></button>
                    </div>
                    <form>
                        <div class="mb-3">
                            <label for="author-name" class="col-form-label">
                                <span v-if="authorName===''" class="text-danger requirement-for-submission">*</span>
                                <span v-if="authorName!==''" class="text-success requirement-for-submission">*</span>
                                Your Name
                            </label>
                            <input v-model="authorName" type="text" class="form-control" id="author-name">
                        </div>
                        <div class="mb-3">
                            <label for="author-company" class="col-form-label">
                                <span v-if="authorCompany===''" class="text-danger requirement-for-submission">*</span>
                                <span v-if="authorCompany!==''" class="text-success requirement-for-submission">*</span>
                                Your Company
                            </label>
                            <input v-model="authorCompany" type="text" class="form-control" id="author-company">
                        </div>
                        <div class="mb-3">
                            <label for="author-website" class="col-form-label">
                                <span v-if="!isValidUrl(authorCompanyUrl)" class="text-danger requirement-for-submission">*</span>
                                <span v-if="isValidUrl(authorCompanyUrl)" class="text-success requirement-for-submission">*</span>
                                Your Company Website
                            </label>
                            <input v-model="authorCompanyUrl" type="url" class="form-control" id="author-website">
                        </div>
                        <div class="mb-3">
                            <label for="testimonial-text" class="col-form-label">
                                <span v-if="!testimonialMeetsMinLength" class="text-danger requirement-for-submission">*</span>
                                <span v-if="testimonialMeetsMinLength" class="text-success requirement-for-submission">*</span>
                                Testimonial <i class="text-muted">{{testimonialString}}</i>
                            </label>
                            <textarea v-model="testimonialText" rows="10" cols="50" class="form-control" id="testimonial-text"></textarea>
                        </div>
                        <div v-if="isPostingTestimonial" class="text-muted sending-message"><i>Sending...</i></div>
                    </form>
                </div>
                <div class="modal-footer justify-content-start">
                    <button 
                        :disabled="sendButtonShouldBeDisabled" 
                        type="button" 
                        class="btn btn-primary btn-lg rounded-3"
                        @click="postTestimonial"
                    >Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const MINIMUM_TESTIMONIAL_LENGTH = 30
    let successfulApiCall
    import axios from "axios"

    export default {
        data() {
            return {
                authorName: "",
                authorCompany: "",
                authorCompanyUrl: "",
                testimonialText: "",
                isPostingTestimonial: false,
                testimonialString: ` Must be at least ${MINIMUM_TESTIMONIAL_LENGTH} characters.`,
                successMessage: "Your testimonial has posted and will be reviewed by Brandon!",
                errorMessage: "Unfortunately, there was an error processing your testimonial. Please try again.",
                showSuccessMessage: false,
                showErrorMessage: false
            }
        },
        methods: {
            clearForm() {
                this.authorName = ""
                this.authorCompany = "" 
                this.authorCompanyUrl = "" 
                this.testimonialText = ""
            },
            resetAll(e) {
                if (e.target.id === "testimonialModal") {
                    this.clearForm()
                    this.isPostingTestimonial = false 
                    this.showSuccessMessage = false 
                    this.showErrorMessage = false
                }
            },
            isValidUrl(url) {
                const regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/
                return regex.test(url)
            },
            async postTestimonial() {
                this.isPostingTestimonial = true
                await this.makeApiCall()
                if (successfulApiCall) {
                    this.showSuccessMessage = true
                    this.clearForm()
                }
                else this.showSuccessMessage = false
                this.isPostingTestimonial = false
            },
            makeApiCall() {
                return new Promise((resolve, reject) => {
                    const URL = this.$store.getters.API_URL
                    axios.post(`${URL}/testimonials`, {
                        author: this.authorName,
                        company: this.authorCompany,
                        company_url: this.authorCompanyUrl,
                        text: this.testimonialText
                    })
                    .then(function (response) {
                        if (response.status === 201) {
                            successfulApiCall = true
                            resolve()
                        }
                        else {
                            successfulApiCall = false
                            reject()
                        }
                    })
                    .catch(function () {
                        successfulApiCall = false
                        reject()
                    })
                })
            }
        },
        computed: {
            testimonialMeetsMinLength: function() {
                return this.testimonialText.length >= MINIMUM_TESTIMONIAL_LENGTH
            },
            sendButtonShouldBeDisabled() {
                return this.authorName === '' 
                || this.authorCompany === '' 
                || !this.testimonialMeetsMinLength
                || !this.isValidUrl(this.authorCompanyUrl)
                || this.isPostingTestimonial
            },
        }
    }
</script>


<style lang="scss" scoped>
    label {
        font-weight: 500;
        font-size: 16px !important;
        .text-muted {
            font-weight: 400 !important;
        }
        .requirement-for-submission {
            font-weight: 600;
        }
    }
    @mixin animate($animation,$duration,$method,$times){
        animation: $animation $duration $method $times;
    }
    @mixin keyframes($name){
        @keyframes #{$name}{
            @content;
        }
    }
    .sending-message{ 
        @include keyframes(fade){
            0%{
                opacity: 1;
            }
            50%{
                opacity: 0.5;
            }
            100%{
                opacity: 0;
            }
        }
        @include animate(fade, 1s, linear, 1);
    }
    .exit-button {
        margin-top: -6px;
    }
</style>