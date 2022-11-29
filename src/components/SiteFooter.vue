<template>
    <footer id="footer-main" class="bg-dark text-light py-5">
        <div class="container">
            <h1 class="text-light mb-5 position-relative underlined">brandongiampa.com</h1>
            <div class="row pt-4">
                <div class="col-12 col-lg-6">
                    <h2 class="text-light mb-4">Send Brandon a Message!</h2>
                    <form action="#" class="px-md-2">
                        <div class="form-row">
                            <div class="form-group col-12">
                                <label for="inputName">Name</label>
                                <input type="text" class="form-control" id="inputName">
                            </div>
                            <div class="form-group col-12 mt-3">
                                <label for="inputEmail">Email</label>
                                <input type="email" class="form-control" id="inputEmail">
                            </div>
                            <div class="form-group col-12 mt-3">
                                <label for="inputMessage">Message</label>
                                <textarea class="form-control" id="inputMessage" rows="8"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary text-light mt-4 ml-1">Send</button>
                        </div>
                    </form>
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
    export default {
        data() {
            return {
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
        }
    }
</script>
