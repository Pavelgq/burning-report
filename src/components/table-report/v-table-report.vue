<template>
<section class="data">
    <table class="v-table">
        <thead>
            <tr class="v-table__header">
                <th>
                    <button @click="sortByString" class="v-table__button" data-id="last_name">Оператор</button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="Furnace_number">№печи</button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_1">№1</button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_2">№2</button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_3">№3</button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_4_up">№4<sub>в</sub></button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_4_down">№4<sub>н</sub></button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_5_up">№5<sub>в</sub></button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_5_down">№5<sub>н</sub></button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_6_up">№6<sub>в</sub></button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_6_down">№6<sub>н</sub></button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_7_up">№7<sub>в</sub></button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_7_down">№7<sub>н</sub></button>
                </th>
                <th>
                    <button @click="sortByNum" class="v-table__button" data-id="zone_8">№8</button>
                </th>
                <th>
                    <button @click="sortByString" class="v-table__button" data-id="date">Дата</button>
                </th>
                <th class="row__comment">
                    <button @click="sortByString" class="v-table__button" data-id="changes">Комментарий</button>
                </th>
            </tr>
        </thead>
        <tbody class="v-table__body">
            <v-table-row v-for="row in pageinatedRows" :key="row.id" :row_data="row" />

        </tbody>
    </table>

    <div class="v-table__pagination">

        <div class="page" v-for="page in pages" :key="page" :class="{'page__selected': page === pageNumber}" @click="pageClick(page)">{{page}}</div>

    </div>

</section>
</template>

<script>
import vTableRow from './v-table-row'

export default {
    name: "v-table-report",
    components: {
        vTableRow
    },
    props: {
        person_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {

        return {
            rowsPerPage: 15,
            pageNumber: 1
        };
    },
    computed: {
        pages() {
            return Math.ceil(this.person_data.length / this.rowsPerPage);
        },
        pageinatedRows() {
            let from = (this.pageNumber - 1) * this.rowsPerPage;
            let to = from + this.rowsPerPage;
            return this.person_data.slice(from, to);
        }
    },
    methods: {
        pageClick(page) {
            this.pageNumber = page;
        },
        sortByNum(event) {
            const element = event.target.closest("BUTTON");
            const name = element.getAttribute("data-id");
            this.part_data.sort((a, b) => (a[name]) > (b[name]) ? 1 : -1);
        },
        sortByString(event) {
            const element = event.target.closest("BUTTON");
            const name = element.getAttribute("data-id");
            console.log(name)
            this.part_data.sort((a, b) => {
                const str = a[name] || ' ';
                const str1 = b[name] || ' ';
                str.localeCompare(str1);
            });
        }
    }
}
</script>

<style>

</style>
