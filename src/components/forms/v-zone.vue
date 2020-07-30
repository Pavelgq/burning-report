<template>
   <input type="text" class="tonel__text" v-on:change="dataChange" v-model="pack.temp" :placeholder="[[zone.name]]">
</template>

<script>
export default {
    name: 'v-zone',
    props: {
        zone: Object,
        label: String
    },
    data() {
        return {
            pack: {
                id: this.zone.id
            }
        }
    },
    methods: {
        dataChange() {
            this.$emit('data-change', this.pack);
        }
    }

}
</script>

<style>

</style>