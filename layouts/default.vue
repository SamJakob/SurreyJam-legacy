<template>
    <div>
        <Navigation />

        <Nuxt />
        <div class="bg-dots" />
    </div>
</template>

<style lang="scss">

.bg-dots {
    // Dotted background (adapted from https://codepen.io/edmundojr/pen/xOYJGw)
    $dot-color: theme('colors.accent');
    $dot-size: 4px;
    $dot-space: 35px;

    background:
        linear-gradient(90deg, theme('colors.background') ($dot-space - $dot-size), transparent 1%) center,
        linear-gradient(theme('colors.background') ($dot-space - $dot-size), transparent 1%) center,
        $dot-color;
    background-size: $dot-space $dot-space;

    position: absolute;
    left: 65vw;
    top: 70vh;
    right: 0; bottom: 0;
    z-index: 0; // Everything should be drawn over this.
}
</style>

<script>
import Navigation from "~/components/Navigation";

export default {
    components: {Navigation}
}
</script>
