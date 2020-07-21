<template>
    <tr class="v-table-row">
        
        
        <td class="row row__name">{{row_data.first_name}} {{row_data.last_name}}</td>

        <td class="row row__part">{{row_data.lot_id}}</td>

        <td class="row row__quantity">{{row_data.number_of_items}}</td>
        <td class="row row__burn-id">{{row_data.furnace_number}}</td>

        <td class="row row__temp-up">{{row_data.tv}}</td>
        <td class="row row__temp-down">{{row_data.tn}}</td>

        <td class="row row__temp-up">{{row_data.tv}}</td>
        <td class="row row__temp-down">{{row_data.tn}}</td>

        <td class="row row__defects">{{row_data.defect_t}}</td>
        <td class="row row__defects">{{row_data.defect_s}}</td>
        <td class="row row__defects">{{row_data.defect_p}}</td>

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
        methods: {

        }
        
    }
</script>

<style scoped>
    /* .v-table-row {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #eeeeee;
    }*/
    .v-table-row:hover td {
        background-color: #eeeeee;
    } 

    /* .row {
        flex-basis: 5%;
        padding: 3px 5px;
        text-align: left;
        
    } */

    /* .row__comment {
        flex-basis: 10%;
        box-sizing: border-box;
    } */
</style>