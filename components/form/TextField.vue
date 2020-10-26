<template>
    <input :id="form_label_id !== null ? form_label_id : null" class="sj-fc-textfield" type="text" v-model="value">
</template>

<style lang="scss">
    /*
    Naming Convention:
    (surreyjam=sj)-(form component=fc)-(component name)
     */
    .sj-fc-textfield {
        border: 2px solid rgba(0, 0, 0, 0);
        border-radius: 1000px;
        color: #2A2742;
        transition: all 0.2s ease-in-out;
        background: #C4C4C4;
        padding: 5px 15px;
        font-weight: bold;

        &:focus, &:active {
            outline: none !important;
            border: 2px solid #9894B6;
        }
    }
</style>

<script>
export default {

    inject: ['form_setNamedField', 'form_label_id'],

    props: {
        name: {
            type: String,
            required: true
        },

        label: {
            type: String
        },

        initialValue: {
            type: String,
            required: false
        }
    },

    data () {
        return {
            value: this.initialValue
        };
    },

    watch: {
        value () {
            this.form_setNamedField(this.name, this.value);
        }
    }

}
</script>
