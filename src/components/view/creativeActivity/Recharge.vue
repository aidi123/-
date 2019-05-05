<template>
    <div class="recharge" :class="'bgc'+bgid">
        <div class="header">
            <span class="iconfont icon-fanhui" @click="goback"></span>
            充值
        </div>
        <div class="content">
            <p class="one">充值红包</p>
            <div class="two">发送红包：<span class="textnum"><input type="text" placeholder="自定义金额" v-model="price">元</span></div>
            <p class="three">活动期内，红包一经生成不能取消撤回，30天内剩余红包退回充值账号自行提现。</p>
            <div class="four">红包比例100元：300个红包，充100元红包平台补助50元红包，实际发放150元红包。用户转发活动即可领取！</div>
            <p class="five">选择支付方式</p>
            <yd-checkbox-group v-model="checkbox">
                <yd-checkbox val="1" shape="circle"><span class="iconfont icon-zhifubaox">支付宝帐号</span></yd-checkbox>
            </yd-checkbox-group>
            <div class="confirm" :class="'bgc'+bgid" @click="topup">
                确认充值
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return{
            checkbox: ['1'],
            bgid:'',
            price:null
        }
    },
    created(){
        this.bgid = this.$route.params.id
    },
    methods:{
        // 点击支付
        topup(){
            let url =  this.$store.state.url+'/coms/recharge/save/red'
            console.log(123)
            // location.href
            // let href = location.href
            let href = localStorage.getItem('tourls')
            // console.log( location.href)
            // let url = 'http://10.10.10.136'+ ':8000/recharge/save/red'
            //活动id
            let id = localStorage.getItem('activeNum')
            let userid = localStorage.getItem('key')
            if(!this.price){
                Toast('填入金额')
                return false
            }
            if(!this.checkbox[0]){
                Toast('选择支付方式')
                return false
            }
            this.$http.post(url,{activityId:id,alipayType:0,totalPrice:this.price, payment:this.price,buyType:this.checkbox[0],userId:userid,productName:'充值',url:href}).then(res=>{
                console.log(res);
                if (res.status === 200) {
                    // 唤醒支付宝
                    const div = document.createElement("div");
                    div.innerHTML = res.body;
                    document.body.appendChild(div); //document.forms[0].alipaysubmit.submit();
                    document.forms[0].submit();
                }
            })
        },
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    .recharge{
        width: 7.5rem;
        height: 100%;
        padding: 0 0.2rem;
        .header{
            width: 7.1rem;
            height: 0.88rem;
            text-align: center;
            position: relative;
            line-height: 0.88rem;
            color: #fff;
            font-size: 0.3rem;
            span{
                width:0.7rem ;
                height: 0.7rem;
                display: block;
                border-radius: 50%;
                background:rgba(0,0,0,0.6);
                color: #fff;
                position: absolute; 
                top:0.09rem;
                left: 0;
                line-height: 0.7rem;
            }
        }
        .content{
            width: 7.1rem;
            height: 6.4rem;
            background-color: #fff;
            border-radius: 0.1rem;
            padding: 0.3rem 0.2rem;
            margin-top:0.3rem;
            p{
                text-align: left;
                font-size: 0.24rem;
                font-family:NotoSansHans-Regular;
                font-weight:400;
            }
            .one{
                font-size: 0.3rem;
                font-weight:600;
            }
            .two{
                width: 6.7rem;
                height:0.7rem ;
                margin-top:0.1rem;
                text-align: left;
                .textnum{
                    width: 2.4rem;
                    height: 0.6rem;
                    display: inline-block;
                    border: solid 0.02rem #9B9B9B;
                    border-radius: 0.1rem;
                    input{
                    outline: none;
                    border: none;
                    width: 2rem;
                    height: 0.6rem;
                    padding: 0 0.1rem;
                    }
                    input::-webkit-input-placeholder{
                        color: #CCCCCC;
                    }
                }
            }
            .three{
                line-height: 0.4rem;
                color:#FF1212; 
            }
            .four{
                width: 6.7rem;
                height: 1rem;
                padding: 0.16rem;
                margin-top:0.3rem;
                border-top: solid 0.02rem #ccc;
                border-bottom: solid 0.02rem #ccc;
                background-color: #D0B6F4;
                color: #351662;
                text-align: left;
            }
            .five{
                margin: 0.2rem 0;
                color: #333333;
                font-weight:600;
            }
            .icon-zhifubaox:before{
                color: rgb(0, 195, 255);
                font-size: 0.4rem;
                padding-right: 0.1rem;
            }
            /deep/ .yd-checkbox{
                display: block;
                text-align: left;
            }
            /deep/ .yd-checkbox-icon{
                float: right;
                color: #FF1212 !important;
            }
            .confirm{
                width:6.7rem;
                height: 0.88rem;
                margin: 0.35rem auto;
                border-radius: 0.88rem;
                line-height: 0.88rem;
                color: #fff;
                font-size: 0.3rem;
                // background-color: #6633CC;
            }
        }
    }
    .bgc2{
    background-color: #351662;
    }
    .bgc3{
    background-color: #C5213A;
    }
    .bgc4{
    background-color: #043188;
    }
    .bgc5{
    background-color: #981C0C;
    }
    .bgc6{
    background-color: #211C5A;
    }
</style>
