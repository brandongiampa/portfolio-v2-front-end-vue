<template>
    <div class="container py-5">
        <h1 class="underlined mb-5">Portfolio</h1>
        <portfolio-search />
        <div class="pt-4">
            <p class="mb-5" v-if="worksToShow.length"><i>{{showingString}}</i></p>
            <p class="mb-5 pb-5" v-if="!worksToShow.length"><i>{{showingString}}</i></p>
            <p class="mb-5 pb-5" v-if="!worksToShow.length"><i>Your query did not heed any results.</i></p>
            <div class="row gx-5">
                <div v-for="(work, index) of worksToShow" class="col-12 col-md-6 pb-5" :key="`work-card-div-${index}`">
                    <work-card :work="work" :index="(index-1)" />
                </div>
            </div>
        </div>
        <portfolio-paginator :current-index="currentIndex" :number-of-pages="numberOfPages" @set-current-index="setCurrentIndex" />
    </div>
</template>

<script>
    const WORKS_PER_PAGE = 8
    import PortfolioPaginator from '../components/portfolioviewcomponents/PortfolioPaginator.vue'
    import PortfolioSearch from '../components/portfolioviewcomponents/PortfolioSearch.vue'
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
             }
        },
        methods: {
            setCurrentIndex: function(index) {
                this.currentIndex = index
            }
        },
        data() {
            return {
                currentIndex: 1
            }
        },
        components: {
            PortfolioPaginator, PortfolioSearch
        }
    }
</script>
