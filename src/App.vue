<template>
  <navigation-bar />
  <router-view/>
  <site-footer></site-footer>
  <testimonial-modal />
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue'
  import SiteFooter from './components/SiteFooter.vue'
  import TestimonialModal from './components/modals/TestimonialModal.vue'
  export default {
    components: {
      NavigationBar,
      SiteFooter,
      TestimonialModal
    },
    async created() {
      await this.$store.dispatch('setWorks', this.$store.getters.works)
      await this.$store.dispatch('setTestimonials')
      //do something to unhide UI
    }
  }
</script>

<style lang="scss">
  section:nth-child(even) {
    background-color: #f8f9fa;
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
