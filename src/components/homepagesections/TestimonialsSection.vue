<template>
    <section class="py-5 px-2 px-md-5">
        <div class="container">
            <h1 class="underlined after mb-5">Testimonials</h1>
            <div 
                class="py-3 testimonial" 
                v-for="(testimonial, index) of testimonials" 
                :key="'homepage-testimonial-'+(index+1)"
                :id="'testimonial-'+(index+1)"
            >
                <p style="color: #343a40;" class="mb-1 testimonial-meta"><b>{{testimonial.author}}</b> from <a :href="testimonial.company_url">{{testimonial.company}}</a> says:</p>
                <p class="mt-0 text-black testimonial-text">{{testimonial.text}}</p>
            </div>
            <button 
                type="button" 
                class="btn btn-primary rounded-0 text-white mt-3"
                data-bs-toggle="modal"
                data-bs-target="#testimonialModal"
            >
                Leave Brandon a Testimonial
            </button>  
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        testimonials: function() {
            return this.$store.getters.testimonials
        }
    }
}
</script>

<style lang="scss" scoped>
    .testimonial {
        opacity: 0;
    }
    .testimonial-meta {
        font-size: 1.1em !important;
    }
    .testimonial-text {
        font-size: 1.3em !important;
    }
</style>
