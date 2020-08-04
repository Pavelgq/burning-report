<template>
<main class="main">
    <v-menu @changeTab='onTab'></v-menu>
    <v-part-report v-if="currentTab == 'part_report'"></v-part-report>
    <v-person-report v-if="currentTab == 'person_report'"></v-person-report>
    <v-table-part v-if="currentTab == 'part'" @waitNewData="sendData" :part_data="PART_DATA"></v-table-part>
    <v-table-report v-if="currentTab == 'person'" @waitNewData="sendData" :person_data="PERSON_DATA"></v-table-report>

</main>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex';
import vTablePart from './table-part/v-table-part';
import vTableReport from './table-report/v-table-report';
import vPartReport from './forms/v-part-report';
import vPersonReport from './forms/v-person-report';

import vMenu from './view/v-menu'
export default {
    name: 'v-view-data',
    components: {
        vTablePart,
        vTableReport,
        vMenu,
        vPartReport,
        vPersonReport
    },
    data() {
        return {
            currentTab: 'part'
        }
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
        },
        onTab(data) {
            this.currentTab = data.currentTab
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
