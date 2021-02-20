<template>
  <div id="app">
    <!-- 组件的链接用 router-link 表示 -->
    <div>
      <router-link to="/home">THIS IS TO HOME</router-link>
    </div>
    <div>
      <router-link to="/products">THIS IS TO PRODUCTS</router-link>
    </div>
    <!-- 组件的视图用 router-view 表示 -->
    <!-- router-view 放在哪，路由组件就显示在哪 -->
    <div>
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
