<template>
    <div class="bg">
        <mt-header title="社交账号绑定" style="background:#FF7C12;">
            <router-link to="./setting" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <ul class="box">
            <router-link to="/my/setting" tag="li"><i class="iconfont icon-weixin"></i><span class="text">微信</span><i class="iconfont icon-fanhui"></i><span class="num">七七小菇凉</span></router-link>
            <router-link to="/my/setting" tag="li"><i class="iconfont icon-QQ"></i><span class="text">QQ</span><i class="iconfont icon-fanhui"></i><span class="num">未绑定</span></router-link>
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
    .box {
      background: #fff;
      border-radius: 0.1rem;
      margin: 0.5rem auto;
      width: calc(100% - 1rem);
      height: auto;
      padding: 0 0.2rem;
      li {
        height: 0.9rem;
        // line-height: 1.5;
        border-bottom: 1px solid #e5e3e3;
        padding: 0.1rem 0;
        // position: relative;
        .icon-weixin {
          color:#1BAC69;
          float: left;
          font-size: 0.6rem;
          // line-height: 1;
          vertical-align: middle;
        }
        .icon-QQ {
          color: #18ACFC;
          float: left;
          font-size: 0.6rem;
          // line-height: 1;
          vertical-align: middle;
        }
        .icon {
          float: left;
          height: 0.3rem;
          vertical-align: middle;
        }
        .iconAbout {
          padding-left: 0.1rem;
        }
        .text {
          // position: absolute;
          // left: 0.3rem;
          color: #666;
          font-size: 0.24rem;
          // vertical-align: middle;
          line-height: 2.5;
          padding-left: 0.2rem;
          float: left;
        }
        .icon-fanhui {
          color: #999;
          float: right;
          font-size: 0.2rem;
          line-height: 2.5;
          transform: rotate(180deg);
          -ms-transform: rotate(180deg); /* IE 9 */
          -moz-transform: rotate(180deg); /* Firefox */
          -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
          -o-transform: rotate(180deg); /* Opera */
        }
        .num {
          color: #999;
          font-size: 0.24rem;
          float: right;
          line-height: 2.5;
          padding-right: 0.1rem;
        }
      }
    }
    .btn {
      width: 6.5rem;
      height: 0.9rem;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 0.1rem;
      font-size: 0.3rem;
      border: 0;
      outline: 0;
      color: #666;
    }
  }
}
</style>



