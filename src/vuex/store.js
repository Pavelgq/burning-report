import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        partData: [],
        personData: []
    },
    actions: {
        GET_PART_DATA_FROM_API({commit}) {
            return axios('http://localhost:3000/data/Burning_part?p=lot_id,number_of_items,furnace_number,tv,tn,defect_t,defect_s,defect_p,date,changes', {
                method: 'GET'
            })
            .then((response) => {
                commit('SET_PART_DATA_TO_VUEX', response.data)
            })
        },
        GET_PERSON_DATA_FROM_API({commit}) {
            return axios('http://localhost:3000/data/Burning_person?p=furnace_number,zone_1,zone_2,zone_3,zone_4_up,zone_4_down,zone_5_up,zone_5_down,zone_6_up,zone_6_down,zone_7_up,zone_7_down,zone_8,date', {
                method: 'GET'
            })
            .then((response) => {
                commit('SET_PERSON_DATA_TO_VUEX', response.data)
            })
        }
    },
    mutations: {
        SET_PART_DATA_TO_VUEX: (state, partData)=> {
            state.partData = partData
        },
        SET_PERSON_DATA_TO_VUEX: (state, personData)=> {
            state.personData = personData
        }
    },
    getters: {
        PART_DATA(state) {
            return state.partData;
        },
        PERSON_DATA(state) {
            return state.personData;
        }

    }
});


export default store;

