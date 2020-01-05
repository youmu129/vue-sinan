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
export default {
  name: 'app'
}
</script>

<style>
  .el-container {
    width: 1100px;
    margin: 0 auto;
  }
</style>
