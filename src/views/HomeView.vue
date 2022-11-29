<template>
  <div class="home">
    <hero-showcase></hero-showcase>
    <about-section></about-section>
    <works-section></works-section>
    <technologies-section></technologies-section>
  </div>
</template>

<script>
import HeroShowcase from '@/components/HeroShowcase.vue'
import AboutSection from '@/components/homepagesections/AboutSection.vue'
import WorksSection from '@/components/homepagesections/WorksSection.vue'
import TechnologiesSection from '@/components/homepagesections/TechnologiesSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroShowcase,
    AboutSection,
    WorksSection,
    TechnologiesSection
  }
}
</script>
