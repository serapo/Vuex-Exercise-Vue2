import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

const store =new Vuex.Store ({
    state:{
        count:0,
        value:0
    },
    getters : {
        getDoubleCounter(state){
            return state.count*2
        },
        stringCounter(state){
            return state.count + "kez tıklandı"
        },
        getValue(state){
        return state.value
        }
       
    },
    mutations : {
        updateCounter(state){
            state.count ++
        }
    },
    
    actions : {
        increment({commit}){
            commit("updateCounter");
        },
        incrAsync ({commit}, payload){
            setTimeout(() => {
              commit("updateCounter")  
            },payload.time);
        }
    }
})

export default store