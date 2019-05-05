<template>
  <div class="bg">
    <mt-header style="background:#FF7C12;">
      <router-link to="./publish" slot="left">
        <mt-button>取消</mt-button>
      </router-link>
      <router-link to="../recreation" slot="right">
        <mt-button>发表</mt-button>
      </router-link>
    </mt-header>
    <ul class="box">
      <li>
        <p class="text">如果她涉世未深，</p>
        <p class="text">就带她看遍世间繁华；</p>
        <p class="text">如果她历经沧桑，</p>
        <p class="text">就带她去坐十次木马。</p>
        <div class="imgs">
          <img src="../../../assets/img/img_14@2x.png" alt class="showImg">
          <img src="../../../assets/img/img_15@2x.png" alt class="showImg">
          <img src="../../../assets/img/img_16@2x.png" alt class="showImg">
        </div>
        <div class="imgs">
          <img src="../../../assets/img/img_17@2x.png" alt class="showImg">
          <img src="../../../assets/img/img_18@2x.png" alt class="showImg">
          <img src="../../../assets/img/img_19@2x.png" alt class="showImg">
        </div>
        <div class="imgs">
          <img src="../../../assets/img/img_20@2x.png" alt class="showImg">
          <img src="../../../assets/img/img_21@2x.png" alt class="showImg">
          <img src="../../../assets/img/img_211@2x.png" alt class="showImg">
        </div>
        <p class="address">
          <i class="iconfont icon-dizhi"></i>&nbsp;汉口北
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Icons } from "vue-ydui/dist/lib.rem/icons";
Vue.component(Icons.name, Icons);
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
body {
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // height: calc(100% - 1rem);
    height: 100%;
    background: #ff7c12;
    background-size: 100% 100%;
    margin-bottom: 1rem;
    .bannerImg {
      width: 100%;
      display: block;
    }
    .person {
      position: relative;
      width: 100%;
      // height: 1.82rem;
      height: auto;
      background: #fff;
      .releaseBtn {
        background: #ff7c12;
        color: #fff;
        border: 0;
        outline: 0;
        width: 1rem;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.28rem;
        float: right;
        margin: 0.2rem;
        border-radius: 0.5rem;
      }
      .headImg {
        width: 2rem;
        position: absolute;
        top: -55%;
        left: 2%;
      }
      .name {
        text-align: left;
        padding-left: 0.2rem;
        padding-top: 0.95rem;
        color: #333;
        font-size: 0.24rem;
      }
      .icon-nvsheng {
        background: transparent;
        color: #ff3dc8;
      }
      .phone {
        text-align: left;
        padding-left: 0.2rem;
        color: #666;
        font-size: 0.24rem;
        padding-bottom: 0.2rem;
      }
    }
    .icon-shezhi1-copy {
      float: left;
      color: #fff;
      font-size: 0.5rem;
      margin: 0.5rem;
    }

    .box {
      background: #fff;
      border-radius: 0.1rem;
      margin: 0.2rem;
      width: calc(100% - 0.4rem);
      height: auto;
      padding: 0.2rem;
      li {
        .news {
          width: 1.78rem;
          height: 0.58rem;
          background: #999;
          color: #fff;
          border-radius: 0.1rem;
          border: 0;
          outline: 0;
          margin: 0 auto;
          margin-bottom: 0.2rem;
          display: block;
        }
        .head {
          width: 0.8rem;
          float: left;
          margin-right: 0.1rem;
        }
        .id {
          color: #333;
          font-size: 0.3rem;
          text-align: left;
        }
        .time {
          color: #999;
          font-size: 0.24rem;
          text-align: left;
        }
        .text {
          color: #666;
          font-size: 0.24rem;
          text-align: left;
          padding-bottom: 0.1rem;
        }
        .imgs {
          width: 100%;
          .showImg {
            width: 32.6%;
          }
        }
        .address {
          color: #999;
          font-size: 0.24rem;
          text-align: left;
          padding-top: 0.1rem;
        }
        .share {
          float: left;
          color: #999;
          font-size: 0.24rem;
        }
        .comment {
          color: #999;
          font-size: 0.24rem;
        }
        .like {
          float: right;
          color: #999;
          font-size: 0.24rem;
        }
        .img {
          width: 100%;
        }
      }
    }
    .more {
      color: #fff;
      font-size: 0.24rem;
      padding: 0.1rem 0 0.3rem 0;
    }
  }
}
</style>



