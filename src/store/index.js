import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curIndex:0
  },
  mutations: {
    setCurIndex(state,index){
      state.curIndex = index
     }},
  actions: {
  },
  modules: {
  }
})
