<template>
  <div class="home">
    <hero-showcase ref="hero" :title="title" />
    <about-section ref="aboutSection" />
    <works-section ref="worksSection" @setNumberOfWorks="setNumberOfWorks" />
    <technologies-section ref="technologiesSection" />
    <testimonials-section ref="testimonialsSection" />
  </div>
</template>

<script>
import HeroShowcase from '@/components/HeroShowcase.vue'
import AboutSection from '@/components/homepagesections/AboutSection.vue'
import WorksSection from '@/components/homepagesections/WorksSection.vue'
import TechnologiesSection from '@/components/homepagesections/TechnologiesSection.vue'
import TestimonialsSection from '@/components/homepagesections/TestimonialsSection.vue'
import { 
  fadeOutSplashscreen,
  animateHeroImage, 
  animateH1Letters, 
  animateH1Underline, 
  animateSections,
  animateBadge,
  animateH2,
  animateCta,
  animateTestimonialCarousel,
  animateWorkCard,
  animateHomePageTechnologiesBackgroundAndImgs,
  animateTestimonial
} from '../js-includes/dom-animations.js'
import closeNavbarIfOpen from '../js-includes/close-navbar-if-open.js'

export default {
  name: 'HomeView',
  components: {
    HeroShowcase,
    AboutSection,
    WorksSection,
    TechnologiesSection,
    TestimonialsSection
  },
  async created() {
    this.$store.dispatch('clearSearchQuery')
    if (!this.$store.getters.worksLoaded || !this.$store.getters.testimonialsLoaded) {
      this.$emit('doneLoading', false)
      //TODO: Create Error Page and nest this in try/catch 
      if (!this.$store.getters.worksLoaded && !this.$store.getters.testimonialsLoaded) {
        const worksPromise = this.$store.dispatch('setWorks')
        const testimonialsPromise = this.$store.dispatch('setTestimonials')
        await Promise.all([worksPromise, testimonialsPromise])
      }
      else if (!this.$store.getters.worksLoaded) {
        await this.$store.dispatch('setWorks')
      }
      else if (!this.$store.getters.testimonialsLoaded) {
        await this.$store.dispatch('setTestimonials')
      }
      await fadeOutSplashscreen()
      this.$emit('doneLoading', true)
    }
    else {
      this.$emit('doneLoading', true)
    }
  },
  mounted() {
    if (!this.animationsComplete) this.animate()
  },
  unmounted() {
    closeNavbarIfOpen()
    this.animationsComplete = false
  },
  methods: {
    async animate() {
        if (this.$refs.hero) {
            await animateHeroImage()
            await animateH1Letters(this.title.length)
            await animateH1Underline()
            await animateBadge()
            await animateH2()
            await animateCta()
            await animateTestimonialCarousel()
        }
        if (this.$refs.aboutSection || this.$refs.worksSection || this.$refs.technologiesSection || this.$refs.testimonialsSection) {
            await animateSections()
        }
        if (this.numberOfWorks > 0 && this.$refs.worksSection) {
          for (let i = 1; i <= this.numberOfWorks; i++) {
            await animateWorkCard(`#work-card-${i}`, i-1)
          }
        }
        if (this.$refs.technologiesSection) {
          await animateHomePageTechnologiesBackgroundAndImgs()
        }
        if (this.$refs.testimonialsSection) {
          for (let i = 1; i <= this.numberOfFullTestimonials; i++) {
            await animateTestimonial(`#testimonial-${i}`)
          }
        }
        this.animationsComplete = true
    },
    setNumberOfWorks(n) {
      this.numberOfWorks = n
    }
  },
  data() {
    return {
      title: "Brandon Giampa",
      numberOfWorks: 0,
      numberOfFullTestimonials: 2 //TODO: Change this after curling testimonials from API in $store 
    }
  },
  props: {
    isLoading: {
      type: Boolean
    }
  },
  emits: ['doneLoading']
}
</script>
