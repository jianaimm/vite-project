<template>
    <div class="region">
        <div class="item">
            <span class="left">地区：</span>
            <ul class="right">
                <li :class="{active: activeFlag === ''}" @click="handleClick('')">全部</li>
                <li v-for="item in regionArr"
                 :key="item.value"
                  :class="{active: activeFlag === item.value}"
                 @click="handleClick(item.value)"
                 >{{ item.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {regionArr as hospitalRegionArr } from '@/api/home/data';
import type { HospitalLevelAndRegionArr } from '@/api/home/type';

let regionArr = ref<HospitalLevelAndRegionArr>(hospitalRegionArr);

let activeFlag = ref<string>('');

const $emit = defineEmits(['getRegion'])
const handleClick= (value:string ) => {
    activeFlag.value = value;
    $emit('getRegion', value)
}

</script>
<script lang="ts">
export default {
    name: 'Region'
}
</script>

<style scoped lang="scss">
.region {
    padding: 0 24px;
    .item {
        display: flex;
        padding: 16px 0;
        .left {
            flex-basis: 60px;
            flex-shrink: 0;
        }
        .right {
            display: flex;
            flex-wrap: wrap;
            li {
                padding-right: 16px;
                padding-bottom: 8px;
                &.active {
                    color: blue;
                }
                &:hover {
                    color: blue;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>