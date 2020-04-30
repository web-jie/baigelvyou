<template>
  <div class="menus">
    <div
      class="menu-item"
      :class="isActive === index ? 'active': ''"
      v-for="(item,index) in data"
      :key="index"
      @mouseover="headerClick(index)"
      @mouseleave="mouseLeave(index)"
    >
      <span>{{item.type}}</span>
      <i class="el-icon-arrow-right"></i>
      <div class="childrens" v-show="indexSae === index ? true : false">
        <div class="textChildren" v-for="(city,desc) in item.children" :key="desc">
          <span class="one">{{desc + 1}}</span>
          <span class="two">{{city.city}}</span>
          <p>{{city.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 存放城市数据
      data: [],
      // 设置是否显示active
      isActive: "",
      indexSae: ""
    };
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      // console.log(res)
      const { data } = res.data;
      this.data = data;
    });

  },
  methods: {
    headerClick(index) {
      this.isActive = index;
      this.indexSae = this.indexSae;
      this.indexSae = index;
    },
    mouseLeave(index) {
      this.indexSae = "";
      this.isActive = "";
    }
  }
};
</script>

<style lang="less" scoped>
.menus {
  width: 260px;
  border: 1px solid #ddd;
  border-right: none;
  border-bottom: none;
  box-shadow: 0 0 1px #f5f5f5;
}
.menu-item {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 0 20px;
  position: relative;
  span {
    font-size: 14px;
  }
  .el-icon-arrow-right {
    position: absolute;
    right: 10px;
    line-height: 40px;
    // align-content: center;
    font-size: 18px;
  }
}
.childrens {
  width: 300px;
  height: 200px;
  border: 1px solid #eee;
  position: absolute;
  top: -1px;
  left: 258px;
  cursor: pointer;
  color: #666;
  background-color: #fff;
  z-index: 1;
  .textChildren {
    display: flex;
    height: 40px;
    line-height: 40px;
    padding: 0 8px;
  }
  .one {
    color: orange;
    font-style: italic;
    font-size: 18px;
  }
  .two {
    color: orange;
    display: inline-block;
    margin: 0 8px;
  }
  .two:hover {
    text-decoration: underline;
  }
  p:hover {
    text-decoration: underline;
  }
}
.active {
  color: orange;
  border-right: none;
}
</style>