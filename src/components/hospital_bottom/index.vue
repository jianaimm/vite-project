<template>
    <div class="bottom-wrap">
我是底部
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.bottom-wrap {
    display: flex;
    justify-content: space-between;
    height: 70px;
    padding: 16px 24px;
    position: fixed;
   bottom: 0;
   left: 0;
    right: 0;
   z-index: 9999;
   background-color: bisque;
}
</style>