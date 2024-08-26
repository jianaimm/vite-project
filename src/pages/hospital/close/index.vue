<template>
     <div class="close">
        <h2 class="hosname">{{hospitalStore.hospitalInfo.hospital.hosname}}停诊信息</h2>
        <el-empty description="暂无信息" />
    </div>
</template>

<script lang="ts" setup>
import useDetailStore from '@/store/modules/hospitalDetail';
let hospitalStore = useDetailStore();
</script>

<style scoped lang="scss">
.close {
    .hosname {
        text-align: center;
        font-size: 30px;
        line-height: 1.2;
    }
}
</style>