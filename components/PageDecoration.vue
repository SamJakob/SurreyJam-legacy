<template>
    <div class='page-decoration'>
        <h5>{{ title }}</h5>
        <h1>{{ bigTitle }}</h1>
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    $breakpoint-margin: 500px;
    .page-decoration {
        
        margin: 20px;

        @media (min-width: $breakpoint-margin) {
            margin: 100px;
        }

        h5 {
            text-transform: uppercase;
            color: #9894B6;
            font-size: 24px;
            font-weight: 800;
            letter-spacing: 2px;
        }
        h1 {
            color: white;
            font-size: 64px;
            font-weight: 700;
        }
    }
</style>
<script>
export default {
    data() {
        return {
            title: 'New Page',
            bigTitle: 'New Page'
        }
    }
}
</script>