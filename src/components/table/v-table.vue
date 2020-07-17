<template>
    <div class="v-table">
        <div class="v-table__header">
            <p>id</p>
            <p>Name</p>
            <p>LastName</p>
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
                @click="pageClick(page)"
            >{{page}}</div>
        </div>
    </div>
</template>

<script>
    import vTableRow from './v-table-row'


    export default {
        name: "v-table",
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
            }
        }
        }
</script>

<style>
    .v-table {
        max-width: 900px;
        margin: 0 auto;
    }
    .v-table__header {
        display: flex;
        justify-content: space-around;
    }
    .v-table__header p {
        flex-basis: 25%;
        padding: 8px 16px;
        text-align: left;
    }

    .v-table__pagination {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 30px;
    }

    .page {
        padding: 8px;
        margin-right: 10px;
        border: 1px solid #e7e7e7;
    }

    .page:hover {
        background: #aeaeae;
        cursor: pointer;
    }
</style>