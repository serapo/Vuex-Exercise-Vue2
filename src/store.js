import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

const store =new Vuex.Store ({
    state:{
        count:0
    },
    getters : {
        getDoubleCounter(state){
            return state.count*2
        },
        stringCounter(state){
            return state.count + "kez tıklandı"
        },
       
    }
})

export default store