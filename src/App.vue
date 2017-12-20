<template>
  <div id="app">
    <router-view/>
    <Con></Con>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
<script>

import Con from './components/con';
export default {
  components:{Con},
  name: 'app'
}
</script>