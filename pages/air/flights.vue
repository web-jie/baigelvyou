<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data="flightsData" @getData="getData" />

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班列表有值时候才展示这个列表 -->
        <!-- 航班信息 -->
        <div v-if="flightsData.flights.length">
          <FlightsItem
            v-for="(item,index) in dataList"
            :key="`${pageIndex}-` +  index"
            :data="item"
          />
          <!-- size-change: 切换条数时候触发的事件 -->
          <!-- current-change：切换页数时候触发的事件 -->
          <!-- current-page：当前的页数 -->
          <!-- page-size: 当前的条数 -->
          <!-- total: 总条数 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
        <div v-else class="empty">当前没有适合的航班列表。</div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
        <FlightsAside />
      </div>
    </el-row>
  </section>
</template>

<script>
// 航班列表头部组件
import FlightsListHead from "@/components/air/flightsListHead.vue";
// 机票航班列表
import FlightsItem from "@/components/air/flightsItem.vue";
// 机票过滤组件
import FlightsFilters from "@/components/air/flightsFilters";
// 添加侧边栏组件
import FlightsAside from "@/components/air/flightsAside.vue";
export default {
  data() {
    return {
      // 总数据, 里面包含了info,flights,total,options属性
      flightsData: {
        info: {},
        flights: [],
        options: {}
      },
      // 备份一个数据，这个数据一旦被赋值后永远都不能被修改（原图）
      flightDataCache: {
        info: {},
        flights: [],
        options: {}
      },

      // 这个属性专门用来存放切割出来的数组
      // dataList: [],
      // 当前的页数
      pageIndex: 1,
      // 当前显示的条数
      pageSize: 5,
      // 总条数
      total: 0
    };
  },
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  mounted() {
    // 请求机票列表
    this.fetchList();
  },
  watch: {
    // 监视路由，如果路由发生改变就执行下方代码
    $route() {
      // 路由发生改变后请求数据
      this.fetchList();
    }
  },
  computed: {
    dataList() {
      // 重新切割数组
      const arr = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
      return arr;
    }
  },
  methods: {
    // 请求机票列表
    fetchList() {
      this.$axios({
        url: "/airs",
        params: this.$route.query
      }).then(res => {
        // console.log(res)
        this.flightsData = res.data;
        // 备份一份起来, 这份不能被修改, 因为是引用类型内存地址是一样的所以需要拷贝一份
        this.flightDataCache = { ...res.data };

        // 总条数
        this.total = this.flightsData.total;
      });
    },

    // 这个事件时传递给过滤的子组件用于获取过滤后的数组
    getData(arr) {
      // arr是当前符合条件的数据
      this.flightsData.flights = arr;
      // 重置下总条数
      this.total = arr.length;
    },
    // 切换条数时候触发的事件
    handleSizeChange(val) {
      // 显示条数
      this.pageSize = val;
      // 一般条数发生变化会回到第一页
      this.pageIndex = 1;
    },
    // 切换页数时候触发的事件
    handleCurrentChange(val) {
      // 修改页数
      this.pageIndex = val;
    }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}
.flights-content {
  width: 745px;
  font-size: 14px;
}
.aside {
  width: 240px;
}
.empty {
  text-align: center;
  line-height: 260px;
  color: #999;
}
</style> 