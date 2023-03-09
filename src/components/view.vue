<template>
    <div class="container">
      <header>
        <h1>{{user.name}} {{user.worker}}</h1>
        <ul>
          <li v-for="item in user.links" :key="user.name">
              <el-icon size="20" class="icon">
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.value }}</span>
          </li>
        </ul>
      </header>
      <main>
        <el-row>
        <el-col :span="2"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="20">
          <h2 class="main-title">个人优势</h2>
          <hr>
          <el-descriptions title="基础技能" :column=1>
            <el-descriptions-item  v-for="item in user.bases" :label="item.name">
              {{ item.data.join(' 、') }}
            </el-descriptions-item>
          </el-descriptions>
          <el-descriptions title="个人总结" :column=1>
            <el-descriptions-item v-for="item in user.about">
              {{item}}
            </el-descriptions-item>
          </el-descriptions>
          <h2 class="main-title">工作经历</h2>
          <hr>
          <el-descriptions v-for="item in user.companyList" :title="`${item.name}（${item.time}）`" :column=1>
            <el-descriptions-item label="公司简介">
              {{ item.intro }}
            </el-descriptions-item>
            <el-descriptions-item label="主要负责的项目">
              <ul>
                <li v-for="list in item.projects">{{ list.name }}</li>
              </ul>
            </el-descriptions-item>
            <el-descriptions-item label="工作内容">
              {{ item.content }}
            </el-descriptions-item>
          </el-descriptions>
          <h2 class="main-title">项目经历</h2>
          <hr>
          <el-descriptions v-for="item in user.projectList" :title="item.name" :column=1>
            <el-descriptions-item label="技术栈">
              <el-tag size="small"  v-for="list in item.skill" class="card-skill-item">
                {{ list }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="项目周期">
              {{ item.time }}
            </el-descriptions-item>
            <el-descriptions-item label="业绩">
              {{ item.content }}
            </el-descriptions-item>
            <el-descriptions-item label="项目难点">
              {{ item.difficulty }}
            </el-descriptions-item>
            <el-descriptions-item label="项目介绍">
              {{ item.intro }}
            </el-descriptions-item>
          </el-descriptions>
          <h2 class="main-title">致谢</h2>
          <!-- <hr> -->
          <el-descriptions>
            <el-descriptions-item>
              {{ user.thanks }}
            </el-descriptions-item>
          </el-descriptions>
        </el-col>
        <el-col :span="2"><div class="grid-content ep-bg-purple" /></el-col>
      </el-row>
      </main>
    </div>
    
  </template>
  
  <script lang="ts" setup>
  import { ref,reactive,toRaw,onMounted } from 'vue';
  import { useStore } from "@/stores/counter";
  import { useRouter } from "vue-router";

  let router = useRouter()
  const {user} = useStore()

  onMounted(()=>{
    initEnter()
  })
  const initEnter = ()=>{
    document.addEventListener('keyup',e=>{
      if(e.key === 'Enter') router.push({name:"edit"})
    })
  }
  </script>
  
  <style scoped lang="less">
  .container,.common-layout {
    margin: 0 auto;
    header{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 16px 0;
        li {
          margin: 0 16px;
        }
        li .icon {
          position: relative;
          top:0.3rem;
          margin-right: 8px;
        }
      }
    }
    main {
      .card-skill-item {
        margin: 0 10px;
      }
    }
  }
  </style>