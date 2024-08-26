<template>
    <div>
        <el-card style="max-width: 480px" @click="goDetail">
            <div style="cursor: pointer">
                <p >{{ hospitalInfo.hosname }}</p>
                <p class="info">
                    <span>{{ hospitalInfo.param?.hostypeString }}</span>
                    <span>{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
                </p>
            </div>
           
        </el-card>
    </div>
</template>

<script setup lang="ts">
let props = defineProps(['hospitalInfo'])
import { useRouter } from 'vue-router';

let $router = useRouter();

const goDetail = () => {
    
    $router.push({
        path: '/hospital/register',
        query: {
            hoscode: props.hospitalInfo.hoscode
        }
    })
}
</script>

<style scoped>
.info {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}
</style>