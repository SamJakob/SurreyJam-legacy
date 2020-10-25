<template>
    <div>
        <Nuxt/>
    </div>
</template>

<style lang="scss">
body {
    // Colors
    $bg-color: #2A2742;

    position: relative;
    background: $bg-color;
    overflow-x: hidden; // Horizontal scrollbars should never happen

    // Dotted background (adapted from https://codepen.io/edmundojr/pen/xOYJGw)
    $dot-color: lighten($bg-color, 40%);
    $dot-size: 4px;
    $dot-space: 35px;

    &::after {
        content: '';
        background:
            linear-gradient(90deg, $bg-color ($dot-space - $dot-size), transparent 1%) center,
            linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
            $dot-color;
        background-size: $dot-space $dot-space;

        position: absolute;
        left: 65vw;
        top: 70vh;
        right: 0; bottom: 0;
        z-index: -100; // Everything should be drawn over this.
    }
}
</style>

<script>
export default {}
</script>
