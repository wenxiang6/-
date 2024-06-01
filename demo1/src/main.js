
// 导入UI组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPresist from "pinia-plugin-persistedstate"

import zhCn from 'element-plus/es/locale/lang/zh-cn'



const app = createApp(App)

for(var [key,component] of Object.entries(ElementPlusIconsVue)){
  app.component(key,component);
}

var pinia=createPinia();
pinia.use(piniaPresist);
app.use(pinia)
app.use(router)
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
