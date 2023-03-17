import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { RootObject } from "./type";

export const useStore =  defineStore('main',{
  state:()=>{
    let user:RootObject = {
      name:"年军",
      worker:"产品运营/前端开发",
      links:[
        { name:"电话", icon:"Phone",value:"18152528346" },
        { name:"邮箱", icon:"Message",value:"jun.nian@outloook.com" },
        { name:"学历", icon:"Collection",value:"全日制本科" },
        // { name:"github",icon:"Connection",value:"https://github.mocc114.com" },
        { name:"个人网站",icon:"Compass",value:"https://mocc124.github.io/junnian-blog" },
        { name:"工作年限",icon:"Timer",value:"1年" },
      ],
      bases:[
        {name:"基本技能",data:['HTML','CSS','ES6+','flex','Grid','Pug']},
        {name:"流行框架",data:['Vue2/3','Vuex','Pinia','Vue Router']},
        {name:"脚手架",data:['Vue-cli3','Vite',]},
        {name:"类库",data:['Element UI','Echarts','Vant','Bootstrap','iView','Tailwind CSS','Animate.css','Axios','Mock.js']},
        {name:"构建工具",data:['Webpack','Vite','Post CSS','Babel','npm']},
        {name:"服务端",data:['Express','Linux']},
        {name:"版本控制",data:['Git']},
      ],
      about:[
        "熟练使用数据分析（execl、spss）以及周边生态工具;",
        "熟悉流量分析工具（百度分析、Alexa）等流量工具检测网站流量负载、IP分布等信息并生成相应报表;",
        "掌握多人协作工具（石墨文档、飞书）和 Echarts、BDP 等可视化框架;",
        "熟练掌握 HTML5、CSS3 的基本使用以及常用的响应式布局，如 flex、grid、rem 等主流布局方案;",
        "对组件化开发和 SPA 应用有一定了解，能够使用主流框架如 Vue2/3 及其配套生态工具进行项目开发，并理解 MVVM 架构原理;",
        "熟悉 JS 模块化,并了解 Webpack、Vite 等构建工具,并进行基本配置;",
        "熟练使用原生 JS,并掌握作用域,原型,闭包,熟悉 ES6+ 规范;",
        "熟悉工厂模式、发布订阅模式、装饰器模式等常见的设计模式和通知机制;",
        "在生产开发环境中，可以使用 git flow 工作流帮助提高团队协作效率;",
        "熟悉 npm, yarn 等工具，并了解 npm 缓存原理;",
        "了解 Node.js 开发，并使用 Express 进行后台服务器的搭建和调试;",
        "熟悉 Linux 常用命令，了解 Nginx 基本部署和设置命令，如Nginx 负载均衡配置;",
      ],
      companyList:[
        {
          name:"陕西奥维立信电子科技有限公司",
          time:"2022.03-2023.02",
          intro:"为B端金融教育、能源、物流仓储企业提供有效的解决方案和优质服务。",
          content:"按照需求文档对产品功能进行剖析，配合后端实现数据交互，与产品经理共同协商，分析产品功能并负责相应模块的前端实现和文档部署。",
        },{
          name:"甘肃敦煌研究院分院",
          time:"2022.01-2023.03",
          intro:"是一家致力于文化遗产保护的综合性研究型事业单位。",
          content:"负责文档资料的收编归档、开列编制目录，以及活动、会议的筹备、内容记录汇总。",
        }
      ],
      projectList:[
        {
          id:"a1",
          name:"全民健康信息平台",
          skill:["Vue2","Element UI","Echarts","Axios","socket.io"],
          time:"3个月",
          difficulty:[
            "通用弹窗组件封装；",
            "使用 websoket 和降级方案获取预警列表并展示；",
            "项目打包上线时的性能优化；",
          ],
          intro:"此项目是一个基于居民健康档案，统一部署的区域医疗管理应用。系统主要包含健康档案管理模块、医疗卫生服务模块、疾病防控模块和妇幼医疗保健模块。",
          content: [
            "封装 Axios ，请求/响应拦截器中对接口进一步处理，便捷进行对api的请求;",
            "使用 canvas 完成签字组件;",
            "封装 Elemnt UI 基础组件，如 el-button、el-table 组件等以提高复用性;",
            "使用 Echarts 生成数据可视化组件，完成区域分析、医疗资源库存的散点图渲染，进而生成业务报表;",
            "通过 Vue Router 实现页面跳转切换并持久化存储，并在路由守卫中通过判断 localStorage 中是否存在 token 判断用户登录状态，未登录自动跳转登录页面;",
          ]
        },
        {
          id:"a2",
          name:"畅涟仓库管理系统",
          skill:["Vue2","Element UI","Echarts","swipper"],
          time:"3个月",
          difficulty:[
            "自定义指令 v-empty 、权限指令 v-permission 的封装；",
            "复杂表格表单组件联动；",
          ],
          intro:"此项目主要实现了大型仓储统一管理的后台应用项目。主要包含了货物展示模块、搜索查询模块、清单管理模块。",
          content: [
            "利用样式传统，深度定制 Element UI table组件，添加分页功能;",
            "通过后端返回 role 字段与路由 meta 信息判断用户权限，并动态渲染对应菜单栏和功能按钮;",
            "使用防抖对用户搜索行为进行优化，避免短时间内大量重复发送请求;",
            "使用拦截器记录用户操作日志，并进行权限校验;",
            "使用路由懒加载对项目进行优化，减少首屏渲染时间;",
            // "使用 lazy-loading 实现图片懒加载解决大量图片展示，造成白屏卡顿问题;",
          ]
        }, {
          id:"m1",
          name:"简历生成制作工具",
          skill:["Vue3","TypeScript","Element Plus","Pinia","Vite"],
          time:"1个月",
          difficulty:[
            "难点1"
          ],
          intro:"此项目采用了 Vue3 setup 模式和 TypeScript 开发，实现了快速生成、预览、导出文档功能。",
          content: [
            "二次封装 Element Plus 的 Card 组件，以提高组件复用性;",
            "使用 Pinia 进行全局状态管理，并利用 localStorage 进行持久化存储，解决全局状态刷新丢失问题;",
            "实现组件拖拽排序;",
          ]
        },
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

