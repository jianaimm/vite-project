<template>
    <div class="hospital">
        <!-- 左侧导航 -->
        <div class="menu">
            <div class="top">
                <el-icon><HomeFilled /></el-icon>
                / 医院详情
            </div>
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
            >
            
                <el-menu-item index="/hospital/register" @click="toJump('/hospital/register')">
                <el-icon><icon-menu /></el-icon>
                <span>预约挂号</span>
                </el-menu-item>
                <el-menu-item index="/hospital/detail"  @click="toJump('/hospital/detail')">
                <el-icon><document /></el-icon>
                <span>医院详情</span>
                </el-menu-item>
                <el-menu-item index="/hospital/notice" @click="toJump('/hospital/notice')">
                <el-icon><setting /></el-icon>
                <span>预约须知</span>
                </el-menu-item>
                <el-menu-item index="/hospital/close"  @click="toJump('/hospital/close')">
                <el-icon><Location /></el-icon>
                <span>停诊信息</span>
                </el-menu-item>
                <el-menu-item index="/hospital/search" @click="toJump('/hospital/search')">
                <el-icon><setting /></el-icon>
                <span>查询/取消</span>
                </el-menu-item>
            </el-menu>
        </div>
        <!-- 右侧内容 -->
        <div class="content">
            <router-view></router-view>
         </div>
    </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  HomeFilled,
 
} from '@element-plus/icons-vue';
import { onMounted } from 'vue';
import useDetailStore from '@/store/modules/hospitalDetail';
let detailStore = useDetailStore();

import { useRouter, useRoute } from 'vue-router';

let $router = useRouter();
let $route = useRoute();

const toJump = (path: string) => {
    $router.push({
        path,
        query: {
            hoscode: $route.query.hoscode
        }
    })
}

// pinia存储医院详情
onMounted(() => {
    // 医院详情
    detailStore.getHospital($route.query.hoscode as string)
    // 医院科室
    detailStore.getDepart($route.query.hoscode as string);
})

</script>

<style scoped lang="scss">
.hospital {
    display: flex;
    margin-top: 16px;
    .menu {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content {
        flex: 8;
    }
}
</style>