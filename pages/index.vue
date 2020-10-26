<template>
    <div class="container">

        <header>
            <div class="rays-bg in-bg"/>

            <div class="welcome">
                <p class="font-monospace">Welcome to</p>
                <h1 class="font-monospace-packed">SurreyJam</h1>
            </div>
	    <Countdown class="countdown"> </Countdown>


        </header>

    </div>
</template>

<script>
import { Countdown } from "~/.nuxt/components";

export default {

    components: {
        Countdown
    }

}
</script>

<style lang="scss" scoped>
header {

    position: relative;
    display: flex;

    height: 100vh;
    width: 100vw;

    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;

    color: white;

    .rays-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        height: 100vh;
        width: 100vw;
        background-image: url("~assets/images/rays.png");
        background-position: center 0;
        background-size: cover;
        background-repeat: no-repeat;
    }

    div:not(.in-bg) {
        z-index: 10;
    }

    .welcome {
        display: inline-flex;
        flex-direction: column;

        h1, p {
            display: inline-block;
            margin: 0;
            padding: 0
        }

        h1 {
            font-size: 96pt;
            line-height: 70pt
        }

        p {
            font-size: 21pt;
            line-height: 21pt
        }
    }

    .countdown {
	    font-size: 21pt;
	    padding-top: 20pt;
    }

}
</style>
