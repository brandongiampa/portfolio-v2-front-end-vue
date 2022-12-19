<template>
    <div id="testimonialCarousel" class="carousel slide w-100 h-100 py-5" data-ride="carousel" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" key="carousel-indicator-1" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button 
                v-for="n in testimonials.length - 1" 
                type="button" 
                data-bs-target="#testimonialCarousel" 
                :data-bs-slide-to="n" 
                :aria-label="'Slide ' + (n + 1)"
                :key="'carousel-indicator-' + (n + 1)">
            </button>
        </div>
        <div class="carousel-inner h-100 bg-dark" id="quote-carousel">
            <div 
                v-if="testimonials.length"
                :class="activeClasses" 
                key="carousel-item-0">
                <div class="d-flex flex-column align-items-center justify-content-center text-light h-100">
                    <blockquote class="blockquote text-center">
                        <p class="mb-3">"{{ testimonials[0].text }}"</p>
                        <footer class="blockquote-footer text-center">{{ testimonials[0].author }}, 
                            <a :href="testimonials[0].url && testimonials[0].url !== '' ? testimonials[0].url : '#'">{{ testimonials[0].company }}</a>
                        </footer>
                    </blockquote>
                </div>
            </div>
            <div 
                v-for="n in testimonials.length - 1" 
                :class="inactiveClasses" 
                :key="'-carousel-item-'+n">
                <div class="d-flex flex-column align-items-center justify-content-center text-light h-100">
                    <blockquote class="blockquote text-center">
                        <p class="mb-3">"{{ testimonials[n].text }}"</p>
                        <footer class="blockquote-footer text-center">{{ testimonials[n].author }}, 
                            <a :href="testimonials[n].url && testimonials[n].url !== '' ? testimonials[n].url : '#'">{{ testimonials[n].company }}</a>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                testimonials: [
                    {
                        text: "Brandon was awesome to work with.",
                        author: "Ari Fine",
                        company: "roofgenius.com",
                        url: "https://roofgenius.com"
                    },
                    {
                        text: "I would be pleased to employ Brandon again.",
                        author: "Tanya Choi",
                        company: "ECC Namgwangju",
                        url: "https://roofgenius.com"
                    },
                    {
                        text: "So handsome!",
                        author: "Gluten Free Beer Brian",
                        company: "GFB Supply",
                        url: "https://gfbsupply.com"
                    }
                ],
                activeTestimonialIndex: 0,
                activeClasses: 'carousel-item h-100 testimonial active',
                inactiveClasses: 'carousel-item h-100 testimonial'
            }
        },
        methods: {
            nextSlide() {
                this.activeTestimonialIndex++
                if (this.activeTestimonialIndex >= this.testimonials.length) this.activeTestimonialIndex = 0
            },
            previousSlide() {
                this.activeTestimonialIndex--
                if (this.activeTestimonialIndex < 0) this.activeTestimonialIndex = this.testimonials.length - 1
            }
        }
    }
</script>

<style lang="scss" scoped>
    .carousel-indicators {
        top: 320px;
    }
    blockquote p {
        font-size: 1.4rem !important;
    }
    blockquote footer {
        font-size: 1.1rem !important;
    }
</style>