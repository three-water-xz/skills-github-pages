import { createWebHistory, createRouter } from "vue-router";//引入

//引入路由
import Hardware from "../components/Hardware.vue";
import Software from '../components/Software.vue';

//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/hardware',
            component: Hardware,
            name: 'hardware'
        },
        {
            path:'/software',
            component: Software,
            name: 'software'
        }
    ]
})

export default router;