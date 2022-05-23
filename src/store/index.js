import { createStore } from "vuex";
import http from '../http-common'

const store = createStore({
    state: {
        authToken: null,
        memberName: null,
        memberGrade: null
    },
    getters: {},
    mutations: {
        LOGIN(state, member) {
            state.authToken = member.authToken
            state.memberGrade = member.grade
            state.memberName = member.memberName
        },
        LOGOUT(state) {
            state.authToken = null
        }
    },
    actions: {
        LOGIN( {commit}, { data } ) {
            return new Promise((resolve, reject) => {
                http.post('login', data)
                    .then(response => {
                        commit('LOGIN', response.data.data)
                        resolve(response)
                    })
                    .catch(error =>{
                        reject(error.response.data.error.message)
                    })
            })

        }
    }

});

export default store;