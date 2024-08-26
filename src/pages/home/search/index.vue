<template>
    <div class="search-wrap">
        <el-autocomplete
        v-model="hostname"
        style="width:40%"
        clearable
        class="inline-input w-50"
        placeholder="Please Input"
       :fetch-suggestions="querySearch"
       :trigger-on-focus="false"
       @select="handleSelect"
      />
      <el-button type="primary" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import {ref} from 'vue';
import { reqHospitalKey } from '@/api/home/index'
import type {HospitalKeyData } from '@/api/home/type';
import { useRouter } from 'vue-router';

let hostname = ref<string>('');

const querySearch = async (keyword: string, cb: any) => {
 
    let result: HospitalKeyData = await reqHospitalKey(keyword);

    console.log('33234',result);
    let showData = result.data.map(item => ({
        value: item.hosname,
        hoscode: item.hoscode,
        id: item.id
    }))

    cb(showData)
}

let $router = useRouter();
// 选中推荐项后，需要跳转到医院详情页
const handleSelect = (item: any) => {
    console.log('value',item);
    $router.push({
        path: '/hospital/register',
        query: {
            hoscode: item.hoscode
        }
    })
}

</script>

<style scoped>
.search-wrap {
    margin-top: 20px;
    text-align: center;
}
</style>