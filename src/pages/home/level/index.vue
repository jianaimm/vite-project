<template>
    <div class="level">
        <h3>医院</h3>
        <div class="item">
            <span class="left">等级：</span>
            <ul class="right">
                <li :class="{active: activeFlag === ''}" @click="handleClick('')">全部</li>
                <li v-for="item in levelArr"  :key="item.value"
                :class="{active: activeFlag === item.value}"
                @click="handleClick(item.value)"
                >{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {HospitalLevelAndRegionArr } from '@/api/home/type';
import { levelArr as levelArrList } from '@/api/home/data';

let levelArr = ref<HospitalLevelAndRegionArr>(levelArrList);
let activeFlag = ref<string>('');

onMounted(() => {
    getLevel();
})

const getLevel = async()=> {
    // let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('Hostype');
    // console.log('result',result)
    // if(result.code === 200) {
    // levelArr.value = result.data;
    // }
  
}
const $emit = defineEmits(['getLevel']);
const handleClick= (value:string ) => {
    activeFlag.value = value;
    $emit('getLevel', value)
}

</script>
<script lang="ts">
export default {
    name: 'Level'
}
</script>

<style scoped lang="scss">
.level {
    padding: 24px 24px 0;
    .item {
        display: flex;
        padding: 16px 0;
        .left {
            flex-basis: 60px;
            flex-shrink: 0;
        }
        .right {
            display: flex;
            li {
                padding-right: 16px;
                &.active {
                    color: blue;
                }
                &:hover {
                    color:blue;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>