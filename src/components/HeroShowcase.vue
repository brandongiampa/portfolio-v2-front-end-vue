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
                        <span 
                            class="badge bg-primary px-2 py-1 text-light"
                            ref="badge"
                        >
                            <strong>Orange County | Los Angeles</strong>
                        </span>
                        <underlined-h1 ref="h1" :title="title" />
                        <h2>
                            <span 
                                v-for="word in jobTitleSplit" 
                                class="word"
                                :key="'h2-word-span-' + word"  
                            >
                                {{ word }}
                            </span>
                        </h2>
                        <router-link 
                            class="d-none d-sm-inline-block btn btn-primary btn-lg border-light border-1 rounded-0 bold text-light mt-4 cta" 
                            to="/portfolio">
                            View Portfolio
                        </router-link>
                        <router-link 
                            class="d-inline-block d-sm-none btn btn-primary border-light border-1 rounded-0 bold text-light mt-4 cta" 
                            to="/portfolio">
                            View Portfolio
                        </router-link>
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
    import UnderlinedH1 from './reusable/UnderlinedH1.vue'

    export default {
        components: {
            TestimonialCarousel, UnderlinedH1
        },
        data() {
            return {
                animationsComplete: false,
                jobTitle: "Full Stack Web Developer"
            }
        },
        computed: {
            jobTitleSplit: function() {
                const jobTitleArr = this.jobTitle.split(' ')
                for (let i = 0; i < jobTitleArr.length - 1; i++) {
                    jobTitleArr[i] += ' '
                }
                return jobTitleArr
            }
        },
        props: {
            title: {
                required: true,
                type: String
            }
        }
    }
</script>

<style lang="scss">
    #hero-image {
        height: 640px;
        opacity: 0;
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
                @media(max-width: 575px) {
                    font-size: 2.3rem !important;
                }
            }
            h2 {
                color: #ddd !important;
                & > .word {
                    opacity: 0
                }
                @media(max-width: 575px) {
                    font-size: 1.5rem !important;
                }
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
    .name-letter-span {
        transform: translate(-10px, 40px);
        opacity: 0;
    }
    .cta {
        transform: translateX(-100px);
        opacity: 0;
    }
</style>