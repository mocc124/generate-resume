<template>
    <el-container class="layout-container-demo" style="height: 500px">
        <el-aside width="200px">
            <el-scrollbar>
                <el-menu>
                    <el-menu-item v-for="(item,index) in user.companyList" :index="String(index)" @click="selest(index)" :key="index">
                        <el-icon><icon-menu /></el-icon>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-container >
            <el-main style="overflow-x:hidden">
                <header class="main-h">
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
                    <el-row :gutter="20">
                        <el-input
                        v-model="inputProjectName"
                        placeholder="请输入新增项目名"
                        class="input-with-select card-input"
                        >
                        <template #append>
                            <el-button @click="addProject()">新增项目</el-button>
                        </template>
                        <template #prepend>
                            <el-select v-model="selectProject" filterable placeholder="请选择项目">
                                <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                                />
                            </el-select>
                        </template>
                        </el-input>
                    </el-row>
                </header>
                <main class="main-m"> 
                    <!-- {{ tableData }} -->
                    <div v-if="tableData[0]&&selectProject" class="main-m-box">
                        <el-row :gutter="20">
                            <el-input v-model="tableData[0].name" placeholder="Please input" class="card-input">
                                <template #append>项目名称</template>
                            </el-input>
                        </el-row>
                        <el-row :gutter="20">
                            <el-input v-model="tableData[0].intro" placeholder="Please input" class="card-input" ize="large">
                                <template #append>项目简介</template>
                            </el-input>
                        </el-row>
                        <el-row :gutter="20">
                            <el-input v-model="tableData[0].time" placeholder="Please input" class="card-input" ize="large">
                                <template #append>项目周期</template>
                            </el-input>
                        </el-row>
                        <el-row :gutter="20">
                            <el-input v-model="tableData[0].difficulty" placeholder="Please input" class="card-input">
                                <template #append>项目难点</template>
                            </el-input>
                        </el-row>
                        <el-row :gutter="20">
                            <el-input v-model="tableData[0].content" placeholder="Please input" class="card-input" ize="large">
                                <template #append>项目业绩</template>
                            </el-input>
                        </el-row>
                        <el-row :gutter="20" style="padding:3px 14px">
                            <span>
                                <el-tag v-for="item in tableData[0].skill" id="bases-item"
                                style="margin:3px"
                                >{{ item }}</el-tag>
                            </span>
                            <span>
                                <el-input 
                                v-model="inputSkill" 
                                style="max-width:180px;margin: 0 5px;" 
                                placeholder="技术栈"  
                                @change="mychange"
                                >
                                </el-input>
                            </span>
                        </el-row>
                    </div>
                </main>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import { ref,reactive,onMounted,watch,toRaw} from 'vue'
import { Menu as IconMenu, Message, Setting, } from '@element-plus/icons-vue'
import { useStore } from "@/stores/counter";
import type { CompanyList,ProjectList } from "../stores/type";

let {user} = useStore()
type Item = {
    data:CompanyList
}
let selectProject = ref('')
watch(selectProject, (newVal, oldVal) => {
    if(!(newVal==='')) {
        let get = user.projectList.filter(project=>{
            if(project.id===newVal) {
                return project
            }
        })
        tableData.splice(0,tableData.length,...get)
    }
})
let inputProjectName = ref('')
let item = reactive<Item>({
    data:{
        name:"",
        intro:"",
        projects:[],
        time:"",
        content:""
    }
})
let options = [
  {
    id: 'Option1',
    name: 'Option1',
  }
]
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
    options = toRaw(user.companyList[index].projects)
    initItem(index)
}
const addProject = ()=>{
    if(inputProjectName.value==='') {
        console.error("参数为空");
        return false
    }
    let id = Math.random().toString(36).slice(2,)

    item.data.projects.push({id,name:inputProjectName.value})
    user.projectList.push({
        id,
        name:inputProjectName.value,
        skill:[],
        time:"[]个月",
        difficulty:"项目难点在于[]",
        intro:"这是一个基于[]扩展的[]的综合型服务。",
        content:"封装了、减少了、降低了、加快了..."
    })
    
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

.main-h {
    box-sizing: border-box;
    .card-input {
        padding: 0 10px;
        margin: 3px;
        box-sizing: border-box;
    }
}
.main-m {
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    .card-input {
        padding: 0 10px;
        margin: 3px;
        box-sizing: border-box;
    }
    .main-m-box {
        display: inline-block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 5px;
        box-sizing: border-box;
    }
}
</style>