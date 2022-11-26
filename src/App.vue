<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
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

</style>
