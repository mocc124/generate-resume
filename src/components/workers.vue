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
        <el-container>
            <!-- <el-header style="text-align: right; font-size: 12px">
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>View</el-dropdown-item>
                                <el-dropdown-item>Add</el-dropdown-item>
                                <el-dropdown-item>Delete</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>Tom</span>
                </div>
            </el-header> -->
            <el-main>
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
                        placeholder="Please input"
                        class="input-with-select card-input"
                        >
                        <template #append>
                            <el-button @click="addProject">新增项目</el-button>
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
                </main>
                <!-- {{ item }} -->
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import { ref,reactive,onMounted,watch,toRaw} from 'vue'
import { Menu as IconMenu, Message, Setting, } from '@element-plus/icons-vue'
import { useStore } from "@/stores/counter";
import type { CompanyList } from "../stores/type";

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
let tableData = reactive<any[]>([])

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
    console.log(inputProjectName.value);
}



// ----------------
let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])

const handleTabsEdit = (targetName: string, action: 'remove' | 'add') => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}



</script>
  
<style scoped lang="less">
.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
.main-h {
    border-bottom: 1px solid #ccc;
    .card-input {
        padding: 0 10px;
        margin: 3px;
        box-sizing: border-box;
    }
}
.main-m {
    border-bottom: 1px solid #ccc;
    .card-input {
        // padding: 0 10px;
        margin: 3px;
        box-sizing: border-box;
    }
}
</style>