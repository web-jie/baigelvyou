<template>
  <div>
    <el-carousel height="700px" >
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div class="lun"
          :style="`background: url(${$axios.defaults.baseURL + item.url}) center center no-repeat;`"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 存放轮播图的位置
      banners: []
    };
  },
  mounted() {
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      const { data } = res.data;
      
      this.banners = data;
    });
  }
};
</script>

<style scoped lang="less" >
.lun{
  height: 700px;
}
/deep/ .el-carousel{
  min-width: 1000px;
}
</style>