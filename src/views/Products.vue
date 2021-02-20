<template>
  <div>
      THIS IS PRODUCTS LIST  {{ id }}
  </div>
</template>

<script>
export default {
    name: "Products",
    data:function(){
        return {
            id: this.$route.params.id
        }
    },
    // 加载完之后执行 created
    // 实现加载完之后发送 axios 请求，从后端拿到需要的数据
    created: function(){
        console.log(this.id)
    }
}
</script>

<style>

</style>