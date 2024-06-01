<template>
  <div class="login">
    <LoginOn/>
  </div>
</template>

<script setup>

</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url('@/pic/loginBackground.png');
  background-size: cover;
  /* 背景图像缩放以完全覆盖元素 */
  background-position: center;
  /* 背景图像居中 */
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>
