<template>
    <div class="bg">
        <mt-header title="关于实体GO" style="background:#FF7C12;">
            <router-link to="../my" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <ul class="box">
            <router-link to="/my/about" tag="li" class="lis"><img src="../../../assets/img/icon_logo@2x.png" alt="" class="logo"><p class="title">购物就上实体GO</p><p class="versions">版本v1.1.0</p></router-link>
            <router-link to="/my/about" tag="li"><span class="text">实体GO公约</span><i class="iconfont icon-fanhui"></i></router-link>
            <router-link to="/my/about" tag="li"><span class="text">实体GO管理规范</span><i class="iconfont icon-fanhui"></i></router-link>
            <router-link to="/my/useragreement" tag="li"><span class="text">用户协议</span><i class="iconfont icon-fanhui"></i></router-link>
            <router-link to="/my/about" tag="li"><span class="text">隐私权声明</span><i class="iconfont icon-fanhui"></i></router-link>
            <router-link to="/my/about" tag="li"><span class="text">免责声明</span><i class="iconfont icon-fanhui"></i></router-link>
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
    return {
      url:''
    };
  },
  methods: {
    // 点击时退出登录
    // 获取token
    loginout() {
      this.accessToken = localStorage.getItem("mytoken");
      this.url = this.$store.state.url
      var urls =  this.url + ':8000/user/logout'
      this.$http
        .post(
          urls +
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
      .lis {
        height: 4rem;
        .logo {
          width: 2rem;
          margin: 0 auto;
          margin-top: 0.5rem;
        }
        .title {
          font-size: 0.28rem;
          color: #666;
        }
        .versions {
          color: #999;
          font-size: 0.24rem;
        }
      }
    }
  }
}
</style>



