<template>
  <div id="app">
    <el-container direction="vertical">
      <main-header></main-header>
      <div id="main-view">
        <router-view></router-view>
      </div>
      <main-footer></main-footer>
    </el-container>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Sinan from './components/Sinan.vue'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .el-container {
    width: 1100px;
    margin: 0 auto;
  }
</style>
