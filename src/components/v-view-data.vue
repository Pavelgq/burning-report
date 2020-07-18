<template>
    <main class="main">
        <h2>Представление</h2>    
        <v-menu></v-menu>
        <v-table-part  @waitNewData="sendData" :part_data="PART_DATA"></v-table-part>
        <v-table-report @waitNewData="sendData" :person_data="PERSON_DATA"></v-table-report>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vTablePart from './table-part/v-table-part';
import vTableReport from './table-report/v-table-report';
import vMenu from './view/v-menu'
export default {
    name: 'v-view-data',
    components: {
        vTablePart,
        vTableReport,
        vMenu
    },
    computed: {
        ...mapGetters([
            'PART_DATA',
            'PERSON_DATA'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PART_DATA_FROM_API',
            'GET_PERSON_DATA_FROM_API'
        ]),
        sendData(event) {
            console.log(event);
        }
    },
    mounted() {
        this.GET_PART_DATA_FROM_API(),
        this.GET_PERSON_DATA_FROM_API()
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