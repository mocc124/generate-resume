import {createRouter,createWebHashHistory,type RouteRecordRaw} from "vue-router"

let routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"view",
        component:()=>import('@/components/view.vue')
    },
    {
        path:"/edit",
        name:"edit",
        component:()=>import('@/components/edit.vue')
    }
]

let router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    // console.log(from,to);
    next()
})

export default router
