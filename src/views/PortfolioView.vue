<template>
    <div class="container py-5">
        <h1 class="underlined mb-5">Portfolio</h1>
        <portfolio-search @submit-search="refineSearchCriteria" />
        <div class="pt-4">
            <div class="row gx-5">
                <div v-for="(work, index) in worksToShow" class="col-12 col-md-6 col-xl-3 pb-5" :key="`work-card-div-${index}`">
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
            worksFullList() {
                return this.$store.getters.works
            },
            offset() {
                return (this.currentIndex * WORKS_PER_PAGE) - WORKS_PER_PAGE
            },
            refinedWorksList() {
                let refinedWorksList = this.worksFullList
                if (this.title && this.title !== '') {
                    refinedWorksList = refinedWorksList.filter((work) => {
                        return work.title.toLowerCase().includes(this.title.toLowerCase())
                    })
                }
                if (this.feature && this.feature !== '') {
                    refinedWorksList = refinedWorksList.filter((work) => {
                        return work.features.toLowerCase().includes(this.feature.toLowerCase())
                    })
                }
                if (this.technology && this.technology !== '') {
                    refinedWorksList = refinedWorksList.filter((work) => {
                        return work.technologies.toLowerCase().includes(this.technology.toLowerCase())
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
        },
        methods: {
            setCurrentIndex: function(index) {
                this.currentIndex = index
            },
            refineSearchCriteria: function(searchCriteriaObj) {
                this.title = searchCriteriaObj.title
                this.feature = searchCriteriaObj.feature
                this.technology = searchCriteriaObj.technology
                this.setCurrentIndex(1)
            }
        },
        data() {
            return {
                currentIndex: 1,
                title: "",
                feature: "",
                technology: ""
            }
        },
        components: {
            PortfolioPaginator, PortfolioSearch
        }
    }
</script>
