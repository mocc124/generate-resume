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
          <CardVue title="个人优势">
            <template v-slot>
              <el-descriptions title="基础技能" :column=1>
                <el-descriptions-item v-for="item in user.bases" :label="item.name">
                  <el-tag v-for="value in item.data" class="tag">{{ value }}</el-tag>
                </el-descriptions-item>
              </el-descriptions>
              <el-descriptions title="个人总结" :column=1>
                <el-descriptions-item v-for="item in user.about">
                  {{ item }}
                </el-descriptions-item>
              </el-descriptions>
            </template>
          </CardVue>
          <CardVue title="工作经历">
            <el-descriptions v-for="item in user.companyList" :title="`${item.name}（${item.time}）`" :column=1>
              <el-descriptions-item label="简介">
                {{ item.intro }}
              </el-descriptions-item>
              <!-- <el-descriptions-item label="主要负责的项目">
                <ul>
                  <li v-for="list in item.projects">{{ list.name }}</li>
                </ul>
              </el-descriptions-item> -->
              <el-descriptions-item label="主要职责">
                {{ item.content }}
              </el-descriptions-item>
            </el-descriptions>
          </CardVue>
          <CardVue title="项目经历">
            <template v-slot>
              <el-descriptions v-for="item in user.projectList" :title="item.name" :column=1>
                <el-descriptions-item label="技术栈">
                  <el-tag size="small"  v-for="list in item.skill" class="card-skill-item">
                    {{ list }}
                  </el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="项目介绍">
                  {{ item.intro }}
                </el-descriptions-item>
                <el-descriptions-item label="项目周期">
                  {{ item.time }}
                </el-descriptions-item>
                <el-descriptions-item label="工作内容">
                  <ul>
                    <li v-for="(i,index) in item.content">{{ index+1 }}, {{ i }}</li>
                  </ul>
                </el-descriptions-item>
                <el-descriptions-item label="项目难点">
                  <ul>
                    <li v-for="(i,index) in item.difficulty">{{ index+1 }}, {{ i }}</li>
                  </ul>
                </el-descriptions-item>
                
              </el-descriptions>
            </template>
          </CardVue>
          <CardVue title="致谢" :show-hr=false>
            <el-descriptions>
              <el-descriptions-item>
                {{ user.thanks }}
              </el-descriptions-item>
            </el-descriptions>
          </CardVue>
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
  import CardVue from "./card.vue";

  let router = useRouter()

  const { user } = useStore()

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
    .tag {
      margin: 3px;
    }
  }
  </style>