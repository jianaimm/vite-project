<template>
  <div class="app">
    <!-- 顶部 -->
    <HospitalTop />
    <!-- 内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
   <!-- 底部 -->
    <HospitalBottom />
    <!-- 登录组件 -->
     <Login />
  </div>
</template>

<script setup lang="ts">



</script>

<style scoped>
.app {
  .content {
    margin-top: 70px;
    height: 690px;
    margin-bottom: 70px;
    overflow-y: auto;
  }
}
</style>
