import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { RootObject } from "./type";

export const useStore =  defineStore('main',{
  state:()=>{
    let user:RootObject = {
      name:"姓名",
      worker:"工作",
      links:[
        { name:"电话", icon:"Phone",value:"14678291021" },
        { name:"邮箱", icon:"Message",value:"jun.nian@outloook.com" },
        { name:"学历", icon:"Collection",value:"全日制小学" },
        { name:"github",icon:"Connection",value:"https://github.mocc114.com" },
        { name:"工作年限",icon:"Timer",value:"1.5年" },
      ],
      bases:[
        {name:"前端开发",data:['HTML','CSS','ES6+','flex','Grid']},
        {name:"前端框架",data:['Vue2（Vue-router+Vuex）','Vue3（Pinia+Vite）','jQuery','Pug']},
        {name:"前端脚手架",data:['Vue-cli3','Vite',]},
        {name:"前端类库",data:['Echarts','vant','Bootstrap','iView','Tailwind CSS','Animate.css']},
        {name:"构建工具",data:['Webpack','Vite','Post CSS','Babel','npm']},
        {name:"服务端",data:['Express']},
        {name:"版本控制",data:['Git']},
      ],
      about:[
        "熟练使用 HTML 和 CSS,包括 Less、Sass、Stylus等预编译,熟悉 flex、rem等布局方案;",
        "熟练使用 Vue 框架及其配套生态工具进行项目开发包括 Vuex、Vue-router 等,理解其响应式原理;",
        "熟悉模块化,组件化,工程化开发的模式,了解 Webpack,Vite 基本使用,并进行简单的配置;",
        "熟练使用原生 JS,掌握作用域,原型,闭包,熟悉 ES6+规范,块级作用域,箭头函数,Promise 等;",
      ],
      companyList:[
        {
          name:"A公司技术部",
          time:"2020.03-0022.11",
          intro:" 这是一家xxx类型公司",
          projects:[
            {id:"5df3",name:"ttt项目"}
          ],
          content:" 实现美工设计图、前端代码实现（JS、CSS和HTML）和后台接口连调等。",
        },{
          name:"B公司研发部",
          time:"2020.03-0022.11",
          intro:" 这是一家xxx类型公司",
          projects:[
            {id:"fg0f",name:"xxx项目"},
            {id:"48n3",name:"yyy项目"},
          ],
          content:" 实现设计图、xxx等。",
        }
      ],
      projectList:[
        {
          id:"fg0f",
          name:"xxx项目",
          skill:["Vue3","Pinia","Vite","Echarts"],
          time:"3个月",
          difficulty:"项目难点在于xxx模块的通信复杂",
          intro:"一个基于vue-cli扩展的多页面单页面可分开打包，可整体打包，可指定模块打包的综合型中台服务。",
          content:"业绩：封装全局搜索/loading组件"
        },
        {
          id:"48n3",
          name:"yyy项目",
          skill:["Vue3","Pinia","Vite","Echarts"],
          time:"3个月",
          difficulty:"项目难点在于xxx模块的通信复杂",
          intro:"一个基于vue-cli扩展的多页面单页面可分开打包，可整体打包，可指定模块打包的综合型中台服务。",
          content:"业绩：封装全局搜索/loading组件"
        },{
          id:"5df3",
          name:"ttt项目",
          skill:["Vue3","Pinia","Vite","Echarts"],
          time:"3个月",
          difficulty:"项目难点在于xxx模块的通信复杂",
          intro:"一个基于vue-cli扩展的多页面单页面可分开打包，可整体打包，可指定模块打包的综合型中台服务。",
          content:"业绩：封装全局搜索/loading组件"
        }
      ],
      thanks:"和有想法的人做有意义有挑战的事，做更优秀的人，永远年轻热情！感谢您花时间阅读我的简历，在此殷切期待能有机会和您共事。~~~~"
    }
    return { user }
  },
  getters:{
  },
  actions:{
    changeUser(name:String,value:any){
      return {name,value}
    } 
  }
}) 

