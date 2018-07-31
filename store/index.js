import Vuex from 'vuex'
import * as firebase from 'firebase'

const createStore = () => {
    return new Vuex.Store({
        state: {
            user: null
        },
        mutations: {
            setUser (state, payload) {
                state.user = payload
            }
        },
        actions: {
            signUserUp ({commit}, payload) {
                firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        const newUser = {
                            id: user.uid
                        }
                        .commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        console.log(error)
                    }
                )
            }
        },
        getters: {
            user (state) {
                return state.user
            }
        }
    })
}

export default createStore