<template>
  <div class="is-justify-space-between">
    <!-- 旅游攻略文件 -->

    <div class="menus-wrapper">
      <!-- 左侧组件 -->
      <div class="menus-body">
        <!-- 使用组件实现 -->
        <Recommend />
      </div>
      <div class="recommend">
        <h4>推荐城市</h4>
        <a>
          <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
        </a>
      </div>
    </div>
    <!-- 右侧组件 -->
    <div class="post-wrapper">
      <div class="search-wrapper">
        <el-form ref="form" label-width="0px">
          <el-form-item>
            <el-input placeholder="请输入城市" suffix-icon="el-icon-search"></el-input>
          </el-form-item>
        </el-form>
        <div class="search-recommend">
          推荐：
          <span v-for="(item,index) in hot" :key="index">{{item.city}}</span>
        </div>
        <div class="post-title">
          <h4>推荐攻略</h4>
          <el-button type="primary" icon="el-icon-edit">写游记</el-button>
        </div>
        <div class="post-list">
          <!-- 文章组件 -->
          <!-- <Article :data="data" /> -->
          <Plurticle :data="data" />
        </div>
        <!-- size-change: 切换条数时候触发的事件 -->
        <!-- current-change：切换页数时候触发的事件 -->
        <!-- current-page：当前的页数 -->
        <!-- page-size: 当前的条数 -->
        <!-- total: 总条数 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[3, 5, 7, 10]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// 左侧组件
import Recommend from "@/components/post/Recommend";
// 右侧组件
import Article from "@/components/post/Article";
// 3个图片的组件
import Plurticle from "@/components/post/plurticle";
export default {
  data() {
    return {
      data: [],
      hot: [
        { city: "广州" },
        { city: "上海" },
        { city: "北京" },
        { city: "杭州" }
      ],
      // 当前页面
      pageIndex:1,
      // 当前显示的条数
      pageSize: 5,
      // 总条数
      total: 0
    };
  },
  components: {
    Recommend,
    Article,
    Plurticle
  },
  mounted() {
   
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 切换页面时触发
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="less" scoped>
.is-justify-space-between {
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  h4 {
    font-size: 18px;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }

  img {
    margin-top: 10px;
    display: block;
    width: 100%;
  }
  .post-title {
    color: #ffa500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 3px 0;
    position: relative;
    h4::after {
      content: "";
      display: block;
      width: 72px;
      height: 2px;
      border-bottom: 3px solid #ffa500;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
.menus-wrapper {
  width: 260px;
}
.post-wrapper {
  width: 700px;
}
.search-recommend {
  margin-top: -10px;
  color: #666;
  span {
    padding-left: 10px;
    cursor: pointer;
  }
  span:hover {
    color: #ffa500;
  }
}
.post-list {
  width: 100%;
}
.el-pagination {
  margin: 10px 0;
}
</style>