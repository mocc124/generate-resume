<template>
<div class="common-layout container">
    <el-container>
    <el-header class="header">
        <el-page-header @back="goBack">
            <template #content>
                <span class="text-large font-600 mr-3"> 编辑页 </span>
            </template>
        </el-page-header>
    </el-header>
    <el-main class="main">
        <!-- 基本信息 -->
        <el-card class="main-card message">
            <template #header>
                <div class="card-header">
                    <span>基础信息</span>
                    <el-button class="button">保存</el-button>
                </div>
            </template>
            <el-row :gutter="20">
                <el-input v-model="user.name" placeholder="Please input" class="card-input">
                    <template #prepend>姓名</template>
                </el-input>
                <el-input v-model="user.worker" placeholder="Please input" class="card-input">
                    <template #prepend>职位</template>
                </el-input>
                <el-input v-for="item in user.links" v-model="item.value" placeholder="Please input" class="card-input">
                    <template #prepend>{{ item.name }}</template>
                </el-input>
            </el-row>
        </el-card>
        <!-- 基础技能 -->
        <el-card class="main-card bases" >
            <template #header>
                <div class="card-header">
                    <span ref="box" data-show=-1>基础技能</span>
                    <el-button @click="onAddItem">添加</el-button>
                </div>
            </template>
            <el-table :data="user.bases" style="width: 100%" max-height="500" class="card-bases">
                <el-table-column fixed prop="name" label="名称" width="150" >
                    <template #default="scope">
                        <span v-if="!scope.row.edit">{{ scope.row.name }}</span>
                        <span v-else>
                            <el-input v-model="scope.row.name" placeholder="Please input" />
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="data" label="值" >
                    <template #default="scope">
                        <span>
                            <el-tag v-for="item in scope.row.data" id="bases-item">{{ item }}</el-tag>
                        </span>
                        <span  v-if="scope.row.edit" class="">
                            <el-input 
                            v-model="inputBases" 
                            style="max-width:180px;margin: 0 5px;" 
                            placeholder="Please input bases"  
                            @change="mychange(scope.$index)">
                            </el-input>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作栏" width="120">
                    <template #default="scope">
                        <span v-if="!scope.row.edit">
                            <el-button link type="success" size="small" @click.prevent="editRow($event,scope.$index)" >编辑</el-button>
                            <el-button link type="warning" size="small" @click.prevent="deleteRow(scope.$index)" >移除</el-button>
                        </span>
                        <span v-else>
                            <el-button link size="small" @click.prevent="saveRow(scope.$index)">保存</el-button>
                        </span>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <!-- 个人总结 -->
        <el-card class="main-card about">
            <template #header>
                <div class="card-header">
                    <span>个人总结</span>
                    <el-button class="button" @click="addAboutItem">添加</el-button>
                </div>
            </template>
            <el-row :gutter="20">
                <el-input
                    v-for="(item,index) in user.about" 
                    v-model="user.about[index]"  
                    autosize
                    type="textarea"
                    placeholder="Please input"
                    class="item"
                />
            </el-row>
        </el-card>
        <!-- 工作经历 -->
        <el-card class="main-card message">
            <template #header>
                <div class="card-header">
                    <span>工作经历</span>
                    <el-button class="button">添加</el-button>
                </div>
            </template>
            <el-row :gutter="20">
                <workersVue ></workersVue>
            </el-row>
        </el-card>
        <!-- 项目经历 -->
        <el-card class="main-card message">
            <template #header>
                <div class="card-header">
                    <span>项目经历</span>
                    <el-button class="button">添加</el-button>
                </div>
            </template>
            <el-row :gutter="20">
                
            </el-row>
        </el-card>
        后面的内容
    </el-main>
    <!-- 返回顶部 -->
    </el-container>
    <el-backtop :bottom="80" :right="100">
      <div class="toTop">
        <el-icon><ArrowUpBold /></el-icon>
      </div>
    </el-backtop>
</div>
  </template>

<script setup lang='ts'>
import { ref,reactive,onMounted ,toRaw,nextTick } from 'vue';
import { useStore } from "@/stores/counter";
import { useRouter } from "vue-router";
import workersVue from "./workers.vue";

const router = useRouter()
let { user } = useStore()
const inputBases = ref('')

const goBack = ()=>{
    router.push({name:"view"})
}
// 列表项操作
const deleteRow = (index: number) => {
  user.bases.splice(index, 1)
}
const editRow = (e:HTMLElement,index:number)=>{
    user.bases.forEach((item,i)=>{
        i===index?user.bases[index].edit = true:delete user.bases[i].edit
    }) 
}
const saveRow = (index: number)=>{
    delete user.bases[index].edit  
}
const onAddItem = () => {
    user.bases.push({
        name:"xxx",
        data:[]
    })
}
const mychange =(index:number)=>{
    user.bases[index].data.push(inputBases.value)
    inputBases.value = ''
}
const addAboutItem = ()=>{
    user.about.push('')
}
</script>

<style scoped lang="less">
.header {
    display: flex;
    align-items: center;
    font-size: 26px;
    border-bottom: 1px solid #222;
}

.main {
    background-color: #eee;
    .main-card {
        margin: 14px 0;
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .card-input {
            margin: 2px 0;
        }
    }
    .bases #bases-item{
        margin: 5px;
    }
    .about .item {
        margin: 5px 0 ;
    }
}

.toTop {
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 45px;
    overflow: hidden;
  }
</style>