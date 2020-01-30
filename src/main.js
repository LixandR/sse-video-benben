import Vue from 'vue'
import App from '@/App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '@/assets/icon/iconfont.css'
import store from "@/store"
import router from '@/router'
import utils from '@/util';
import '@/assets/css/login.min.css'
Vue.config.productionTip = false
Vue.prototype.utils = utils
Vue.use(ElementUI, {
  locale
});
new Vue({
  el: '#app',
  router,
  store: store,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')