<template>
  <div id="workflow">
    <div id="schedule">
      <h2>Schedule</h2>
      <el-button type="text">展开全部</el-button>
      <el-button class="schedule-new">New Task</el-button>
      <el-divider></el-divider>
      <el-card class="task" v-for="item in data" :key="item.id" shadow="hover">
        <div slot="header" class="task-header">
          <el-tag class="task-tag" type="danger">紧急</el-tag>
          <el-tag type="danger">超期</el-tag>
          <span class="task-title">{{ item.title }}</span>
          <el-button class="task-edit" type="text">编辑</el-button>
        </div>
        <el-button class="task-verbose" type="text" @click="showTaskDetail(item)">进度</el-button>
        <div class="task-detail">
          <p> {{ item.detail }}</p>
        </div>
        <el-collapse-transition>
          <div v-show="item.showDetail" class="task-step">
            <el-timeline class="task-timeline">
              <el-timeline-item v-for="step in item.step" 
                :key="step.id" 
                :timestamp="step.timestamp" 
                :color="step.status == 'done' ? '#0bbd87' : step.status == 'doing' ? '#ffcc0b' : ''">
                {{ step.describe }}
                <el-button class="task-step-edit" type="text">完成</el-button>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-collapse-transition>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workflow', 
  data() {
    return {
      data: [
        {
          id: 1,
          title: '[ND10854] 101教育PPT-提供支持低配设备的版本', 
          detail: '安装包：ftp://192.168.241.114/TQD-Nonf/Nonf-LowSpecific_Base2.1.9.0/',
          step: [
            {
              id: 1,
              timestamp: '2020-01-01',
              status: 'done',
              describe: 'OLE 控件适配插件中心',
              comments: [
                {
                  id: 1,
                  content: '备注1'
                },
                {
                  id: 2,
                  context: '备注2'
                }
              ]
            },
            {
              id: 2,
              timestamp: '2020-01-02',
              status: 'doing',
              describe: '智慧课堂更新服务适配插件中心'
            }
          ],
          showDetail: true
        }, 
        {
          id: 2,
          title: '事务2',
          detail: '事务2详细',
          showDetail: false
        }
      ]
    };
  },
  methods: {
    showTaskDetail(item) {
      item.showDetail = !item.showDetail;
    }
  }
}
</script>

<style scoped>
#workflow {
  width: 90%;
  margin: 0 auto;
}

.schedule-new {
  float: right;
}

.task {
  margin-bottom: 10px;
}

.task-title {
  margin-left: 10px;
}

.task-tag {
  margin-right: 10px;
}

.task-verbose {
  float: right;
}

.task-step {
  margin-top: 30px;
}

.task-detail {
  font-size: 14px;
}

.task-step-edit {
  margin-left: 20px;
}

.task-edit {
  float: right;
}
</style>
