<template>
    <div class="container py-5">
        <h1 class="underlined mb-5">Portfolio</h1>
        <portfolio-search @submit-search="refineSearchCriteria" />
        <div class="pt-4">
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
            worksFullList() {
                // console.log(this.$store.getters.works)
                return this.$store.getters.works
            },
            offset() {
                return (this.currentIndex * WORKS_PER_PAGE) - WORKS_PER_PAGE
            },
            refinedWorksList() {
                let refinedWorksList = this.worksFullList
                if (this.name && this.name !== '') {
                    refinedWorksList = refinedWorksList.filter((work) => {
                        return work.name.toLowerCase().includes(this.name.toLowerCase())
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
                // console.log("Refined works list:")
                // console.log(refinedWorksList)
                return refinedWorksList
            },
            worksToShow() {
                console.log("works to show:")
                console.log(this.refinedWorksList.slice(this.offset, this.offset + WORKS_PER_PAGE))
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
                this.name = searchCriteriaObj.name
                this.feature = searchCriteriaObj.feature
                this.technology = searchCriteriaObj.technology
                this.setCurrentIndex(1)
            }
        },
        data() {
            return {
                currentIndex: 1,
                name: "",
                feature: "",
                technology: ""
            }
        },
        components: {
            PortfolioPaginator, PortfolioSearch
        },
        update() {
            for (let work of this.worksToShow) console.log(work)
            console.log("changes complete")
        }
    }
</script>
