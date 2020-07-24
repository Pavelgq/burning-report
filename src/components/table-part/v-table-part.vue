<template>
    <section class="data">
        <object class="v-table__sort" type="image/svg+xml" data="@/assets/unfold_more.svg" >
                            <img src="@/assets/abc_sort.svg">
                        </object>
        <table class="v-table">
            <thead >
                <tr class="v-table__header">
                    <th>
                        <button @click="sortByString" class="v-table__button" data-id="last_name">Оператор</button>
                    </th>
                    <th>
                        <button @click="sortByString" class="v-table__button" data-id="lot_id">Партия</button>
                    </th>
                    <th>
                        <button @click="sortByNum"  class="v-table__button" data-id="number_of_items">Всего</button>
                    </th>
                    <th>
                        <button @click="sortByNum" class="v-table__button" data-id="furnace_number">Печь</button>
                    </th>
                    <th>
                        <button @click="sortByNum" class="v-table__button" data-id="tv">T<sub>в</sub></button>
                    </th>
                    <th>
                        <button @click="sortByNum" class="v-table__button" data-id="tn">T<sub>н</sub></button>
                    </th>
                    <th>
                        <button @click="sortByNum" class="v-table__button" data-id="tv">T<sub>в</sub></button>
                    </th>
                    <th>
                        <button @click="sortByNum" class="v-table__button" data-id="tn">T<sub>н</sub></button>
                    </th>

                    <th>
                        <button @click="sortByNum" class="v-table__button" data-id="defect_t">Трещины</button>
                    </th>
                    <th>
                        <button @click="sortByNum" class="v-table__button" data-id="defect_s">Сколы</button>
                    </th>
                    <th>
                        <button @click="sortByNum" class="v-table__button" data-id="defect_p">Прыщи</button>
                    </th>
    
                    <th>
                        <button @click="sortByNum" class="v-table__button" data-id="data">Дата</button>
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
.v-table {
    border-collapse: collapse;
    width: 1350px;
    position: relative;
}

.v-table__sort {
    width: 12px;
    height: 12px;
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
    border-left: 1px solid #dddddd;
}

.v-table__body tr:hover {
    background-color: #eeeeee;
}

td {
    border-bottom: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
}

td:first-child {
    position: sticky;
    left: 0;
    background-color: #cccccc;
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

.v-table__button {
  background-color: transparent;
  border: 1px solid #eeeeee6e;
  cursor: pointer;
  overflow: hidden;
  padding: .75em 2.25em .75em 1em;
  position: relative;
  color: #ffffff;
}

.v-table__button:before,
.v-table__button:after {
  border-style: solid;
  border-width: 8px 5px;
  border-color: transparent;
  content: '';
  height: 0;
  position: absolute;
    right: 10px;
  width: 0;
}

.v-table__button:before {
  border-bottom-color: #ccc;
  top: 0;
}

.v-table__button:after {
  border-top-color: #ccc;
  bottom: 0;
}

.asc:before {
  border-bottom-color: #777;
}

.desc:after {
  border-top-color: #777;
}
</style>