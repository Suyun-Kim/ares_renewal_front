import {createStore} from "vuex";
import http from '../http-common'
import axios from "axios";

const enhanceAccessToeken = () => {
    const {accessToken} = localStorage
    if (!accessToken) return
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`
}

enhanceAccessToeken()

const store = createStore({
    state: {
        authToken: null,
        memberIdx: null,
        memberName: null,
        memberGrade: null,
        isLogin: false
    },
    getters: {},
    mutations: {
        LOGIN(state, member) {
            state.authToken = member.authToken
            state.memberIdx = member.id
            state.memberGrade = member.grade
            state.memberName = member.memberName
            state.isLogin = true

            localStorage.authToken = member.authToken
        },
        LOGOUT(state) {
            state.authToken = null
            state.isLogin = false

            localStorage.removeItem('authToken')
        }
    },
    actions: {
        LOGIN({commit}, {data}) {
            return new Promise((resolve, reject) => {
                http.post('/auth', data)
                    .then(response => {
                        commit('LOGIN', response.data.data)
                        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.authToken}`;
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error.response.data.error.message)
                    })

            })

        }
    }

});

export default store;