<template>
  <div>
    <button class="btn btn-success" @click="incrementCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button>
  </div>
</template>

<script>
import store from '../store'
export default {
  methods : {
    incrementCounter(){
      store.state.count++;
    },
    decrementCounter(){
      store.state.count--;
    }
  }
}
</script>

<style>
</style>
