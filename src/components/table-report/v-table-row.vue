<template>
    <div class="v-table-row">
        <div class="row row__id">{{row_data.ID}}</div>
        <div class="row row__name">{{row_data.First_Name}}</div>
        <div class="row row__lastname">{{row_data.Last_Name}}</div>
    </div>
</template>

<script>
    export default {
        name: "v-table-row",
        props: {
            row_data: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {}
        
    }
</script>

<style>
    .v-table-row {
        display: flex;
        justify-content: space-around;
    }

    .row {
        flex-basis: 25%;
        padding: 8px 16px;
        text-align: left;
    }
</style>