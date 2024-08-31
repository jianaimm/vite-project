<template>
    <div class="top-wrap">
        <div class="left" @click="goHome">珠珠球球系统</div>
        <div class="right">
            <a href="javascript:;" >帮助中心</a>
            <a href="javascript:void" @click="handleLogin">登录/注册</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useUserStore from '@/store/modules/user';

let userStore = useUserStore();
let $router = useRouter();

const goHome = () => {
    $router.push({path: '/home'})
}
const handleLogin = () => {
    userStore.loginVisible = true;
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
    align-items: center;

    .left {
        color: white;
        cursor: pointer;
        font-size: 24px;
        font-weight: bold;
    }
    .right {
        a {
            color: white;
            margin-left: 20px;
            text-decoration: none;
        }
    }
}
</style>