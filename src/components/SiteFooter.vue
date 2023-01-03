<template>
    <footer id="footer-main" class="bg-dark text-light py-5">
        <div class="container">
            <h1 class="text-light mb-5 position-relative underlined">brandongiampa.com</h1>
            <div class="row pt-4">
                <div class="col-12 col-lg-6">
                    <h2 class="text-light mb-4">Send Brandon a Message!</h2>
                    <div v-if="showErrorMessage" class="alert alert-danger font-weight-bold">
                        There was an error sending your message. Please try again.
                    </div>
                    <div v-if="showSuccessMessage" class="alert alert-success font-weight-bold">
                        Your email was sent successfully!
                        <button 
                            @click="(showSuccessMessage = false)" 
                            class="btn btn-link text-dark exit-button" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                        >
                            <i>Close</i>
                        </button>
                    </div>
                    <div class="px-md-2">
                        <div class="form-row">
                            <div class="form-group col-12">
                                <label for="inputName">Name</label>
                                <input v-model="name" type="text" class="form-control" id="inputName">
                            </div>
                            <div class="form-group col-12 mt-3">
                                <label for="inputEmail">Email</label>
                                <input v-model="email" type="email" class="form-control" id="inputEmail">
                            </div>
                            <div class="form-group col-12 mt-3">
                                <label for="inputMessage">Message</label>
                                <textarea v-model="message" class="form-control" id="inputMessage" rows="8"></textarea>
                            </div>
                            <vue-recaptcha sitekey="6LdALMgjAAAAANsufwspkwQXyCZ-suW_YfWCuP8W">
                                <button :disabled="disableSend" @click="sendEmail" type="submit" class="btn btn-primary text-light mt-4 ml-1">Send</button>
                            </vue-recaptcha>
                            <div v-if="isSendingEmail" class="text-muted sending-message"><i>Sending...</i></div>
                        </div>
                </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column align-items-left justify-content-space-between">
                    <div id="contact" class="pt-5 pt-lg-0 px-md-2">
                        <h3 class="mb-4">Thanks for the visit!</h3>
                        <span class="h5"><i class="fas fa-map-marker-alt mr-2"></i> Anaheim, CA <br><br></span>
                        <span class="h5"><a href="mailto:me@brandongiampa.com"><i class="fas fa-envelope mr-2"></i> me@brandongiampa.com</a></span>
                    </div>
                    <div class="row mt-5 text-muted pl-md-2" id="hashtags">
                        <div v-for="(hashtag, index) of hashtags" class="col-4 py-3 hashtag" :key="`footer-hashtag-${index}`">
                            <i>#{{hashtag}}</i>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center pt-5">
                    <small class="text-muted">&copy; 2022 brandongiampa.com</small>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    let successfulApiCall
    import axios from "axios"
    import { VueRecaptcha } from 'vue-recaptcha'

    export default {
        data() {
            return {
                name: "",
                email: "",
                message: "",
                showSuccessMessage: false,
                showErrorMessage: false,
                isSendingEmail: false,
                hashtags: [
                    'webdeveloper',
                    'softwareengineer',
                    'frontend',
                    'fullstack',
                    'algorithms',
                    'datastructures',
                    'losangeles',
                    'orangecounty',
                    'detroit',
                    'motorcity',
                    'remote',
                    'willingtorelocate'
                ]
            }
        },
        methods: {
            clearForm() {
                this.name = ""
                this.email = ""
                this.message = ""
            },
            isValidEmail(email) {
                const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                return regex.test(email)
            },
            async sendEmail() {
                this.isSendingEmail = true
                await this.makeApiCall()
                if (successfulApiCall) {
                    this.showSuccessMessage = true
                    this.clearForm()
                }
                else this.showSuccessMessage = false
                this.isSendingEmail = false
            },
            makeApiCall() {
                return new Promise((resolve, reject) => {
                    const URL = this.$store.getters.API_URL
                    axios.post(`${URL}/emailer`, {
                        name: this.name,
                        from_email: this.email,
                        body: this.message
                    })
                    .then(function (response) {
                        console.log(response)
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
            disableSend: function() {
                return this.name === "" || this.email === ""  || !this.isValidEmail(this.email) || this.message === ""
            }
        },
        components: {
            VueRecaptcha
        }
    }
</script>
