<template>
  <div class="menus">
    <div class="menu-item">
      <span>热门城市</span>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="menu-item">
      <span>热门城市</span>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="menu-item">
      <span>热门城市</span>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="menu-item">
      <span>热门城市</span>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.menus{
  width: 260px;
  border: 1px solid #ddd;
  border-right: none;
  border-bottom: none;
  box-shadow: 0 0 1px #f5f5f5;
}
.menu-item{
height: 40px;
line-height: 40px;
border-bottom: 1px solid #ddd;
border-right: 1px solid #ddd;
padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
color: aqua;
.el-icon-arrow-right{
  font-size: 18px;
}
}
</style>