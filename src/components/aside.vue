<template>
  <el-aside>
    <el-menu>
      <el-submenu index="1">Nav1</el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>DL1</span>
        </template>
        <el-menu-item-group>
          <template slot="title">FZ1</template>
          <el-menu-item index="1-1">L1</el-menu-item>
          <el-menu-item index="1-2">L2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">Nav1</el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">DH2</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>