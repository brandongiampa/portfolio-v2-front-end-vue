<template>
    <h1 class="mt-2 mb-5 underlined">
        <span 
            v-for="(letter, index) of title" 
            :key="`h1-span-${index}`"
            :class="buildLetterSpanClasses(letter)"
        >
            {{letter}}
        </span>
        <div class="underline"/>
    </h1>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },
        methods: {
            buildLetterSpanClasses(letter) {
                const display = letter !== " " ? 'd-inline-block ' : ""
                return display + 'name-letter-span'
            }
        }
    }
</script>

