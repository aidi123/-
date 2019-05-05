<template>
  <div class="box" :class="'bgc'+ id">
    <div class="bannerImg">
      <img :src="src" alt>
      <span class="goback" @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </span>
      <span class="music" @click="play">
        <i class="iconfont icon-yinle"></i>
        <audio :src="musicUrl" preload="auto" controls loop="loop" id="audio" class="audio"></audio>
      </span>
      <span class="share">
        <yd-button @click.native="show = true">分享</yd-button>
      </span>
      <span class="shop" @click="chagelianxiflag">联系商家</span>
      <div class="sharenum">查看次数{{obj.seeCount}}，分享次数{{obj.share}}</div>
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
        <!-- <li>
                <i class="iconfont icon-QQ"></i>
                <p>QQ好友</p>
                </li>
                <li>
                <i class="iconfont icon-kongjian"></i>
                <p>QQ空间</p>
                </li>
                <li>
                <i class="iconfont icon-shiliangzhinengduixiang"></i>
                <p>复制链接</p>
        </li>-->
      </ul>
      <yd-button class="btn" @click.native="show = false">取消</yd-button>
    </yd-popup>

    <div class="content">
      <div class="title">
        <p :class="'title'+id" class="fristp">{{obj.title}}</p>
        <p class="seconedp">{{obj.description}}</p>
      </div>
      <div class="times">
        <p>距离活动结束还有
          <span>{{daynums}}</span>天
          <span>{{hournums}}</span>时
          <span>{{minutenums}}</span>分
          <span>{{secondnums}}</span>秒
        </p>
      </div>
      <!-- <span class="nameuser">彤* 2018-12-18 14:20:34 参加了活动</span> -->
      <div class="signUp">
        <p class="textp">
          <span>惊爆价：
            <span class="numbs">{{obj.nowPrice}}元</span>
          </span>
          <span>原价：
            <span class="numbs">{{obj.beforePrice}}元</span>
          </span>
        </p>
        <p>数量还剩：
          <span class="numbs">{{obj.bargainCount}}份</span>
        </p>
        <div @click="signUp">我要报名</div>
      </div>
      <div class="newname" :class="'btn'+ id">图片新品</div>
      <div class="upimg">
        <div class="fristimg">
          <span class="upimgbox">
            <img :src="obj.imgUrl" alt>
          </span>
        </div>
        <div class="imgboxs">
          <div class="imgs" v-for="(item,index) in imgList" :key="index" @click="showbig(index)">
            <span class="upimgbox">
              <img :src="item" alt>
            </span>
          </div>
        </div>
      </div>
      <!-- ============ -->
      <div v-show="imgList2 !=''">
        <div class="title box2">
          <p :class="'title'+id" class="fristp" v-show="obj.commodityName==''">{{obj.commodityName}}</p>
          <p class="seconedp" v-show="obj.commodityDescription==''">{{obj.commodityDescription}}</p>
        </div>
        <div class="newname" :class="'btn'+ id">新品图片</div>
        <div class="upimg2">
          <!-- <div class="fristimg">
                        <span class="upimgbox">
                        <img :src="obj.imgUrl"  alt="">
                        </span>
          </div>-->
          <div class="imgs" v-for="(item,index) in imgList2" :key="index" @click="imgbig(index)">
            <span class="upimgbox">
              <img :src="item" alt>
            </span>
          </div>
        </div>
      </div>
      <!-- ================ -->
      <div class="newname" :class="'btn'+ id">活动规则</div>
      <div class="textbox">{{activityRule}}</div>
      <div class="newname" :class="'btn'+ id">商家信息</div>
      <div class="stroemesage">
        <ul>
          <li>
            <span>商家名称：</span>
            <p>{{obj.businessName}}</p>
          </li>
          <li>
            <span>领取时间：</span>
            <p>{{receiveTime}}</p>
          </li>
          <li>
            <span>商家地址：</span>
            <p>{{obj.address}}</p>
          </li>
          <li>
            <span>商家电话：</span>
            <p>{{obj.mobile}}</p>
          </li>
        </ul>
      </div>
      <div class="paihangbox" v-show="obj.bargains ==''?false:true">
        <div class="newname" :class="'btn'+ id">砍价排行榜</div>
        <div class="paihang">
          <ul>
            <li v-for="(item,index) in obj.bargains" :key="index">
              <div class="one">{{item.sequence +1 }}</div>
              <div class="two">
                <p>{{item.nickname +1}}</p>
                <p>{{item.updateTime | dateFormat }}</p>
              </div>
              <div class="three">
                <p>已砍至：{{item.bargainPrice}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-show="lianxiflag" class="fixbox">
      <div class="lianxibox">
        <div class="detle iconfont icon-x" @click="change"></div>
        <h3>联系商家</h3>
        <hr>
        <p>
          <span class="iconfont icon-wode-copy"></span>
          {{obj.businessName}}
        </p>
        <p>
          <a :href="'tel:'+ obj.mobile">
            <span class="iconfont icon-dianhua1"></span>
          </a>
          {{obj.mobile}}
        </p>
        <p>
          <span class="iconfont icon-dizhi1"></span>
          {{obj.address}}
        </p>
      </div>
    </div>
    <div v-show="imgsflag" class="imgbox1">
      <div class="imgdel iconfont icon-x" @click="changeimg"></div>
      <!-- <img :src="src1" alt=""> -->
      <mt-swipe :auto="0" :defaultIndex="num">
        <mt-swipe-item v-for="(item,index) in src1" :key="index">
          <img :src="item" alt>
        </mt-swipe-item>
        <!-- <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>-->
      </mt-swipe>
    </div>
    <div v-show="imgsflag2" class="imgbox2">
      <div class="imgdel iconfont icon-x" @click="changeimg2"></div>
      <mt-swipe :auto="0" :defaultIndex="num2">
        <mt-swipe-item v-for="(item,index) in src2" :key="index">
          <img :src="item" alt>
        </mt-swipe-item>
        <!-- <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>-->
      </mt-swipe>
    </div>
  </div>
</template>
<script>
// import wxapi from '@/common/wxapi.js'
import wx from "weixin-js-sdk";
import soshm from "soshm";
import {Toast} from "mint-ui"
// import NativeShare from 'nativeshare'
// var nativeShare = new NativeShare()
export default {
  inject: ["reload"],
  data() {
    return {
      id: "",
      src: "",
      src1: "",
      src2: "",
      // goodssrc:[],
      obj: {},
      imgList: [],
      flag: true,
      props: ["shareConfig"],
      shareShow: true,
      listid: "",
      show: false,
      imgList2: [],
      flag1: false,
      flags: false,
      lianxiflag: false,
      musicUrl: "",
      imgsflag: false,
      imgsflag2: false,
      num: 0,
      num2: 0,
      activeNum: "",
      tel: "",
      receiveTime: "",
      activityRule: "",
      daynums:'',
      hournums:'',
      minutenums:'',
      secondnums:'',
      status:1
      // goodsimgs:'',
      // goodsimgs2:'',
      // goodsimgs3:'',
      // goodsimgs4:'',
      // goodsimgs5:'',
      // goodsimgs6:'',
      // goodsimgs7:'',
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
    initList() {
      this.url = this.$store.state.url;
      let urls = this.url + ":9988/activity/find/one";
      this.activeNum = localStorage.getItem("activeNum");
      // console.log(activeNum)
      this.$http.post(urls, { id: this.activeNum }).then(res => {
        console.log(res);
        if (res.body.code === 200) {
          this.obj = res.body.result;
          this.receiveTime = res.body.result.activityTimes.receiveTime;
          this.activityRule = res.body.result.activityTimes.activityRule;
          console.log(this.activityRule )
          //获取时间转化成字符串
          let staretime = res.body.result.activityTimes.createTime;
          let endtime = res.body.result.activityTimes.endTime;
          // console.log(this.receiveTime)
          staretime = staretime.substring(0, 19);
          staretime = staretime.replace("T", " ");
          staretime = staretime.replace(/-/g, "/");
          var staretimestamp = new Date(staretime).getTime();
          endtime = endtime.substring(0, 19);
          endtime = endtime.replace("T", " ");
          endtime = endtime.replace(/-/g, "/");
          var endtimestamp = new Date(endtime).getTime();
          console.log(staretimestamp, endtimestamp);
          if (endtimestamp > staretimestamp) {
            let times = (endtimestamp - staretimestamp)/1000;
            // let times = 10
            // console.log(times)
            // function countDown(times) {
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
                // console.log(this.daynums,this.hournums,this.minutenums,this.secondnums)
                times--;
              }, 1000);
              if (times <= 0) {
                clearInterval(timer);
              }
            // }
          } else {
          }
          if (res.body.result.musicUrl) {
            this.musicUrl = res.body.result.musicUrl;
          }
          let _that = this;
          // console.log(str.charAt(str.length-1))
          if (res.body.result.detailedImgUrl) {
            var arr = [];
            arr = res.body.result.detailedImgUrl.split(",");
            // console.log(arr)
            for (var i = 0; i < arr.length; i++) {
              if (arr[i] != "") {
                _that.imgList.push(arr[i]);
              }
            }
            console.log(this.imgList);
          }
          if (res.body.result.commodityUrl) {
            this.flag1 = true;
            var arr = res.body.result.commodityUrl.split(",");
            for (var i = 0; i < arr.length; i++) {
              if (arr[i] != "") {
                _that.imgList2.push(arr[i]);
              }
            }
            // this.imgList2 = res.body.result.commodityUrl.split(',')
            // console.log(this.imgList2)
          }
          // console.log(this.musicUrl)
          this.listid = res.body.result.id;
          console.log(this.listid);
        }
      });
      // activityRules
      //    this.obj = JSON.parse(sessionStorage.getItem('obj'));
      //    console.log(this.obj)
    },
    goback() {
      //  this.$router.push({path:'/my/myrelease'})
      this.$router.go(-1);
    },
    preview() {
      this.$router.push({ path: "/creativeActivity/preview/" + this.id });
    },
    signUp(){
      let url = this.$store.state.url
      let urls = url +':9988/bargain/save'
      let signUserId = localStorage.getItem('key')
      console.log(urls)
      this.$http.post(urls,{signUserId:signUserId,activityId:this.listid}).then(res=>{
        console.log(res)
        if(res.body.code===200){
          Toast('报名成功')
        }
      })
    },
    //点击分享
    sharewx() {
      let urls = this.url + ":8000/red/pack/find/info";
      // let urls = 'http://10.10.10.136'+':8000/red/pack/find/info'

      let ids = localStorage.getItem("key");
      if (ids) {
        this.$http.post(urls, { id: ids }).then(res => {
          this.tel = res.body.result;
          // 获取当前的网址，和id
          // console.log(this.$route.fullPath)
          let path = this.$route.fullPath.split("/");
          let paths = path.slice(0, path.length - 1);
          let pathurl = paths.join("/").trim();

          let url =
            "www.zgstg.cn/dist/index.html#" +
            pathurl +
            "/" +
            this.listid +
            "?" +
            ids;

          let that = this;
          Wechat.share(
            {
              message: {
                title: that.obj.title,
                description: that.obj.description,
                thumb: that.src,
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
        });
      } else {
        Toast("请先登录");
        return false;
      }
    },
    sharewxf() {
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
            this.listid +
            "?" +
            ids;

          let that = this;
          Wechat.share(
            {
              message: {
                title: that.obj.title,
                description: that.obj.description,
                thumb: that.src,
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
        });
      } else {
        Toast("请先登录");
        return false;
      }
    },
    play() {
      // console.log(this.obj.music.musicUrl)
      let audio = document.getElementById("audio");
      if (this.flags == false) {
        audio.play();
        this.flags = true;
        console.log(this.flags);
        return;
      }
      if (this.flags == true) {
        audio.pause();
        this.flags = false;
        return;
      }
    },
    chagelianxiflag() {
      this.lianxiflag = true;
    },
    change() {
      this.lianxiflag = false;
    },
    //点击显示大图
    // handleChange(index){ //滑动到的页面索引
    //     // this.carIndex = index
    // },
    showbig(index) {
      this.imgsflag = true;
      this.src1 = this.imgList;
      this.num = index;
    },
    changeimg() {
      this.imgsflag = false;
      this.reload();
    },
    //    handleChange1(index){

    //    },
    imgbig(index) {
      this.imgsflag2 = true;
      //    点击时获取图片数组，放到轮播图中
      this.src2 = this.imgList2;
      this.num2 = index;
    },
    changeimg2() {
      this.imgsflag2 = false;
      this.reload();
    }
  }
  // mounted:function(){
  //     this.$nextTick(function(){
  //         this.num = this.nums
  //         console.log(this.num)
  //     })
  // },
  // watch:{
  //     num(val,oldval){
  //         if(val){
  //          this.nums = val
  //         }
  //     }
  // }
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
      height: 2.5rem;
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
