<template>
  <div class="bg">
    <mt-header title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="login-box">
        <img src="../assets/img/logo.png">
        <!-- <p>上帝版</p> -->
      </div>
      <ul>
        <li class="input-li">
          <input type="text" v-model="mobileNo" placeholder="请输入手机号码">
        </li>
        <li class="input-li">
          <input type="password" v-model="loginPwd" placeholder="请输入密码">
        </li>
        <li class="input-li">
          <input type="password" v-model="confirmPwd" placeholder="确认密码">
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
        <li style="justify-content: flex-start;">
          <yd-checkbox v-model="checkbox" size="14" color="#FF7C12">
            <span>已阅读并同意以下协议</span>
          </yd-checkbox>
          <router-link to="Agreement" style="color: #FF7C12;">《实体GO用户协议》</router-link>
        </li>
        <li>
          <button id="reg" @click="register">同意协议并注册</button>
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
      loginPwd: "",
      confirmPwd: "",
      code: "",
      checkbox: false,
      content: "获取验证码",
      totalTime: 60,
      isSend: false,
      activeColor: "#ff7c12"
    };
  },
  methods: {
    register() {
      var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (!reg.test(this.mobileNo)) {
        this.$dialog.alert({ mes: "请输入正确手机号！" });
        this.mobileNo = "";
        return;
      }
      if (this.loginPwd.trim().length < 6) {
        this.$dialog.alert({ mes: "密码最短为 6 个字符！" });
        this.loginPwd = "";
        return;
      }
      if (this.confirmPwd != this.loginPwd) {
        this.$dialog.alert({ mes: "密码两次输入不一致！" });
        this.confirmPwd = "";
        return;
      }
      if (this.code.trim().length != 6) {
        this.$dialog.alert({ mes: "验证码为 6 个字符！" });
        this.code = "";
        return;
      }
      if (!this.checkbox) {
        this.$dialog.alert({ mes: "请阅读并同意《实体GO用户协议》！" });
        return;
      }
      this.url = this.$store.state.url
      let urls = this.url + ':8000/user/registerUser'
      this.$http
        .post(urls, {
          mobileNo: this.mobileNo,
          loginPwd: this.loginPwd,
          confirmPwd: this.confirmPwd,
          code: this.code
        })
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            if (res.body.code == 200) {
              this.$dialog.toast({ mes: "注册成功！" });
              this.$router.push({
                path: "/"
              });
            } else if (res.body.code == 10011012) {
              this.$dialog.toast({ mes: res.body.message });
              this.$router.push({
                path: "/"
              });
            } else {
              this.$dialog.toast({ mes: res.body.message });
              this.code = "";
            }
          }
        })
        .catch(res => {
          this.$dialog.toast({ mes: res.body.message });
        })
    },
    getCode() {
      // 获取验证码
      var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      //console.log(reg.test(this.mobileNo));
      //console.log(this.mobileNo);
      this.url = this.$store.state.url
      let urls = this.url + ':8000/self/sendSms/auth/sendRegisterCode'
      if (reg.test(this.mobileNo)) {
        this.$http
          .post(
            urls,
            { mobileNo: this.mobileNo, type: "0" }
          )
          .then(res => {
            //console.log(res);
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
          })
      } else {
        this.$dialog.alert({ mes: "请输入正确手机号！" });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bg{
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
    .yd-checkbox {
      padding: 0;
    }
    #reg {
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
    /deep/ .yd-checkbox-icon {
      vertical-align: middle;
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

	
	
		