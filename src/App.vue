<template>
  <div id="app">
    <!-- 组件的链接用 router-link 表示 -->
    <!-- <div>
      <router-link to="/home">THIS IS TO HOME</router-link>
    </div>
    <div>
      <router-link to="/products">THIS IS TO PRODUCTS</router-link>
    </div> -->
    <ul class="nav nav-tabs">
      <li role="presentation"><router-link to="/home">HOME</router-link></li>
      <li role="presentation"><router-link to="/products/1">PRODUCTS 1</router-link></li>
    </ul>
    <!-- 组件的视图用 router-view 表示 -->
    <!-- router-view 放在哪，路由组件就显示在哪 -->
    <div id="router_view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  #router_view{
    border:2px solid tomato;
  }
</style>
