<template>
  <div>
    <!-- 文章插件 -->
    <div class="post-item">
      <div class="post-cover">
        <a>
          <img
            src="http://p1-q.mafengwo.net/s11/M00/B4/92/wKgBEFt6ZqaAJeK7AAbj58wpNlY06.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90"
            alt
          />
        </a>
      </div>
      <div class="post-content">
        <h4 class="post-title">小蛮腰广州塔，怎么玩才不遗憾？</h4>
        <p
          class="post-desc"
        >造型独特的“小蛮腰”广州塔，犹如一颗璀璨的明珠屹立在珠江边，成为羊城新八景之一。别看她“身材苗条”，塔内可是蕴藏了丰富的休闲玩乐，等待您去掀开她的面纱。这座直逼云霄的高塔，如何在有限的时间打卡不同楼层？造型独特的“小蛮腰”广州塔，犹如一颗璀璨的明珠屹立在珠江边，成为羊城新八景之一。别看她“身材苗条”，塔内可是蕴藏了丰富的休闲玩乐，等待您去掀开她的面纱。这座直逼云霄的高塔，如何在有限的时间打卡不同楼层？</p>
        <div class="post-info">
          <div class="post-info-left">
            <i class="el-icon-location"></i>
            <span>广州市</span>
            <a>
              <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
              地球发动机
            </a>
            <i class="el-icon-view"></i>
            <span>778</span>
          </div>
          <span class="post-info-right">11赞</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.post-item {
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  .post-cover {
    padding-right: 10px;
    img {
      display: block;
      width: 220px;
      height: 150px;
      cursor: pointer;
    }
  }
  .post-content {
    h4 {
      font-weight: 300;
      font-size: 16px;
      display: inline-block;
      padding: 10px 0;
    }
    .post-desc {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    img {
      display: block;
      width: 16px;
      height: 16px;
    }
    .post-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
      margin-top: 25px;
      .post-info-left {
        display: flex;
        .el-icon-location {
          padding-top: 3px;
        }
        a {
          display: flex;
          padding: 0 5px;
          color: orange;
          cursor: pointer;
        }
        .el-icon-view {
          padding-top: 3px;
        }
      }
      .post-info-right{
        color: orange;
      }
    }
  }
}
</style>