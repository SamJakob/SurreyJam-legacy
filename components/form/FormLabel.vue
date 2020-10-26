<template>
    <div class="form-label-group">
        <label :for="id">{{ label }}</label>
        <slot />
    </div>
</template>

<style lang="scss">
.form-label-group {
    display: flex;
    flex-direction: column;

    & > label {
        text-transform: uppercase;
        color: #9894B6;
        font-weight: bold;
        font-size: 14pt;
        margin-bottom: 10px;

        user-select: none;
    }
}
</style>

<script>
export default {

    data: () => ({
        id: `sjfl${uuid().replace(/-/g, "")}`
    }),

    props: {
        label: {
            type: String,
            required: true
        }
    },

    provide () {
        return {
            form_label_id: this.id
        }
    }

}

// Source: https://gist.github.com/jed/982883
function uuid(a){
    return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid);
}
</script>
