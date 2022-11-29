<template>
  <navigation-bar />
  <router-view/>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue'
  export default {
    components: {
      NavigationBar
    }
  }
</script>

<style lang="scss">
  section:nth-child(even) {
    background-color: #f8f9fa;
  }
</style>
