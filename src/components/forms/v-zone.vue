<template>
    <div class="form__group" :class="{ 'form__group--error': $v.temp.$error }">
        <input type="text" class="form__input tonel__text" 
            :class="{'form__error':($v.temp.$dirty && !$v.temp.required) }" 
            v-on:change="dataChange" 
            v-model="temp" 
            :placeholder="[[zone.name]]"
            
           >
    </div>
</template>

<script>
import {
    required
} from 'vuelidate/lib/validators';
export default {
    name: 'v-zone',
    props: {
        zone: Object,
        label: String,
        furId: Number
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
    validations: {
        temp: {
            required
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
