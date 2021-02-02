import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './lib/rem'
import 'animate.css'

/**element-ui 样式*/
import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.$bus = new Vue()

/**启动生产消息 禁止*/
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
