<template>
    <div class="bg">
        <mt-header title="换绑手机" style="background:#FF7C12;">
            <router-link to="./setting" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <ul class="box">
            <li><input type="text" placeholder="请输入新手机号码" v-model="mobileNo"></li>
            <li><input type="text" placeholder="请输入验证码"><button class="msgCode" @click="getcode">{{content}}</button></li>
        </ul>
        <router-link to="./setting" tag="button" class="btn">绑定</router-link>
    </div>
</template>
<script>
// import Vue from "vue";
// import { Icons } from "vue-ydui/dist/lib.rem/icons";
// Vue.component(Icons.name, Icons);
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      url:'',
      totalTime:60,
      content:'获取验证码',
      mobileNo:''
    };
  },
  methods: {
    getcode(){
    // 获取url
     // 获取公共ip
      this.url = this.$store.state.url
      var urls =  this.url + ':8000/self/sendSms/sendChangeMobileCode/'
       // 验证码倒计时
        var reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
       if(reg.test(this.mobileNo)){
         this.content = this.totalTime + "s后重新发送"; //这里解决60秒不见了的问题
         let clock = window.setInterval(() => {
           this.totalTime--;
           this.content = this.totalTime + "s后重新发送";
           if (this.totalTime <= 0) {
             //当倒计时小于0时清除定时器
             window.clearInterval(clock);
             this.content = "重新发送验证码";
             this.totalTime = 60;
           }
         }, 1000);
        //  请求验证码
        this.$http.post(urls+this.mobileNo).then(res=>{
          console.log(res)
          if(res.status ===200){
            Toast('发送成功')
          }
        })

       }else{
         Toast('请输入正确的手机号');
       }
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
        .msgCode {
          float: right;
          color: #ff7c12;
          font-size: 0.24rem;
          border:0;
          padding:0;
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



