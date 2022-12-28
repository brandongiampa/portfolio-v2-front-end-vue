<template>
  <navigation-bar />
  <router-view :is-loading="isLoading" />
  <site-footer></site-footer>
  <testimonial-modal />
  <Transition name="fade">
    <splash-screen v-if="isLoading" :progress-value="progressValue" />
  </Transition>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue'
  import SiteFooter from './components/SiteFooter.vue'
  import SplashScreen from './components/SplashScreen.vue'
  import TestimonialModal from './components/modals/TestimonialModal.vue'
  export default {
    methods: {
      fillProgressBar(to) {
        const incrementTime = 10
        const diff = to - this.progressValue
        const promiseTime = incrementTime * diff
        const interval = setInterval(()=> {
          if (this.progressValue < to) this.progressValue++
        }, incrementTime)
        return new Promise((resolve)=> {
          setTimeout(()=> {
            clearInterval(interval)
            resolve()
          }, promiseTime)
        })
      }
    },
    components: {
      NavigationBar,
      SiteFooter,
      TestimonialModal,
      SplashScreen
    },
    async created() {
      await this.$store.dispatch('setWorks', this.$store.getters.works)
      await this.fillProgressBar(50)
      await this.$store.dispatch('setTestimonials')
      await this.fillProgressBar(100)
      this.$store.dispatch('setApiDoneLoading', true)
      this.isLoading = false
    },
    data() {
      return {
        progressValue: 0,
        isLoading: true,
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
    .fade-leave-active {
        transition: opacity 1.2s ease !important;
    }
    .fade-leave-to {
        opacity: 0 !important;
    }
</style>
