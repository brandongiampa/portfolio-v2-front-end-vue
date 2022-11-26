<template>
  <div class="home">
    <hero-showcase></hero-showcase>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroShowcase from '@/components/HeroShowcase.vue'

export default {
  name: 'HomeView',
  components: {
    HeroShowcase
  }
}
</script>
