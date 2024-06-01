<template>
  <h1>角色列表</h1>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <el-input
      style="width: 240px"
      size="small"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
</template>

<script lang="ts" setup>

import { Search } from '@element-plus/icons-vue'
</script>