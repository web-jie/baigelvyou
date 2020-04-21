<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <div>

                </div>

                <!-- 航班头部布局 -->
                <FlightsListHead/>


                <!-- 航班信息 -->
               <FlightsItem v-for="(item,index) in flightsData.flights" :key="index" :data="item"/>
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <!-- 侧边栏组件 -->
            </div>
        </el-row>
    </section>
</template>

<script>
// 航班列表头部组件
import FlightsListHead from "@/components/air/flightsListHead.vue"
// 机票航班列表
import FlightsItem from "@/components/air/flightsItem.vue"
export default {
    data(){
        return {
            // 总数据, 里面包含了info,flights,total,options属性
            flightsData: {}
        }
    },
    components: {
        FlightsListHead,
        FlightsItem
    },
    mounted(){
      // 请求机票列表
      this.$axios({
        url: '/airs',
        params: this.$route.query
      }).then(res=>{
        // console.log(res)
        this.flightsData = res.data
        console.log(this.flightsData)
      })
    }
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }
    .flights-content{
        width:745px;
        font-size:14px;
    }
    .aside{
        width:240px;
    } 
</style> 