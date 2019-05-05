<template>
  <div class="bg">
    <mt-header title="评论详情" style="background:#FF7C12;">
      <router-link to="./comments" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <ul class="box">
      <li>
        <img src="../../../assets/img/pic_pl_del1@2x.png" alt class="head">
        <p class="id">呀哦棒棒哟</p>
        <p class="time">9分前</p>
        <div class="content">
          <p class="text">看了我你还有这个自信?</p>
          <img src="../../../assets/img/img_pl_del1@2x.png" alt class="img">
        </div>
      </li>
      <div class="details">
      <li>
        <img src="../../../assets/img/pic_pl_del11@2x.png" alt class="head">
        <p class="id">一抹淡笑</p>
        <p class="time">2小时前</p>
        <div class="content">
          <p class="text">这个好看</p>
          <img src="../../../assets/img/img_pl_del2@2x.png" alt class="img">
        </div>
      </li>
      <li>
        <img src="../../../assets/img/pic_pl_del11@2x.png" alt class="head">
        <p class="id">一抹淡笑</p>
        <p class="time">2小时前</p>
        <div class="content">
          <p class="text">痴情红颜笑</p>
        </div>
      </li>
      <li>
        <img src="../../../assets/img/pic_pl_del3@2x.png" alt class="head">
        <p class="id">鱼子酱不吃鱼</p>
        <p class="time">3小时前</p>
        <div class="content">
          <p class="text">一白遮千丑，够玩一年的</p>
        </div>
      </li>
      <li>
        <img src="../../../assets/img/pic_pl_del1@2x.png" alt class="head">
        <p class="id">呀哦，棒棒哟</p>
        <p class="time">06-10&nbsp;12:20</p>
        <div class="content">
          <p class="text">回复&nbsp;<span class="name">鱼子酱不吃鱼：</span>&nbsp;哈哈，美颜相机你值得拥有</p>
        </div>
      </li>
      <li>
        <img src="../../../assets/img/pic_pl_del3@2x.png" alt class="head">
        <p class="id">鱼子酱不吃鱼</p>
        <p class="time">3小时前</p>
        <div class="content">
          <p class="text">回复&nbsp;<span class="name">呀哦，棒棒哟：</span>&nbsp;不要美颜也很美吧</p>
        </div>
      </li>
      </div>
    </ul>
    <p class="more">
      <i class="iconfont icon-shuaxin1"></i>&nbsp;点击加载更多~
    </p>
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
    // height: 100%;
    background: #ff7c12;
    background-size: 100% 100%;
    // margin-bottom: 1rem;
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
      // padding: 0;
      .details {
        background: #F2F2F2;
        padding:0 0.2rem;
        border-radius: 0 0 0.1rem 0.1rem;
        li {
          padding:0.2rem 0;
        }
      }
      li {
        padding: 0.2rem;
        border-bottom: 1px solid #e6e6e6;
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
          padding-top: 0.03rem;
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
          .name {
            color: #333;
            font-size: 0.24rem;
          }
        }
        .imgs {
          width: 100%;
          .showImg {
            width: 49%;
          }
        }
        .content {
          margin-left: 0.9rem;
          margin-top: 0.1rem;
          .text {
            color: #666;
            font-size: 0.24rem;
            text-align: left;
            padding-bottom: 0.1rem;
          }
          .imgs {
            width: 100%;
            .showImg {
              width: 49%;
            }
          }
          .words {
            position: relative;
            margin-top: 0.2rem;
            padding: 0.2rem;
            width: 100%;
            height: auto;
            border-radius: 0.1rem;
            background: #f3f3f5;
            .triangle {
              position: absolute;
              top:-0.38rem;
              width: 0;
              height: 0;
              border-width: 0.2rem;
              border-style: solid;
              border-color: transparent transparent #f3f3f5 transparent;
            }
            p {
              color: #666;
              font-size: 0.24rem;
              text-align: left;
              line-height: 0.4rem;
              .name {
                color: #333;
                font-size: 0.24rem;
              }
            }
            .showMore {
              color: #ff7c12;
              font-size: 0.24rem;
              text-align: left;
            }
          }
        }
        .address {
          color: #999;
          font-size: 0.24rem;
          text-align: left;
          padding: 0.1rem 0;
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
      .allComment {
        color: #242424;
        font-size: 0.3rem;
        text-align: left;
        height: 0.87rem;
        border-bottom: 1px solid #e6e6e6;
        // margin-bottom: 0.2rem;
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



