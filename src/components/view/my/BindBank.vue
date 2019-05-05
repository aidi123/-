<template>
  <div class="bind">
    <mt-header title="绑定支付宝" style="background:#FF7C12;">
      <router-link to="../my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="message">
      <div>
        <img src="../../../assets/img/my_001.png" alt>&nbsp;&nbsp;
        <input type="text" placeholder="请输入真实姓名" v-model="username">
      </div>
      <div>
        <img src="../../../assets/img/zifubao_001.png" alt>&nbsp;&nbsp;
        <input type="text" placeholder="请输入支付宝账号" v-model="aliPayNo">
      </div>
      <div>
        <img src="../../../assets/img/phone_001.png" alt>&nbsp;&nbsp;
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
    </div>
    <div class="btn" @click="binding">确定绑定</div>
    <p class="promptText">温馨提示：填写有误将影响部分功能使用！</p>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
           username:'', 
           phone:'',
           aliPayNo:''
        }
    },
    created(){
      this.init()
    },
    methods:{
      init(){
         let url = this.$store.state.url;
         let urls = url + ":8000/binding/ali/is"; 
         let userId = localStorage.getItem("key");
         let mobileNo = localStorage.getItem("loginName");
        this.$http.post(urls,{userId:userId,mobileNo:mobileNo}).then(res=>{
         if(res.body.code ===200){
           if(res.body.result !=null){
             this.username =res.body.result.naming
             this.phone =res.body.result.mobileNo
             this.aliPayNo =res.body.result.aliPayNo
           }
         }
        })
      },
        binding(){
            if(this.username ==null){
                  Toast('请填写名字')
                  return false
            }
            // console.log(123)
            // console.log(this.aliPayNo)
             if(this.aliPayNo ==null){
                //  console.log(this.aliPayNo)
                Toast('请填写帐号')
                return false
            }
            if(this.phone ==null){
                Toast('请填写电话')
                 return false
            }
            let userid = localStorage.getItem('key')
            this.url = this.$store.state.url
             var urls =  this.url + ':8000/binding/ali/binding'
             this.$http.post(urls,{aliPayNo:this.aliPayNo,userId:userid,mobileNo:this.phone,naming:this.username}).then(res=>{
                 if(res.body.code ===200){
                     this.$router.push({path:'/my/withdrawal'})
                 }
             })
        }
    }
};
</script>
<style lang="scss" scoped>
.bind {
  height: 100%;
  background-color: #ff7c12;
  .message {
    width: 7rem;
    margin: 0.2rem auto;
    padding: 0.2rem;
    border-radius: 0.1rem;
    background-color: #fff;
    div {
      text-align: left;
      line-height: 0.7rem;
      border-bottom: solid 0.02rem #ccc;
      &:last-child {
        border: none;
      }
      input {
        outline: none;
        border: none;
        width: 5rem;
        // background-color: pink;
        line-height: 0.7rem;
        vertical-align: middle;
        &::-webkit-input-placeholder {
          color: #e0e0e0;
        }
      }
      img {
        width: 0.4rem;
        height: 0.4rem;
        vertical-align: middle;
      }
    }
  }
  .btn {
    width: 7rem;
    height: 0.88rem;
    margin: 0 auto;
    background-color: #fff;
    text-align: center;
    line-height: 0.88rem;
    color: #cccccc;
    border-radius: 0.1rem;
    font-size: 0.3rem;
  }
  .promptText {
    color: #fff;
    font-size: 0.24rem;
  }
}
</style>

