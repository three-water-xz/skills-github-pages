import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app=createApp(App);//创建vue实例

app.use(router);
app.mount('#app');