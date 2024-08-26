<script setup lang="ts">


</script>

<template>
  <div class="app">
    <HospitalTop />
    <div class="content">
      <router-view></router-view>
    </div>
   
    <HospitalBottom />
  </div>
</template>

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
