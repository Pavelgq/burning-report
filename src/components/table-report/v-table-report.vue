<template>
    <div class="v-table">
        <div class="v-table__header">
            <p @click="sortByNum">ID 
                <img src="unfold_more.svg" alt="Vue Logo" height="15" width="18">
                </p>
            <p @click="sortByString">First_Name
                <img src="unfold_more.svg" alt="Vue Logo" height="15" width="18">
               
            </p>
            <p @click="sortByString">Last_Name
                <img src="unfold_more.svg" alt="Vue Logo" height="15" width="18">
               
            </p>
        </div>
        <div class="v-table__body">
            <v-table-row 
                v-for="row in pageinatedUsers"
                :key="row.id"
                :row_data="row"
                
            />
        </div>
        <div class="v-table__pagination">
            <div class="page"
                v-for="page in pages"
                :key="page"
                :class="{'page__selected': page === pageNumber}"
                @click="pageClick(page)"
            >{{page}}</div>
        </div>
    </div>
</template>

<script>
    import vTableRow from './v-table-row'


    export default {
        name: "v-table-report",
        components: {
            vTableRow
        },
        props: {
            users_data:{
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
                return this.users_data.slice(from,to);
            }
        },
        methods: {
            pageClick(page) {
                this.pageNumber = page;
            },
            sortByNum(event) {
                const name = event.target.closest("P").outerText;
                console.log(name)
                this.users_data.sort((a, b) => (a[name])>(b[name]) ? 1 : -1);
            },
            sortByString(event) {
                const name = event.target.closest("P").outerText;
                this.users_data.sort((a, b) => (a[`${name}`]).localeCompare(b[name]));
            }
        }
        }
</script>

<style scoded>
  

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