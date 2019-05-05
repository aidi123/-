<template>
    <div class="bg">
        <mt-header title="我的评价" style="background:#FF7C12;">
            <router-link to="../my" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <ul class="box">
            <li>
              <div class="person">
                <img src="../../../assets/img/pic_m_pj@2x.png" alt="" class="headImg">
                <p class="name">A 橘子蜜</p>
                <p class="time">2018-08-13 13:24</p>
              </div>
              <p class="text">这家店的衣服质量还不错，已经第二次在这家店购买衣服了，质量依然很好，看店铺装修挺有风格的，一点也不输给一线品牌，价格却没有想象中的那么贵。</p>
                <img src="../../../assets/img/img_m1@2x.png" alt="" class="img">
                <img src="../../../assets/img/img_m2@2x.png" alt="" class="img">
                <img src="../../../assets/img/img_m3@2x.png" alt="" class="img">
              <div class="detail">
                <img src="../../../assets/img/img_pjdp@2x.png" alt="" class="storeImg">
                <span class="store">优衣库专卖店</span><span class="score">4.9分</span>
                <p class="clothes">女装 SUPIMA COTTON圆领T恤(短袖) 404136 优衣库UNIQLO</p>
                <span class="address">汉口北</span>&nbsp;&nbsp;<span class="discounts">满减优惠</span><span class="distance">320m</span>
              </div>
            </li>
        </ul>
        <ul class="box">
            <li>
              <div class="person">
                <img src="../../../assets/img/pic_m_pj@2x.png" alt="" class="headImg">
                <p class="name">A 橘子蜜</p>
                <p class="time">2018-08-13 13:24</p>
              </div>
              <p class="text">这家店的衣服质量还不错，已经第二次在这家店购买衣服了，质量依然很好，看店铺装修挺有风格的，一点也不输给一线品牌，价格却没有想象中的那么贵。</p>
                <img src="../../../assets/img/img_m1@2x.png" alt="" class="img">
                <img src="../../../assets/img/img_m2@2x.png" alt="" class="img">
                <img src="../../../assets/img/img_m3@2x.png" alt="" class="img">
              <div class="detail">
                <img src="../../../assets/img/img_pjdp2@2x.png" alt="" class="storeImg">
                <span class="store">优衣库专卖店</span><span class="score">4.9分</span>
                <p class="clothes">女装 SUPIMA COTTON圆领T恤(短袖) 404136 优衣库UNIQLO</p>
                <span class="address">汉口北</span>&nbsp;&nbsp;<span class="discounts">满减优惠</span><span class="distance">320m</span>
              </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from "vue";
import { Icons } from "vue-ydui/dist/lib.rem/icons";
import { Switch } from "mint-ui";
Vue.component(Switch.name, Switch);
Vue.component(Icons.name, Icons);
export default {
  data() {
    return {
      url:''
    };
  },
  created() {
    this.initmyevaluation()
  },
  methods: {
    //我的评价
    initmyevaluation(){
        this.url = this.$store.state.url
        let urls = this.url +':8810/comment/self/selectByUserId'
        this.$http.post(urls).then(res=>{
          console.log(res)
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
    background: #ff7c12;
    background-size: 100% 100%;
    .box {
      background: #fff;
      border-radius: 0.1rem;
      margin: 0.2rem auto;
      width: calc(100% - 0.4rem);
      height: auto;
      padding: 0.2rem;
      li {
        height: auto;
        .person {
          height: 1rem;
          margin-bottom: 0.2rem;
          .headImg {
            float: left;
            height: 1rem;
            padding-right: 0.2rem;
          }
          .name {
            color: #333;
            font-size: 0.3rem;
            padding-top: 0.1rem;
            text-align: left;
          }
          .time {
            color: #999;
            font-size: 0.24rem;
            text-align: left;
          }
        }
        .text {
          color: #666;
          font-size: 0.24rem;
          line-height: 0.4rem;
          text-align: left;
          padding-bottom: 0.2rem;
        }
        .img {
          width: 32.6%;
        }
        .detail {
          width: 100%;
          height: 2rem;
          margin-top: 0.2rem;
          background: #f2f2f2;
          border-radius: 0.1rem;
          padding: 0.1rem;
          .clothes {
            color: #666;
            font-size: 0.24rem;
            line-height: 0.4rem;
            text-align: left;
          }
          .storeImg {
            height: 100%;
            float: left;
            padding-right: 0.1rem;
          }
          .store {
            color: #000;
            font-size: 0.3rem;
            float: left;
          }
          .score {
            color: #ff010e;
            float: right;
            font-size: 0.3rem;
          }
          .address {
            padding: 0 0.15rem;
            border-radius: 0.05rem;
            background: #0b9b95;
            color: #fff;
            float: left;
            margin-top: 0.28rem;
            margin-right: 0.1rem;
          }
          .discounts {
            padding: 0 0.15rem;
            border-radius: 0.05rem;
            background: #ff7c12;
            color: #fff;
            float: left;
            margin-top: 0.28rem;
          }
          .distance {
            float: right;
            color: #999;
            font-size: 0.24rem;
            padding-top: 0.28rem;
          }
        }
      }
    }
  }
}
</style>



