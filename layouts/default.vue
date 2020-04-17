<template>
  <div>
    <!-- 头部组件 -->
    <Header/>
    <!-- nuxt就是router-view -->
    <nuxt />
<!-- 页脚组件 -->
    <Footer/>
  </div>
</template>

<script>
// 导入头部组件
import Header from "@/components/header"
// 导入页脚组件
import Footer from "@/components/footer";
export default {
   // 注册组件
  components: {
    Header,
    Footer
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
