<template>
  <div class="post-item">
    <div class="post-content" @click="partivulars">
      <h4>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h4>
      <p
        class="post-desc"
      >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最</p>
    </div>
    <div class="post-cover">
      <img
        src="https://n3-q.mafengwo.net/s10/M00/E8/E4/wKgBZ1octoCABhgLAAafahORRLs91.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
        alt
      />
      <img src="https://images.mafengwo.net/images/i/face/brands_v3/6@2x.png" alt />
      <img
        src="https://p1-q.mafengwo.net/s10/M00/E9/33/wKgBZ1octwiAAKAoAAJ9ixcJc9M71.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
        alt
      />
    </div>
    <div class="post-info">
      <div class="post-info-left">
        <i class="el-icon-location"></i>
        <span>广州市</span>
        <a>
          <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
          <span>地球发动机</span>
        </a>
        <i class="el-icon-view"></i>
        <span>778</span>
      </div>
      <span class="post-info-right">11赞</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      props:{
        data:{}
      }
    }
  },
  methods:{
    partivulars(){
      // console.log(this.data)
      this.$router.push('/post/particulars')
    }
  }
};
</script>

<style lang="less" scoped>
.post-item {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  .post-content {
    h4 {
      font-weight: 400;
      font-size: 18px;
      display: inline-block;
      padding: 10px 0;
    }
    h4:hover {
      color: orange;
      cursor: pointer;
    }
    .post-desc {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      cursor: pointer;
    }
  }
  .post-cover {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0 ;
  }
  .post-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    margin: 10px 0;
    .post-info-left{
      display: flex;
      .el-icon-location{
        padding-top: 4px;
      }
      .el-icon-view{
        padding-top: 4px;
      }
      a{
        display: flex;
        align-items: center;
        padding: 0 5px;
        margin-top: -3px;
      }
      a:hover{
        color: orange;
        cursor: pointer;
      }
      img{
        width: 26px;
        height: 26px;
        
      }
    }
    .post-info-right{
      color: orange;
    }
  }
}
img {
  width: 220px;
  height: 150px;
  display: block;
  cursor: pointer;
}

</style>