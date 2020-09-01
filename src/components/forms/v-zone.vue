<template>
<div class="form__group" :class="{ 'form__group--error': $v.temp.$error }">
    <input type="text" class="form__input tonel__text" :class="{'form__error':($v.temp.$dirty && !$v.temp.required || !$v.temp.numeric) }" v-on:change="dataChange" v-model="temp" :placeholder="[[zone.name]]">
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
        furId: Number
    },
    validations: {
        temp: {
            required,
            numeric
        }
    },
    created() {
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
    inject: ['$v'],
    provide() {
        return {
            $v: this.$v
        }
    },
    data() {
        return {
            pack: {
                furId: this.furId,
                id: this.zone.id
            },
            temp: ''
        }
    },

    methods: {
        dataChange() {
            this.pack.temp = this.temp;
            this.$emit('data-change', this.pack);
            
        },

    }

}
</script>

<style>

</style>
