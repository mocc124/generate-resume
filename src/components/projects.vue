<template>
<div class='container'>
    {{ data }}
    <div class="top"></div>
    <ul>
        <li v-for="item in data">{{ item.name }}</li>
    </ul>
    <div class="main"></div>
</div>
</template>

<script setup lang='ts'>
import { ref,reactive,onMounted } from 'vue';
import type{ ProjectList } from "../stores/type";

let props = defineProps({
    data:{
        type:Array
    }
})
</script>

<style scoped>

</style>