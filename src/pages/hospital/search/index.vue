<template>
    <div class="search">
       <h2 class="hosname">{{hospitalStore.hospitalInfo.hospital.hosname}}查询与取消</h2>
       <el-empty description="暂无信息" />
   </div>
</template>

<script lang="ts" setup>
import useDetailStore from '@/store/modules/hospitalDetail';
let hospitalStore = useDetailStore();
</script>

<style scoped lang="scss">
.search {
   .hosname {
       text-align: center;
       font-size: 30px;
       line-height: 1.2;
   }
}
</style>