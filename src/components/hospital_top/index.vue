<template>
    <div class="top-wrap">
        <div class="left" @click="goHome">珠珠球球系统</div>
        <div class="right">
            <el-button type="" text>帮助中心</el-button>
            <el-button type="" text>登录/注册</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
let $router = useRouter();

const goHome = () => {
    $router.push({path: '/home'})
}
</script>

<style scoped lang="scss">
.top-wrap {
    display: flex;
    justify-content: space-between;
    height: 70px;
    padding: 16px 24px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: rgb(92, 135, 241);

    .left {
        color: white;
        cursor: pointer;
    }
}
</style>