<template>
  <div class="login">
    <mt-header title="登录">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="login-box">
        <img src="../assets/img/logo.png">
        <p>上帝版</p>
      </div>
      <ul>
        <li class="input-li">
          <input v-model="username" type="text" placeholder="请输入账号">
        </li>
        <li class="input-li">
          <input v-model="password" type="password" placeholder="请输入密码">
          <i class="iconfont icon-openEye"></i>
        </li>
        <li class="autologin">
          <span>自动登录</span>
          <mt-switch v-model="value"></mt-switch>
        </li>
        <li>
          <button @click="login">登录</button>
        </li>
        <li>
          <router-link to="VerificationCodeLogin">忘记密码</router-link>
          <router-link to="Register">注册</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      value: false,
      username: "",
      password: "",
      url:''
    };
  },
  methods: {
    login() {
      
      this.url = this.$store.state.url
      console.log(this.url)
      //点击时设置存储表头信息，
      localStorage.setItem(
        "mytoken",
        "Basic c2hpdGlnby1jbGllbnQtdWFjOnNoaXRpZ29DbGllbnRTZWNyZXQ="
      );
      //点击时登录 验证用户名是否为空
      //console.log(this.username, this.password);
      //console.log(this.username.trim().length, this.password.trim().length);

      if (this.username.trim().length == 0) {
        Toast("请输入用户名！");
        return;
      }
      //验证手机号格式
      var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (reg.test(this.username)) {
        //验证密码是否为空
        if (this.password.trim().length == 0) {
          Toast("请输入密码！")
          return;
        }
        var url = this.url+':7979/uac/auth/form'
        //发送登录请求
        this.$http
          .post(
           url+ "?username=" +
              this.username +
              "&password=" +
              this.password
          )
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              if (res.body.code == 200) {
                var str = res.body.result.token_type;
                var str2 = str.substring(0, 1).toUpperCase() + str.substring(1);
                var mytoken = str2 + " " + res.body.result.access_token;
                // var reftoken =res.body.result.refresh_token;
                // console.log(str2)
                //  点击登录时，设置token值，token_type + access_token
                localStorage.setItem("mytoken", mytoken);
                // localStorage.setItem("reftoken",reftoken)
                //获取用户的userId
                localStorage.setItem("key", res.body.result.userId);
                localStorage.setItem("loginName", res.body.result.loginName);
                this.$router.push({
                  path: "/home"
                });
              }
            }
          })
          .catch(res => {
            console.log(res);
            Toast('登录失败')
            // this.$dialog.toast({ mes: res.body.message });
          })
      } else {
        // this.$dialog.alert({ mes: "输入手机号格式错误！" });
        Toast("输入手机号格式错误！")
      }
    }
  },
  watch: {
    value: function(val) {
      //console.log(val);
      if (val == true) {
        this.login();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login{
  height: 100%;
  background: #ff7c12;
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
  .content {
    width: 7rem;
    margin: 0.2rem auto;
    background: #fff;
    border-radius: 0.1rem;
    padding: 0.8rem 0.62rem;
    .login-box {
      img {
        display: block;
        margin: 0 auto;
        width: 1.6rem;
        height: 1.6rem;
      }
      p {
        font-size: 0.28rem;
        color: #999;
        line-height: 0.48rem;
      }
    }
    li {
      display: flex;
      justify-content: space-between;
      line-height: 0.68rem;
      color: #999;
      button {
        height: 0.88rem;
        width: 100%;
        border: none;
        background: #ff7c12;
        font-size: 0.3rem;
        color: #fff;
        border-radius: 0.44rem;
      }
    }
    .input-li {
      border-bottom: 1px solid #cecece;
      display: flex;
      margin-top: 0.3rem;
      input {
        width: 100%;
        height: 0.68rem;
        border: none;
      }
      .icon-openEye {
        font-size: 0.3rem;
        color: #999;
      }
    }
    .autologin {
      color: #666;
      margin-bottom: 0.8rem;
      /deep/ .mint-switch-core {
        width: 42px;
        height: 22px;
      }
      /deep/ .mint-switch-core::before {
        width: 40px;
        height: 20px;
      }
      /deep/ .mint-switch-core::after {
        width: 20px;
        height: 20px;
      }
      /deep/ .mint-switch-input:checked + .mint-switch-core::after {
        transform: translateX(21px);
      }
      /deep/ .mint-switch-input:checked + .mint-switch-core {
        background: #ff7c12;
        border-color: #ff7c12;
      }
    }
  }
}
</style>

	
	
		