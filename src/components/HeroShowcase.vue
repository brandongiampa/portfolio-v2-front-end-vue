<template>
    <div 
        style="background-image: url('https://i.imgur.com/qJKoct7.jpg');" 
        id="hero-image" 
        class="position-relative d-flex justify-content-center align-items-center"
    >
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6 position-relative d-flex align-items-center justify-content-center py-5 px-md-5 bg-black-opaque">
                    <div id="hero-text" class="position-relative text-light py-4">
                        <span class="badge bg-primary px-2 py-1 text-light"><strong>Orange County | Los Angeles</strong></span>
                        <h1 class="position-relative mt-2 mb-5 underlined">Brandon Giampa</h1>
                        <h2>Full Stack Web Developer</h2>
                        <router-link class="btn btn-primary btn-lg border-light border-1 rounded-0 bold text-light mt-4" to="/portfolio">View Portfolio</router-link>
                    </div>
                </div>
                <div class="col-12 col-lg-6 position-relative bg-black-opaque d-none d-md-flex justify-content-center align-items-center">
                    <testimonial-carousel />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TestimonialCarousel from './TestimonialCarousel.vue'
    export default {
        components: {
            TestimonialCarousel
        }
    }
</script>

<style lang="scss">
    #hero-image {
        height: 640px;
        @media (max-width: 991px) {
            height: 100%;
            width: 100%;
        }
        & > .container > .row {
            background: #00000088;
            position: relative;
            h1 {
                font-size: 3.5rem !important;
                @media (max-width: 991px) {
                    font-size: 3.2rem;
                }
                @media(max-width: 767px) {
                    font-size: 2.8rem !important;
                }
            }
            h2 {
                color: #ddd !important;
            }
        }
        &::before {
            content: "";
            background: #7100ff;
            opacity: .7;
            width: 100%;
            height: 100%;
            position: absolute;
            left:0 ;
            top: 0;
        }
    }
</style>