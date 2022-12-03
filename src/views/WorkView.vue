<template>
    <div class="container pt-5">
        <h1 class="underlined mb-5">Works</h1>
        <div class="pt-4" v-if="work.title && work.title !== ''">
            <div class="row gx-5">
                <div class="col col-md-6">
                    <img :src="work.imgUrl" />
                </div>
                <div class="col col-md-6 mt-4">
                    <div class="mb-1 hashtags"><i>{{hashtags}}</i></div>
                    <h1 class="mb-2">{{work.title !== '' ? work.title : 'Uh-oh!'}}</h1>
                    <h2 style="color: #495057;">
                        <i>{{ work.subtitle }}</i>
                    </h2>
                    <div class="description">
                        <p v-for="(paragraph, index) of description" :key="`description-paragraph-${index}`">{{paragraph}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-4" v-if="!work.title || work.title === ''">
            <i>Error 404: No work exists with that name.</i>
        </div>
    </div>
    <div class="row gx-5 mt-5 px-5 py-4 features-and-technologies" v-if="work.title && work.title !== ''">
        <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-start features">
            <div>
                <h3 class="mb-3 text-center">Features</h3>
                <ul>
                    <li v-for="(feature, index) of features" :key="`features-li-${index}`">
                        {{feature}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-start technologies">
            <h3 class="mb-3 text-center">Technologies</h3>
            <ul>
                <li v-for="(technology, index) of technologies" :key="`technologies-li-${index}`">
                    {{technology}}
                </li>
            </ul>
        </div>
        <div class="col-12 pt-4 pb-2 text-center">
            <router-link class="mt-2" to="/portfolio">
                <font-awesome-icon icon="fa-solid fa-chevron-left" /> Back to Portfolio
            </router-link>
        </div>
    </div>
</template>

<script> 
    export default {
        computed: {
            work() {
                const title = this.$route.params.workname
                const works = this.$store.getters.works.filter((work) => {return work.title.toLowerCase() === title.toLowerCase()})
                if (!works.length) {
                    return {
                        imgUrl: '',
                        title: '',
                        subtitle: '',
                        infoUrl: '',
                        siteUrl: '',
                        githubUrl: '',
                        technologies: '',
                        features: '',
                        description: '',
                        hashtags: '',
                        carouselImgUrls: ''
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
        }
    }
</script>

<style lang="scss" scoped>
    img {
        max-width: 100%;
    }
    .hashtags {
        color: #6c757d;
    }
    .features-and-technologies {
        background-color: #f8f9fa;
        li {
            margin-left: -10px;
            font-size: 20px;
        }
        a {
            text-decoration: none;
        }
    }
</style>