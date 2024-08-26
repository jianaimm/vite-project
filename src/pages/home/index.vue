<template>
    <div>
        <!-- 首页 -->
         <!--轮播图 -->
        <Carousel />
        <Search />
        <div class="main-wrap">
            <el-row :gutter="20">
                <el-col :span="20">
                    <Level @getLevel="getLevel" />
                    <Region @get-region="getRegion" />
                    <div class="hospital-wrap" v-if="hasHospitalArr.length">
                        <Card class="card-item" 
                        v-for="item in hasHospitalArr" :key="item.id"
                        :hospital-info="item"
                        />
                        <el-pagination
                            v-model:current-page="pageNo"
                            v-model:page-size="pageSize"
                            :page-sizes="[10, 20, 30, 40]"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            />
                    </div>
                    <el-empty v-else description="暂无数据" />
                </el-col>
                <el-col :span="4">
                    <Tip />
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import { reqHospital } from '@/api/home';
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import Tip from './tip/index.vue'

import type { Content, HospitalResponseData } from '@/api/home/type';
let pageNo = ref<number>(1);
let pageSize = ref<number>(10);
let hasHospitalArr = ref<Content>([])
let total = ref<number>(0);
let hostype = ref<string>('');
let districtCode = ref<string>('');

onMounted(() => {
    getHospitalInfo();
})
const getHospitalInfo = async () => {
    let res: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value, hostype.value, districtCode.value)
    if(res.code === 200) {
        hasHospitalArr.value = res.data.content;
        total.value = res.data.totalElements;
    }
}


const handleSizeChange = () => {
    pageNo.value = 1;
    getHospitalInfo();
}
const handleCurrentChange = () => {
    getHospitalInfo();
}
const getLevel = (level: string) => {
    hostype.value = level;
    getHospitalInfo();
}
const getRegion = (region: string) => {
    districtCode.value = region;
    getHospitalInfo();
}
</script>

<style scoped lang="scss">
.main-wrap{
    padding: 24px;
    box-sizing: border-box;
    .hospital-wrap {
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .card-item {
            width: 48%;
            margin-bottom: 10px;
        }
    }
}

</style>