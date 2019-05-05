<template>
  <div class="buyorder">
      <!-- 我的订单 -->
    <mt-header title="我的订单" style="background:#FF7C12;">
      <span slot="left" @click="goback">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>
    <div class="address" @click="tochoose" v-show="JSON.stringify(obj) != '{}'?true:false">
        <p>{{obj.realname}}{{obj.mobile}}</p>
        <p> {{obj.address}}{{obj.detailAddress}}</p>
        <span class="iconfont icon-tiaozhuan toeditor"></span>
    </div>
    <div class="address" @click="tochoose" v-show="JSON.stringify(obj) == '{}'?true:false">
        <p>{{listaddress.realname}}{{listaddress.mobile}}</p>
        <p> {{listaddress.address}}{{listaddress.detailAddress}}</p>
        <span class="iconfont icon-tiaozhuan toeditor"></span>
    </div>
    <div class="goodsmessage">
       <div class="shop">
           {{listmessage.storeName}}
       </div>
       <div class="messages">
          <div class="imgbox"><img :src="listmessage.cimg" alt=""></div>
          <div class="titles">
              <p class="fristp">{{listmessage.subject}}</p>
              <p class="secondep">{{adress}}</p>
              <div class="pricebox">
                  <div class="price">￥ <span class="pricesp">{{listmessage.price}}</span></div>
                  <div class="num">
                       <span @click="reduce" >-</span>
                        <input type="text" disabled="disabled" v-model="number">
                        <span @click="add">+</span>
                  </div>
              </div>
          </div>
       </div>
    </div>
    <div class="pay">
        <div class="boxs">
            <p><span>商品金额</span> <span class="price">{{totalprice}}</span> </p>
            <p><span>运费</span>  <span class="price">0</span></p>
        </div>
        <div class="paybox">实际支付：<span class="price">{{totalprice}}</span> </div>
        <div class="paynow" @click="paymoney">立即支付</div>
        <div class="cancel">取消</div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
           number:'1',
           listaddress:{},
           listmessage:{},
           adress:'',
           price:'',
           totalprice:null
        //    obj:{}
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            let businGoodsId = this.$route.params.id
            let url = this.$store.state.url
            let urls = url +':8000/busin/goods/order'
            let userId = localStorage.getItem('key')
            this.$http.post(urls,{id:businGoodsId,userId:userId}).then(res=>{
                console.log(res)
                if(res.body.code ===200){
                    this.listaddress = res.body.result.userAddress
                    this.listmessage =  res.body.result.commodity
                    this.price = res.body.result.commodity.price
                    this.adress = localStorage.getItem('adress')
                    this.number = this.adress.split(' ')[2],
                    this.totalprice = (this.price * this.number).toFixed(2)
                    console.log(this.totalprice)
                }
            })
        },
        tochoose(){
            this.$router.push({path:'/my/ChooseAddress'})
        },
        goback(){
            let url = localStorage.getItem('path')
            this.$router.push({path:url})
        },
        //减少
        reduce() {
        if (this.number <= 1) {
            this.number = 1;
           
        } else {
            this.number--;
            //  console.log(this.adress.split(' '))
             var str= this.adress.split(' ')[0] +' '+ this.adress.split(' ')[1]+' '+ this.number
             this.adress = str
             console.log(str)
        }
        },
        //添加
        add() {
        this.number++;
         var str= this.adress.split(' ')[0] +' '+ this.adress.split(' ')[1]+' '+ this.number
             this.adress = str
        },
        //点击支付时
        paymoney(){
            //点击时获取地址信息
            let obj = this.$store.state.obj
            let  adress = ''
            if(JSON.stringify(obj) != '{}'){
                // 如果是自己选中的（不为空）
                // 传这个地址及商品信息
                adress =obj.realname+','+obj.mobile+','+obj.address+','+obj.detailAddress
            }else{
                // 传初始化时的地址
                adress = this.listaddress.realname +','+this.listaddress.mobile+','+this.listaddress.address+','+this.listaddress.detailAddress
            }
            let url = this.$store.state.url
            let urls = url +':8000/busin/goods/bay'
            let objs = {};
            let arr = [];
            let obj1 = {};
            // console.log(this.$route.params.id )
            obj1.commodityId = this.$route.params.id;
            obj1.count = this.number;
            obj1.commodityPrice = this.price;
            obj1.address = adress
            obj1.productAttribute =this.adress //尺码数量
            // arr[0] = obj1;
            objs.userId = localStorage.getItem("key");
            objs.carCommodity = obj1;
            objs.productName = this.listmessage.cname
            objs.totalPrice = this.totalprice
            objs.payment =  this.totalprice
            objs.url = location.href
            this.$http.post(urls,objs).then(res=>{
                console.log(res)
                if(res.status === 200){
                    //唤醒支付宝
                      const div = document.createElement("div");
                        div.innerHTML = res.body;
                        document.body.appendChild(div); //document.forms[0].alipaysubmit.submit();
                        document.forms[0].submit();
                }
            })
       
            
        }
    },
    watch:{
       number:function(val){
           this.totalprice = (val * this.price).toFixed(2)
       } 
    },
    //获取vuex state数据
    computed:{
        obj(){
            //选中时，页面显示地址信息
            return  this.$store.getters.obj
        }
        
    }
};
</script>
<style lang="scss" scoped>
.buyorder {
  width: 7.5rem;
  height: 100%;
  background: #ff7c12;
  .address{
      width: 7rem;
      padding: 0.3rem 0.2rem;
      border-radius: 0.1rem;
      background: #fff;
      margin: 0.2rem auto;
      position: relative;
      p{
          width: 5.3rem;
          text-align:left;
      }
      .toeditor{
          width: 1rem;
          height: 0.8rem;
          line-height: 0.8rem;
          position: absolute;
          top:50%;
          right: 0;
          transform: translateY(-50%);
      }
  }
  .goodsmessage{
      width: 7rem;
    //   padding: 0.2rem;
      margin: 0 auto;
      border-radius: 0.1rem;
      background: #fff;
     .shop{
         line-height: 0.8rem;
         padding-left: 0.2rem;
         text-align: left;
         border-bottom: solid 0.01rem #ccc;
     }
     .messages{
         width: 7rem;
         height:2rem ;
         padding: 0.2rem;
         .imgbox{
             width: 1.2rem;
             height: 1.2rem;
             float: left;
             position: relative;
             img{
                 width: 100%;
                 position: absolute;
                 top:50%;
                 left: 50%;
                 transform: translate(-50%,-50%);
             }
            
         }
         .titles{
             width: 5.4rem;
             height: 1.6rem;
            //  background: pink;
             float: left;
             padding-left: 0.2rem;
             position: relative;
             p{
                 text-align: left;
             }
             .fristp{ 
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical; 
                font-size: 0.28rem;
             }
             .secondep{
                 color: #999999;
             }
             .pricebox{
                 width: 5.4rem;
                 height: 0.6rem;
                 line-height: 0.6rem;
                 position: absolute;
                 bottom: 0;
                 left: 0;
                //  background-color: yellow;
                display: flex;
                justify-content: space-between;
                .num{
                    background: #ccc;
                    span{
                        width: 0.5rem;
                        height: 0.6rem;
                        display: inline-block;
                    }
                    input{
                        width: 0.6rem;
                        height: 0.6rem;
                        outline: none;
                        border: none;
                        text-align: center;
                    }
                }
                .price{
                    color: #FF2D2D;
                    .pricesp{
                        color: #FF2D2D;
                        font-size: 0.3rem;
                    }
                }
             }
         }
     }
  }
  .pay{
      width: 7rem;
      padding-bottom: 0.2rem;
      border-radius: 0.1rem;
      margin: 0.2rem auto;
      background: #fff;
    .boxs{
        width: 7rem;
        height: 1.6rem;
        padding: 0.2rem;
        border-bottom: solid 0.01rem #E6E6E6;
        // margin: 0.1rem;
        p{
            line-height: 0.6rem;
            display: flex;
            justify-content: space-between;
            .price{
                color: #FF2D2D;
               
            }
        }
        
    }
    .paybox{
        line-height: 0.88rem;
        padding: 0.2rem;
        text-align: right;
        .price{
                color: #FF2D2D;
               
            }
    }
    .paynow{
         width: 6.6rem;
        height: 0.88rem;
        padding: 0 0.2rem;
        margin: 0rem auto;
        border-radius: 0.1rem;
        line-height: 0.88rem;
        font-size: 0.3rem;
        border: solid 0.01rem #ccc;
        background: #ff7c12;
        color: #fff;
    }
    .cancel{
         width: 6.6rem;
        height: 0.88rem;
        padding: 0 0.2rem;
        margin: 0.2rem auto;
        border-radius: 0.1rem;
        line-height: 0.88rem;
        font-size: 0.3rem;
        border: solid 0.01rem #CBCACA;
        // background: #ff7c12;
        color: #666666;
    }
  }
}
</style>
