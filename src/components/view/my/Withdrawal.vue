<template>
    <div class="box">
         <mt-header title="提现" style="background:#FF7C12;">
            <router-link to="../my" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="textbox">
            <div><span>可提现金额</span><span class="num">{{renmingbi}}元</span></div>
            <div><span>本次提现</span><span class="inputbox"><input type="text" placeholder="请输入提现金额" v-model="money"></span></div>
        </div>
        <p class="promptText">温馨提示:最低提现金额1元,最高1000元,每日可提现一次。</p>
        <div class="zhanghao">
            <div>
                <p class="firstp"><span>提现账户</span><span class="management" @click="tobank">管理</span></p>
                <p class="secondp"><img src="../../../assets/img/zifubao_001.png" alt="">&nbsp;<span>支付宝账号</span>&nbsp;&nbsp;<span>{{accounts}}</span></p>
            </div>
            <p class="thirdp"><span>收款人姓名</span>&nbsp;&nbsp;<span>{{username}}</span></p>
        </div>
        <div class="btn" @click="tixian">
            立即提现
        </div>
        <p class="promptText">审核时间预计最快2小时，最迟2个工作日</p>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            nums:0,
            renmingbi:0,
            money:null,
            aliPayNo:'',
            accounts:'',
            username:''
        }
    },
    created(){
        this.initAll();
        this.initplayNo()
    },
    methods:{
        //金币总数
    initAll() {
      let url = this.$store.state.url;
      let urls = url + ":8000/red/pack/obtain/all";
      let issueUserId = localStorage.getItem("key");
      let mobileNo = localStorage.getItem("loginName");
      this.$http
        .post(urls, { issueUserId: issueUserId, mobileNo: mobileNo })
        .then(res => {
          if (res.body.code === 200) {
            console.log(res);
            this.nums = res.body.result.virtualCurrency;
            this.renmingbi = this.nums / 100;
            //   this.listtwo = res.body.result.list
            //   dataStr
          }
        });
    },
    // 显示支付帐号
    initplayNo(){
         let url = this.$store.state.url;
      let urls = url + ":8000/binding/ali/is"; 
        let userId = localStorage.getItem("key");
      let mobileNo = localStorage.getItem("loginName");
    
        this.$http.post(urls,{userId:userId,mobileNo:mobileNo}).then(res=>{
            console.log(res)
            if(res.body.code===200){
                this.aliPayNo = res.body.result.aliPayNo
                let nums = res.body.result.aliPayNo
                let str = res.body.result.naming
                let account =''
                let name = ''
                for(var i = 0; i<nums.length;i++){
                    if(i<3 || i>=nums.length-3){
                        account +=nums[i]
                    }else{
                        account +='*'
                    }
                }
                for(var i = 0;i<str.length;i++){
                    if(i<1){
                        name +=str[i]
                    }else{
                        name +='*'
                    }
                }
               this.accounts =account
               this.username = name
            }
        })
    },
    //提现
    tixian(){
        console.log(123)
        let url = this.$store.state.url;
        let urls = url + ":8000/withdrawal/save";
        let userId = localStorage.getItem('key')
        if(this.money == null){
            Toast('请填入金额')
            return false
        }
        if(this.money <= 0){
            Toast('请填入正确金额')
            return false
        }
        if(this.money <= this.renmingbi){
            // 类型 支付宝 1 微信 2 银行卡 3
            this.$http.post(urls,{money:this.money,userId:userId,type:1,Account:this.aliPayNo}).then(res=>{
                console.log(res)
                if(res.body.code===200){
                    Toast('提现成功，正在审核中，请耐心等待')
                    this.$router.push({path:'/my/myrecord'})
                }
            })
        }else{
            Toast('可提现金额不足')
            return false
        }
    },
    tobank(){
       this.$router.push({path:'/my/bindBank'}) 
    }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        height: 100%;
        background-color:#FF7C12;
        .textbox{
            width: 7rem;
            // height: 1.8rem;
            padding: 0.1rem 0.2rem;
            margin: 0.2rem auto;
            border-radius: 0.1rem;
            background-color: #fff;
            div{
                height: 0.7rem;
                line-height: 0.7rem;
                display: flex;
                justify-content: space-between;
                &:nth-child(1){
                    border-bottom: solid 0.02rem #ccc;
                }
                span{
                    font-size: 0.24rem;
                    color: #666666;
                }
                .num{
                    color: #FF7C12;
                }
                .inputbox{
                    width: 2rem;
                    input{
                        outline: none;
                        border: none;
                        width: 2rem;
                        height: 0.7rem;
                        // background-color: pink;
                        text-align: right;
                    &::-webkit-input-placeholder{
                        color: #CCCCCC;
                        font-size: 0.24rem;
                    }
                    }
                }
            }
           
        }
         .promptText{
                color: #fff;
                font-size: 0.24rem;
            }
        .zhanghao{
               width: 7rem; 
               padding: 0.1rem 0.2rem;
                margin: 0.2rem auto;
                border-radius: 0.1rem;
                background-color: #fff;
            div{
                border-bottom: solid 0.02rem #ccc;
                .firstp{
                    display: flex;
                    justify-content: space-between;
                    .management{
                        color: #FF7C12;
                        
                    }
                  
                }
                span{
                    line-height: 0.7rem;
                }
                .secondp{
                    text-align: left;
                      img{
                        width: 0.3rem;
                        height: 0.3rem;
                        vertical-align:middle; 
                    }
                    span{
                        vertical-align:middle;
                    }
                }
            }
            .thirdp{
                text-align: left;
                span{
                    line-height: 0.7rem;
                }
            }
        }
        .btn{
            width: 7rem;
            height: 0.88rem;
            margin: 0 auto;
            background-color: #fff;
            text-align: center;
            line-height: 0.88rem;
            color: #CCCCCC;
            border-radius: 0.1rem;
            font-size: 0.3rem;
        }
    }
</style>

