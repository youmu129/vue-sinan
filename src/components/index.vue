<template>
  <div id="index">
    <h2>Index</h2>
    <div id="website">
      <el-row>
        <el-col :span="4">
          <el-button @click="onAdd" icon="el-icon-plus"></el-button>
        </el-col>
        <el-col :offset="12" :span="8">
          <div class="search-row">
            <el-input class="search-input"></el-input>
            <el-button class="search-button" icon="el-icon-search"></el-button>
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row class="items-row" v-for="row_items in sliceItems(index, 4)" 
        :key="row_items.row" :gutter="12">
        <el-col v-for="item in row_items" :key="item.id" :span="6">
          <el-card shadow="hover">
            <i class="el-icon-link"></i>
            <span>{{ item.title }}</span>
            <div class="item-desc">{{ item.url }}</div>
            <div class="item-desc">{{ item.description }}</div>
          </el-card>
        </el-col>
      </el-row>
      <el-dialog title="Add" :visible.sync="itemModel.visible">
        <el-form :model="itemModel">
          <el-form-item label="Title">
            <el-input v-model="itemModel.formModel.title"></el-input>
          </el-form-item>
          <el-form-item label="Url">
            <el-input v-model="itemModel.formModel.url"></el-input>
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="itemModel.formModel.description"></el-input>
          </el-form-item>
          <el-form-item label="Tags">
            <el-input v-model="itemModel.formModel.tags"></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button @click="onCancel">取消</el-button>
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'index',
  props: [],
  data() {
    return {
      index: [], 
      itemModel: {
        visible: false, 
        edit: false,
        formModel: {
          id: 0,
          title: '', 
          url: '', 
          description: '', 
          tags: '', 
          labels: []
        },
      },
      itemEditDialogVisible: false
    }
  },
  created() {
    this.updateItems();
  },
  methods: {
    // 刷新资源列表
    updateItems() {
      axios({
        method: "GET", 
        url: "/index/test",
      }).then((result) => {
        if (result.data.index != null) {
          this.index = result.data.index;
        }
      });
    },

    // 提交新资源
    addItem() {
      axios({
        method: "POST",
        url: "/index/test",
        headers: {
          "Content-Type": "application/json"
        },
        transformRequest: [(data) => {
          data = JSON.stringify(data);
          return data;
        }],
        withCredentials: true,
        data: {
          index: [ this.itemModel.formModel ]
        }
      }).then((result) => {
        this.updateItems();
        return result;
      });
    },

    // 修改一个资源
    modifyItem() {
      axios({
        method: "UPDATE", 
        url: "/index/test"
      });
    },

    // 重组资源顺序，用于界面显示排列
    sliceItems(items, n) {
      let row_number = Math.ceil(items.length / n);
      let new_items = [];
      for (let i = 0; i < row_number; ++i) {
        new_items.push(items.slice(i*n, (i+1)*n));
      }

      return new_items;
    }, 

    // 以下为按钮事件
    onAdd: function() {
      this.itemModel.edit = false;
      this.itemModel.visible = true;
    },
    onEdit: function() {
      this.itemModel.edit = true;
      this.itemModel.visible = true;
    },
    onSubmit: function() {
      this.itemModel.visible = false;
      if (this.itemModel.edit) {
        this.modifyItem();
      } else {
        this.addItem();
      }
    },
    onCancel: function() {
      this.itemModel.visible = false;
    }
  }
}
</script>

<style scoped>
  #index {
    width: 90%;
    margin: 0 auto;
  }
  .search-row {
    display: flex;
  }
  .search-button {
    margin-left: 12px;
  }
  .items-row {
    margin-bottom: 10px;
  }
  .item-logo {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .item-desc {
    font-size: 12px;
    color: darkgray;
    text-overflow: ellipsis;

    /* 自动隐藏超长字段 */
    overflow: hidden;
    white-space: nowrap;
    margin-top: 5px;
  }
  .item-tooltip-popper {
    max-width: 20px;
  }
</style>