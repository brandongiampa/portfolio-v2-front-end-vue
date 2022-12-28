<template>
    <div class="container py-5">
        <underlined-h1 :title="'Portfolio'" ref="h1" />
        <div class="content" ref="content">
            <portfolio-search />
            <div class="pt-4">
                <p class="mb-5" v-if="worksToShow.length"><i>{{showingString}}</i></p>
                <p class="mb-5 pb-5" v-if="!worksToShow.length"><i>{{showingString}}</i></p>
                <p class="mb-5 pb-5" v-if="!worksToShow.length"><i>Your query did not heed any results.</i></p>
                <div class="row gx-5 works-row">
                    <div 
                        v-for="(work, index) of worksToShow" 
                        :class="index % 2 === 0 ? leftClasses : rightClasses" 
                        :key="`work-card-div-${index}`"
                        :id="'work-card-' + (index+1).toString()"
                        ref="worksSection">
                        <work-card :work="work" :index="(index-1)" />
                    </div>
                </div>
            </div>
            <portfolio-paginator 
                :current-index="currentIndex" 
                :number-of-pages="numberOfPages" 
                @set-current-index="setCurrentIndex" />

        </div>
    </div>
</template>

<script>
    const WORKS_PER_PAGE = 8
    import PortfolioPaginator from '../components/portfolioviewcomponents/PortfolioPaginator.vue'
    import PortfolioSearch from '../components/portfolioviewcomponents/PortfolioSearch.vue'
    import UnderlinedH1 from '../components/reusable/UnderlinedH1.vue'
    import { animateH1Letters, animateH1Underline, animateContent, animateWorkCard } from '../js-includes/dom-animations.js'

    export default {
        computed: {
            inputtedName() {
                return this.$store.getters.inputtedName
            },
            selectedFeature() {
                return this.$store.getters.selectedFeature
            },
            selectedTechnology() {
                return this.$store.getters.selectedTechnology
            },
            worksFullList() {
                return this.$store.getters.works
            },
            offset() {
                return (this.currentIndex * WORKS_PER_PAGE) - WORKS_PER_PAGE
            },
            refinedWorksList() {
                let refinedWorksList = this.worksFullList
                if (this.inputtedName && this.inputtedName !== '') {
                    refinedWorksList = refinedWorksList.filter((work) => {
                        return work.name.toLowerCase().includes(this.inputtedName.toLowerCase())
                    })
                }
                if (this.selectedFeature && this.selectedFeature !== '') {
                    refinedWorksList = refinedWorksList.filter((work) => {
                        return work.features.toLowerCase().includes(this.selectedFeature.toLowerCase())
                    })
                }
                if (this.selectedTechnology && this.selectedTechnology !== '') {
                    refinedWorksList = refinedWorksList.filter((work) => {
                        return work.technologies.toLowerCase().includes(this.selectedTechnology.toLowerCase())
                    })
                }
                return refinedWorksList
            },
            worksToShow() {
                return this.refinedWorksList.slice(this.offset, this.offset + WORKS_PER_PAGE)
            },
            numberOfPages() {
                return Math.ceil(this.refinedWorksList.length / WORKS_PER_PAGE)
            },
            noQuery() {
                return ((!this.inputtedName || this.inputtedName === '')&&(!this.selectedFeature || this.selectedFeature === '')&&(!this.selectedTechnology || this.selectedTechnology === ''))
            },
            showingString() {
                const startIndex = this.worksToShow.length > 0 ? this.currentIndex + ((this.currentIndex - 1) * WORKS_PER_PAGE) : 0
                const endIndex = Math.min(startIndex + WORKS_PER_PAGE - 1, this.worksToShow.length)
                const output = `Showing items ${startIndex} to ${endIndex} of `
                if (this.noQuery) return output + '"ALL."'
                if ((this.inputtedName && this.inputtedName !== '')&&(this.selectedFeature && this.selectedFeature !== '')&&(this.selectedTechnology && this.selectedTechnology !== '')) {
                    return output + `works containing "${this.inputtedName}" featuring "${this.selectedFeature}" and using "${this.selectedTechnology}."`
                }
                if ((this.inputtedName && this.inputtedName !== '')&&(this.selectedFeature && this.selectedFeature !== '')) {
                    return output + `works containing "${this.inputtedName}" featuring "${this.selectedFeature}."`
                }
                if ((this.inputtedName && this.inputtedName !== '')&&(this.selectedTechnology && this.selectedTechnology !== '')) {
                    return output + `works containing "${this.inputtedName}" and using "${this.selectedTechnology}."`
                }
                if ((this.selectedFeature && this.selectedFeature !== '')&&(this.selectedTechnology && this.selectedTechnology !== '')) {
                    return output + `works featuring "${this.selectedFeature}" and using "${this.selectedTechnology}."`
                }
                if (this.inputtedName && this.inputtedName !== '') {
                    return output + `works containing "${this.inputtedName}."`
                }
                if (this.selectedFeature && this.selectedFeature !== '') {
                    return output + `works featuring "${this.selectedFeature}."`
                }
                if (this.selectedTechnology && this.selectedTechnology !== '') {
                    return output + `works using "${this.selectedTechnology}."`
                }
                return null //Added this b/c of getting ESLint error, but the above clauses should have covered every case???
             },
             numberOfWorks() {
                return this.worksToShow.length
             },
             leftClasses() {
                return this.colClasses + 'left work'
             },
             rightClasses() {
                return this.colClasses + 'right work'
             }
        },
        methods: {
            setCurrentIndex: function(index) {
                this.currentIndex = index
            },
            async animate() {
                if (this.$refs.h1) {
                    await animateH1Letters()
                    await animateH1Underline()
                }
                if (this.$refs.content) {
                    await animateContent()
                }
                if (this.numberOfWorks > 0 && this.$refs.worksSection) {
                    for (let i = 1; i <= this.numberOfWorks; i++) {
                        animateWorkCard(`#work-card-${i}`)
                    }
                }
                this.animationsComplete = true
            }
        },
        data() {
            return {
                currentIndex: 1,
                animationsComplete: false,
                colClasses: 'col-12 col-md-6 pb-5 work-'
            }
        },
        components: {
            PortfolioPaginator, PortfolioSearch, UnderlinedH1
        },
        mounted() {
            if (!this.animationsComplete) this.animate()
        },
        async updated() {
            if (!this.animationsComplete) this.animate()
        },
        unmounted() {
            this.animationsComplete = false
        },
    }
</script>

<style lang="scss">
    .work {
        opacity: 0;
    }
    .work-left {
        transform: translateX(-100%);
    }
    .work-right {
        transform: translateX(100%);
    }
</style>