<template>
    <div class="py-3">
        <button 
            class="btn btn-link p-0 search-toggle" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#searchCollapse" 
            aria-expanded="false" 
            aria-controls="searchCollapse"
            @click="(expanded = !expanded)">
            <font-awesome-icon v-if="expanded" icon="fa-solid fa-search-minus" />
            <font-awesome-icon v-if="!expanded" icon="fa-solid fa-search-plus" />
            {{searchMenuText}}
        </button>
    </div>
    <div class="collapse" id="searchCollapse" style="background-color: #f8f9fa;">
        <div class="py-3">
            <div class="row align-items-center py-4">
                <div class="col-12 col-md-4">
                    <label for="website-name">Name</label>
                    <input 
                        class="form-control" 
                        type="search" 
                        id="website-name" 
                        name="Name" 
                        @keyup="updateNameQuery"
                        :value="inputtedName"
                    >
                </div>
                <div class="col-12 col-md-4">
                    <label class="" for="website-feature">Feature</label>
                    <select 
                        @change="updateFeatureQuery" 
                        class="form-control" 
                        name="features" 
                        id="website-feature"
                    >
                        <option value="" key="features-option-default">--ANY--</option>
                        <option 
                            v-for="(feature, index) of features"
                            :value="feature"
                            :selected="(selectedFeature === feature)"
                            :key="`feature-option-${index+1}`">
                            {{feature}}
                        </option>
                    </select>
                </div>
                <div class="col-12 col-md-4">
                    <label for="website-technology">Technology</label>
                    <select 
                        @change="updateTechnologyQuery" 
                        class="form-control" 
                        name="tech" 
                        id="website-technology"
                    >
                        <option value="" key="technologies-option-default">--ANY--</option>
                        <option 
                            v-for="(technology, index) of technologies"
                            :value="technology"
                            :selected="technology === selectedTechnology"
                            :key="`technology-option-${index+1}`">
                            {{technology}}
                        </option>
                    </select>
                </div>
                <div id="submit-search-col" class="col-auto mt-5">
                    <button @click="clearAll" class="btn btn-link btn-lg" id="submit-works-search" type="submit">Clear</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            features: ["API", "Smooth Scroll", "Login System", "eCommerce", "Browser-Side Search"],
            technologies: ["HTML", "CSS", "Javascript", "PHP", "mySQL", "Vue", "Bootstrap", "WordPress", "Sass", "Laravel Mix", "Axios"]
        }
    },
    computed: {
        searchMenuText() {
            if (this.expanded) return "Hide search menu"
            else return "Show search menu"
        },
        inputtedName() {
            return this.$store.getters.inputtedName
        },
        selectedFeature() {
            return this.$store.getters.selectedFeature
        },
        selectedTechnology() {
            return this.$store.getters.selectedTechnology
        }
    },
    methods: {
        updateNameQuery: function(e) {
            this.$store.dispatch('setInputtedName', e.target.value)
        },
        updateFeatureQuery: function(e) {
            this.$store.dispatch('setSelectedFeature', e.target.value)
        },
        updateTechnologyQuery: function(e) {
            this.$store.dispatch('setSelectedTechnology', e.target.value)
        },
        clearAll: function() {
            this.$store.dispatch('clearSearchQuery')
        }
    }
}
</script>

<style>
    .search-toggle {
        font-size: 13px;
        font-weight: 100px;
        color: #6c757d;
        text-decoration: none;
    }
</style>
