<template>
    <div class="container">

        <PageDecoration category="Getting Started" title="Join SurreyJam">
            <Form>
                <FormLabel label="Name">
                    <TextField name="name" />
                </FormLabel>
            </Form>
        </PageDecoration>

    </div>
</template>

<script>
import { PageDecoration } from "~/.nuxt/components";
import Form from "@/components/form/Form";
import TextField from "@/components/form/TextField";
import FormLabel from "@/components/form/FormLabel";

export default {

    components: {
        FormLabel,
        TextField,
        Form,
        PageDecoration
    }

}
</script>
