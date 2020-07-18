<template>
    <main class="main">
        Представление    
    <v-table-part  @waitNewData="sendData" :users_data="USERS"></v-table-part>
    
    <v-table-report></v-table-report>
    
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vTablePart from './table-part/v-table-part';
import vTableReport from './table-report/v-table-report';
export default {
    name: 'v-view-data',
    components: {
        vTablePart,
        vTableReport,
    },
    computed: {
        ...mapGetters([
            'USERS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_USERS_FROM_API'
        ]),
        sendData(event) {
            console.log(event);
        }
    },
    mounted() {
        this.GET_USERS_FROM_API()
    }
}
</script>

<style>
    .main {
       display: flex;
       flex-direction: column;
       align-items: center;
    }
</style>