<template>
    <div class="hongbao">
        <mt-header title="红包" style="background:#6B27CC;">
            <router-link to="../my" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <div class="imgbox">
            <img src="../../../assets/img/hongbao_pic_01.png" alt="">
        </div>
        <div class="hongbaobox">
            <div class="text">
                <p>  您共有（<span>{{num}}</span>）个红包金币未领取,</p>
                 <p>领取成功后,</p>           
                  <p>可在我的页面直接提现！</p>           
            </div>
            <div class="play">
                 <ul>
                      <li v-for="(item,index) in list" :key="index" @click="split(index,item.id,item.userId)">
                          <p>广告分享红包</p>
                      </li>
                  </ul>   
            </div>
        </div>
        <div class="box" v-show="flag">
            <div class="redbag">
                <div class="textbox">
                    <p class="text1">恭喜您！</p>
                    <p>领取了{{hongbao}}元红包</p>
                    <div>马上查看 <span class="iconfont icon-tiaozhuan"></span></div>
                    <span class="iconfont icon-x close" @click="close"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import { Toast } from "mint-ui";
export default {
    data () {
        return {
          list:[],
          num:0,
          flag:false,
          hongbao:0
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
         let mobileNo = localStorage.getItem('loginName')
         let url = this.$store.state.url;
         let urls = url + ':8000/red/pack/obtain/page'  
         this.$http.post(urls,{mobileNo:mobileNo}).then(res=>{
             console.log(res)
             if(res.body.code===200){
                 this.list=res.body.result
                this.num =this.list.length
             }
         })
        },
        split(index,id,userid){
            // 移除index这个对象
            console.log(id,userid)
            
            // let mobileNo = localStorage.getItem('loginName')
            let url = this.$store.state.url;
            let urls = url + ':8000/red/pack/obtain/user'
            this.$http.post(urls,{id:id,issueUserId:userid}).then(res=>{
                console.log(res)
                this.list.splice(index,1)
                this.num =this.list.length
                this.flag = true
                this.hongbao =res.body.result.cashWithdrawal/100
            })
        },
        close(){
            this.flag = false
        }
    }
}
</script>
<style lang="scss" scoped>
    .hongbao{
        width:7.5rem;
        height: 100%;
        background-color:#7D36E3; 
        .imgbox{
            width: 7.5rem;
            height: 3.6rem;
            img{
                width: 100%;
                display: block;
            }
        }
        .hongbaobox{
            width: 7.5rem;
            padding: 0 0.5rem;
           
            .text{
                padding-top:0.2rem;
                 background-color: #6B27CC;
                color: #C093FD;
                span{
                    color: #FDC041
                }
            }
            .play{
                
                background-color: #6B27CC;
                ul{
                   overflow: hidden;
                   padding-bottom: 0.2rem;
                    li{
                    width: 2rem;
                    height: 2.4rem; 
                    margin-top:0.3rem; 
                    background-image: url(../../../assets/img/hongbao_pic_02.png);
                    background-repeat: no-repeat;
                    background-size: cover;
                    float: left;
                    &:nth-child(3n+2){
                        margin-left:0.25rem;
                        margin-right:0.25rem;
                    }
                    p{
                        line-height: 1.4rem;
                        color: #fff;
                    }
                    }
                }
                // li:nth-child(2){
                //       margin: 0 0.2rem;
                //   }
                
            }
        }
        .box{
            width:7.5rem ;
            height: 100%;
            position: fixed;
            top:0;
            left: 0;
            background: rgba(0,0,0,0.6);
            .redbag{
               width: 4.1rem;
               height: 6.4rem; 
               background-image: url(../../../assets/img/hongbao_pic_03.png);
               background-repeat: no-repeat;
               background-size: cover;
               position: absolute;
               left: 50%;
               top:50%;
               transform: translate(-50%,-50%);
               .textbox{
                   width:4.1rem ;
                   height: 3rem;
                   position: absolute;
                   bottom: 0;
                   p{
                       color:#FBE945; 
                       font-size: 0.3rem;
                   }
                   .text1{
                       font-size: 0.45rem; 
                       padding-bottom: 0.2rem;
                   }
                   div{
                       margin-top:1rem;
                       color: #87141F;
                       .icon-tiaozhuan:before{
                           font-size: 0.24rem;
                       }
                   }
                    .close{
                        width: 0.5rem;
                        height: 0.5rem;
                        // border-radius: 50%;
                        // background: rgba(0, 0, 0, 0.6);
                        position: absolute;
                        top:-0.5rem;
                        right: 0.1rem;
                        color: #fff;
                        font-size: 0.15rem;
                        line-height: 0.5rem;
                    }
               }
            }
        }
    }
</style>
