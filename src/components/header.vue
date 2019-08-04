<template>
  <el-header>
    <el-menu class="header" mode="horizontal" router default-active="sinan">
      <el-menu-item index="sinan" :route="{name: 'Sinan'}">Sinan</el-menu-item>
      <el-menu-item index="vue" :route="{name: 'HelloWorld'}">HelloWorld</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
  export default {
    name: 'MainHeader',
    props: {
      msg: String
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