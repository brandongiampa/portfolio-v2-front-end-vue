<template>
  <div class="home">
    <hero-showcase></hero-showcase>
    <about-section></about-section>
    <works-section></works-section>
  </div>
</template>

<script>
import HeroShowcase from '@/components/HeroShowcase.vue'
import AboutSection from '@/components/homepagesections/AboutSection.vue'
import WorksSection from '@/components/homepagesections/WorksSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroShowcase,
    AboutSection,
    WorksSection
  }
}
</script>
