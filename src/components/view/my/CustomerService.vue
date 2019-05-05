<template>
    <div class="bg">
        <mt-header title="联系客服" style="background:#FF7C12;">
            <router-link to="../my" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <img src="../../../assets/img/img_wd2@2x.png" alt="" class="img">
        <ul class="box">
            <li>
              <div class="div"><span class="title">电话 丨 Telephone</span><button class="btn">01号客服</button></div>
              <span class="text">027-8501 8188</span><span class="icons">|&nbsp;&nbsp;<i class="iconfont icon-dianhua1"></i>&nbsp;&nbsp;</span>
            </li>
        </ul>
        <ul class="box">
<li>
              <div class="div"><span class="title">邮箱 丨 E-mail</span></div>
              <span class="text">topsdgx@163.com</span><span class="icons">|&nbsp;&nbsp;<i class="iconfont icon-youxiang"></i>&nbsp;&nbsp;</span>
            </li>
        </ul>
        <ul class="box">
<li>
              <div class="div"><span class="title">地址 丨 Address</span></div>
              <span class="text">武汉市黄陂区盘龙城经济开发区汉口北大道</span><span class="icons">|&nbsp;&nbsp;<i class="iconfont icon-dizhi1"></i>&nbsp;&nbsp;</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from "vue";
import { Icons } from "vue-ydui/dist/lib.rem/icons";
import { Switch } from "mint-ui";
Vue.component(Switch.name, Switch);
Vue.component(Icons.name, Icons);
export default {
  data() {
    return {};
  },
  methods: {
    // 点击时退出登录
    // 获取token
    loginout() {
      this.accessToken = localStorage.getItem("mytoken");
      this.$http
        .post(
          "http://192.168.1.108:8000/user/logout" +
            "?accessToken=" +
            this.accessToken
        )
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            localStorage.removeItem("loginName");
            localStorage.removeItem("key");
            localStorage.removeItem("mytoken");
            this.$router.push({
              path: "/"
            });
          }
        });
    }
  }
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
    height: 100%;
    background: #ff7c12;
    background-size: 100% 100%;
    .img {
      margin: 0 auto;
      width: calc(100% - 0.4rem);
    }
    .box {
      background: #fff;
      border-radius: 0.1rem;
      margin: 0.2rem auto;
      width: calc(100% - 0.4rem);
      height: auto;
      padding: 0.3rem 0.2rem;
      li {
        height: 0.9rem;
        .div {
          height: 0.5rem;
        }
        .title {
          color: #999;
          font-size: 0.24rem;
          float: left;
        }
        .btn {
          width: 1.5rem;
          height: 0.4rem;
          float: right;
          background-color: #ff7c12;
          border-radius: 0.1rem;
          font-size: 0.24rem;
          border: 0;
          outline: 0;
          color: #fff;
        }
        .text {
          color: #333;
          font-size: 0.3rem;
          float: left;
          // padding-top: 0.2rem;
        }
        .icons {
          float: right;
          // padding-top: 0.1rem;
          color: #c6c5c3;
          font-size: 0.3rem;
          .iconfont {
            color: #ff7c12;
          }
        }
      }
    }
  }
}
</style>



