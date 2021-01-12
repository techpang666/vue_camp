import Vue from 'vue'
// * 解锁项目进行体验
// import App from './App.vue'
// * 测试项目
import App from '../src/views/test.vue'
// * 群收款
import App from '../src/views/test.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
