<template>
  <div class="bg">
    <div class="headers">
      <!-- <img src="../../assets/img/img_wode.jpg" alt=""> -->
      <!-- <router-link to="/my/Setting" tag="i" class="iconfont icon-shezhi1-copy change"></router-link> -->
      <div class="headersbox">
        <img :src="goodsimgs" alt class="headImg">
        <div class="username">
          <p>{{userName}}</p>
        </div>
      </div>
      <!-- <div class="name">
        <p>{{userName}}</p>
      </div>-->
    </div>
    <div class="box">
      <div class="order">
        <div class="myorder">
          <span>我的订单</span>
          <router-link to="/my/myOrder" tag="span">查看全部订单<i class="iconfont icon-tiaozhuan"></i></router-link>
          <!-- <span>查看全部订单<i class="iconfont icon-tiaozhuan"></i></span> -->

        </div>
        <div class="myplay">
          <ul>
            <li>
             <img src="../../assets/img/daifukuan.png" alt >
              <p>待付款</p>
            </li>
            <li>
             <img src="../../assets/img/daipingjia.png" alt >
              <p>待评价</p>
            </li>
             <li>
             <img src="../../assets/img/yiwancheng.png" alt >
              <p>已完成</p>
            </li>
            <li>
             <img src="../../assets/img/tuikuan.png" alt >
              <p>退款</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bank">
        <ul>
          <router-link to="/my/myrecord" tag="li" >
            <img src="../../assets/img/xianjin.png" alt class="icon">
            <span class="text">金呗现金提现</span>
            <i class="iconfont icon-fanhui"></i>
          </router-link>
          <router-link to="/my/rechargeRecord" tag="li">
            <img src="../../assets/img/chongzhi.png" alt class="icon">
            <span class="text">充值记录</span>
            <i class="iconfont icon-fanhui"></i>
          </router-link>
        </ul>
      </div>
      <ul>
        <li >
          <img src="../../assets/img/icon_sc@2x.png" alt class="icon">
          <span class="text">我的收藏</span>
          <i class="iconfont icon-fanhui"></i>
        </li>
        <router-link to="/my/myrelease" tag="li">
          <img src="../../assets/img/icon_fb@2x.png" alt class="icon">
          <span class="text">我的发布</span>
          <i class="iconfont icon-fanhui"></i>
        </router-link>
        <router-link to="/my/myevaluation" tag="li">
          <img src="../../assets/img/icon_fb1@2x.png" alt class="icon">
          <span class="text">我的评价</span>
          <i class="iconfont icon-fanhui"></i>
        </router-link>
        <!-- <li><img src="../../assets/img/icon_fl@2x.png" alt="" class="icon"><span class="text">福利中心</span><i class="iconfont icon-fanhui"></i></li> -->
        <router-link to="/my/customerservice" tag="li">
          <img src="../../assets/img/icon_kf@2x.png" alt class="icon">
          <span class="text">联系客服</span>
          <i class="iconfont icon-fanhui"></i>
        </router-link>
        <router-link to="/my/about" tag="li">
          <img src="../../assets/img/icon_gy@2x.png" alt class="icon iconAbout">
          <span class="text">关于我们</span>
          <i class="iconfont icon-fanhui"></i>
        </router-link>
        <router-link to="/my/Setting" tag="li">
          <img src="../../assets/img/sezhi_01.png" alt class="icon">
          <span class="text">设置</span>
          <i class="iconfont icon-fanhui"></i>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
// import Vue from "vue";
// import { Icons } from "vue-ydui/dist/lib.rem/icons";
// Vue.component(Icons.name, Icons);
export default {
  data() {
    return {
      url: "",
      signName: "",
      userName: "",
      goodsimgs: ""
    };
  },
  created() {
    this.initusermessage();
  },
  methods: {
    initusermessage() {
      var to = localStorage.getItem("mytoken");
      if (!to) {
        this.$router.push({ path: "/login" });
      }
      // 获取公共ip
      this.url = this.$store.state.url;
      var urls = this.url + ":8000/user/self/getUacUserById/";
      this.$http.post(urls + localStorage.getItem("key")).then(res => {
        if (res.body.code === 200) {
          this.signName = res.body.result.signName;
          this.userName = res.body.result.userName;
          this.goodsimgs =
            res.body.result.headImg != null
              ? res.body.result.headImg.split(",")[0]
              : null;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
// body {
  // position: relative;
  // background-color: #f7f7f7;
  .bg {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: calc(100% - 1rem);
    width: 7.5rem;
    height: 100%;
    // background-image: url(../../assets/img/img_wode.jpg);
    // background-size: 100% 100%;
    background-color: #f7f7f7;
    .headers {
      width: 7.5rem;
      height: 3.5rem;
      background-color: rgb(35, 105, 170);
      overflow: hidden;
      // position: relative;
      // img{
      //   width: 100%;
      // }
      .headersbox {
        width: 7.5rem;
        height: 1.5rem;
        padding: 0 0.2rem;
        margin-top: 0.5rem;
        text-align: left;
        position: relative;
        .headImg {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          float: left;
        }
        .username {
          float: left;
          color: #fff;
          line-height: 1.5rem;
          padding-left: 0.2rem;
        }
      }
      // .name {
      //   width: 7.5rem;
      //   position: absolute;
      //   bottom: 0;
      //   text-align: center;
      //   color: #fff;
      //   font-size: 0.3rem;
      // }
    }
    .icon-shezhi1-copy {
      position: fixed;
      top: 0.5rem;
      left: 0.4rem;
      // float: left;
      color: #fff;
      font-size: 0.5rem;
      // margin:0.5rem;
    }

    // p{
    //   margin-top:0.2rem;
    // }
    // .name {
    //   text-align: center;
    //   color: #fff;
    //   font-size: 0.3rem;
    //   padding-top: 36%;
    // }
    .phone {
      text-align: center;
      color: #fff;
      font-size: 0.24rem;
    }
    .box {
      background: #f7f7f7;
      border-radius: 0.1rem;
      margin: 0.2rem auto;
      margin-bottom: 0.88rem;
      width: 7.1rem;
      height: auto;
      padding:1.1rem 0 0.2rem;
      position: relative;
      box-sizing: border-box;
      .order {
        width: 7rem;
        height: 2.3rem;
        border-radius: 0.1rem;
        padding: 0.2rem;
        position: absolute;
        top: -1.3rem;
        left: 50%;
        transform: translate(-50%);
        background-color: #fff;
        .myorder{
          height: 0.6rem;
          width: 6.6rem;
          border-bottom: solid 0.02rem #ccc;
          display: flex;
          justify-content: space-between;
          span{
            font-size: 0.3rem;
            .icon-tiaozhuan:before{
              font-size: 0.2rem;
              color: #999999;
            }
          }
          span:last-child{
            font-size: 0.24rem;
            color:#999; 
          }
        }
        .myplay{
          width: 6.6rem;
          height: 1.24rem;
          margin-top:0.15rem;
          ul{
            width: 6.6rem;
            display: flex;
            justify-content: space-around;
            li{
              height: 1.24rem;
              border: none;
              margin: 0;
              padding: 0.2rem;
              p{
                padding-top:0.1rem;
              }
            }
          }
        }
      }
      .bank {
        width: 7.1rem;
        margin: 0.1rem auto;
        border-radius: 0.1rem;
        ul {
          li {
            height: 0.9rem;
            line-height: 1;
            border-bottom: 1px solid #e5e3e3;
            padding: 0.28rem 0;
            position: relative;
            background-color: #fff;
            padding-left:0.1rem;
            padding-right:0.1rem;
            .icon {
              float: left;
              height: 0.3rem;
              vertical-align: middle;
            }
            .iconAbout {
              padding-left: 0.1rem;
            }
            .text {
              position: absolute;
              left: 0.3rem;
              color: #666;
              font-size: 0.28rem;
              vertical-align: middle;
              padding-left: 0.2rem;
              float: left;
                  line-height: 0.4rem;
            }
            .textlast {
              //  position: absolute;
              // left: 0rem;
              color: #666;
              font-size: 0.28rem;
              vertical-align: middle;
              padding-left: 0.2rem;
              float: left;
            }
            .icon-fanhui {
              color: #999;
              float: right;
              font-size: 0.2rem;
              transform: rotate(180deg);
              -ms-transform: rotate(180deg); /* IE 9 */
              -moz-transform: rotate(180deg); /* Firefox */
              -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
              -o-transform: rotate(180deg); /* Opera */
            }
          }
          li:last-child{
            border: none;
          }
        }
      }
      ul {
        border-radius: 0.1rem;
        li {
          height: 0.9rem;
          line-height: 1;
          border-bottom: 1px solid #e5e3e3;
          padding: 0.28rem 0;
          position: relative;
          background-color: #fff;
           padding-left:0.1rem;
            padding-right:0.1rem;
          .icon {
            float: left;
            height: 0.3rem;
            vertical-align: middle;
          }
          .iconAbout {
            padding-left: 0.1rem;
          }
          .text {
            position: absolute;
            left: 0.3rem;
            color: #666;
            font-size: 0.28rem;
            vertical-align: middle;
            padding-left: 0.2rem;
            float: left;
            line-height: 0.4rem;
          }
          .textlast {
            //  position: absolute;
            // left: 0rem;
            color: #666;
            font-size: 0.28rem;
            vertical-align: middle;
            padding-left: 0.2rem;
            float: left;
          }
          .icon-fanhui {
            color: #999;
            float: right;
            font-size: 0.2rem;
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); /* IE 9 */
            -moz-transform: rotate(180deg); /* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); /* Opera */
          }
        }
         li:last-child{
            border: none;
          }
      }
    }
  }
// }
</style>



