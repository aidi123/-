<template>
    <div class="bg">
        <mt-header title="修改密码" style="background:#FF7C12;">
            <router-link to="./setting" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <ul class="box">
            <li><input type="text" placeholder="登录帐号" v-model="message.mobileNo" disabled="disabled"></li>
            <li><input type="password" placeholder="请输入原密码" v-model="oldPassword"></li>
            <li><input type="password" placeholder="请输入新密码" v-model="newPassword"></li>
            <li><input type="password" placeholder="确认新密码" v-model="confirmPwd" @blur.prevent="changeCount"></li>
        </ul>
        <button class="btn" @click="sbmit">确定</button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      message:{

      },
      mobileNos:'',
      oldPassword:'',
      newPassword:'',
      confirmPwd:'',
      url:''
    };
  },
  created () {
    this.initusermessage()
  },
  methods: {
    //初始话数据
    initusermessage(){
      this.url = this.$store.state.url
      var urls = this.url + ':8000/user/getInformation'
      this.$http.post(urls).then(res=>{
       console.log(res)
       if(res.status ===200){
         this.message = res.body.result
         this.message.mobileNo = res.body.result.mobileNo.substr(0,3)+"****"+res.body.result.mobileNo.substr(7)
        //  this.loginName = res.body.result.loginName
         console.log(res.body.result.mobileNo,this.message.mobileNo)
       }
      })
    },
    //确认新密码 失去焦点时 判断两次输入的密码是否一样
    changeCount(){
      console.log(123)
      if(this.confirmPwd.trim() !== this.newPassword.trim()){
        Toast("新密码错误")
        return false
      }
    },
    sbmit(){
      var urls = this.url +':8000/user/self/modifyUserPwd'
      this.$http.post(urls,
      {"confirmPwd": this.confirmPwd.trim(),
      "loginName": this.message.loginName,
      "newPassword":this.newPassword.trim(),
      "oldPassword": this.oldPassword.trim()
      }
      ).then(res=>{
        console.log(res)
        if(res.body.code===200){
          Toast('修改成功')
          localStorage.setItem('loginName','')
          this.$router.push('/')
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
        // line-height: 1.5;
        border-bottom: 1px solid #e5e3e3;
        padding: 0.3rem 0;
        input {
          border: 0;
          outline: 0;
          float: left;
          font-size: 0.24rem;
          margin: 0;
          padding: 0;
        }
        input::-webkit-input-placeholder {
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        input::-ms-input-placeholder {
          /* Microsoft Edge */
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
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



