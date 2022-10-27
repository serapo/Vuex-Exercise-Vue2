<template>
  <div>
    <button class="btn btn-success" @click="incrementCounter">Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment">Arttır</button>
    <!-- <button class="btn btn-success" @click="incrAsync({time : 1000})">incrAsync</button> -->
 
  </div>
</template>

<script>
import store from '../store'
//import { mapMutations } from 'vuex';
export default {
  methods : {
    // ...mapMutations([
    //   "updateCounter"
    // ])
    incrementCounter(){
      //store.state.count++;
      store.commit('updateCounter',1)
    },
    decrementCounter(){
      store.commit('updateCounter',-1)
    },
    increment(){
      store.dispatch("increment")
    },
    incrAsync (){
      store.dispatch("incrAsync")
    }
  }
}
</script>

<style>
</style>
