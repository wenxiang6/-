<template>
  <div class="login-on">
    <img src="@/pic/QR.png" alt="" class="QR">
    <div class="header">
      <img src="@/pic/logo.png" alt="">
      <h3>锋美CRM店铺管家</h3>
    </div>

    <el-form :model="form" style="width: 320px;" label-width="" :rules="formRules" size="large" ref="formRef">
      <el-form-item label="" prop="user">
        <el-input :prefix-icon="User" placeholder="请输入用户名"  v-model="form.user"  />
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input :prefix-icon="Lock" placeholder="请输入密码"  v-model="form.password" />
      </el-form-item>

      <el-form-item class="button-group">
        <el-button type="danger" @click="onSubmit">登录</el-button>
      </el-form-item>

    </el-form>



  </div>
</template>

<script setup>
import { User,Lock } from '@element-plus/icons-vue'
const formRef=ref();

const form = reactive({
  user: "神龙教主",
  password: "admin888"
})
const formRules = {
  user: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
};

function onSubmit() {
  console.log(form);
}
</script>

<style scoped>
.login-on {
  width: 50%;
  max-width: 500px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px;
  box-sizing: border-box;
  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.QR {
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  width: 30px;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header h3 {
  font-weight: normal;
  font-size: 36px;
  margin: 24px;
}

button{
  width: 100%;
}
</style>