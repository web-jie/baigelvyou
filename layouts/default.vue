<template>
  <div>
    <!-- 头部组件 -->
    <Header/>
    <!-- nuxt就是router-view -->
    <nuxt />

  </div>
</template>

<script>
// 导入头部组件
import Header from "@/components/header"
export default {
   // 注册组件
  components: {
    Header
  }
}
</script>

<style lang="less">
*{
  margin:0; 
  padding:0;
}
ul, li, ol{
  list-style:none;
}
a{
  text-decoration:none;
  color:inherit;
}
a:hover{

}
em,i{
  font-style: normal;
}
</style>
