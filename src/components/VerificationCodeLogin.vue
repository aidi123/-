<template>
  <div class="bg">
    <mt-header title="登录">
      <router-link to="/" slot="left">
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
          <input type="text" v-model="mobileNo" placeholder="请输入手机号码">
        </li>
        <li class="input-li">
          <input type="text" v-model="code" placeholder="请输入验证码">
          <button
            id="yzma"
            @click="getCode"
            v-bind:disabled="isSend"
            v-bind:style="{color: activeColor}"
          >{{content}}</button>
        </li>
        <li>
          <button id="login" @click="login">登录</button>
        </li>
        <li>
          <router-link to="/">账户密码登录</router-link>
          <router-link to="Register">注册</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobileNo: "",
      code: "",
      content: "获取验证码",
      totalTime: 60,
      isSend: false,
      activeColor: "#ff7c12"
    };
  },
  methods: {
    //点击时登录 验证用户信息和密码是否空
    login() {
      var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      this.url = this.$store.state.url
      let urls = this.url + ':7979/uac/auth/phone'
      // ':7979/uac/auth/form'
      if (reg.test(this.mobileNo)) {
        if (this.code.trim().length == 6) {
          this.$http
            .post(
             urls +
                "?mobile=" +
                this.mobileNo +
                "&smsCode=" +
                this.code
            )
            .then(res => {
              console.log(res);
              if (res.status == 200) {
                if (res.body.code == 200) {
                  this.$router.push({
                    path: "/home"
                  });
                }
              }
            })
            .catch(res => {
               console.log(res);
              this.$dialog.toast({ mes: res.body.message });
            });
        } else {
          this.$dialog.alert({ mes: "验证码为 6 个字符！" });
          this.code = "";
        }
      } else {
        this.$dialog.alert({ mes: "请输入正确手机号！" });
        this.mobileNo = "";
      }
    },

    getCode() {
      // 获取验证码
      var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      this.url = this.$store.state.url
      let urls = this.url + ':8000/self/sendSms/auth/sendLoginCode'
      if (reg.test(this.mobileNo)) {
        this.$http
          .post(urls, {
            mobileNo: this.mobileNo,
            type: "1"
          })
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              if (res.body.code == 200) {
                // 验证码倒计时
                this.isSend = true;
                this.activeColor = "#999";
                this.content = this.totalTime + "s后重新发送"; //这里解决60秒不见了的问题
                let clock = window.setInterval(() => {
                  this.totalTime--;
                  this.content = this.totalTime + "s后重新发送";
                  if (this.totalTime <= 0) {
                    //当倒计时小于0时清除定时器
                    window.clearInterval(clock);
                    this.content = "重新发送";
                    this.isSend = false;
                    this.activeColor = "#ff7c12";
                    this.totalTime = 60;
                  }
                }, 1000);
              }
            }
          })
          .catch(res => {
            this.$dialog.toast({ mes: res.body.message });
          });
      } else {
        this.$dialog.alert({ mes: "请输入正确手机号！" });
        this.mobileNo = "";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bg{
height: 100%;
background:#ff7c12; 
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
    #login {
      height: 0.88rem;
      width: 100%;
      border: none;
      background: #ff7c12;
      font-size: 0.3rem;
      color: #fff;
      border-radius: 0.44rem;
      margin-top: 0.8rem;
    }
    #yzma {
      width: 2.2rem;
      //color: #ff7c12;
      border: none;
      text-align: right;
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
  }
}
}
</style>

	
	
		