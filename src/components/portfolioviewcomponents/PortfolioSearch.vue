<template>
    <div class="py-3">
        <button 
            class="btn btn-primary" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#searchCollapse" 
            aria-expanded="false" 
            aria-controls="searchCollapse">
            <font-awesome-icon icon="fa-solid fa-search-plus" />
        </button>
    </div>
    <div class="collapse" id="searchCollapse">
        <div class="row align-items-center py-4">
            <div class="col-12 col-md-4">
                <label for="website-title">Title</label>
                <input 
                    v-model="inputtedTitle" 
                    class="form-control" 
                    type="search" 
                    id="website-title" 
                    name="title" 
                    @keypress="checkIfEnter"
                >
            </div>
            <div class="col-12 col-md-4">
                <label class="" for="website-feature">Feature</label>
                <select @keypress="checkIfEnter" v-model="selectedFeature" class="form-control" name="features" id="website-feature">
                    <option value="" key="features-option-default">--ANY--</option>
                    <option 
                        v-for="(feature, index) of features"
                        :value="feature"
                        :key="`feature-option-${index+1}`">
                        {{feature}}
                    </option>
                </select>
            </div>
            <div class="col-12 col-md-4">
                <label for="website-technology">Technology</label>
                <select @keypress="checkIfEnter" v-model="selectedTechnology" class="form-control" name="tech" id="website-technology">
                    <option value="" key="technologies-option-default">--ANY--</option>
                    <option 
                        v-for="(technology, index) of technologies"
                        :value="technology"
                        :key="`technology-option-${index+1}`">
                        {{technology}}
                    </option>
                </select>
            </div>
            <div id="submit-search-col" class="col-12 col-md-auto mt-5">
                <button @click="submitSearch" class="btn btn-primary btn-lg" id="submit-works-search" type="submit">Search</button>
            </div>
            <div id="submit-search-col" class="col-12 col-md-auto mt-5">
                <button @click="clearAll" class="btn btn-link btn-lg" id="submit-works-search" type="submit">Clear</button>
            </div>
        </div>
    </div>
    <hr/>
</template>

<script>
export default {
    data() {
        return {
            inputtedTitle: "",
            selectedFeature: "",
            selectedTechnology: "",
            features: ["API", "Smooth Scroll", "Login System", "eCommerce", "Browser-Side Search"],
            technologies: ["HTML", "CSS", "Javascript", "PHP", "mySQL", "Vue", "Bootstrap", "WordPress", "Sass", "Laravel Mix", "Axios"]
        }
    },
    methods: {
        clearAll: function() {
            this.inputtedTitle = ''
            this.selectedFeature = ''
            this.selectedTechnology = ''
            this.submitSearch()
        },
        submitSearch: function() {
            this.$emit(
                'submitSearch', 
                {
                    title: this.inputtedTitle,
                    feature: this.selectedFeature,
                    technology: this.selectedTechnology
                }
            )
        },
        checkIfEnter(e) {
            if (e.key === 'Enter') this.submitSearch()
        }
    },
    mounted() {
        this.submitSearch()
    },
    emits: ['submitSearch']
}
</script>
