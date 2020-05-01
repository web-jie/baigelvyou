<template>
  <div class="container">
    <!-- 文章详情页 -->
    <div class="main">
      <!-- 文章详情 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to>旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <h3>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h3>
      <div class="post-info">
        <p>攻略：2019-05-22 10:57</p>
        <span>阅读：15339</span>
      </div>
      <div class="post-content">
        <p>大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。</p>
        <p>
          <img
            src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
            alt
          />
          <span>图：塞班岛。 by第5季旅游</span>
        </p>
        <h4>一、怎样用6000块玩转塞班？</h4>
        <p>大多数出境游客人不做预算或最终花费远远超出预算，对预算的合理分配对控制我们旅行的花费就很重要了，如何只花6000块玩转塞班岛，对预算超支say no？下面从5个方面来为您一一解读：机票+酒店、岛上交通、玩乐项目、吃以及购买纪念品。</p>
        <h5>1.怎样订机票+酒店性价比最高？</h5>
        <p>机票和酒店的花销往往会占据我们旅行大半的花销，假设机票酒店为塞班行预算的一半，剩下的吃行玩购为预算的另一半，如果能在机票酒店这部分省下钱，也就意味着在塞班岛用来吃行玩购的钱就增加了</p>
        <p>
          <img
            src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
            alt
          />
        </p>
        <p>
          怎样去塞班？可以转机也可以直飞，转机大多会从韩国转，提前蹲守能买到韩国飞塞班的特价机票，2000以下就能入手，加上国内飞韩国的机票来回塞班得5000+，还没算上在塞班的住宿费用，转机还有中途等待的时间，光花在路途上的时间就比直飞要多上一倍甚至更多，转乘奔波劳累，非联程票还要担心行李托运问题，所以建议大家有直飞还是尽量选择直飞。
          <br />在酒店上，旅途中我们呆在酒店的时间远比在外游玩的时间少，酒店干净整洁基本就能满足我们休息的需求，塞班不是个享受酒店的地方而且还真不能跟国内星级酒店等位比较，所以不建议大家花过多的钱在塞班的酒店体验上。
          <br />怎样在机票酒店上获得最高性价比的体验？ 直飞塞班的航班一般和酒店一起打包成机票+酒店套餐，价格要比单定机票、酒店要更加便捷实惠，往往3千多就能把机票和酒店一键搞定。
        </p>
        <div class="bottOm">
          <div class="ping">
            <i class="el-icon-edit-outline"></i>
            <span>评论(100)</span>
          </div>
          <div class="fen">
            <i class="el-icon-share"></i>
            <span>分享</span>
          </div>
        </div>
      </div>
    </div>
    <div class="aside">
      <!-- 相关攻略 -->
      <h5>相关攻略</h5>
      <div class="recommend-list">
        <!-- 组件 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: space-between;
  .main {
    width: 700px;
    position: relative;
    .el-breadcrumb {
      margin-bottom: 30px;
    }
    h3 {
      font-size: 32px;
    }
    .post-info {
      margin: 20px 0;
      text-align: right;
      color: #666;
      border-top: 1px solid #eee;
      padding-top: 20px;
      p {
        margin-right: 18px;
        display: inline-block;
      }
    }
    p {
      font-size: 16px;
      margin: 10px 0;
      img {
        display: block;
        width: 100%;
      }
      span {
        color: #666;
        font-size: 16px;
        display: block;
        height: 30px;
        line-height: 30px;
      }
    }
    h4 {
      font-size: 32px;
    }
    h5 {
      font-size: 24px;
      margin-top: 30px;
    }
    .bottOm {
      display: flex;
      padding: 40px 0;
      flex-direction: row-reverse;
      .ping,.fen {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #666;
        cursor: pointer;
      }
      .ping{
        padding-left: 10px;
      }
      i{
        font-size: 20px;
        color: orange;
      }
      
    }
  }
  .aside{
    flex: 1;
    h5{
      font-weight: 400;
      font-size: 20px;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
    }
  }
}
</style>