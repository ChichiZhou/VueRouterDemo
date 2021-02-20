import Vue from "vue";
import App from "./App.vue";
// 引入路由模块
import VueRouter from "vue-router";
// 引入路由表
import { routes } from "./routes";

// 使用路由模块，这个不要忘了
Vue.use(VueRouter);

// 创建VueRouter路由模块实例
const router = new VueRouter({
  routes: routes
});

// 在Vue中使用这个router
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
