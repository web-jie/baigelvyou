<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
          <el-option
            v-for="(item, index) in data.options.airport"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="flightTimes" placeholder="起飞时间" @change="handleFlightTimes">
          <!-- option的value不能放对象类型包括数组，但是需要知道当前  选中的是哪个时间段，所以就在value属性中拼接了一个字符串 -->
          <el-option
            v-for="(item, index) in data.options.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="company" placeholder="航空公司" @change="handleCompany">
          <el-option
            v-for="(item, index) in data.options.company"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
          <el-option
            v-for="(item, index) in airSizeList"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      airport: "", // 机场
      flightTimes: "", // 出发时间
      company: "", // 航空公司
      airSize: "", // 机型大小
      // 自己声明一个飞机的大小类型的数组
      airSizeList: [
        { label: "大", value: "L" },
        { label: "中", value: "M" },
        { label: "小", value: "S" }
      ]
    };
  },
  props: {
    // 由父组件传递过来的总数据(包含了info,flights,total,options)
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    // 选择机场时候触发
    handleAirport(value) {
      // arr是符合当前选中条件的航班数组
      const arr = this.data.flights.filter(v => {
        return v.org_airport_name === this.airport;
      });
      // 触发父组件传递过来的事件，主要功能是把航班数组传递回去给父组件
      this.$emit("getData", arr);
    },
    // 选择出发时间时候触发
    handleFlightTimes(value) {
      console.log(this.flightTimes);
    },
    // 选择航空公司时候触发
    handleCompany(value) {
      // arr是符合当前选中条件的航班数组
      const arr = this.data.flights.filter(v => {
        return v.airline_name === this.company;
      });
      // 触发父组件传递过来的事件，主要功能是把航班数组传递回去给父组件
      this.$emit("getData", arr);
    },
    // 选择机型时候触发
    handleAirSize(value) {
      // arr是符合当前选中条件的航班数组
      const arr = this.data.flights.filter(v => {
        return v.plane_size === this.airSize;
      });
      // 触发父组件传递过来的事件，主要功能是把航班数组传递回去给父组件
      this.$emit("getData", arr);
    },

    // 撤销条件时候触发
    handleFiltersCancel() {}
  }
};
</script>

<style scoped lang="less">
.filters {
  margin-bottom: 20px;
}
.filters-top {
  > div {
    /deep/ .el-select {
      margin-left: 10px;
    }
  }
}
.filter-cancel {
  margin-top: 10px;
}
</style>