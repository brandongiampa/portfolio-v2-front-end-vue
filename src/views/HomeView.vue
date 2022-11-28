<template>
  <div class="home">
    <hero-showcase></hero-showcase>
    <about-section></about-section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroShowcase from '@/components/HeroShowcase.vue'
import AboutSection from '@/components/homepagesections/AboutSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroShowcase,
    AboutSection
  }
}
</script>
