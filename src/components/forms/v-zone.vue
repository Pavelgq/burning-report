<template>
<div class="form__group" :class="{ 'form__group--error': $v.temp.$error }">
    <input type="text" class="form__input tonel__text" :class="{'form__error':($v.temp.$dirty && !$v.temp.required || !$v.temp.numeric) }" v-on:change="dataChange" v-model="temp" :placeholder="[[zone.name]]">
    <!-- @input="input" -->
</div>
</template>

<script>
import {
    bus
} from '@/main.js';
import {
    required,
    numeric
} from 'vuelidate/lib/validators';
export default {
    name: 'v-zone',
    props: {
        zone: Object,
        label: String,
        furId: Number,

        //  v: {
        //     type: Object,
        //     required: true
        // },
    },

    validations: {
        temp: {
            required,
            numeric
        }
    },
    watch: {
        "$v.$invalid": function () {
            this.$emit("returnStatusToParent", this.$v.$invalid);
        }
    },
    created() {
        // console.log($v)
        const state = this;
        bus.$on('validate_all', function () {
            state.$v.$touch();
        });
        bus.$on('reset_validate_all', function () {
            state.temp = '';
            state.$v.$reset();
        });
        this.$emit('validate', state.$v);
    },
    data() {
        return {
            pack: {
                furId: this.furId,
                id: this.zone.id
            },
            temp: '',
        }
    },

    methods: {
        dataChange() {
            this.pack.temp = this.temp;
            this.$emit('data-change', this.pack);

        },

    },
    mounted() {
        this.$eventPool.$on("touchChildForm", () => {
            this.$v.$touch();
            this.$emit("returnStatusToParent", this.$v.$invalid);
        });
    },
    destroyed() {
        this.$eventPool.$off("touchChildForm", () => {});
        }

    }
</script>

<style>

</style>
