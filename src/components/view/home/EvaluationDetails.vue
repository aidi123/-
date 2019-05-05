<template>
  <div>
    <mt-header title="评价详情">
      <router-link to="Shop" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="box">
      <div class="info">
        <div class="headimg-box">
          <img src="../../../assets/img/pic_pl1@2x.png" alt>
          <div class="star-box">
            <p class="name">天使</p>
            <yd-cell-item>
              <yd-rate slot="left" v-model="evaluateRate" active-color="#FF7C12" :readonly="true"></yd-rate>
            </yd-cell-item>
          </div>
          <span class="time">2018-05-20</span>
        </div>
        <p class="content">
          可以说是非常满意的一家店啦。是我小男神推荐给我哒，然后今天就抱着过去试了试的心态来了，
          超出我的意外,衣服质量没得话说性价比超级 超出我的意外,衣服质量没得话说性价比超级
        </p>
        <div class="img-box">
          <img src="../../../assets/img/img_pl1@2x.png" alt>
          <img src="../../../assets/img/img_pl2@2x.png" alt>
          <img src="../../../assets/img/img_pl3@2x.png" alt>
          <img src="../../../assets/img/img_pl1@2x.png" alt>
          <img src="../../../assets/img/img_pl2@2x.png" alt>
          <img src="../../../assets/img/img_pl3@2x.png" alt>
        </div>
        <div class="icon-box">
          <p>
            <i class="iconfont icon-eye"></i> 30
          </p>
          <p>
            <i class="iconfont icon-pinglun"></i> 30
          </p>
          <p>
            <i class="iconfont icon-zan"></i> 30
          </p>
        </div>
      </div>
      <div class="comment">
        <p class="title">全部评论</p>
        <ul>
          <li>
            <div class="headimg-box">
              <img src="../../../assets/img/pic_pl1@2x.png" alt>
              <div class="name-box">
                <p class="name">鱼子酱不吃鱼</p>
                <span>8分钟</span>
              </div>
            </div>
            <div class="talk">
              <p>
                <span>回复</span>
                <span>一抹淡笑</span>：是的
              </p>
            </div>
          </li>
          <li>
            <div class="headimg-box">
              <img src="../../../assets/img/pic_pl1@2x.png" alt>
              <div class="name-box">
                <p class="name">一抹淡笑</p>
                <span>8分钟</span>
              </div>
            </div>
            <div class="talk">
              <p>看了我你还有这个自信?</p>
            </div>
          </li>
        </ul>
        <div class="input-box">
          <input type="text" placeholder="评论">
          <button>发送</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      evaluateRate: 4
    };
  }
};
</script>
<style lang="scss" scoped>
.mint-header {
  height: 0.88rem;
  background: #ff7c12;
  padding: 0 0.25rem;
  //border-bottom: 1px solid #dbd9d9;
  /deep/ .mint-header-title {
    font-size: 0.32rem;
    color: #fff;
  }
  /deep/ .mintui.mintui-back {
    font-size: 0.3rem;
  }
}
.box {
  padding: 0 0.25rem 0.2rem;
  background: #ff7c12;
  .info {
    background: #fff;
    border-radius: 0.1rem;
    text-align: left;
    padding: 0.2rem;
    .headimg-box {
      height: 0.8rem;
      display: flex;
      position: relative;
      .star-box {
        //padding-top: 0.1rem;
        .name {
          font-size: 0.3rem;
          color: #333;
        }
        .yd-cell-item {
          padding: 0;
          height: 0.4rem;
          /deep/ a {
            font-size: 0.26rem;
          }
          .yd-cell-right {
            display: none;
          }
        }
        .yd-cell-item:not(:last-child):after {
          height: 0;
        }
      }
      .time {
        position: absolute;
        right: 0.2rem;
        top: 0.1rem;
        color: #999;
      }
      img {
        width: 0.8rem;
        margin-right: 0.1rem;
      }
    }
    .content {
      text-indent: 0.5rem;
      margin: 0.2rem 0;
      color: #666;
    }
    .img-box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      img {
        width: 2.06rem;
        height: 1.6rem;
        border-radius: 0.1rem;
        margin-bottom: 0.1rem;
      }
    }
    .icon-box {
      display: flex;
      justify-content: space-between;
      margin-top: 0.1rem;
      color: #999;
    }
  }
  .comment {
    background: #fff;
    text-align: left;
    padding: 0 0.2rem 0.96rem;
    margin-top: 0.3rem;
    border-radius: 0.1rem;
    position: relative;
    .title {
      font-size: 0.3rem;
      color: #333;
      line-height: 0.88rem;
    }
    .input-box {
      width: 100%;
      height: 0.96rem;
      line-height: 0.96rem;
      position: absolute;
      bottom: 0;
      left: 0;
      border-top: 1px solid #e6e6e6;
      input {
        height: 0.58rem;
        width: 5.82rem;
        border: 1px solid #cccccc;
        margin: 0 .1rem 0 .2rem;
        border-radius: .1rem;
        padding-left: .2rem;
      }
      button {
        font-size: 0.3rem;
        color: #999;
        border: none;
      }
    }
    li {
      border-top: 1px solid #e6e6e6;
      padding: 0.3rem 0 0.2rem;
      .headimg-box {
        display: flex;
        height: 0.8rem;
        img {
          width: 0.8rem;
          margin-right: 0.1rem;
        }
        .name {
          font-size: 0.3rem;
          color: #5a6a8d;
        }
        span {
          color: #666;
        }
      }
      .talk {
        padding-left: 0.9rem;
      }
    }
  }
}

.iconfont {
  font-size: 0.24rem;
}
</style>


