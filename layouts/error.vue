<template>
    <div class="container">

        <h1 class="font-monospace">{{ error.statusCode }}</h1>
        <p class="font-monospace">{{ error.message }}</p>

        <p class="font-monospace">Please <nuxt-link to="/">return home</nuxt-link> or try again. If the problem persists, <a :href="issueUrl" target="_blank">open an issue</a>.</p>

    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100vw;

    max-width: unset !important;
    max-height: unset !important;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;

    h1, p {
        display: inline-block;
        text-align: center;
    }

    h1 {
        font-size: 42pt;
        line-height: 42pt;
    }
}
</style>

<script>
export default {

    props: ['error'],

    data: () => ({
        issueUrl: process.env.app.gitUrls.issue
    }),

    computed: {

        errorTitle() {
            if (this.error.statusCode === 404) return "Page Not Found";
            else return "An Error Occurred";
        }

    }

}
</script>
