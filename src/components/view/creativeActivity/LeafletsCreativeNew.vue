<template>
  <div class="lctbox" :class="'bgc' + bgid ">
    <div class="header" :class="'bgi' +bgid">
      <div class="text">
        <p>{{description1}}</p>
        <p>{{description2}}</p>
      </div>
      <div class="upfiles">
        <div>
          <img :src="list.imgUrl" alt>
        </div>
      </div>
      <div class="title">
        <span class="titlesbox">{{list.title}}</span>
        <p>活动时间：{{startTime}}-{{startTime}}</p>
      </div>
      <div class="iconfont icon-fanhui back" @click="goback"></div>
      <div class="sharebt">
        <yd-button @click.native="show = true">分享</yd-button>
      </div>
      <span class="shopname">{{list.businessName}}</span>
      <div class="prompt">
        <img src="../../../assets/img/hd_ts1.png" alt>
      </div>
      <span class="seecount">查看次数：{{list.seeCount}}，分享次数：{{list.share}}</span>
    </div>
    <yd-popup v-model="show" position="bottom">
      <p class="title">分享到</p>
      <ul>
        <li @click="sharewx">
          <i class="iconfont icon-weixin"></i>
          <p>微信好友</p>
        </li>
        <li @click="sharewxf">
          <i class="iconfont icon-pengyouquan"></i>
          <p>朋友圈</p>
        </li>
      </ul>
      <yd-button class="btn" @click.native="show = false">取消</yd-button>
    </yd-popup>
    <div class="content">
      <div class="activecontent">
        <p :class="'color' +bgid ">{{list.commodityDescription}}</p>
        <span>活动热线：{{list.mobile}}</span>
      </div>
      <div class="message">
        <ul>
          <li v-for="(item,index) in commodities" :key="index">
            <div class="fristbox">
              <p :class="'color' +bgid ">{{item.commoditySupplement.content | mydescription(0) }}</p>
              <p :class="'color' +bgid ">{{item.commoditySupplement.content | mydescription(1) }}</p>
              <p :class="'color' +bgid ">{{item.commoditySupplement.content | mydescription(2) }}</p>
              <p :class="'color' +bgid ">{{item.commoditySupplement.content | mydescription(3) }}</p>
            </div>
            <div class="secondbox">
              <div>
                <img :src="item.imgUrl" alt>
              </div>
            </div>
            <div class="thirdbox">
              <div>
                <img :src="item.commoditySupplement.imgUrl" alt>
              </div>
            </div>
            <div class="fourthbox">
              <p :class="'color' +bgid ">{{item.commodityName |mydescription(0)}}</p>
              <p :class="'color' +bgid ">{{item.commodityName |mydescription(1)}}</p>
              <p class="priceone">
                <span>参考价：</span>
                <span class="numpric">￥{{item.originalPrice}}</span>
              </p>
              <p class="pricetwo">
                <span>活动价：</span>
                <span class="numprictwo">￥{{item.activityPrice}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="imgsbox">
        <img :src="list.commodityUrl" alt>
      </div>
      <div class="messagebox">
        <p class="phone">{{list.mobile}}</p>
        <p class="adress">地址：{{list.address}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      list: {},
      description1: "",
      description2: "",
      startTime: "",
      endTime: "",
      commodities: [],
      show: false,
      id: "",
      bgid: 2,
      activeNum: "",
      tel: ""
      // props: ['shareConfig'],
      //     shareShow: true,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.bgid = this.$route.params.id;
      this.url = this.$store.state.url;
      let urls = this.url + ":9988/activity/find/one";
      this.activeNum = localStorage.getItem("activeNum");
      // console.log(activeNum)
      this.$http.post(urls, { id: this.activeNum }).then(res => {
        console.log(res);
        if (res.body.code == 200) {
          this.list = res.body.result;
          this.id = res.body.result.id;
          if (res.body.result.description) {
            var arr = res.body.result.description.split("%2");
            this.description1 = arr[0];
            this.description2 = arr[1];
          }
          if (res.body.result.activityTime) {
            var arr1 = res.body.result.activityTime.split(",");
            this.startTime = arr1[0];
            this.endTime = arr1[1];
          }
          this.commodities = res.body.result.commodities;
        }
      });
      //打印
      //  let path = this.$route.fullPath.split("/");
      //     let paths = path.slice(0, path.length - 1);
      //     let pathurl = paths.join("/").trim();
      //     console.log(pathurl)
    },
    goback() {
      this.$router.push({ path: "/creativeActivity/activitylist" });
    },
    //点击分享
    sharewx() {
      let urls = this.url + ":8000/red/pack/find/info";
      // let urls = 'http://10.10.10.136'+':8000/red/pack/find/info'
      let ids = localStorage.getItem("key");
      if (ids) {
        this.$http.post(urls, { id: ids }).then(res => {
          console.log(res);
          this.tel = res.body.result;
           let path = this.$route.fullPath.split("/");
          let paths = path.slice(0, path.length - 1);
          let pathurl = paths.join("/").trim();
          let url =
            "www.zgstg.cn/dist/index.html#" +
            pathurl +
            "/" +
            this.id +
            "?" +
            this.tel;
         
          let that = this;
          Wechat.share(
            {
              message: {
                title: that.list.businessName,
                description: that.list.description.replace("%2", ""),
                thumb: that.list.imgUrl,
                mediaTagName: "实体购",
                messageExt: "这是第三方带的测试字段",
                messageAction: "<action>dotalist</action>",
                media: {
                  type: 7,
                  webpageUrl: url
                }
              },
              scene: 0 // share to  SESSION
            },
            function() {
              let urlss = "http://www.zgstg.cn/com" + "/activity/save/share";
              that.$http.post(urlss, { id: that.activeNum }).then(res => {
                console.log(res);
              });
            },
            function(reason) {
              alert("Failed: " + reason);
              alert(url, 1235);
            }
          );
        });
      } else {
        Toast("请先登录");
        return false;
      }
      alert(url, 1234);
      // 获取当前的网址，和id

      // console.log(this.$route.fullPath)

      // this.show = false
    },
    sharewxf() {
      let urls = this.url + ":8000/red/pack/find/info";

      //  let urls = 'http://10.10.10.136'+':8000/red/pack/find/info'
      let ids = localStorage.getItem("key");
      if (ids) {
        this.$http.post(urls, { id: ids }).then(res => {
          console.log(res);
          this.tel = res.body.result;
           let path = this.$route.fullPath.split("/");
          let paths = path.slice(0, path.length - 1);
          let pathurl = paths.join("/").trim();
          // 获取当前的网址，和id
          let url =
            "www.zgstg.cn/dist/index.html#" +
            pathurl +
            "/" +
            this.id +
            "?" +
            this.tel;
         
          let that = this;
          Wechat.share(
            {
              message: {
                title: that.list.businessName,
                description: that.list.description.replace("%2", ""),
                thumb: that.list.imgUrl,
                mediaTagName: "实体购",
                messageExt: "这是第三方带的测试字段",
                messageAction: "<action>dotalist</action>",
                media: {
                  type: 7,
                  webpageUrl: url
                }
              },
              scene: 1 // share to Timeline
            },
            function() {
              // alert("Success");
              let urlss = "http://www.zgstg.cn/com" + "/activity/save/share";
              that.$http.post(urlss, { id: that.activeNum }).then(res => {
                console.log(res);
              });
            },
            function(reason) {
              alert("Failed: " + reason);
            }
          );
          //  this.show = false
        });
      } else {
        Toast("请先登录");
        return false;
      }
    }
  },
  filters: {
    mydescription: function(myInput, num) {
      if (myInput) {
        var arr = myInput.split("%2");
      }
      return arr[num];
    }
  }
};
</script>
<style lang="scss" scoped>
.lctbox {
  width: 7.5rem;
  // height: 100%;
  padding-bottom: 0.2rem;
  .header {
    width: 7.5rem;
    height: 11.3rem;
    // background-color: pink;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    .text {
      height: 2.4rem;
      width: 7.5rem;
      //   padding: 0.2rem;
      margin-top: 1rem;
      p {
        color: #eaae54;
        font-size: 0.9rem;
      }
    }
    .upfiles {
      width: 5.1rem;
      height: 5.1rem;
      //   margin-top:0.6rem;
      background-color: #666666;
      border-radius: 50%;
      margin: 0.3rem auto;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .title {
      width: 4.5rem;
      height: 1.4rem;
      margin: 1.1rem auto 0;
      p {
        padding: 0.2rem 0rem;
        font-size: 0.3rem;
        color: #fff;
      }
      .titlesbox {
        padding: 0.1rem 0.25rem;
        font-size: 0.3rem;
        border-radius: 0.1rem;
        background: #eac154;
        color: #000000;
      }
    }
    .back {
      width: 0.7rem;
      height: 0.7rem;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 0.8rem;
      left: 0.2rem;
      line-height: 0.7rem;
    }
    .sharebt {
      width: 0.7rem;
      height: 0.7rem;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 0.8rem;
      right: 0.2rem;
      line-height: 0.7rem;
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
    .shopname {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0.1rem 0.2rem;
      color: #fff;
      font-size: 0.4rem;
    }
    .prompt {
      width: 1.6rem;
      height: 1.6rem;
      position: absolute;
      bottom: 0;
      right: 0.2rem;
      transform: translateY(-60%);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .seecount {
      position: absolute;
      top: 0;
      right: 0;
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
  .content {
    width: 7.5rem;
    padding: 0.2rem;
    .activecontent {
      width: 7.1rem;
      height: 2.9rem;
      border-radius: 0.1rem;
      background-color: #fff;
      padding: 0.8rem 1.1rem 0.4rem;
      p {
        font-size: 0.32rem;
        overflow: hidden;
        text-overflow: ellipsis;
        // display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 0.3rem;
      }
      span {
        padding: 0.1rem 0.2rem;
        background-color: #ff0000;
        border-radius: 0.1rem;
        color: #fff;
      }
    }
  }
  .message {
    width: 7.1rem;
    margin-top: 0.2rem;
    padding: 0.2rem;
    border-radius: 0.1rem;
    background-color: #fff;
    li {
      width: 6.7rem;
      height: 7.1rem;
      .fristbox {
        width: 3.3rem;
        height: 3.4rem;
        padding: 0.8rem 0;
        float: left;
        p {
          font-family: NotoSansHans-Regular;
          text-align: right;
          line-height: 0.45rem;
          padding-right: 0.2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          // display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          font-size: 0.3rem;
        }
      }
      .secondbox {
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 50%;
        background-color: #666;
        float: left;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .thirdbox {
        width: 3.4rem;
        height: 3.4rem;
        margin-top: 0.3rem;
        border-radius: 50%;
        background-color: #666;
        float: left;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .fourthbox {
        width: 3.3rem;
        height: 3.4rem;
        margin-top: 0.3rem;
        padding: 0.8rem 0;
        // background-color: pink;
        float: left;
        // text-align: right;
        p {
          text-align: left;
          line-height: 0.45rem;
          padding-left: 0.2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          // display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          font-size: 0.3rem;
        }
        .priceone {
          color: #666;
          .numpric {
            text-decoration: line-through;
          }
        }
        .pricetwo {
          color: #333333;
          .numprictwo {
            color: #ff0000;
            font-size: 0.3rem;
          }
        }
      }
    }
  }
  .footer {
    width: 7.1rem;
    height: 1.5rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    padding: 0.15rem 0.2rem;
    background-color: #fff;
    .imgsbox {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 0.1rem;
      //   background-color: #fff;
      //   padding: 0.1rem;
      float: left;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .messagebox {
      width: 5.5rem;
      height: 1.2rem;
      float: left;
      // background-color: pink;
      text-align: left;
      padding-left: 0.2rem;
      .phone {
        color: #ff0000;
        font-size: 0.3rem;
      }
      .address {
        color: #666;
      }
    }
  }
}
.bgc2 {
  background-color: #351662;
}
.bgc3 {
  background-color: #c5213a;
}
.bgc4 {
  background-color: #043188;
}
.bgc5 {
  background-color: #981c0c;
}
.bgc6 {
  background-color: #211c5a;
}
.bgi2 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi1.png);
}
.bgi3 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi2.png);
}
.bgi4 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi3.png);
}
.bgi5 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi4.png);
}
.bgi6 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi5.png);
}
.color2 {
  color: #9966ff;
}
.color3 {
  color: #ff1818;
}
.color4 {
  color: #022b87;
}
.color5 {
  color: #e00c03;
}
.color6 {
  color: #404b8d;
}
</style>


