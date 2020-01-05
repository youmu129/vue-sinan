<template>
  <div class="sinan">
    <el-container>
      <main-aside></main-aside>
      <el-container direction="vertical">
        <div class="category">
          <h2 class="left">类别1</h2>
          <el-divider></el-divider>
        </div>
        <el-row :gutter="12">
          <el-col :span="7" :push="1">
            <el-card shadow="hover">
              <el-image class="logo" src="https://cn.vuejs.org/images/logo.png" fit="contain"></el-image>
              <div>
              <span>Vue.js</span>
                <div class="description">
                  <span>渐进式 JavaScript 框架</span>
                </div>
              </div> 
            </el-card>
            <el-card shadow="hover">
              <el-image class="logo" src="https://www.cnblogs.com/favicon.ico" fit="contain"></el-image>
              <div>
              <span>博客园 - 代码改变世界</span>
                <div class="description">
                  <span>博客园是一个面向开发者的知识分享社区。自创建以来，博客园一直致力并专注于为开发者打造一个纯净的技术交流社区，推动并帮助开发者通过互联网分享知识，从而让更多开发者从中受益。博客园的使命是帮助开发者用代码改变世界。</span>
                </div>
              </div> 
            </el-card>
          </el-col>
          <el-col :span="7" :push="1">
            <el-card shadow="hover">
              <el-image class="logo" src="https://element.eleme.cn/favicon.ico" fit="contain"></el-image>
              <div>
                <span>Element</span>
                <div class="description">
                  <span>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</span>
                </div>
              </div> 
            </el-card>
          </el-col>
          <el-col :span="7" :push="1">
            <el-card shadow="hover">
              <el-image class="logo" src="https://www.w3school.com.cn/ui2019/logo-180.png" fit="contain"></el-image>
              <div>
                <span>w3school 在线教程</span>
                <div class="description">
                  <span>全球最大的中文 Web 技术教程。</span>
                </div>
              </div> 
            </el-card>
          </el-col>
        </el-row>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'bookmark'
}
</script>

<style scoped>
  .category {
    text-align: left;
    padding-left: 40px;
  }
  .el-card {
    margin-top: 20px;
  }
  .el-card .description {
    font-size: 13px;
    padding: 0;
    margin-top: 13px;
    line-height: 16px;
    color: #999;
  }
  .el-card .logo {
    width: 70px;
  }
  .el-divider {
    width: 670px;
  }
</style>