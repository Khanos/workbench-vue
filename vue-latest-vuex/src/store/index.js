import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementBy(state, payload) {
      state.count += payload
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    decrement(context) {
      context.commit('decrement')
    },
    incrementBy(context, payload) {
      context.commit('incrementBy', payload)
    }
  },
  modules: {
  }
});