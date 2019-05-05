<template>
    <div class="bg">
        <mt-header title="设置" style="background:#FF7C12;">
            <router-link to="../my" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <ul class="box">
            <router-link to="/my/personalinformation" tag="li"><span class="text">个人信息</span><i class="iconfont icon-fanhui"></i></router-link>
            <router-link to="/my/changephone" tag="li"><span class="text">换绑手机</span><i class="iconfont icon-fanhui"></i><span class="num">{{message.mobileNo}}</span></router-link>
            <router-link to="/my/socialmediaaccount" tag="li"><span class="text">社交账号绑定</span><i class="iconfont icon-fanhui"></i><span class="num">绑定/解绑</span></router-link>
            <router-link to="/my/changepassword" tag="li"><span class="text">登录密码</span><i class="iconfont icon-fanhui"></i><span class="num">修改</span></router-link>
            <router-link to="/my/ReceivingAddress" tag="li"><span class="text">收货地址管理</span><i class="iconfont icon-fanhui"></i></router-link>
            <router-link to="/my/notification" tag="li"><span class="text">消息提醒</span><i class="iconfont icon-fanhui"></i></router-link>
        </ul>
        <ul class="box">
            <router-link to="/my/general" tag="li"><span class="text">通用</span><i class="iconfont icon-fanhui"></i></router-link>
        </ul>
        <button class="btn" @click="loginout">退出登录</button>
    </div>
</template>
<script>
import Vue from "vue";
import { Icons } from "vue-ydui/dist/lib.rem/icons";
Vue.component(Icons.name, Icons);
export default {
  data() {
    return {
      url:'',
      message:{}
    };
  },
  created() {
    this.initusermessage()
  },
  methods: {
    // 点击时退出登录
    // 获取token
    loginout() {
     
      this.accessToken = localStorage.getItem("mytoken");
      // 线上
      var urls = this.url + '/coms/user/logout'
      // 线下
      // var urls = this.url + ':8000/user/logout'
       console.log(urls)
      this.$http
        .post(
          urls +
            "?accessToken=" +
            this.accessToken
        )
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            // localStorage.removeItem("loginName");
            // localStorage.removeItem("key");
            // localStorage.removeItem("mytoken");
            this.$router.push({
              path: "/"
            });
          }
        });
         localStorage.removeItem("loginName");
          localStorage.removeItem("key");
          localStorage.removeItem("mytoken");
    },
    // 初始化用户信息
    initusermessage(){
        this.url = this.$store.state.url
        var urls =  this.url + ':8000/user/getInformation'
      this.$http.post(urls).then(res=>{
       console.log(res)
       if(res.status ===200){
         this.message = res.body.result
         this.message.mobileNo = res.body.result.mobileNo.substr(0,3)+"****"+res.body.result.mobileNo.substr(7)
       }
      })
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
        line-height: 1;
        border-bottom: 1px solid #e5e3e3;
        padding: 0.3rem 0;
        position: relative;
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
          vertical-align: middle;
          // padding-left: 0.2rem;
          float: left;
        }
        .icon-fanhui {
          color: #999;
          float: right;
          font-size: 0.2rem;
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



