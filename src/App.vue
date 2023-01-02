<template>
  <navigation-bar />
  <router-view @done-loading="setShowSplashscreen" />
  <site-footer></site-footer>
  <testimonial-modal />
  <splash-screen v-if="showSplashscreen" />
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue'
  import SiteFooter from './components/SiteFooter.vue'
  import SplashScreen from './components/SplashScreen.vue'
  import TestimonialModal from './components/modals/TestimonialModal.vue'
  export default {
    methods: {
      setShowSplashscreen: function(bool) {
        this.showSplashscreen = !bool
      }
    },
    components: {
      NavigationBar,
      SiteFooter,
      TestimonialModal,
      SplashScreen
    },
    data() {
      return {
        showSplashscreen: true
      }
    }
  }
</script>

<style lang="scss">
  section:nth-child(even) {
    background-color: #f8f9fa;
  }
  .badge {
    opacity: 0;
    scale: 0;
  }
  @mixin animate($animation,$duration,$method,$times){
        animation: $animation $duration $method $times;
    }
    @mixin keyframes($name){
        @keyframes #{$name}{
            @content;
        }
    }
    .sending-message{ 
        @include keyframes(fade){
            0%{
                opacity: 1;
            }
            50%{
                opacity: 0.5;
            }
            100%{
                opacity: 0;
            }
        }
        @include animate(fade, 1s, linear, 1);
    }
    .exit-button {
        margin-top: -6px;
    }
</style>
