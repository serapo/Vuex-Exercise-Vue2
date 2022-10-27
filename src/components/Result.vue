<template>
  <div>
    <p class="counter-container">Sayaç : {{count}}</p>
  </div>
</template>
<script>
import store from "../store";
export default {
  computed: {
    count() {
      //return store.state.count;
      return store.getters.getDoubleCounter;
    }
  }
};
</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>
