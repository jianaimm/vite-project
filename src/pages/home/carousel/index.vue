<template>
    <el-carousel height="350px">
            <el-carousel-item class="item-banner" v-for="item in 4" :key="item">
                <img src="../../../assets/1.png"
            </el-carousel-item>
        </el-carousel>
</template>

<script setup lang="ts">

</script>

<style scoped>
.item-banner {
    text-align: center;
}
</style>