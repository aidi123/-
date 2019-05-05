<template>
  <div class="box" :class="'bgc'+ id">
    <div class="bannerImg">
      <img :src="src" alt>
      <span class="goback" @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </span>
    </div>
    <div class="content">
      <div class="title">
        <p :class="'title'+id" class="fristp">{{obj.title}}</p>
        <p class="seconedp">{{obj.describe}}</p>
      </div>
      <div class="times">
        <p>距离活动结束还有
          <span>{{daynums}}</span>天
          <span>{{hournums}}</span>时
          <span>{{minutenums}}</span>分
          <span>{{secondnums}}</span>秒
        </p>
      </div>
      <div class="signUp">
        <p class="textp">
          <span>惊爆价：
            <span class="numbs">{{obj.horrifyingPrice}}</span>
          </span>
          <span>原价：
            <span class="numbs">{{obj.originalprice}}元</span>
          </span>
        </p>
        <p>数量还剩：
          <span class="numbs">{{obj.numbs}}份</span>
        </p>
      </div>
      <div class="newname" :class="'btn'+ id">图片新品</div>
      <div class="upimg">
        <div class="fristimg">
          <span class="upimgbox">
            <img :src="obj.goodsimgs" alt>
          </span>
        </div>
        <div class="imgboxs">
          <div class="imgs" v-show="obj.goodsimgs2 ==''?false:true" >
            <span class="upimgbox">
              <img :src="obj.goodsimgs2" alt>
            </span>
          </div>
           <div class="imgs"  v-show="obj.goodsimgs3 ==''?false:true">
            <span class="upimgbox">
              <img :src="obj.goodsimgs3" alt>
            </span>
          </div>
           <div class="imgs" v-show="obj.goodsimgs4 ==''?false:true">
            <span class="upimgbox">
              <img :src="obj.goodsimgs4" alt>
            </span>
          </div>
        </div>
      </div>
      <!-- ============ -->
      <div>
        <div class="title box2">
          <p :class="'title'+id" class="fristp" >{{obj2.commodityname}}</p>
          <p class="seconedp">{{obj2.commoditydescribe}}</p>
        </div>
        <div class="newname" :class="'btn'+ id">新品图片</div>
        <div class="upimg2">
          <div class="imgs" v-show="obj2.goodsimgs9 == ''?false:true">
            <span class="upimgbox">
              <img :src="obj2.goodsimgs9" alt>
            </span>
          </div>
          <div class="imgs" v-show="obj2.goodsimgs10 == ''?false:true">
            <span class="upimgbox">
              <img :src="obj2.goodsimgs10" alt>
            </span>
          </div>
          <div class="imgs" v-show="obj2.goodsimgs11 == ''?false:true">
            <span class="upimgbox">
              <img :src="obj2.goodsimgs11" alt>
            </span>
          </div>
           <div class="imgs" v-show="obj2.goodsimgs12 == ''?false:true">
            <span class="upimgbox">
              <img :src="obj2.goodsimgs12" alt>
            </span>
          </div>
        </div>
      </div>
      <!-- ================ -->
      <div class="newname" :class="'btn'+ id">活动信息</div>
      <div class="textbox">{{obj2.activityRules}}</div>
      <div class="newname" :class="'btn'+ id">商家信息</div>
      <div class="stroemesage">
        <ul>
          <li>
            <span>商家名称：</span>
            <p>{{obj.storename}}</p>
          </li>
          <li>
            <span>领取时间：</span>
            <p>{{obj2.birthday1}}至{{obj2.birthday2}}</p>
          </li>
          <li>
            <span>商家地址：</span>
            <p>{{obj.adress}}</p>
          </li>
          <li>
            <span>商家电话：</span>
            <p>{{obj.phone}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import wxapi from '@/common/wxapi.js'
import wx from "weixin-js-sdk";
import soshm from "soshm";
// import NativeShare from 'nativeshare'
// var nativeShare = new NativeShare()
export default {
  inject: ["reload"],
  data() {
    return {
      daynums:'',
      hournums:'',
      minutenums:'',
      secondnums:'',
      obj:{},
      obj2:{}
    };
  },
  created() {
    // this.id = this.$route.params.id
    this.initmessage();
    this.initList();
  },
  methods: {
    initmessage() {
      this.id = this.$route.params.id;
      if (this.id == 1) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg1.png";
      }
      if (this.id == 2) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg2.png";
      }
      if (this.id == 3) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg3.png";
      }
      if (this.id == 4) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg5.png";
      }
      if (this.id == 5) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg6.png";
      }
    },
    initList(){
      this.obj = JSON.parse(sessionStorage.getItem('obj'));
      this.obj2=JSON.parse(sessionStorage.getItem('obj2'));
        let staretime = (new Date()).valueOf()
       let endtime = (new Date(this.obj.birthday)).valueOf()
          if (endtime > staretime) {
            let times = (endtime - staretime)/1000;
              var that = this
              var timer = null;
              timer = setInterval(() =>{
                var day = 0,
                  hour = 0,
                  minute = 0,
                  second = 0; //时间默认值
                if (times > 0) {
                  day = Math.floor(times / (60 * 60 * 24));
                  hour = Math.floor(times / (60 * 60)) - day * 24;
                  minute = Math.floor(times / 60) - day * 24 * 60 - hour * 60;
                  second =
                    Math.floor(times) -
                    day * 24 * 60 * 60 -
                    hour * 60 * 60 -
                    minute * 60;
                }
                if (day <= 9) day = "0" + day;
                if (hour <= 9) hour = "0" + hour;
                if (minute <= 9) minute = "0" + minute;
                if (second <= 9) second = "0" + second; //
                this.daynums =day
                this.hournums = hour
                this.minutenums = minute
                this.secondnums = second
                times--;
              }, 1000);
              if (times <= 0) {
                clearInterval(timer);
              }
            // }
          } else {
          }
    },
    goback() {
      this.$router.go(-1);
    },
    showbig(index) {
      this.imgsflag = true;
      this.src1 = this.imgList;
      this.num = index;
    },
   
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 7.5rem;
  padding-bottom: 0.2rem;
  .bannerImg {
    width: 7.5rem;
    height: 5.6rem;
    margin-bottom: 0.2rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    span {
      width: 0.8rem;
      height: 0.8rem;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      color: #ccc;
      line-height: 0.8rem;
      text-align: center;
    }
    .goback {
      top: 0.7rem;
      left: 0.2rem;
      .icon-fanhui {
        font-size: 0.24rem;
      }
    }
    .music {
      top: 1.6rem;
      left: 0.2rem;
      .icon-yinle {
        font-size: 0.4rem;
      }
      .audio {
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        width: 0;
        display: none;
      }
    }
    .share {
      top: 0.7rem;
      right: 0.2rem;
      .yd-btn-primary:not(.yd-btn-loading):active {
        background-color: rgba(0, 0, 0, 0.5);
      }
      .yd-btn-primary:not(.yd-btn-loading) {
        background-color: rgba(0, 0, 0, 0.5);
      }
      .yd-btn {
        height: 0;
        padding: 0;
      }
    }
    .shop {
      top: 1.6rem;
      right: 0.2rem;
      line-height: 0.3rem;
      font-size: 0.24rem;
      padding: 0.1rem;
    }
    .sharenum {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      padding: 0.05rem 0.1rem;
    }
  }
  .yd-popup-content {
    .title {
      line-height: 0.88rem;
      color: #333;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        width: 25%;
        p {
          margin: 0.1rem 0 0.25rem;
        }
      }
      i {
        font-size: 1rem;
      }
      .icon-weixin {
        color: #07b906;
      }
      .icon-pengyouquan {
        color: #0fc812;
      }
      .icon-QQ {
        color: #53a2ff;
      }
      .icon-kongjian {
        color: #feaf00;
      }
      .icon-shiliangzhinengduixiang {
        color: #678bff;
      }
    }
    .btn {
      width: 100%;
      padding: 0;
      height: 0.88rem;
      background: #fff;
      color: #666;
      border-top: 1px solid #e6e6e6;
      /deep/ span {
        font-size: 0.3rem;
      }
    }
  }
  .sharebox {
    position: fixed;
    width: 5.5rem;
    height: 2.8rem;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.4);
    padding: 0.2rem;
    p {
      color: #fff;
    }
    li {
      width: 2.5rem;
      height: 1.5rem;
      // background-color: #fff;
      list-style: none;
      float: left;
      margin-top: 0.1rem;
      div {
        width: 0.8rem;
        height: 0.8rem;
        margin: 0.1rem auto;
        border-radius: 50%;
        // overflow: hidden;
        .iconfont {
          font-size: 0.6rem;
          color: #ffff;
          background-color: #07b906;
          line-height: 0.8rem;
          border-radius: 50%;
        }
      }
    }
  }
  .content {
    width: 6.9rem;
    margin: 0 auto;
    .title {
      width: 6.9rem;
      // height: 1.9rem;
      border-radius: 0.1rem;
      background-color: #fff;
      padding: 0rem 0.1rem;
      p {
        // display: -webkit-box;
        // -webkit-box-orient: vertical;
        // -webkit-line-clamp: 2;
        // overflow: hidden;
        padding: 0.08rem 0.3rem;
      }
      .fristp {
        font-size: 0.5rem;
        font-weight: 900;
        border-bottom: dashed 1px #ccc;
      }
      .seconedp {
        font-size: 0.24rem;
      }
    }
    .times {
      width: 6.9rem;
      height: 1.1rem;
      margin: 0.2rem auto;
      background-image: url(../../../assets/img/kanjia_times1.png);
      background-repeat: no-repeat;
      background-size: cover;
      p {
        line-height: 1.1rem;
        span {
          padding: 0.1rem;
          background: #feaf00;
          border-radius: 50%;
        }
      }
    }
    .nameuser {
      padding: 0rem 0.2rem;
      line-height: 0.5rem;
      background: #ccc;
      color: red;
      border-radius: 0.5rem;
    }
    .signUp {
      width: 6.9rem;
      // height: 2.5rem;
      background: #fff;
      border-radius: 0.1rem;
      padding: 0.2rem;
      p {
        text-align: center;
        line-height: 0.6rem;
        color: #000000;
        .numbs {
          color: red;
          font-size: 0.3rem;
        }
      }
      .textp {
        display: flex;
        justify-content: space-between;
      }
      div {
        width: 2.8rem;
        height: 0.8rem;
        margin: 0 auto;
        line-height: 0.8rem;
        border-radius: 0.1rem;
        background: #fdba14;
        color: #fff;
        font-size: 0.36rem;
      }
    }
    .box2 {
      margin-top: 0.2rem;
    }
    .newname {
      width: 1.6rem;
      height: 0.5rem;
      margin: 0.1rem auto;
      line-height: 0.5rem;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      overflow: hidden;
    }
    .upimg {
      width: 6.9rem;
      // height: 12.6rem;
      padding: 0.2rem;
      background-color: #fff;
      .fristimg {
        width: 6.5rem;
        height: 4.9rem;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        // img{
        //     width: 100%;
        //     height: 100%;
        // }
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .imgboxs {
        width: 100%;
        overflow: hidden;
        .imgs {
          width: 3.24rem;
          height: 2.4rem;
          background-color: #fff;
          border-top: solid 0.01rem #fff;
          border-left: solid 0.01rem #fff;
          float: left;
          position: relative;
          text-align: center;
          display: table-cell;
          vertical-align: middle;
          overflow: hidden;
          .upimgbox {
            // width: 100%;
            // height: 100%;
            display: block;
            img {
              width: 100%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              overflow: hidden;
              // height: 100%;
            }
            span {
              width: 0.3rem;
              height: 0.3rem;
              position: absolute;
              top: 0.2rem;
              right: 0.2rem;
              background: #ccc;
              border-radius: 50%;
            }
          }
          .upfiles {
            width: 1.2rem;
            height: 0.5rem;
            line-height: 0.5rem;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 0.5rem;
            display: block;
            position: absolute;
            top: 0.2rem;
            // left: 0.2rem;
            color: #fff;
            margin-left: 0.2rem;
            .hidden {
              opacity: 0;
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
              height: 0.5rem;
              width: 1.2rem;
              display: block;
              z-index: 5;
            }
            .icon-jia {
              color: #fff;
              font-size: 0.2rem;
            }
          }
          &:nth-child(2n) {
            border-right: solid 0.01rem #fff;
          }
        }
      }
    }
    .upimg2 {
      width: 6.9rem;
      // height: 7.6rem;
      padding: 0rem 0.2rem;
      background-color: #fff;
      overflow: hidden;
      .fristimg {
        width: 6.5rem;
        height: 4.9rem;
        background-color: #fff;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .imgs {
        width: 3.24rem;
        height: 2.4rem;
        background-color: #fff;
        border-top: solid 0.01rem #fff;
        border-left: solid 0.01rem #fff;
        float: left;
        position: relative;
        overflow: hidden;
        //  text-align: center;
        //     display:table-cell;
        //     vertical-align: middle;
        .upimgbox {
          img {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // height: 100%;
          }
          span {
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            top: 0.2rem;
            right: 0.2rem;
            background: #ccc;
            border-radius: 50%;
          }
        }
        .upfiles {
          width: 1.2rem;
          height: 0.5rem;
          line-height: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 0.5rem;
          display: block;
          position: absolute;
          top: 0.2rem;
          // left: 0.2rem;
          color: #fff;
          margin-left: 0.2rem;
          .hidden {
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            height: 0.5rem;
            width: 1.2rem;
            display: block;
            z-index: 5;
          }
          .icon-jia {
            color: #fff;
            font-size: 0.2rem;
          }
        }
        &:nth-child(2n) {
          border-right: solid 0.01rem #fff;
        }
      }
    }
    .textbox {
      width: 6.9rem;
      padding: 0.2rem;
      border-radius: 0.1rem;
      background-color: #fff;
      text-align: left;
    }
    .stroemesage {
      width: 6.9rem;
      // height: 1.8rem;
      margin: 0 auto;
      border-radius: 0.1rem;
      padding: 0.15rem 0.2rem;
      background-color: #fff;
      ul {
        li {
          height: 0.5rem;
          width: 100%;
          line-height: 0.5rem;
          text-align: left;
          display: flex;
          justify-content: space-between;
          // background-color: pink;
          span {
            width: 1.5rem;
            color: #333333;
          }
          p {
            flex: 1;
            height: 0.5rem;
            font-size: 0.24rem;
            color: #333;
            word-break: keep-all;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .paihangbox {
      .paihang {
        width: 6.9rem;
        border-radius: 0.1rem;
        padding: 0.2rem;
        background-color: #fff;
        li {
          height: 0.88rem;
          border-bottom: solid 0.02rem #ccc;
          div {
            height: 0.88rem;
            float: left;
          }
          .one {
            width: 1rem;
            line-height: 0.88rem;
          }
          .three {
            width: 2rem;
            line-height: 0.88rem;
          }
          .two {
            width: 3.5rem;
            p {
              text-align: left;
              line-height: 0.44rem;
            }
          }
        }
      }
    }
  }
  .fixbox {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    .lianxibox {
      width: 5.6rem;
      height: 2.8rem;
      margin: 5rem auto 0;
      background-color: #fff;
      // overflow: hidden;
      padding: 0.1rem 0;
      position: relative;
      h3 {
        line-height: 0.88em;
        margin: 0.2rem;
        font-size: 0.4rem;
      }
      hr {
        border: none;
        background-color: #666;
      }
      p {
        font-size: 0.3rem;
        text-align: left;
        line-height: 0.56rem;
        padding: 0 0.2rem;
        border-radius: 0.01rem;
        span {
          padding: 0 0.2rem;
        }
        .iconfont {
          font-size: 0.3rem;
        }
        .icon-dianhua1:before {
          font-size: 0.2rem;
        }
      }
      .detle {
        width: 0.4rem;
        height: 0.4rem;
        background-color: #fff;
        border-radius: 50%;
        z-index: 9;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
      }
      .icon-x:before {
        color: #666;
        font-size: 0.15rem;
        // background-color: #fff;
      }
    }
  }
  .imgbox1 {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;
    .mint-swipe {
      height: 12rem;
      top: 50%;
      transform: translateY(-50%);
    }
    img {
      width: 100%;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .imgdel {
      position: absolute;
      top: 0.3rem;
      right: 0.3rem;
      color: #fff;
    }
  }
  .imgbox2 {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 1);
    top: 0;
    left: 0;
    .mint-swipe {
      height: 12rem;
      top: 50%;
      transform: translateY(-50%);
    }
    img {
      width: 100%;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .imgdel {
      position: absolute;
      top: 0.3rem;
      right: 0.3rem;
      color: #fff;
    }
  }
}
// 动态样式背景
.bgc1 {
  background: #B81C25;
}
.bgc2 {
  background:#6F0400;
}
.bgc3 {
  background: #7FE3FA;
}
.bgc4 {
  background: #5A81EB;
}
.bgc5 {
  background: #D01FED;
}
//小标题背景图
.btn1 {
  background-image: url(../../../assets/img/cr_btn1.png);
}
.btn2 {
  background-image: url(../../../assets/img/cr_btn2.png);
}
.btn3 {
  background-image: url(../../../assets/img/cr_btn3.png);
}
.btn4 {
  background-image: url(../../../assets/img/cr_btn4.png);
}
.btn5 {
  background-image: url(../../../assets/img/cr_btn5.png);
}
//输入框边框
// .border1{
//     border: solid 1px #9A37DE;
// }
//  .border2{
//     border: solid 1px #FF7C7C;
// }
//  .border3{
//     border: solid 1px #1C3BB0;
// }
//  .border4{
//     border: solid 1px #601986;
// }
//  .border5{
//     border: solid 1px #B50635;
// }
.title1 {
  font-size: 0.3rem;
  color: #B81C25;
}
.title2 {
  font-size: 0.3rem;
  color: #6F0400;
}
.title3 {
  font-size: 0.3rem;
  color: #7FE3FA;
}
.title4 {
  font-size: 0.3rem;
  color: #5A81EB;
}
.title5 {
  font-size: 0.3rem;
  color: #D01FED;
}
</style>

