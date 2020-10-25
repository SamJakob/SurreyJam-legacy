<template>
    <div class="container">

        <nav id="rootNav">
            <nuxt-link
                v-for="(page, index) in pages"
                :key="index"
                :to="page.target">{{ page.name.toUpperCase() }}</nuxt-link>
        </nav>

    </div>
</template>

<script>
export default {

    data: () => ({
        pages: [
            { name: "Home", target: "/" },
            { name: "Resources", target: "/resources" },
            { name: "News", target: "/news" },
        ]
    }),

    props: {
        showLogo: {
            type: Boolean,
            required: false,
            default: true
        }
    }

}
</script>


<style lang="scss">
$navLinkSize: 15pt;
$navLinkMargin: 30px;

#rootNav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;

    margin: 20px 40px;
    z-index: 9999;

    a {
        display: inline-block;
        position: relative;
        font-family: "Fairune UI", "Courier New", monospace;
        letter-spacing: 0.05em;
        font-size: $navLinkSize;

        &:not(:first-of-type) {
            margin-left: $navLinkMargin;
        }

        &:after {
            content: "";
            background-color: #5BDEFF;
            height: 4px;
            width: 0;

            position: absolute;
            left: 0;
            right: 0;
            top: $navLinkSize;

            transition: width 0.3s ease-in-out;
        }

        &.nuxt-link-exact-active:after {
            width: 100%;
        }
    }
}
</style>
