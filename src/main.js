import Vue from "vue";
import App from "./App.vue";
// 引入路由模块
import VueRouter from "vue-router";
// 引入路由表
import { routes } from "./routes";

// 引入组件进行全局注册
import Home from "./views/Home";
import Products from "./views/Products";

// 使用路由模块，这个不要忘了
Vue.use(VueRouter);

// 创建VueRouter路由模块实例
const router = new VueRouter({
  routes: routes
});

// 全局注册
Vue.component("Home", Home);
Vue.component("Products", Products);

// 在Vue中使用这个router
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
