<template>
    <div class="container pt-5">
        <underlined-h1 :title="'Works'" ref="h1" />
        <div class="pt-4 content" v-if="work.name && work.name !== ''" ref="content">
            <div class="row gx-5">
                <div class="col-12 col-lg-6 mb-4 mb-lg-2">
                    <img :src="work.img_url" />
                </div>
                <div class="col-12 col-lg-6 mt-4">
                    <div class="mb-1 hashtags"><i>{{hashtags}}</i></div>
                    <h1 class="mb-2">{{work.name !== '' ? work.name : 'Uh-oh!'}}</h1>
                    <h2 style="color: #495057;">
                        <i>{{ work.subheader }}</i>
                    </h2>
                    <div class="d-flex justify-content-space-between icons">
                        <div>
                            <a :href="work.site_url">
                                <font-awesome-icon icon="fa-solid fa-eye" />
                            </a>
                        </div>
                        <div class="px-3">
                            <a :href="work.github_url" style="color: #008eff;">
                                <font-awesome-icon icon="fa-brands fa-github" />
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <div class="mt-2 description">
                        <p v-for="(paragraph, index) of description" :key="`description-paragraph-${index}`">{{paragraph}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-4 content" v-if="!work.name || work.name === ''">
            <i>Error 404: No work exists with that name.</i>
        </div>
    </div>
    <div class="container-fluid mt-5 content features-and-technologies">
        <div class="row" v-if="work.name && work.name !== ''">
            <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-start px-5 py-5 features">
                <div>
                    <h3 class="mb-3 text-center">Features</h3>
                    <ul>
                        <li v-for="(feature, index) of features" :key="`features-li-${index}`">
                            {{feature}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-start px-5 py-5 technologies">
                <div>
                    <h3 class="mb-3 text-center">Technologies</h3>
                    <ul>
                        <li v-for="(technology, index) of technologies" :key="`technologies-li-${index}`">
                            {{technology}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 py-5 text-center content back-to-portfolio">
        <router-link class="mt-2" to="/portfolio">
            <font-awesome-icon icon="fa-solid fa-chevron-left" /> Back to Portfolio
        </router-link>
    </div>
</template>

<script> 
    import UnderlinedH1 from '../components/reusable/UnderlinedH1.vue'
    import { animateH1Letters, animateH1Underline, animateContent } from '../js-includes/dom-animations.js'

    export default {
        computed: {
            work() {
                const name = this.$route.params.workname.split('-').join(' ')
                const works = this.$store.getters.works.filter((work) => {return work.name.toLowerCase() === name.toLowerCase()})
                if (!works.length) {
                    return {
                        img_url: '',
                        name: '',
                        subheader: '',
                        infoUrl: '',
                        site_url: '',
                        github_url: '',
                        technologies: '',
                        features: '',
                        description: '',
                        hashtags: '',
                        carousel_img_urls: ''
                    }
                }
                return works[0]
            },
            technologies() {
                if (!this.work.technologies || this.work.technologies === '') return ['None']
                return this.work.technologies.split(',')
            },
            features() {
                if (!this.work.features || this.work.features === '') return ['None']
                return this.work.features.split(',')
            },
            hashtags() {
                return '#' + this.work.hashtags.split(',').join(' #')
            },
            carouselImgUrls() {
                return this.work.carouselImgUrls.split(',')
            },
            description() {
                return this.work.description.split(/<p\/?>/)
            }
        },
        data() {
            return {
                animationsComplete: false
            }
        },
        created() {
            this.$store.dispatch('clearSearchQuery')
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
        methods: {
            async animate() {
                if (this.$refs.h1) {
                    await animateH1Letters()
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
        }
    }
</script>

<style lang="scss" scoped>
    img {
        max-width: 100%;
        border: .5px solid #dee2e699;
    }
    .hashtags {
        color: #6c757d;
    }
    .icons {
        font-size: 32px;
    }
    .features-and-technologies {
        li {
            font-size: 20px;
        }
        a {
            text-decoration: none;
        }
    }
    .features {
        background-color: #dee2e6;
    }
    .technologies {
        background-color: #e9ecef;
    }
    .back-to-portfolio {
        background-color: #f8f9fa;
    }
</style>