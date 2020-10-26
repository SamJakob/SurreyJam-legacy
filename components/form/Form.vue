<template>
    <div class="form-wrapper" :class="{ constrained }">
        <slot />
    </div>
</template>

<style lang="scss">
.form-wrapper {

    &.constrained {
        max-width: 550px;
    }

}
</style>

<script>
export default {

    data: () => ({
        formData: {}
    }),

    props: {
        constrained: {
            type: Boolean,
            default: true
        }
    },

    provide () {
        return {
            form_getNamedField: this.form_getNamedField,
            form_setNamedField: this.form_setNamedField
        }
    },

    methods: {

        form_getNamedField(fieldName) {
            const fieldPath = fieldName.split(".");
            let field = this.formData;

            let depth = 0;
            for (let fieldPathSegment of fieldPath) {
                if (field.hasOwnProperty("fieldPathSegment"))
                    field = field[fieldPathSegment];
                else return null;

                depth++;
            }

            return field;
        },

        form_setNamedField(fieldName, fieldValue) {
            const fieldPath = fieldName.split(".");
            let field = this.formData;

            let depth = 0;
            for (let fieldPathSegment of fieldPath) {
                if (field.hasOwnProperty("fieldPathSegment"))
                    field = field[fieldPathSegment];
                else {
                    if (depth < (fieldPath.length - 1)) {
                        field[fieldPathSegment] = {};
                        field = field[fieldPathSegment];
                    } else {
                        field[fieldPathSegment] = fieldValue;
                    }
                }

                depth++;
            }

            this.$forceUpdate();
        }

    }

}
</script>
