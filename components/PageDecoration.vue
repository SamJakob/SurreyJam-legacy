<template>
    <div class="page-decoration">
        <h2>{{ category }}</h2>
        <h1>{{ title }}</h1>

        <div class="page-content">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss">
    $breakpoint-margin: 500px;

    .page-decoration {

        margin: 120px 20px 20px;

        @media (min-width: $breakpoint-margin) {
            margin: 120px 100px 100px;
        }

        h2 {
            text-transform: uppercase;
            color: #9894B6;
            font-size: 14pt;
            font-weight: 800;
            letter-spacing: 2px;
            line-height: 14pt;

            padding-bottom: 5px;
        }

        h1 {
            color: white;
            font-size: 42pt;
            line-height: 42pt;
            font-weight: 700;

            // letter-spacing: 3px;
        }
    }

    .page-content {
        margin-top: 60px;
    }
</style>
<script>
export default {

    data: () => ({

    }),

    props: {
        category: {
            required: true,
            type: String
        },

        title: {
            required: true,
            type: String
        }
    }

}
</script>
