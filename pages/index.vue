<template>
    <div class="container">

        <header>
            <div class="bg-rays in-bg"/>

            <div class="welcome">
                <p class="font-monospace">Welcome to</p>
                <h1 class="font-monospace-packed">SurreyJam</h1>
            </div>

            <br><br>

            <Countdown class="countdown"/>

        </header>

    </div>
</template>

<script>
import Countdown from "~/components/Countdown";

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

    .bg-rays {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        height: 100vh;
        width: 100vw;
        background: linear-gradient(126.49deg, #59E0FF -17.1%, #AC75F5 81.2%);
        clip-path: polygon(-30% 110%, 150% 4%, 73% -15%);

        opacity: 0.7;
        animation: rays-light-wave 10s ease-in-out infinite alternate;

        transform: translateZ(0.001px);

        &.alt {
            animation: rays-light-wave-alt 6s ease-in-out infinite alternate;
            transform: translateZ(0.001px) scaleX(-1);
        }
    }

    @keyframes rays-light-wave {
        0% { opacity: 0.7; clip-path: polygon(-30% 110%, 150% 4%, 73% -15%); }
        60% { opacity: 0.2; clip-path: polygon(-30% 110%, 150% -24%, 73% -30%); }
        80% { opacity: 0.4; clip-path: polygon(-30% 110%, 150% 12%, 73% -8%); }
    }

    div:not(.in-bg) {
        z-index: 10;
    }

    .in-bg {
        z-index: 1;
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
