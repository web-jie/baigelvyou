<template>
  <div style="width: 1000px; margin: 0 auto; padding: 50px 0;">
    <script
      type="text/javascript"
      src="https://webapi.amap.com/maps?v=1.4.15&key=1677f9f27478834cd981816588a1cee2"
    ></script>
    <h2>高德地图</h2>
    <el-row type="flex" align="center" :gutter="80">
      <!-- 下面的 container中千万不要加内容  -->
      <el-col :span="12">
        <div id="container"></div>
      </el-col>
      <el-col :span="12">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick(activeName)">
          <el-tab-pane label="驾车" name="first"></el-tab-pane>
          <el-tab-pane label="公交" name="second"></el-tab-pane>
          <el-tab-pane label="步行" name="third"></el-tab-pane>
        </el-tabs>

        <div class="form">
          <el-form>
            <el-form-item>
              <el-input placeholder="起点位置" v-model="start"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="终点位置" v-model="end"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width: 100%" @click="handleSearch">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-button @click="handleClickshow" type="primary">显示/隐藏时状图</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resize: true,
      trafficLayer: {},
      activeName: "first", // 当前驾车还是公交或者步行
      map: "", // 地图对象
      start: "", // 起点位置
      end: "" // 终点位置
    };
  },
  mounted() {
    let map = new AMap.Map("container", {
      resizeEnable: true,
      zoom: 13, //级别
      center: [113.3245904, 23.1066805] //中心点坐标
    });
    this.map = map;
    //实时路况图层
    let trafficLayer = new AMap.TileLayer.Traffic({
      zIndex: 10
    });
    this.trafficLayer = trafficLayer;
    let marker = new AMap.Marker({
      position: new AMap.LngLat(113.3245904, 23.1066805), //经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: "广州塔"
    });
    map.add(marker); //添加到地图
  },
  methods: {
    // 点击tab栏切换时候触发的
    handleClick(tab) {
      console.log(tab);
    },
    handleClickshow() {
      if (this.resize) {
        this.map.add(this.trafficLayer);
        // this.resize = false
      } else {
        this.map.remove(this.trafficLayer);
        // this.resize = true
      }
      this.resize = !this.resize;
      console.log(this.resize);
    },
    // 查询驾车路线
    handleDriving() {
      AMap.plugin("AMap.Driving", () => {
        var driving = new AMap.Driving({
          map: this.map
        });

        var points = [
          { keyword: this.start, city: "广州" },
          { keyword: this.end, city: "广州" }
        ];

        driving.search(points, function(status, result) {
          // 未出错时，result即是对应的路线规划方案
        });
      });
    },
    // 点击查询按钮，开始查询路线
    handleSearch() {
      this.handleDriving();
    }
  }
};
</script>

<style scoped>
#container {
  width: 500px;
  height: 500px;
}
</style>