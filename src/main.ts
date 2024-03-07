import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入svg插件
import 'virtual:svg-icons-register'
// 引入自定义插件对象，注册整个项目中的全局组件


const app = createApp(App)
// 引入自定义插件对象，注册整个项目中的全局组件
import globalComponent from './components/index'

app.use(globalComponent)

app.mount('#app')
