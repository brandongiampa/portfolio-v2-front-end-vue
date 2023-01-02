<template>
  <div class="container py-5 about-page" @click="openLinkIfStrong">
    <underlined-h1 :title="title" ref="h1" />
    <div class="content" ref="content">
      <p>
        Greetings and salutations! My name is Brandon and I am a <strong>web developer</strong>/<strong>software engineer</strong>.
        My <strong>coding</strong> journey began in 2017, and my first formal client work in the industry began in 2019.
      </p>
      <p>
        I am currently living and working in <strong>Los Angeles</strong> area, though thanks to my job being flexible with work-from-home, 
        I have been spending a lot of time in Michigan recently to tend to some family issues. 
        That said, I would be <strong>willing to relocate</strong> anywhere in the US for the right job.
        When my car lease is up in August of 2024, I might be willing to travel even further.
      </p>

      <h2>Development Skills and Experience</h2>
      <p>
        I consider myself a full stack engineer/developer. My goto stack is <strong>XAMPP</strong>. Thus, my main programming languages are <strong>Javascript</strong> and <strong>PHP</strong>, and the database I use is 
        <strong>MariaDB</strong> (a branch of <strong>mySQL</strong> for those unacquainted). I also sometimes use the frameworks <strong>Vue.js</strong> on the front end and <strong>Laravel</strong> on the back end. 
        In fact, I used these frameworks for this very site.
      </p>
      <p>
        I also have strong proficiency in <strong>WordPress</strong> and <strong>WooCommerce</strong> and 
        have done work for companies/clients using <strong>Elementor</strong> and <strong>Divi</strong>.
      </p>
      <p>
        If you notice a time gap in my portfolio, it's because the software I develop at my current position is internal to Google. 
        Furthermore, working amongst the most talented software engineers on earth
        has inspired me to spend more free time on <strong>algorithms</strong> and <strong>data structures</strong>, which
        I have grown quite adept at doing, especialy given my advanced knowledge of Javascript.
      </p>

      <h3>Current Position: Temping at Google</h3>
      <p>
        At the time of writing this, I'm working a temporary position with Adecco as <i>Ads Quality Admin</i>, 
        directly supporting a team of Google software engineers and linguists centralized in Venice Beach.
        I have been here since August of 2021, and have been <strong>team lead</strong> since April of 2022.
      </p> 
      <p>
        My team spends most of our time developing and troubleshooting 
        <strong>front end</strong> templates (<strong>HTML</strong>/<strong>CSS</strong>/<strong>XML</strong>) 
        used to survey the quality of ads and the data they employ.
        Despite the strange title, it is more or less a <strong>junior developer</strong> position with some admin responsibilities.
      </p>
      <p>
        As Team Lead, I wind up using a good amount of <b>GoogleSQL</b> as well. 
        Additionally, when management makes a decision that the engineers aren't prepared for, 
        it's incumbent upon my department to find programmatic ways to validate and sanitize incoming data,
        which we do with Javascript.
      </p>

      <h3>Freelancing/Internship</h3>
      <p>
        Prior to my current position, I worked to cut my teeth as a developer, both via word of mouth and on <a href="https://upwork.com"><strong>Upwork</strong></a>.
        In 2019 I finally started finding occasional freelance work.
      </p>
      <p>
        Despite the constant struggle and frustration of finding work and clients flaking,
        I was able to gain experience bit by bit; the WordPress theme I developed for one customer has even made its way
        into my body of works, and I also picked up the basics of <strong>web design</strong> and <strong>SEO</strong>.
      </p>
      <p>
        In July of 2021, I also interned at a company called <a href="https://gretrix.com"><strong>Gretrix</strong></a>. 
        There, I used <b>Divi</b>, <b>Google Analytics</b>, <b>Adobe Analytics</b>, and a few other platforms and technologies.
        Unfortunately, my time there was short, as I successfully finished the interview process for my current position soon thereafter.
      </p>

      <h2>Why You Should Hire Me/Other Facts</h2>
      <p>
        Most people around me would tell you I am very good at what I do. 
        When I did the tech interview for my internship last year, the interviewer said I probably knew more than some of the developers.
        I also did a mock interview with a Google software engineer recently and he said I "crushed" it.
        The only thing missing from this equation is the opportunity.
      </p>
      <p>
        Additionally, this is my second career, so I'm a little bit older than the average developer this early in his or her career.
        Some might consider this a hindrance in an industry notorious for agism, but I will spin it as my superpower;
        I believe I will be more <strong>reliable</strong> and <strong>dedicated</strong>. I also have a <em>diverse background</em>.
      </p>
      <p>
        Furthermore, to progress in tech, one needs to be naturally <strong>intelligent</strong> and <strong>resourceful</strong>.
        Those close to me would definitely confirm that, and say as well that I am quite <strong>driven</strong>. 
      </p>
      <p>
        Overall, if you hire me now, you're getting someone who will be working towards being a senior dev as of day one.
      </p>

      <h3>My Previous Career</h3>
      <p>
        I also have more than ten years of experience as an <strong>ESL teacher</strong>. Seven years of that I spent in <strong>South Korea</strong>.
        After that, I worked freelance with students from all over the globe, mostly in the auto industry when I was in Detroit, and mostly in tech
        when I moved to California.
      </p>
      <p>
        I opted to try my hand at <strong>tech</strong> rather than getting certified to teach ESL full time because, as sad as it is, I'm not sure teaching 
        I'd earn would even pay back the loans I'd have to take out, whereas I can get my foot in the door at a lot of tech companies without a degree as long as I 
        have the skills.
      </p>

      <h3>Education</h3>
      <p>
        It seems like a lifetime ago that I earned a bachelor degree from the <strong>University of Michigan, Ann Arbor</strong>. I majored in <strong>German Studies</strong> and <strgon>Philosophy</strgon>, 
        and even studied in <strong>Germany</strong> for a year. 
        My cumulative GPA was 3.7.
      </p>
      <p>
        Chances are whoever is reading this is not in Michigan and may not realize how competitive and internationally respected the University of Michigan is.
        (Academically, not just in football.)
        Its reputation is closer to that of the Ivy League than that of other state schools. In fact, some refer to it as <strong>the Harvard of the West</strong>.
        Feel free to Google to confirm if you are not aware.
      </p>

      <h2>Signing Off</h2>
      <p>
        Thank you for taking the time to check out my portfolio. I've worked hard on it and I hope I've succeeded in demonstrating my abilities,
        despite how shabby some of the code may have been on my earlier works.
      </p>
      <p>
        At this point, if you have any more questions, feel free to contact me at <a href="me@brandongiampa.com">me@brandongiampa.com</a>.
        If you don't have any questions, drop me a line it anyway. I mean, you've already read this far!
      </p>
    </div>
  </div>
</template>

<script>
  import UnderlinedH1 from '../components/reusable/UnderlinedH1.vue'
  import { fadeOutSplashscreen, animateH1Letters, animateH1Underline, animateContent } from '../js-includes/dom-animations.js'
  export default {
    methods: {
      openLinkIfStrong(e) {
        if (e.target.outerHTML.substr(0,8) === '<strong>') console.log("mmmkay")
      },
      async animate() {
        if (this.$refs.h1) {
          await animateH1Letters(this.title.length)
          await animateH1Underline()
        }
        if (this.$refs.content) {
          await animateContent()
        }
        this.animationsComplete = true
      }
    },
    components: {
      UnderlinedH1
    },
    async created() {
      this.$store.dispatch('clearSearchQuery')
      if (!this.$store.getters.worksLoaded || !this.$store.getters.testimonialsLoaded) {
        this.$emit('doneLoading', false)
        //TODO: Create Error Page and nest this in try/catch 
        if (!this.$store.getters.worksLoaded && !this.$store.getters.testimonialsLoaded) {
          const worksPromise = this.$store.dispatch('setWorks')
          const testimonialsPromise = this.$store.dispatch('setTestimonials')
          await Promise.all([worksPromise, testimonialsPromise])
        }
        else if (!this.$store.getters.worksLoaded) {
          await this.$store.dispatch('setWorks')
        }
        else if (!this.$store.getters.testimonialsLoaded) {
          await this.$store.dispatch('setTestimonials')
        }
        await fadeOutSplashscreen()
        this.$emit('doneLoading', true)
      }
      else {
        this.$emit('doneLoading', true)
      }
    },
    mounted() {
      if (!this.animationsComplete) this.animate()
    },
    updated() {
      if (!this.animationsComplete) this.animate()
    },
    unmounted() {
      this.animationsComplete = false
    },
    computed: {
      readyToAnimate: function() {
        return this.$store.getters.readyToAnimate
      }
    },
    data() {
      return {
        title: "About",
        animationsComplete: false
      }
    }
  }
</script>