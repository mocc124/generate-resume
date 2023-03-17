<template>
    <el-container class="layout-container-demo">
        <el-aside width="200px">
            <el-scrollbar>
                <el-menu>
                    <el-menu-item v-for="(item,index) in user.companyList" :index="String(index)" @click="selest(index)" :key="index">
                        <!-- <el-icon><icon-menu /></el-icon> -->
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-container >
            <el-main style="overflow-x:hidden">
                <div class="main-box">
                    <el-row :gutter="20">
                        <el-input v-model="item.data.name" placeholder="Please input" class="card-input">
                            <template #append>名称</template>
                        </el-input>
                    </el-row>
                    <el-row :gutter="20">
                        <el-input v-model="item.data.intro" placeholder="Please input" class="card-input">
                            <template #append>简介</template>
                        </el-input>
                    </el-row>
                    <el-row :gutter="20">
                        <el-input v-model="item.data.time" placeholder="Please input" class="card-input">
                            <template #append>入职时间</template>
                        </el-input>
                    </el-row>
                    <el-row :gutter="20">
                        <el-input v-model="item.data.content" placeholder="Please input" class="card-input">
                            <template #append>工作内容</template>
                        </el-input>
                    </el-row>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import { ref,reactive,onMounted,watch,toRaw} from 'vue'
import { Menu as IconMenu, Message, Setting, } from '@element-plus/icons-vue'
import { useStore } from "@/stores/counter";
import type { CompanyList,ProjectList } from "../stores/type";

let { user } = useStore()
type Item = {
    data:CompanyList
}
let selectProject = ref('')

let item = reactive<Item>({
    data:{
        name:"",
        intro:"",
        projects:[],
        time:"",
        content:""
    }
})
let tableData = reactive<ProjectList[]>([])
let inputSkill = ref('')

onMounted(()=>{
    // 页面加载完成默认选中第一项公司项
    selest(0)
})

const initItem = (index:number)=>{
    item.data = user.companyList[index]
}
const selest =(index:number = 0)=>{
    selectProject.value = ''
    // options = toRaw(user.companyList[index].projects)
    initItem(index)
}
const mychange = (value:string)=>{
    tableData[0].skill.push(value)
    inputSkill.value = ''
}
</script>
  
<style scoped lang="less">
.layout-container-demo .el-main {
    padding: 0 .5rem;
}

.main-box {
    box-sizing: border-box;
    overflow: hidden;
    .card-input {
        padding: 0 10px;
        margin: 3px;
        box-sizing: border-box;
    }
}
.el-menu-item {
    overflow: hidden;
}
</style>