<template>
    <section class="data">
    
        <table class="v-table">
    
            <thead >
    
                <tr class="v-table__header">
    
                    <th>Оператор
    
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
    
                    </th>
    
    
    
                    <th>Партия
    
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
    
    
    
                    </th>
    
                    <th>Всего
    
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
    
    
    
                    </th>
    
                    <th>№ печи
    
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
    
                    </th>
    
                    <th>T<sup>в</sup>
    
                    </th>
    
                    <th>T<sup>н</sup>
    
                    </th>
    
                    <th>Трещины
    
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
    
    
    
                    </th>
    
                    <th>Сколы
    
                        <img src="@/assets/unfold_more.svg" alt="Vue Logo" height="15" width="18">
    
    
    
                    </th>
    
                    <th>Прыщи
    
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
    
                <v-table-row v-for="row in pageinatedUsers" :key="row.id" :row_data="row" />
    
            </tbody>
    
            <div class="v-table__pagination">
    
                <div class="page"
    
                    v-for="page in pages"
    
                    :key="page"
    
                    :class="{'page__selected': page === pageNumber}"
    
                    @click="pageClick(page)"
    
                >{{page}}</div>
    
            </div>
    
        </table>
    
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
        users_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {

        return {
            usersPerPage: 5,
            pageNumber: 1
        };
    },
    computed: {
        pages() {
            return Math.ceil(this.users_data.length / this.usersPerPage);
        },
        pageinatedUsers() {
            let from = (this.pageNumber - 1) * this.usersPerPage;
            let to = from + this.usersPerPage;
            return this.users_data.slice(from, to);
        }
    },
    methods: {
        pageClick(page) {
            this.pageNumber = page;
            this.$emit('waitNewData', { numberPage: this.pageNumber, pageOnScreen: this.usersPerPage });
        },
        sortByNum(event) {
            const name = event.target.closest("P").outerText;
            console.log(name)
            this.users_data.sort((a, b) => (a[name]) > (b[name]) ? 1 : -1);
        },
        sortByString(event) {
            const name = event.target.closest("P").outerText;
            this.users_data.sort((a, b) => (a[`${name}`]).localeCompare(b[name]));
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

th,
td {
    padding: 10px;
    background-color: #fff;
}

th {
    position: sticky;
    top: 0;
    background-color: #4e6a85;
    color: #fff;
    z-index: 2;
    width: 150px;
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