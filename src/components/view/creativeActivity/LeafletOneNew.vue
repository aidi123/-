<template>
  <div class="leafletbox" :class="'bgc'+bgi">
    <div class="header">
      <div class="title">
        <div class="title1">
          <p class="pfrist">{{list.businessName}}</p>
          <p class="psecond">{{list.title}}</p>
          <p class="pthird">{{list.description}}</p>
          <p>活动时间:{{list.activityTime}}</p>
        </div>
        <div class="title2">
          <p class="pfourth">{{list.commodityDescription}}</p>
          <p class="pfifth">({{list.commodityName}})</p>
          <p class="psixth">{{imgbox.conditions}}</p>
          <p class="pseventh">{{imgbox.obtain}}</p>
          <p class="peighth">{{imgbox1.conditions}}</p>
          <p class="pninth">{{imgbox1.obtain}}</p>
        </div>
        <div class="iconfont icon-fanhui back" @click="goback"></div>
      </div>
      <div class="imgbox">
        <img :src="list.imgUrl" alt>
        <div class="imgone imgdw">
          <img :src="listarr[0]" alt>
        </div>
        <div class="imgtwo imgdw">
          <img :src="listarr[1]" alt>
        </div>
        <div class="imgthree">
          <img :src="listarr[2]" alt>
        </div>
        <div class="sharebt">
          <yd-button @click.native="show = true">分享</yd-button>
        </div>
      </div>
      <span class="seecount">查看次数：{{list.seeCount}},分享次数：{{list.share}}</span>
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
    <div class="concent">
      <ul>
        <li v-for="(item,index) in list.commodities" :key="index" v-show="(item.imgUrl || item.imgUrl != null)?true:false">
          <div>
            <img :src="item.imgUrl" alt>
          </div>
          <p>
            活动价:￥
            <span class="price">{{item.activityPrice}}</span>原价:
            <span class="line">￥{{item.originalPrice}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="imgsbox">
        <img :src="list.commodityUrl" alt>
      </div>
      <div class="messagebox">
        <p class="phone">{{list.mobile}}</p>
        <p class="adress">{{list.address}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      bgi: "",
      src: "",
      list: {},
      listarr: [],
      imgbox: [],
      imgbox1: [],
      show: false,
      id: "",
      activeNum: "",
      tel: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.bgi = this.$route.params.id;
      this.url = this.$store.state.url;
      let urls = this.url + ":9988/activity/find/one";
      this.activeNum = localStorage.getItem("activeNum");
      // console.log(activeNum)
      this.$http.post(urls, { id: this.activeNum }).then(res => {
        console.log(res);
        if (res.body.code === 200) {
          this.list = res.body.result;
          this.id = res.body.result.id;
          if (this.list.detailedImgUrl) {
            this.listarr = this.list.detailedImgUrl.split(",");
          }
          this.imgbox = res.body.result.activityInfoList[0];
          this.imgbox1 = res.body.result.activityInfoList[1];
        }
      });
      // if(JSON.parse(sessionStorage.getItem('leafletList'))){
      //     console.log(JSON.parse(sessionStorage.getItem('leafletList')))
      //     this.list = JSON.parse(sessionStorage.getItem('leafletList'))
      //     if(this.list.detailedImgUrl){
      //         this.listarr = this.list.detailedImgUrl.split(',')
      //     }
      // }
    },
    sharewx() {
      // console.log(123)
      //点击分享时 获取用户登录号码
      let urls = this.url + ":8000/red/pack/find/info";
      let ids = localStorage.getItem("key");

      if (ids) {
        this.$http.post(urls, { id: ids }).then(res => {
          this.tel = res.body.result;
          // 获取当前的网址，和id
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
                description: that.list.description,
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
            }
          );

          this.show = false;
        });
      } else {
        Toast("请先登录");
        return false;
      }
    },
    sharewxf() {
      //点击分享时 获取用户登录号码
      let urls = this.url + ":8000/red/pack/find/info";
      let ids = localStorage.getItem("key");
      // let url;
      if (ids) {
        this.$http.post(urls, { id: ids }).then(res => {
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
                description: that.list.description,
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
              let urlss = "http://www.zgstg.cn/com" + "/activity/save/share";
              that.$http.post(urlss, { id: that.activeNum }).then(res => {
                console.log(res);
              });
            },
            function(reason) {
              alert("Failed: " + reason);
            }
          );

          this.show = false;
        });
      } else {
        Toast("请先登录");
        return false;
      }
      // 获取当前的网址，和id
      // 获取当前的网址，和id
    },
    goback() {
      this.$router.push({ path: "/creativeActivity/activitylist" });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.leafletbox {
  width: 7.5rem;
  // height: 100%;
  .header {
    width: 100%;
    overflow: hidden;
    position: relative;
    p {
      white-space: nowrap;
      text-overflow: ellipsis;
      -webkit-text-overflow: ellipsis;
      overflow: hidden;
    }
    .title {
      width: 3.75rem;
      height: 5.6rem;
      float: left;
      padding: 0 0.2rem;
      // background-color: pink;
      p {
        font-family: NotoSansHans-Regular;
        font-weight: 400;
      }
      .title1 {
        width: 3.5rem;
        height: 2.6rem;
        margin-top: 0.3rem;
        border: solid 1px #fff;
        color: rgba(255, 255, 255, 1);
        .pfrist {
          font-size: 0.36rem;
          line-height: 0.7rem;
        }
        .psecond {
          font-size: 0.45rem;
          line-height: 0.7rem;
        }
        .pthird {
          width: 2.9rem;
          height: 0.4rem;
          line-height: 0.4rem;
          margin: 0.1rem auto;
          background-color: #fff;
          color: #a21d12;
        }
      }
      .title2 {
        .pfourth {
          font-size: 0.48rem;
          color: #f9ea01;
        }
        .pfifth {
          color: rgba(255, 255, 255, 1);
        }
        .psixth,
        .peighth {
          color: rgba(255, 255, 255, 1);
        }
        .pseventh,
        .pninth {
          color: #f9ea01;
          font-size: 0.38rem;
        }
      }
      .back {
        width: 0.7rem;
        height: 0.7rem;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        line-height: 0.7rem;
      }
    }
    .imgbox {
      width: 3.55rem;
      height: 5.6rem;
      padding-right: 0.2rem;
      float: left;
      // background-color: rebeccapurple;
      position: relative;
      box-sizing: border-box;
      border-left: solid 0.05rem #fff;
      border-right: solid 0.05rem #fff;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .imgdw {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        border: solid 0.05rem #fff;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        // background-color: pink;
      }
      .imgone {
        left: -0.3rem;
      }
      .imgtwo {
        right: -0.15rem;
      }
      .imgthree {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: solid 0.05rem #fff;
        // background-color: pink;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-53%);
        overflow: hidden;
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .sharebt {
        width: 0.7rem;
        height: 0.7rem;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 0.6rem;
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
    }
    .seecount {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.05rem 0.1rem;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
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
  .concent {
    width: 7.5rem;
    padding: 0.2rem;
    overflow: hidden;
    ul {
      li {
        float: left;
        div {
          width: 3.5rem;
          height: 2.6rem;
          padding: 0.05rem;
          background-color: #fff;
          overflow: hidden;
          position: relative;
          img {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
        p {
          width: 3.5rem;
          line-height: 0.5rem;
          text-align: left;
          padding-left: 0.1rem;
          color: #fff;
          border: solid 0.01rem #fff;
          .line {
            text-decoration: line-through;
          }
          .price {
            font-size: 0.35rem;
          }
        }
      }
      li:nth-child(2n + 1) {
        margin-right: 0.05rem;
      }
    }
  }
  .footer {
    width: 7.5rem;
    height: 1.5rem;
    padding: 0.1rem 0.2rem;
    // background-color: #64110a;
    .imgsbox {
      width: 1.2rem;
      height: 1.2rem;
      background-color: #fff;
      padding: 0.05rem;
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
      width: 5.9rem;
      height: 1.2rem;
      float: left;
      p {
        color: #f9ea01;
        font-weight: 400;
        text-align: left;
        padding-left: 0.2rem;
      }
      .phone {
        font-family: FZDHTJW--GB1-0;
        font-size: 0.36rem;
      }
      .adress {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.bgc1 {
  background-color: #a21d12;
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
</style>
