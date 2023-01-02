import { createStore } from "vuex";
import http from '../http-common'
import axios from "axios";

const enhanceAccessToeken = () => {
    const { accessToken } = localStorage
    if (!accessToken) return
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
}

enhanceAccessToeken()

const store = createStore({
    state: {
        authToken: null,
        memberIdx: null,
        memberName: null,
        memberGrade: null
    },
    getters: {},
    mutations: {
        LOGIN(state, member) {
            state.authToken = member.authToken
            state.memberIdx = member.id
            state.memberGrade = member.grade
            state.memberName = member.memberName

            localStorage.authToken = member.authToken
        },
        LOGOUT(state) {
            state.authToken = null
        }
    },
    actions: {
        LOGIN( {commit}, { data } ) {
            return new Promise((resolve, reject) => {
                http.post('/auth', data)
                    .then(response => {
                        console.log("response :: " + response)
                        commit('LOGIN', response.data.data)
                        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.authToken}`;
                        console.log(response)
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