<template>
  <div>
    <!-- 酒店模块 -->
    <div class="whole">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>酒店</el-breadcrumb-item>
        <el-breadcrumb-item>酒店预订</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input placeholder="切换城市"></el-input>
        </el-form-item>
        <el-form-item label-width="20px">
          <el-col :span="11">
            <el-date-picker
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label-width="20px">
          <el-input placeholder="人数未定" suffix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label-width="20px">
          <el-button type="primary">查看价格</el-button>
        </el-form-item>
      </el-form>
      <div class="map">
        <div class="text">
          <div class="option-top">
            区域:
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
            <span>
              <a>人民广场</a>
            </span>
          </div>
          <div class="option-bottom">
            地址
            <i class></i>:
            <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
              <span>¥332</span>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
              <span>¥332</span>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
              <span>¥332</span>
            </el-tooltip>
          </div>
        </div>
        <div class="map_box">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.whole {
  width: 1000px;
  margin: 0 auto;
  .el-breadcrumb {
    margin: 20px 0;
    .el-breadcrumb-item {
      font-size: 16px;
    }
  }
  .el-form {
    display: flex;
    .el-form-item {
      display: flex;
    }
  }
  .el-input {
    width: 200px;
  }
  .map {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .map_box{
      width: 100%;
      height: 260px;
      border: 1px solid #000;
    }
  }
}
</style>