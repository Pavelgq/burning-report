<template>
    <section class="data">
        <table class="v-table">
            <thead>
                <tr class="v-table__header">
                    <th>Оператор
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№печи
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№1    
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№2
    
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
    
                    </th>
    
                    <th>№3
                      <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№4<sub>в</sub>
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                     <th>№4<sub>н</sub>
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№5<sub>в</sub>
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№5<sub>н</sub>
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№6<sub>в</sub>
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№6<sub>н</sub>
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№7<sub>в</sub>
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
                    <th>№7<sub>н</sub>
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
    
                    <th>№8
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
    
                    <th>Дата
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
                    </th>
    
                    <th class="row__comment">Комментарий
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
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
            rowsPerPage: 10,
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
            const name = event.target.closest("P").outerText;
            console.log(name)
            this.person_data.sort((a, b) => (a[name]) > (b[name]) ? 1 : -1);
        },
        sortByString(event) {
            const name = event.target.closest("P").outerText;
            this.person_data.sort((a, b) => (a[`${name}`]).localeCompare(b[name]));
        }
    }
}
</script>

<style>

</style>