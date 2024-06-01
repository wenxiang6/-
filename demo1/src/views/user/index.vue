<template>
  <div class="user">
    <el-table :data="userList.list" style="height: 700px;" :border="true">
      <el-table-column type="selection" width="60" />
      <el-table-column label="编号" prop="user_id" width="200"></el-table-column>
      <el-table-column label="所属角色" prop="role_name" width="200"></el-table-column>
      <el-table-column label="姓名" prop="username" width="200"></el-table-column>
      <el-table-column label="头像" width="200">
        <template #default="{ row }">
          <img :src="row.avatar" alt="" width="80">
        </template>
      </el-table-column>
      <el-table-column label="卡号" prop="title" width="200"></el-table-column>
      <el-table-column label="余额" prop="title" width="200"></el-table-column>
      <el-table-column label="坐标" prop="title" width="200"></el-table-column>
      <el-table-column label="坐标地址" prop="title" width="200"></el-table-column>
      <el-table-column label="创建于" prop="created_at" width="200"></el-table-column>
      <el-table-column label="更新于" prop="updated_at" width="200"></el-table-column>
      <el-table-column label="操作" prop="title" width="300" fixed="right" align="center">
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="success" :icon="Check" circle />
          <el-button type="info" :icon="Message" circle />
          <el-button type="warning" :icon="Star" circle />
          <el-button type="danger" :icon="Delete" circle />
        
      </el-table-column>
    </el-table>

    <!-- 分页符 -->
    <el-pagination
      v-model:current-page="formData.pagenum"
      v-model:page-size="formData.pagesize"
      :page-sizes="[100, 200, 300, 400]"  
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import userList from '@/mock/userList';
const tableData = {
  list: userList.list,
  total: userList.total
}
const formData = {
  pagenum: 1,
  pagesize: 10
}


const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>