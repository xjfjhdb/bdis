import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'

const app = createApp(App)

// 仅在开发环境启动 Mock 服务
if (import.meta.env.DEV) {
  import('./mocks/handlers').then(({ handlers }) => {
    // 注意：MSW 2.x 必须从 msw/browser 导入
    import('msw/browser').then(({ setupWorker }) => {
      const worker = setupWorker(...handlers)
      worker.start({
        onUnhandledRequest: 'bypass', // 忽略未拦截的请求
      }).then(() => {
        console.log('✅ MSW Mock 服务已启动')
        mountApp()
      }).catch(err => {
        console.error('❌ MSW 启动失败:', err)
        mountApp() // 即使失败也要挂载应用
      })
    })
  })
} else {
  mountApp()
}

function mountApp() {
  app.use(router)
  app.use(ElementPlus)
  app.mount('#app')
}