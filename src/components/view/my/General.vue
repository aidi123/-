<template>
    <div class="bg">
        <mt-header title="通用" style="background:#FF7C12;">
            <router-link to="./setting" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <ul class="box">
            <li><span class="text">非WIFI环境下省流量模式</span><mt-switch v-model="value" class="switch"></mt-switch></li>
            <li><span class="text">清空缓存</span><i class="iconfont icon-fanhui"></i><span class="num">1.2M</span></li>
            <li><span class="text">推送设置</span><i class="iconfont icon-fanhui"></i></li>
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
    .box {
      background: #fff;
      border-radius: 0.1rem;
      margin: 0.5rem auto;
      width: calc(100% - 1rem);
      height: auto;
      padding: 0 0.2rem;
      li {
        height: 0.9rem;
        border-bottom: 1px solid #e5e3e3;
        padding: 0.12rem 0;
        .switch {
          float: right;
        }
        .text {
          color: #666;
          font-size: 0.24rem;
          line-height: 2.5;
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
  }
}
</style>



