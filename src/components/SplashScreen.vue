<template>
    <div class="splashscreen">
        <div>
            <code class="text-center text-light loading"><i>Loading brandongiampa.com...</i></code>
            <br/>
            <div class="d-flex justify-content-center mt-3">
                <div class="spinner-border text-primary mx-auto" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .splashscreen {
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: black;
        z-index: 100000;
    }
</style>
