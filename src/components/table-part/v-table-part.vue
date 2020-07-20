<template>
    <section class="data">
        <table class="v-table">
            <thead >
                <tr class="v-table__header">
                    <th>Оператор
                        <img class="v-table__sort" src="@/assets/unfold_more.svg" alt="Vue Logo">
                    </th>
                    <th>Партия
                        <img class="v-table__sort" src="@/assets/unfold_more.svg" alt="Vue Logo">
                    </th>
                    <th>Всего
                        <img class="v-table__sort" src="@/assets/unfold_more.svg" alt="Vue Logo">
                    </th>
                    <th>№ печи
                        <img class="v-table__sort" src="@/assets/unfold_more.svg" alt="Vue Logo">
                    </th>
                    <th>T<sub>в</sub>
                    </th>
                    <th>T<sub>н</sub>
                    </th>
                    <th>Трещины
                        <img class="v-table__sort" src="@/assets/unfold_more.svg" alt="Vue Logo">
                    </th>
                    <th>Сколы
                        <img class="v-table__sort" src="@/assets/unfold_more.svg" alt="Vue Logo">
                    </th>
                    <th>Прыщи
                        <img class="v-table__sort" src="@/assets/unfold_more.svg" alt="Vue Logo">
                    </th>
    
                    <th>Дата
                        <img class="v-table__sort" src="@/assets/unfold_more.svg" alt="Vue Logo">
                    </th>
    
                    <th class="row__comment">Комментарий
                        <img class="v-table__sort" src="@/assets/unfold_more.svg" alt="Vue Logo">
                    </th>
    
                </tr>
    
            </thead>
    
            <tbody class="v-table__body">
    
                <v-table-row v-for="row in pageinatedRows" :key="row.id" :row_data="row" />
    
            </tbody>
        </table>
    <div class="v-table__pagination">
                <div class="page"
                    v-for="page in pages"
                    :key="page"
                    :class="{'page__selected': page === pageNumber}"
                    @click="pageClick(page)"
                >{{page}}</div>
            </div>
    </section>
</template>

<script>
import vTableRow from './v-table-row'


export default {
    name: "v-table-part",
    components: {
        vTableRow
    },
    props: {
        part_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {

        return {
            rowPerPage: 10,
            pageNumber: 1
        };
    },
    computed: {
        pages() {
            return Math.ceil(this.part_data.length / this.rowPerPage);
        },
        pageinatedRows() {
            let from = (this.pageNumber - 1) * this.rowPerPage;
            let to = from + this.rowPerPage;
            return this.part_data.slice(from, to);
        }
    },
    methods: {
        pageClick(page) {
            this.pageNumber = page;
            this.$emit('waitNewData', { numberPage: this.pageNumber, pageOnScreen: this.rowPerPage });
        },
        sortByNum(event) {
            const name = event.target.closest("P").outerText;
            console.log(name)
            this.part_data.sort((a, b) => (a[name]) > (b[name]) ? 1 : -1);
        },
        sortByString(event) {
            const name = event.target.closest("P").outerText;
            this.part_data.sort((a, b) => (a[`${name}`]).localeCompare(b[name]));
        }
    }
}
</script>

<style>
.v-table {
    
    border-collapse: collapse;
    width: 1350px;
    position: relative;
}

.v-table__sort {
    width: 10px;
    height: 10px;
}

th,
td {
    padding: 6px;
    background-color: #fff;
}

th {
    position: sticky;
    top: 0;
    background-color: #4e6a85;
    color: #fff;
    z-index: 2;
    width: 200px;
}

.v-table__body tr:hover {
    background-color: #eeeeee;
}

td {
    border-bottom: 1px solid #dddddd;
}

td:first-child {
    position: sticky;
    left: 0;
    background-color: #999999;
    color: #3e3e3e;
}

.v-table__pagination { 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
} 
.v-table__header th {
    cursor: pointer;
}

.page {
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #e7e7e7;
}

.page:hover {
    background: #aeaeae;
    cursor: pointer;
    color: #ffffff;
}

.page__selected {
    background: #aeaeae;
    cursor: pointer;
    color: #ffffff;
}
</style>