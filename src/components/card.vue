<template>
<div class='container'>
    <h2 class="main-title">{{ title }}</h2>
    <hr v-if="showHr"/>
    <slot></slot>
</div>
</template>

<script setup lang='ts'>
import { ref,reactive,onMounted,defineProps } from 'vue';

defineProps({
    title: {
        type: String,
        default:"默认标题"
    },
    showHr: {
        type:Boolean,
        default:true
    }
})

</script>

<style scoped>

</style>