<template>
  <el-header>
    <el-menu mode="horizontal" :default-active="activeIndex" router>
      <el-menu-item index="index" :route="{name: 'index'}">Index</el-menu-item>
      <el-menu-item index="workflow" :route="{name: 'workflow'}">Workflow</el-menu-item>
      <el-menu-item index="about" :route="{name: 'about'}">About</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
  export default {
    name: 'main-header',
    props: {
      msg: String
    }, 
    data() {
      return {
        activeIndex: 'index'
      };
    }
  }
</script>

<style scoped>
  .el-menu-item a {
    display: block;   /* 让 a 标签充满 */
  }
  .el-header .header {
    float: right;
  }
</style>