<template>
  <div id="bookmark">
    <h2>Bookmark</h2>
    <div id="website">
      <el-row>
        <el-col :span="4">
          <el-button @click="showAddItemDialog = true" icon="el-icon-plus"></el-button>
        </el-col>
        <el-col :offset="12" :span="8">
          <div class="search-row">
            <el-input class="search-input"></el-input>
            <el-button class="search-button" icon="el-icon-search"></el-button>
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row class="items-row" v-for="row_items in sliceItems(items, 4)" 
        :key="row_items.row" :gutter="12">
        <el-col v-for="item in row_items" :key="item.id" :span="6">
          <el-card shadow="hover">
            <el-image class="item-logo" :src="item.logo_url" fit="contain"></el-image>
            <span>{{ item.name }}</span>
            <div class="item-desc">{{ item.url }}</div>
            <div class="item-desc">{{ item.description }}</div>
          </el-card>
        </el-col>
      </el-row>
      <el-dialog title="Add" :visible.sync="showAddItemDialog">
        <el-form :model="itemFormModel">
          <el-form-item label="Name">
            <el-input v-model="itemFormModel.name"></el-input>
          </el-form-item>
          <el-form-item label="Uri">
            <el-input v-model="itemFormModel.uri"></el-input>
          </el-form-item>
          <el-form-item label="Description">
            <el-input v-model="itemFormModel.description"></el-input>
          </el-form-item>
        </el-form>
        <div>
          <el-button @click="showAddItemDialog = false">取消</el-button>
          <el-button type="primary" @click="showAddItemDialog = false;onAddItemFormSubmit();">确定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'bookmark',
  props: [],
  data: function() {
    return {
      items: [], 
      showAddItemDialog: false, 
      itemFormModel: {
        name: '', 
        uri: '', 
        description: ''
      }
    }
  },
  created: function() {
    this.onUpdateItems();
  },
  methods: {
    onUpdateItems: function() {
      axios({
        method: "GET", 
        url: "/api/bookmark/list",
      }).then((result) => {
        if (result.data && result.data.items) {
          this.items = result.data.items;
        }
      });
    },
    sliceItems: function(items, n) {
      let row_number = Math.ceil(items.length / n);
      let new_items = [];
      for (let i = 0; i < row_number; ++i) {
        new_items.push(items.slice(i*n, (i+1)*n));
      }

      return new_items;
    }, 
    onAddItemFormSubmit: function() {
      axios({
        method: "PUT",
        url: "/api/bookmark/add",
        headers: {
          "Content-Type": "application/json"
        },
        transformRequest: [function(data) {
          data = JSON.stringify(data);
          return data;
        }],
        withCredentials: true,
        data: this.itemFormModel
      }).then((result) => {
        this.onUpdateItems();
      });
    }
  }
}
</script>

<style scoped>
  #bookmark {
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