import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Task1Detail from './views/Task1Detail .vue';
import Task2Detail from './views/Task2Detail .vue';
import Task3Detail from './views/Task3Detail .vue';

const routes = [
  {path: '/', name:'login', component: Login,
    beforeEnter: (to, from, next) => {
      if (confirm('Are you sure you want to Login?')) {
        next();
      }else {
        next(flase);
      }
    }
  },
  {path: '/home', name:'Home', component: Home},
  {path: '/Task1Detail/:id', name:'task1detail', component: Task1Detail},
  {path: '/Task2Detail/:id', name:'task2detail', component: Task2Detail},
  {path: '/Task3Detail/:id', name:'task3detail', component: Task3Detail}, 
]

  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  // router.beforeEach((to, from, next) => {
  //   const 
  // })
 
  export default router;