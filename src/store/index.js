import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    getdata(state,action){
      state.list=action.list
    },
    searchFn(state,action){
     let item=state.list.filter(item=>item.name.includes(action))
     state.list=item
    }
  },
  actions: {
    getlist(context){
    axios.get('/getlist').then(res=>{
      context.commit('getdata',{list:res.data})
    })
    }
  },
  modules: {
  }
})
