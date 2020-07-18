import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: []
    },
    actions: {
        GET_USERS_FROM_API({commit}) {
            return axios('http://localhost:3000/data/Burning?p=lot_id,number_of_items,furnace_number,tv,tn,defect_t,defect_s,defect_p,date,changes', {
                method: 'GET'
            })
            .then((response) => {
                commit('SET_USERS_TO_VUEX', response.data)
            })
        }
    },
    mutations: {
        SET_USERS_TO_VUEX: (state, users)=> {
            state.users = users
        }
    },
    getters: {
        USERS(state) {
            return state.users;
        }

    }
});


export default store;

