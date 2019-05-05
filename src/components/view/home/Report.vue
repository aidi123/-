<template>
  <div>
    <mt-header title="我要举报">
      <router-link to="Shop" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="body-div">
      <p class="title">举报商家</p>
      <div class="store">
        <img src="../../../assets/img/img_xp@2x.png" alt>
        <div>
          <p class="name">
            <span>优衣库专卖店</span>
            <span class="grade">4.9分</span>
          </p>
          <span class="info">
            女装 SUPIMA COTTON圆领T恤(短袖) 404
            136 优衣库UNIQLO 女装 SUPIMA COTTON圆领T恤(短袖) 404
            136 优衣库UNIQLO 女装 SUPIMA COTTON圆领T恤(短袖) 404
            136 优衣库UNIQLO
          </span>
          <p class="bottom">
            <span class="address-box">
              <span class="address">汉口北</span>
              <span class="category">满减优惠</span>
            </span>
            
            <span class="distance">320m</span>
          </p>
        </div>
      </div>
      <p class="title">举报原因</p>
      <textarea name id cols="30" rows="10" placeholder="请输入您想举报的原因"></textarea>
      <p class="title">证据截图</p>
      <div class="img-box">
        <span>请上传商家违反规则的截图或照片</span>
        <div class="img-list">
          <p><i class="iconfont icon-jia"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
   
  }
};
</script>
<style lang="scss" scoped>
.mint-header {
  height: 0.88rem;
  background: #ff7c12;
  padding: 0 0.25rem;
  color: #fff;
  /deep/ .mint-header-title {
    font-size: 0.32rem;
  }
  /deep/ .mintui.mintui-back {
    font-size: 0.3rem;
  }
}
.body-div {
  text-align: left;
  padding: 0 0.25rem;
  .title {
    margin: 0.2rem 0 0.1rem;
    color: #fff;
  }
  .store {
    background: #fff;
    border-radius: 0.1rem;
    padding: 0.2rem;
    display: flex;
    div {
      position: relative;
    }
    img {
      width: 1.65rem;
      height: 1.4rem;
      margin-right: 0.1rem;
    }
    .name {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 0.3rem;
        color: #000;
      }
      .grade {
        color: #ff010e;
      }
    }
    .info {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #666;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: absolute;
      bottom: 0;
      .address-box {
        span {
          padding: 0 0.1rem;
          border-radius: 0.05rem;
          color: #fff;
        }
        .address {
          background: #0b9b95;
        }
        .category {
          background: #ff7c12;
        }
      }

      .distance {
        color: #999;
      }
    }
  }
  textarea {
    width: 100%;
    height: 1.8rem;
    border-radius: 0.1rem;
    border: none;
    font-size: 0.24rem;
    padding: 0.2rem;
  }
  .img-box {
    background: #fff;
    border-radius: 0.1rem;
    padding: 0.2rem;
    span {
      color: #999;
    }
    .img-list {
      height: 1.6rem;
      margin-top: 0.2rem;
      display: flex;
      p {
        width: 1.6rem;
        background: #f4f4f4;
        line-height: 1.6rem;
        text-align: center;
        i {
          font-size: 0.8rem;
          color: #d2d1d1;
        }
      }
    }
  }
}
</style>


