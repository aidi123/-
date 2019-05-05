<template>
  <div class="myrelease">
    <mt-header title="我的发布" style="background:#FF7C12;">
      <router-link to="../my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <div class="box">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">招聘</mt-tab-item>
        <mt-tab-item id="2">求职</mt-tab-item>
        <mt-tab-item id="3">同城圈</mt-tab-item>
        <mt-tab-item id="4">活动</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="recruitment">
            <li class="list" v-for="item in list" :key="item.id">
              <div class="info">
                <div class="left">
                  <img src="../../../assets/img/img_tc1@2x.png" alt>
                  <div>
                    <p class="title">{{item.recruiterName}}</p>
                    <p>{{item.createTime | dateFormat("YYYY-MM-DD") }}</p>
                  </div>
                </div>
                <div class="right">
                  <p class="money">薪资待遇：{{item.minPrice}}</p>
                  <!-- <p><i class="iconfont icon-dianhua"></i>{{item.mobile}}</p> -->
                </div>
              </div>
              <div class="content">
                <p>{{item.description}}</p>
              </div>
              <p class="address">
                <i class="iconfont icon-dizhi"></i>
                <span>{{item.address}}</span>
                <span>{{item.cityName}}</span>
                <span>{{item.area}}</span>
                <a :href="'tel:'+ item.mobile" class="phone">
                  <i class="iconfont icon-dianhua"></i>
                  {{item.mobile.substring(0,3)}}****{{item.mobile.substring(7,11)}}
                </a>
              </p>
            </li>
            <li @click="moremessage" class="admore">
              <p>加载更多~</p>
            </li>
            <!-- <li class="list">
                            <div class="info">
                                <div class="left">
                                    <img src="../../../assets/img/img_tc1@2x.png" alt="">
                                    <div>
                                        <p>涂圆圆</p>
                                        <p> 2018.11.10 </p>
                                    </div>
                                </div>
                                <div class="right">
                                    <p class="money">薪资待遇：2000</p>
                                    <p><i class="iconfont icon-dianhua"></i> 134****1234</p>
                                </div>
                            </div>
                          <div class="content">
                            <p>1. 深入理解iOS和Android等平台的UI设计。</p>
                            <p>2. 具备一定的手绘能力。</p>
                            <p>3. 团队合作力强，善于沟通表达。</p>
                            <p>PS：请在投递该岗位时附带自己的作品。</p>
                          </div>
                            <p class="address">
                              <i class="iconfont icon-dizhi"></i> 
                              <span>武汉</span>
                              <span>江汉区</span>  
                              <span>新华</span>
                            </p>
                        </li>
                        <li class="list">
                            <div class="info">
                                <div class="left">
                                    <img src="../../../assets/img/img_tc1@2x.png" alt="">
                                    <div>
                                        <p>涂圆圆</p>
                                        <p> 2018.11.10 </p>
                                    </div>
                                </div>
                                <div class="right">
                                    <p class="money">薪资待遇：2000</p>
                                    <p><i class="iconfont icon-dianhua"></i> 134****1234</p>
                                </div>
                            </div>
                            <div class="content">
                            <p>1. 深入理解iOS和Android等平台的UI设计。</p>
                            <p>2. 具备一定的手绘能力。</p>
                            <p>3. 团队合作力强，善于沟通表达。</p>
                            <p>PS：请在投递该岗位时附带自己的作品。</p>
                          </div>
                            <p class="address">
                              <i class="iconfont icon-dizhi"></i> 
                              <span>武汉</span>
                              <span>江汉区</span>  
                              <span>新华</span>
                            </p>
            </li>-->
          </ul>
          <!-- <p class="more">没有更多了~</p>                           -->
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul class="job">
            <li class="list" v-for="(item,index) in Listtwo" :key="index">
              <div class="info">
                <div class="left">
                  <img src="../../../assets/img/img_tc1@2x.png" alt>
                  <div>
                    <p>{{item.title}}</p>
                  </div>
                </div>
                <div class="right">
                  <p class="money">期望薪资：{{item.minPrice}}</p>
                  <!-- <p><i class="iconfont icon-dianhua"></i> {{item.mobile}}</p> -->
                </div>
              </div>
              <p class="content">{{item.description}}</p>
              <p class="address">
                <i class="iconfont icon-dizhi"></i>
                <!-- <span>武汉</span> -->
                <span>{{item.cityName}}</span>
                <span>{{item.area}}</span>
                <a :href="'tel:'+ item.mobile" class="phone">
                  <i class="iconfont icon-dianhua"></i>
                  {{item.mobile.substring(0,3)}}****{{item.mobile.substring(7,11)}}
                </a>
              </p>
            </li>
            <li @click="moreqiuzhi" class="admore">
              <p>加载更多~</p>
            </li>
          </ul>
          <!-- <p class="more">没有更多了~</p> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <ul class="frinds">
            <li v-for="(item,index) in listthree" :key="index" class="selectthree">
              <p>{{item.content}} hahahha</p>
              <div class="imgbox">
                <vue-preview :slides="item.arrs" @close="handleClose" class="imgstyle"></vue-preview>
                <!-- <img v-for="(items,index2) in listthree[index].imgs.split(',')" :key="index2" :src="items" class="imgs" @click="modd(index2)"> -->
              </div>
            </li>
            <li @click="morethree" class="admore">
              <p>加载更多~</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <ul class="active">
            <li
              v-for="(item,index) in listfour"
              :key="index"
              @click="toactive(item.id,item.backGroundId,item.type)"
            >
              <div class="fristbox">
                <img
                  :src="(item.backGroundId==1&&'http://suyuanwang.com.cn:9080/resources/2018-12-26/cr_banner1.png')||(item.backGroundId==2&&'http://suyuanwang.com.cn:9080/resources/2018-12-26/cr_banner2.png')||(item.backGroundId==3&&'http://suyuanwang.com.cn:9080/resources/2018-12-26/cr_banner3.png')||(item.backGroundId==4&&'http://suyuanwang.com.cn:9080/resources/2018-12-26/cr_banner4.png')||(item.backGroundId==5&&'http://suyuanwang.com.cn:9080/resources/2018-12-26/cr_banner5.png')"
                  alt
                >
              </div>
              <div class="seconedbox">
                <p class="title">{{item.title}}</p>
                <p>{{item.description.replace('%2','')}}</p>
              </div>
            </li>
            <p class="fourmore" @click="fourmore">加载更多~</p>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      selected: "4",
      list: [],
      page: 1,
      total: 10,
      pages: 0,
      Listtwo: [],
      page1: 1,
      total1: 10,
      pages1: 0,
      page2: 1,
      total2: 10,
      listthree: [],
      pages2: 0,
      page3: 1,
      total3: 10,
      listfour: [],
      pages3: 0,
      userid: ""
    };
  },
  created() {
    this.initzhaopinList();
    this.initQiuzhiList();
    this.initpengyouquan();
    this.active();
  },
  methods: {
    //   查询当前用户的招聘信息
    initzhaopinList() {
      this.url = this.$store.state.url;
      let urls = this.url + ":8073/recruitment/self/selectByUserId";
      this.$http
        .get(urls + "?page=" + this.page + "&total=" + this.total)
        .then(res => {
          console.log(res);
          if (res.body.code === 200) {
            this.list = this.list.concat(res.body.result.list);
            this.pages = res.body.result.pages;
          }
        });
    },
    initQiuzhiList() {
      this.url = this.$store.state.url;
      let urls = this.url + ":8073/jobHuting/self/selectByUserId";
      this.$http
        .get(urls + "?page=" + this.page1 + "&total=" + this.total1)
        .then(res => {
          console.log(res);
          if (res.body.code === 200) {
            this.Listtwo = this.Listtwo.concat(res.body.result.list);
            this.pages1 = res.body.result.pages;
          }
        });
    },
    initpengyouquan() {
      this.url = this.$store.state.url;
      let urls = this.url + ":8800/lifeCircle/self/getLifeCirclesByPage";
      this.$http
        .get(urls + "?page=" + this.page2 + "&total=" + this.total2)
        .then(res => {
          console.log(res);
          if (res.body.code === 200) {
            this.listthree = this.listthree.concat(res.body.result.list);
            this.pages2 = res.body.result.pages;
            let _this = this;
            let arrimgs = [];
            for (var i = 0; i < _this.listthree.length; i++) {
              var arr = [];
              _this.listthree[i].imgs.split(",").forEach(item => {
                let obj = {};
                //  console.log(item)
                (obj.src = item),
                  (obj.msrc = item),
                  (obj.w = 600),
                  (obj.h = 400);
                arr.push(obj);
              });
              _this.listthree[i].arrs = arr;
            }
            console.log(_this.listthree);
          }
        });
    },
    handleClose() {},
    //招聘
    moremessage() {
      this.page++;
      if (this.page > this.pages) {
        Toast("没有更多数据~");
        return false;
      }
      this.initzhaopinList();
    },
    //求职
    moreqiuzhi() {
      this.page1++;
      console.log(this.page1, this.pages1);
      if (this.page1 > this.pages1) {
        Toast("没有更多数据");
        return false;
      }
      this.initQiuzhiList();
    },
    //同城圈
    morethree() {
      this.page2++;
      if (this.page2 > this.pages2) {
        Toast("没有更多数据");
        return false;
      }
      this.initpengyouquan();
    },
    //   活动列表
    active() {
      this.userid = localStorage.getItem("key");
      console.log(this.userid);
      this.url = this.$store.state.url;
      let urls = this.url + ":9988/activity/page";

      //   +'?pageSize='+this.page3+'&pageNum='+this.total3+'userId'+this.useri
      this.$http
        .post(urls, {
          pageSize: this.total3,
          pageNum: this.page3,
          userId: this.userid
        })
        .then(res => {
          console.log(res);
          if (res.body.code === 200) {
            this.listfour = this.listfour.concat(res.body.result.list);
            this.pages3 = res.body.result.pages;
            console.log(this.pages3);
          }
        });
    },
    // 点击加载更多
    fourmore() {
      this.page3++;
      console.log(this.page3);
      if (this.page3 > this.pages3) {
        Toast("没有更多数据");
        return false;
      }
      this.active();
    },
    // 点击时跳转到
    toactive(activeNum, bgid, type) {
      // console.log(activeNum,bgid)
      // let activeNum = localStorage.setItem('activeNum')
      localStorage.setItem("activeNum", activeNum);
      if (type == 1) {
        this.$router.push({ path: "/creativeActivity/saveactivity/" + bgid });
      }
      if (type == 5) {
        this.$router.push({ path: "/creativeActivity/leaflets/" + bgid });
      }
      if (type == 6) {
        this.$router.push({
          path: "/creativeActivity/LeafletsCreativeNew/" + bgid
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.myrelease {
  height: 100%;
  background-color: #ff7c12;
  .mint-header {
    z-index: 9;
    position: fixed;
    top: 0;
    width: 7.5rem;
  }
  .box {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 0.25rem;
    background: #ff7c12;
    background-size: 100% 100%;
    width: 100%;
    //   height: 100%;
    color: #fff;

    .img {
      width: 100%;
      height: 2rem;
      border-radius: 0.05rem;
      display: block;
      margin-bottom: 0.2rem;
    }
    .selectthree {
      margin-top: 0.2rem;
      padding: 0.1rem;
      background-color: #fff;
      border-radius: 0.1rem;
      p {
        color: #ff7c12;
        text-align: left;
        font-size: 0.3rem;
        padding: 0.1rem;
      }
      .imgbox {
        display: flex;
        flex-wrap: wrap;
        /deep/ figure {
          width: 2rem;
          height: 2rem;
          float: left;
          margin: 0.1rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.1rem;
          }
        }
        /deep/ .pswp__button--share {
          display: none;
        }
      }
    }
    .mint-navbar {
      border: 1px solid #fff;
      border-radius: 0.1rem;
      overflow: hidden;
      margin-top: 1rem;
      .mint-tab-item {
        padding: 0;
        height: 0.88rem;
        line-height: 0.6rem;
        background: #ff7c12;
        /deep/ .mint-tab-item-label {
          line-height: 0.88rem;
          height: 0.88rem;
          font-size: 0.24rem;
          color: #fff;
        }
      }
      .mint-tab-item.is-selected {
        background: #fff;
        border: none;
        /deep/ .mint-tab-item-label {
          color: #ff8200;
        }
      }
    }
    .recommend {
      line-height: 0.88rem;
      font-size: 0.3rem;
      color: #fff;
    }
    .recruitment {
      height: 14rem;
      overflow-y: auto;
    }
    .job {
      height: 13.3rem;
      overflow-y: auto;
    }
    .frinds {
      height: 14rem;
      overflow-y: auto;
    }
    .list {
      border: 1px solid #fff;
      border-radius: 0.1rem;
      padding: 0.24rem;
      margin-top: 0.2rem;
      background: linear-gradient(to top right, #ff7c12, #ff6012);
      .info {
        height: 1.04rem;
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          img {
            width: 1.04rem;
          }
          div {
            padding: 0.1rem 0;
            p {
              font-size: 0.24rem;
              color: #fff;
              line-height: 0.42rem;
              text-align: left;
              padding-left: 0.1rem;
            }
            .title {
              width: 3rem;
              overflow: hidden;
              text-overflow: ellipsis;
              // background: goldenrod;
              white-space: nowrap;
              // color: #080eef;
            }
          }
          .name {
            font-size: 0.3rem;
          }
        }
        .right {
          .money {
            font-size: 0.3rem;
            margin-bottom: 0.1rem;
          }
          p {
            line-height: 0.42rem;
            text-align: right;
          }
        }
      }
      // .content{
      //     text-align: left;
      //     margin-top: 0.2rem;
      // }
      .content {
        text-align: left;
        padding-left: 1rem;
        margin-top: 0.2rem;
      }
      .address {
        text-align: left;
        margin-top: 0.2rem;
        .phone {
          float: right;
        }
        .iconfont {
          font-size: 0.3rem;
          vertical-align: middle;
        }
      }
    }
    .active {
      li {
        border: 1px solid #fff;
        border-radius: 0.1rem;
        padding: 0.24rem;
        margin-top: 0.2rem;
        background-color: #fff;
        height: 2rem;
        // display: flex;
        // justify-content: space-between;
        .fristbox {
          width: 1.5rem;
          height: 1.5rem;
          background: pink;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .seconedbox {
          float: left;
          width: 4.9rem;
          text-align: left;
          padding: 0.1rem;
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            color: #ff6012;
            font-size: 0.24rem;
          }
          .title {
            text-align: center;
            font-size: 0.3rem;
          }
        }
      }
    }
    .mint-tab-container-item {
      margin-bottom: 0.2rem;
    }
  }
  // .more {
  //     color: #fff;
  //     font-size: 0.24rem;
  //     padding: 0.3rem 0;
  // }
  .admore {
    color: #fff;

    padding: 0.3rem 0;
    p {
      font-size: 0.3rem;
    }
  }
  .fourmore {
    font-size: 0.3rem;
    color: #fff;
    padding: 0.2rem;
  }
  .iconfont {
    font-size: 0.24rem;
  }
}
</style>


