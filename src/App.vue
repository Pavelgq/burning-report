<template>
  <div id="app">
   <v-table @waitNewData="sendData"
     :users_data = "USERS"
   />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import vTable from './components/table-part/v-table';

export default {
  name: 'App',
  components: {
   vTable
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
