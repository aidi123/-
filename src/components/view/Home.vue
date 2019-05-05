<template>
  <div class="box">
    <div class="header">
      <span class="citysp">
        <p>{{cityName}}</p>
      </span>
      <!-- <i class="iconfont icon-arrow-down"></i> -->
      <input class="sousou" placeholder="请输入内容" readonly="readonly" @click="tosousou">
      <!-- <i class="iconfont icon-saoyisao"></i> -->
    </div>
    <div class="content">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerArr" :key="index">
          <img :src="item.imgUrls" alt>
        </mt-swipe-item>
      </mt-swipe>
      <div class="body-div">
        <ul class="column">
          <router-link to="/home/wholesale" tag="li">
            <img src="../../assets/img/icon_pf.png" alt>
            <p>批发</p>
          </router-link>
          <router-link to="/home/galleria" tag="li">
            <img src="../../assets/img/icon_sj.png" alt>
            <p>商业街</p>
          </router-link>
          <router-link to="/release" tag="li">
            <img src="../../assets/img/icon_qzzp.png" alt>
            <p>服务信息</p>
          </router-link>
          <router-link to="/home/beerskittles" tag="li">
            <img src="../../assets/img/icon_chwl.png" alt>
            <p>吃喝玩乐</p>
          </router-link>
          <router-link to="/recreation">
            <img src="../../assets/img/icon_shq.png" alt>
            <p>同城圈</p>
          </router-link>
        </ul>

        <div class="hongbaobox">
          <ul>
            <li @click="toactive">
              <mt-swipe :auto="5000">
                <mt-swipe-item>
                  <img src="../../assets/img/img_huodong1.png" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_huodong2.png" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_huodong3.png" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_huodong4.png" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_huodong5.png" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_huodong6.png" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_huodong7.png" alt>
                </mt-swipe-item>
              </mt-swipe>
            </li>
            <li @click="gotolist">
              <mt-swipe :auto="5000">
                <mt-swipe-item>
                  <img src="../../assets/img/img_homehongbao.png" alt>
                </mt-swipe-item>
              </mt-swipe>
            </li>
            <router-link to="/School" tag="li">
              <mt-swipe :auto="3000">
                <mt-swipe-item>
                  <img src="../../assets/img/img_shangxueyuan1.png" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_shangxueyuan2.png" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_shangxueyuan3.png" alt>
                </mt-swipe-item>
              </mt-swipe>
            </router-link>
          </ul>
        </div>
        <table>
          <tr class="tr">
            <td class="td1">
              <div>
                <p class="title">天天活动</p>
                <p>活动精选</p>
                <router-link to="/home/activity" tag="button">立即查看</router-link>
              </div>
              <mt-swipe :auto="3000">
                <mt-swipe-item>
                  <img src="../../assets/img/img_tj_hd2.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_tj_hd3.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_tj_hd4.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_tj_hd6.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_tj_hd7.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_tj_hd8.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_tj_hd9.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_tj_hd10.jpg" alt>
                </mt-swipe-item>
              </mt-swipe>
            </td>
            <td class="td2">
              <div>
                <p class="title">新商铺推荐</p>
                <p>人气旺铺</p>
                <router-link to="/home/newshop" class="btn" tag="button">点击进入</router-link>
              </div>
              <mt-swipe :auto="4000">
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp2.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp3.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp4.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp5.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp6.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp7.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp8.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp9.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp10.jpg" alt>
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp11.jpg" alt>
                </mt-swipe-item>
              </mt-swipe>
            </td>
          </tr>
        </table>
        <table>
          <tr class="tr">
            <td class="td1">
              <div>
                <p class="title">同城闪购</p>
                <p>惊喜不断</p>
                <router-link to="/home/flashsales" tag="button">立即查看</router-link>
              </div>
              <mt-swipe :auto="3000">
                <mt-swipe-item>
                  <img src="../../assets/img/img_tj_hd8.jpg" alt>
                </mt-swipe-item>
              </mt-swipe>
            </td>
            <td class="td2">
              <div>
                <p class="title">同城闪拼</p>
                <p>时时特惠</p>
                <button class="btn">点击进入</button>
              </div>
              <mt-swipe :auto="4000">
                <mt-swipe-item>
                  <img src="../../assets/img/img_xp6.jpg" alt>
                </mt-swipe-item>
              </mt-swipe>
            </td>
          </tr>
        </table>

        <div class="merchant">
          <p class="left-line"></p>
          <img src="../../assets/img/icon_jx@2x.png" alt>
          <span class="shopname">精选商家</span>
          <p class="right-line"></p>
        </div>
        <div class="contentbox">
          <ul>
            <li v-for="(item,index) in storelist" :key="index"  @click="toshop(item.id)">
              <div class="imgbox">
                <img :src="item.imgs">
              </div>
              <div class="player_info">
                <p class="title">
                  <span class="name">{{item.storeName}}</span>
                  <span class="grade">{{item.score}}分</span>
                </p>
                <p class="info">{{item.description}}</p>
                <!-- <p class="category" v-show="item.activity.length>0?true:false">{{item.activity[0]}}</p> -->
                <p class="address-box">
                  <span class="address">{{item.commercialStreet}}</span>
                  <span class="distance">{{item.distance/1000}}km</span>
                </p>
              </div>
            </li>
          </ul>
            <div @click="more" v-show="shows">加载更多</div>
          
        </div>
        <!-- <vueWaterfallEasy :imgsArr="imgsArr" @scrollReachBottom="getData">
          <template slot-scope="props">
            <div class="player_info" @click="toshop(props.value.id)">
              <p class="title">
                <span class="name">{{props.value.storeName}}</span>
                <span class="grade">{{props.value.score}}分</span>
              </p>
              <p class="info">{{props.value.description}}</p>
              <p class="category">{{props.value.activity}}</p>
              <p class="address-box">
                <span class="address">{{props.value.commercialStreet}}</span>
                <span class="distance">{{props.value.distance}}km</span>
              </p>
            </div>
          </template>
        </vueWaterfallEasy>-->
        <Maps></Maps>
      </div>
    </div>
    <div class="mask" v-show="flags">
      <div class="jinbihongbao">
        <div class="hongbaotext">
          <p>您有红包未领取</p>
          <router-link to="/my/hongbao" class="receive" tag="div">立即领取</router-link>
        </div>
        <span class="iconfont icon-x close" @click="close"></span>
      </div>
    </div>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import Maps from "../Maps";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      bannerArr: [],
      imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
      fetchImgsArr: [], //存放每次滚动时下一批要加载的图片的数组
      utl: "",
      page: 1,
      total: 10,
      storelist: [],
      cityName: "",
      flag: null,
      flags: false,
      pages:'',
      shows : true
    };
  },
  created() {
    this.inittoken();
    this.banner();
    this.inithongbao();
  },
  methods: {
    //刷新token 自动登录
    inittoken() {
      this.url = this.$store.state.url;
      var cs = localStorage.getItem("mytoken");
      if (cs == null) {
        return;
      }
      var accessToken = localStorage.getItem("mytoken").split(" ")[1];
      let urls = this.url + ":8000/auth/user/refreshToken";
      this.$http
        .get(
          urls + "?refreshToken=" + accessToken + "&accessToken=" + accessToken
        )
        .then(res => {
          if (res.body.code === 200) {
            var mytoken = "Bearer" + " " + res.body.result;
            localStorage.setItem("mytoken", mytoken);
          }
        });
    },
    banner() {
      this.url = this.$store.state.url;
      let urls = this.url + ":8000/banner/self/queryHomeBanners";
      this.cityName = localStorage.getItem("city");
      this.$http
        .get(urls + "?cityName=" + this.cityName)
        .then(res => {
          if (res.status == 200) {
            if (res.data.code == 200) {
              this.bannerArr = res.data.result;
            }
          }
        })
        .catch(res => {
          this.$dialog.toast({ mes: res.body.message });
        });
    },
    // 首页初始化
    initstoreList() {
      this.url = this.$store.state.url;
      let urls = this.url + ":8810/home/self/message";
      // 获取城市和坐标
      let storeLat = localStorage.getItem("storeLat");
      let storeLong = localStorage.getItem("storeLong");
      this.cityName = localStorage.getItem("city");
      this.$http
        .get(
          urls +
            "?page=" +
            this.page +
            "&total=" +
            this.total +
            "&cityName=" +
            this.cityName +
            "&storeLat=" +
            storeLat +
            "&storeLong=" +
            storeLong
        )
        .then(res => {
          if (res.body.code === 200) {
            var _th = this;
            this.storelist =this.storelist.concat(res.body.result.list);
            this.pages = res.body.result.pages;
            console.log(res)
            // var arr = [];
            // for (var i = 0; i < _th.storelist.length; i++) {
            //   arr.push({
            //     id: _th.storelist[i].id,
            //     src:
            //       _th.storelist[i].imgs != null
            //         ? _th.storelist[i].imgs.split(",")[0]
            //         : null,
            //     storeName: _th.storelist[i].storeName,
            //     score: _th.storelist[i].score,
            //     description: _th.storelist[i].description,
            //     distance: parseFloat(_th.storelist[i].distance / 1000).toFixed(
            //       2
            //     ),
            //     commercialStreet: _th.storelist[i].address,
            //     activity:
            //       _th.storelist[i].activity.length != 0
            //         ? _th.storelist[i].activity[0].name
            //         : null
            //   });
            // }
            // _th.imgsArr = arr;
          }
        });
    },
    //初始化时判断是否有红包
    inithongbao() {
      if (localStorage.getItem("loginName")) {
        let mobileNo = localStorage.getItem("loginName");
        let url = this.$store.state.url;
        let urls = url + ":8000/red/pack/obtain/count";
        this.$http.post(urls, { mobileNo: mobileNo }).then(res => {
          if (res.body.code === 200) {
            if (res.body.result != null && res.body.result != 0) {
              this.flags = true;
            }
          }
        });
      }
    },
    //下拉加载
    more(){
      if(this.page < this.pages ){
        this.page ++
        this.initstoreList()
      }
      if(this.page == this.pages){
         this.shows = false
        console.log(this.shows)
        Toast("没有更多数据")
      }
      // else{
       
      // }
    },
    // getData() {
    //   this.page++;
    //   if (this.page > this.pages) {
    //     Toast("没有更多数据");
    //     return false;
    //   }
    //   let urls = this.url + ":8810/home/self/message";
    //   // 获取城市和坐标
    //   let storeLat = localStorage.getItem("storeLat");
    //   let storeLong = localStorage.getItem("storeLong");
    //   this.cityName = localStorage.getItem("city");
    //   this.$http
    //     .get(
    //       urls +
    //         "?page=" +
    //         this.page +
    //         "&total=" +
    //         this.total +
    //         "&cityName=" +
    //         this.cityName +
    //         "&storeLat=" +
    //         storeLat +
    //         "&storeLong=" +
    //         storeLong
    //     )
    //     .then(res => {
    //       if (res.body.code === 200) {
    //         var _th = this;
    //         this.storelist = res.body.result.list;
    //         var arr = [];
    //         for (var i = 0; i < _th.storelist.length; i++) {
    //           arr.push({
    //             id: _th.storelist[i].id,
    //             src:
    //               _th.storelist[i].imgs != null
    //                 ? _th.storelist[i].imgs.split(",")[0]
    //                 : null,
    //             storeName: _th.storelist[i].storeName,
    //             score: _th.storelist[i].score,
    //             description: _th.storelist[i].description,
    //             distance: parseInt(_th.storelist[i].distance / 1000).toFixed(2),
    //             commercialStreet: _th.storelist[i].address
    //           });
    //         }
    //         _th.imgsArr = _th.imgsArr.concat(arr);
    //       }
    //     });
    //   //获取新的图片数据的方法，用于页面滚动满足条件时调用
    //   // this.imgsArr = this.imgsArr.concat(this.fetchImgsArr); //数组拼接，把下一批要加载的图片放入所有图片的数组中
    // },
    toshop(id) {
      this.$router.push({
        path: "/home/shop/" + id
      });
    },
    tosousou() {
      this.$router.push({
        path: "/home/sousou/" + "h"
      });
    },
    tocreat() {
      this.$router.push({
        path: "/creativeActivity/CreativeActivity"
      });
    },
    gotolist() {
      this.$router.push({ path: "/creativeActivity/activitylist" });
    },
    toactive() {
      this.$router.push({ path: "/creativeActivity/CreativeActivity" });
    },
    close() {
      this.flags = false;
    }
  },
  mounted() {
    // this. getData()
    this.$nextTick(function() {
      let _th = this;
      setTimeout(function() {
        _th.initstoreList();
      }, 1000);
    });
  },
  components: {
    vueWaterfallEasy,
    Maps: Maps
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
.box {
  background: #f7f7f7;
  .header {
    width: 7.5rem;
    position: fixed;
    top: 0;
    z-index: 10;
    height: 0.88rem;
    line-height: 0.88rem;
    padding: 0 0.25rem;
    color: #fff;
    text-align: left;
    display: flex;
    background: #ff7c12;
    .icon-arrow-down {
      margin: 0 0.2rem;
      font-size: 0.3rem;
      vertical-align: middle;
    }
    .icon-saoyisao {
      position: absolute;
      font-size: 0.28rem;
      right: 0.25rem;
    }
    .sousou {
      width: 4.5rem;
      height: 0.5rem;
      margin: 0.19rem 0;
      border-radius: 0.25rem;
      padding-left: 0.3rem;
      outline: none;
      border: none;
      background-color: #fff;
      margin-left: 0.2rem;
    }
    .citysp {
      width: 1rem;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .content {
    padding-top: 1rem;
    .mint-swipe {
      height: 2.4rem;
      img {
        width: 100%;
        height: 100%;
      }
      /deep/ .mint-swipe-indicator.is-active {
        background: #ff7c12;
        opacity: 1;
      }
      /deep/ .mint-swipe-indicator {
        margin: 0 0.1rem;
      }
    }
    .body-div {
      padding: 0.15rem 0.25rem;
      .hongbaobox {
        width: 6.9rem;
        height: 2rem;
        margin: 0.2rem auto;
        ul {
          width: 100%;
          display: flex;
          justify-content: space-between;
          li {
            width: 2rem;
            height: 2rem;
            border-radius: 0.2rem;
            background-color: pink;
            /deep/ .mint-swipe {
              height: 2rem;
              img {
                width: 100%;
              }
              .mint-swipe-indicators {
                display: none;
              }
            }
          }
        }
      }
      .column {
        display: flex;
        height: 1.5rem;
        background: #fff;
        border-radius: 0.1rem;
        justify-content: space-around;
        img {
          width: 1.09rem;
          height: 1.12rem;
          // margin-top: 0.18rem;
        }
        p {
          line-height: 0.15rem;
          font-size: 0.24rem;
          color: #666;
        }
      }
      .img-box {
        margin: 0.1rem 0 0.12rem;
        position: relative;
        .mint-swipe {
          height: 1rem;
          /deep/ .mint-swipe-indicators {
            display: none;
          }
        }
        .img {
          width: 100%;
          display: block;
        }
        .img-btn {
          width: 0.9rem;
          position: absolute;
          top: 50%;
          right: 0.2rem;
          transform: translateY(-50%);
        }
      }
      .module {
        display: flex;
        li {
          width: 50%;
        }
      }
      table {
        width: 100%;
        background: #fff;
        border-collapse: collapse;

        td {
          width: 50%;
          height: 1.6rem;
          display: inline-flex;
          padding: 0.12rem 0.2rem 0.2rem;
          text-align: left;
          position: relative;
          button {
            font-size: 0.2rem;
            color: #ff7c12;
            border: 1px solid #ff7c12;
            border-radius: 0.25rem;
            padding: 0.05rem 0.15rem;
            position: absolute;
            bottom: 0.2rem;
          }
          .btn {
            background: #fd1218;
            color: #fff;
            border: 1px solid #fd1218;
          }
          p {
            font-size: 0.24rem;
            color: #999;
          }
          .title {
            font-size: 0.3rem;
            color: red;
          }
          img {
            width: 1.37rem;
            height: 1.2rem;
            position: absolute;
            right: 0rem;
          }
        }
        .td1,
        .td2 {
          border-bottom: 1px solid #ccc;
          .mint-swipe {
            width: 1.4rem;
            height: 1.2rem;
            position: absolute;
            right: 0.1rem;
            /deep/ .mint-swipe-indicators {
              display: none;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .td1,
        .td3 {
          border-right: 1px solid #ccc;
        }
      }
      .merchant {
        display: flex;
        height: 0.92rem;
        justify-content: center;
        align-items: center;
        .shopname {
          color: #ff7c12;
          font-weight: 600;
        }
        p {
          height: 1px;
          width: 2rem;
        }
        .left-line {
          background: linear-gradient(to left, #fff, #ff7c12);
        }
        .right-line {
          background: linear-gradient(to right, #fff, #ff7c12);
        }
        img {
          width: 0.32rem;
          vertical-align: bottom;
          margin: 0 0.1rem;
        }
        span {
          font-size: 0.3rem;
          margin-right: 0.1rem;
          margin-top: -0.05rem;
          color: #fff;
        }
      }
      .contentbox {
        width: 7rem;
        height: 10rem;
        // background: pink;
        overflow: hidden;
        overflow-y: auto;
        margin-bottom: 1.1rem;
        ul {
          width: 7rem;
          float: left;
          li {
            width: 3.4rem;
            height: 5.3rem;
            margin-bottom: 0.2rem;
            // background: #999;
            float: left;
            overflow: hidden;
            border:solid 0.02rem #ccc;
            border-radius: 0.02rem;
            .imgbox {
              width: 3.4rem;
              height: 3.5rem;
              // background-color: #999;
              position: relative;
              overflow: hidden; 
              img{
                width: 100%;
                position: absolute;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%);
              }
            }
            .player_info{
              padding:0.1rem;
              height: 1.8rem;
              position: relative;
              // background: red;
              .title{
                display: flex;
                justify-content: space-between;
                .name{
                  font-size: 0.3rem;
                }
                .grade{
                  font-size: 0.3rem;
                  color: #fb1e1e;
                }
              }
              .info{
                  text-align: left;
                  overflow: hidden;
                  // padding-left: 0.2rem;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
              }
              .address-box{
                position: absolute;
                bottom: 0.1rem;
                left: 0;
                padding-top:0.1rem;
                // display: flex;
                // justify-content: space-between;
                .address{
                  background: #0b9b95;
                  padding: 0 0.1rem;
                  width:1.4rem ;
                  border-radius: 0.2rem;
                  display: inline-block;
                  overflow:hidden;
                  white-space:nowrap;
                  text-overflow:ellipsis;
                }
                .distance{
                  padding-left: 0.3rem;
                }
              }
            }
           
          }
          li:nth-child(2n) {
            margin-left: 0.2rem;
          }
        }
      }
      // .vue-waterfall-easy-container {
      //   height: 10rem;
      //   margin-bottom: 1rem;
      //   /deep/ .vue-waterfall-easy-scroll {
      //     overflow-y: auto;
      //     // bottom: 1rem;
      //   }
      //   /deep/ .img-box {
      //     width: 3.4rem;
      //     .img-inner-box {
      //       background: #fff;
      //       overflow: hidden;
      //       border-radius: 0.1rem;
      //       // margin: 0 0.1rem;
      //     }
      //     .img-wraper {
      //       width: 3.4rem !important;
      //       height: auto !important;
      //     }
      //     .player_info {
      //       // height: 1.6rem;
      //       text-align: left;
      //       padding: 0.05rem 0.1rem 0.1rem;
      //       .title {
      //         span {
      //           font-size: 0.3rem;
      //           color: #333;
      //         }
      //         .grade {
      //           color: #fb1e1e;
      //           position: absolute;
      //           right: 0.2rem;
      //         }
      //         .name {
      //           display: inline-block;
      //           width: 2.1rem;
      //           overflow: hidden;
      //           text-overflow: ellipsis;
      //           white-space: nowrap;
      //         }
      //       }
      //       .info {
      //         font-size: 0.24rem;
      //         color: #999;
      //         overflow: hidden;
      //         text-overflow: ellipsis;
      //         white-space: nowrap;
      //       }
      //       .category {
      //         background: #fb1e1e;
      //         padding: 0 0.1rem;
      //         display: inline-block;
      //         border-radius: 0.05rem;
      //         margin: 0.2rem 0 0.1rem;
      //         color: #fff;
      //       }

      //       .address-box {
      //         color: #999;
      //         display: flex;
      //         justify-content: space-between;

      //         .address {
      //           background: #0b9b95;
      //           padding: 0.03rem;
      //           border-radius: 0.05rem;
      //           color: #fff;
      //           overflow: hidden;
      //           text-overflow: ellipsis;
      //           white-space: nowrap;
      //           font-size: 0.2rem;
      //         }
      //       }
      //     }
      //   }
      // }
    }
    // /deep/ .vue-waterfall-easy-container > .loading {
    //   display: none;
    // }
  }
  .mask {
    height: 100%;
    width: 7.5rem;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
    .jinbihongbao {
      width: 4.1rem;
      height: 5.5rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url(../../assets/img/home_hongbao_02.png);
      background-repeat: no-repeat;
      background-size: cover;
      .close {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: -0.5rem;
        right: 0;
        color: #fff;
        font-size: 0.15rem;
        line-height: 0.5rem;
      }
      .hongbaotext {
        width: 3.8rem;
        height: 2rem;
        position: absolute;
        bottom: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
        p {
          line-height: 1rem;
          color: rgb(245, 222, 16);
          font-size: 0.3rem;
        }
        .receive {
          width: 3.8rem;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          border-radius: 1rem;
          background-color: rgb(245, 222, 16);
          font-size: 0.3rem;
          color: red;
        }
      }
    }
  }
}
</style>



