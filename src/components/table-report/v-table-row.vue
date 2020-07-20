<template>
    <tr class="v-table-row">
        
        
        <td class="row row__name">{{row_data.first_name}} {{row_data.last_name}}</td>
        <td class="row row__burn-id">{{row_data.furnace_number}}</td>
        <td class="row row__z1">{{row_data.zone_1}}</td>
        <td class="row row__z2">{{row_data.zone_2}}</td>
        <td class="row row__z3">{{row_data.zone_3}}</td>
        <td class="row row__z4-up">{{row_data.zone_4_up}}</td>
        <td class="row row__z4-down">{{row_data.zone_4_down}}</td>
        <td class="row row__z5-up">{{row_data.zone_5_up}}</td>
        <td class="row row__z5-down">{{row_data.zone_5_down}}</td>
        <td class="row row__z6-up">{{row_data.zone_6_up}}</td>
        <td class="row row__z6-down">{{row_data.zone_6_down}}</td>
        <td class="row row__z7-up">{{row_data.zone_7_up}}</td>
        <td class="row row__z7-down">{{row_data.zone_7_down}}</td>
        <td class="row row__z8">{{row_data.zone_8}}</td>

        <td class="row row__date">{{localDate}}</td>

        <td class="row row__comment">{{row_data.changes}}</td>
    </tr>
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
        computed: {
            localDate() {
                return (new Date(this.row_data.date)).toLocaleDateString() 
            }
        },
        
    }
</script>

<style>
 

   
</style>