<template>
  <navigation-bar />
  <router-view/>
  <site-footer></site-footer>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue'
  import SiteFooter from './components/SiteFooter.vue'
  export default {
    components: {
      NavigationBar,
      SiteFooter
    }
  }
</script>

<style lang="scss">
  section:nth-child(even) {
    background-color: #f8f9fa;
  }
</style>
