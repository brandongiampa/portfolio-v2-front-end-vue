<template>
    <div class="splashscreen">
        <div>
            <code class="text-light loading"><i>Loading brandongiampa.com...</i></code>
            <br/>
            <progress max="100" :value="progressValue"></progress>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            progressValue: {
                type: Number
            }
        }
    }
</script>

<style lang="scss">
    .splashscreen {
        position: fixed;
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: black;
        z-index: 100000;
        & > progress {
            width: 400px;
        }
    }
</style>
