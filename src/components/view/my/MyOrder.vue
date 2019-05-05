<template>
  <div class="myorder">
    <mt-header title="我的订单" style="background:#FF7C12;">
      <router-link to="../my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待付款</mt-tab-item>
        <mt-tab-item id="3">待发货</mt-tab-item>
        <mt-tab-item id="4">待收货</mt-tab-item>
        <mt-tab-item id="5">待评价</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <p class="title">
                <span class="shopname">{{item.storeName}}</span>
                <span class="status" v-show="item.carComStatus ==1?true:false">待付款</span>
                 <span class="status" v-show="item.carComStatus ==2?true:false">已付款</span>
                 <span class="status" v-show="item.carComStatus ==3?true:false">已发货</span>
                 <span class="status" v-show="item.carComStatus ==4?true:false">已完成</span>
              </p>
              <div class="contentbox">
                <div class="imgbox">
                  <img :src="item.cimg" alt="">
                </div>
                <div class="textbox">
                  <p>
                    <span>同城秒杀</span>
                    {{item.cname}}{{item.subject}}
                  </p>
                </div>
               <p class="pnum">共{{item.count}}件商品 合计金额：{{item.price * item.count}}元</p>
              </div>
               <p class="btnbox">
                  <span v-show="item.carComStatus ==1?true:false">删除订单</span>
                  <span v-show="item.carComStatus ==1?true:false">立即支付</span>
                   <span v-show="item.carComStatus ==2?true:false">查看订单</span>
                   <span v-show="item.carComStatus ==2?true:false">再次购买</span>
                     <span v-show="item.carComStatus ==3?true:false">查看订单</span>
                   <span v-show="item.carComStatus ==3?true:false">再次购买</span>
                  <span v-show="item.carComStatus ==4">删除订单</span>
                  <span  v-show="item.carComStatus ==4?true:false">评价</span>
                </p>
            </li>
             
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="1">待付款</mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1",
      pageNum:1,
      pageSize:10,
      list:[]
    };
  },
  created(){
    this.initList()
  },
  methods:{
    initList(){
       let url = this.$store.state.url
       let urls = url +':8000/shop/car/find/all'
       let data = {}
       data.userId = localStorage.getItem('key')
       data.pageNum = this.pageNum
       data.pageSize = this.pageSize
       this.$http.post(urls,data).then(res=>{
         console.log(res)
         if(res.body.code ===200){
           this.list = res.body.result
         }
       })
    }
  }
};
</script>
<style lang="scss" scoped>
.myorder {
  height: 100%;
  background: #ff7c12;
  .content {
    width: 7rem;
    margin: 0 auto;
    .mint-navbar {
      padding: 0.3rem 0.2rem;
      border-radius: 0.1rem;
    }
    .mint-tab-item {
      padding: 0;
    }
    .mint-tab-item.is-selected {
      margin-bottom: -0.2rem;
      border-bottom: solid 0.04rem #ff7c12;
      color: #ff7c12;
    }
    .mint-tab-container {
      margin-top: 0.2rem;
      li {
        width: 7rem;
        margin-bottom: 0.2rem;
        padding: 0.2rem;
        background: #fff;
        border-radius: 0.1rem;
        .title {
          margin-bottom: 0.2rem;
          display: flex;
          justify-content: space-between;
          line-height: 0.8rem;
          border-bottom: solid 0.02rem #ccc;
          .shopname {
            font-size: 0.3rem;
            font-weight: 400;
            color: #333333;
          }
          .status {
            font-size: 0.24rem;
            color: #ff7c12;
          }
        }
        .contentbox {
          width: 6.6rem;
          height: 2rem;
          position: relative;
          border-bottom: solid 0.02rem #ccc;
          margin-bottom: 0.1rem;
          .imgbox {
            width: 1.2rem;
            height: 1.2rem;
            overflow: hidden;
            background-color: #fff;
            border:solid 0.01rem #ccc;
            position: absolute;
            left: 0;
            top: 0;
            img {
              width: 100%;
              position: absolute;
              top:50%;
              left: 50%;
              transform: translate(-50%,-50%);
            }
          }
          .textbox {
            height: 1.2rem;
            padding-left: 1.4rem;
            //   padding: 0.1rem 0 0.1rem 1.4rem;
            //   background-color: pink;
            text-align: left;
            p {
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              font-size: 0.28rem;
              font-weight: 400;
              color: #333;
              span {
                padding: 0.02rem 0.15rem;
                // display: inline-block;
                background: #ff7c12;
                color: #fff;
                border-radius: 0.1rem;
              }
            }
          }
            .pnum{
                text-align: right;
                line-height: 0.88rem;
            }
        }
         .btnbox {
            text-align: right;
            line-height: 0.88rem;
            span {
              padding: 0.2rem 0.3rem;
              background: #ff7c12;
              color: #fff;
              border-radius: 0.1rem;
              border: solid 0.02rem #ccc;
            }
          }
      }
    }
  }
}
</style>
