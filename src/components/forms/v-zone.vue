<template>
   <input type="text" class="tonel__text" name="" v-model="pack[`zone${zone.id}`]" :placeholder="[[zone.name]]">
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
            pack: {}
        }
    }

}
</script>

<style>

</style>