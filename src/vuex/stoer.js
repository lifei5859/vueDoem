import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    essayList: [],
    activeEssay: {}
  },
  mutations: {
    addEssay (state) {
      let essay = {
        title: 'asd',
        content: '',
        enjoy: false,
        time: new Date().getDate()
      }
      state.essayList.push(essay)
      state.activeEssay = essay
    },
    isActive (state, item) {
      state.activeEssay = item
    },
    isEnjoy (state) {
      state.activeEssay.enjoy = !state.activeEssay.enjoy
    },
    rmEssay (state) {
      state.essayList = state.essayList.filter(item => {
        return item !== state.activeEssay
      })
      let l = state.essayList.length
      state.activeEssay = state.essayList[0] && state.essayList[l - 1]
    }
    // showEnjoyList (state) {
    //   let l = state.essayList.filter(item => {
    //     return item.enjoy === true
    //   })
    //   console.log(l)
    // }
  },
  getters: {
    enjoy (state) {
      return state.activeEssay && state.activeEssay.enjoy
    },
    enjoyList (state) {
      return state.essayList.filter(item => {
        return item && item.enjoy === true
      })
    }
  }
})
