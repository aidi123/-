<template>
  <div>
    <mt-header title="同城信息">
      <router-link to="/release/Choose" slot="right">
        <mt-button>发布</mt-button>
      </router-link>
    </mt-header>
    <div class="box">
      <img src="../../assets/img/xin_banner2.png" alt class="img">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">
          <p>企业发布</p>
        </mt-tab-item>
        <mt-tab-item id="2">
          <p>个人发布</p>
        </mt-tab-item>
      </mt-navbar>
      <p class="recommend">—— 为你推荐 ——</p>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="recruitment">
            <li class="list" v-for="(item,j) in recruitments" :key="j">
              <div class="info">
                <div class="left">
                  <img :src="item.headImg" alt>
                  <div>
                    <p class="username">{{item.recruiterName}}</p>
                    <p>{{item.modifyTime | dateFormat('YYYY-MM-DD') }}</p>
                  </div>
                </div>
                <!-- <div class="right">
                  <p class="money">薪资待遇：{{item.minPrice}}</p>
                  <p></p>
                </div> -->
              </div>
              <p class="content">{{item.description}}</p>
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
            <li @click="addmore" class="addmore">加载更多</li>
          </ul>
          <!-- </mt-loadmore> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul class="job">
            <!-- v-infinite-scroll="loadMoretwo"
          infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"-->
            <li class="list" v-for="(item,j) in jobList" :key="j">
              <div class="info">
                <div class="left">
                  <img :src="item.headImg" alt>
                  <div>
                    <!-- <p class="title">求职: <span>{{item.title}}</span> </p> -->
                    <p>{{item.modifyTime | dateFormat('YYYY-MM-DD')}}</p>
                  </div>
                </div>
                <div class="right">
                  <!-- <p class="money">薪资：{{item.minPrice}}</p> -->
                  <!-- <p>
                    <i class="iconfont icon-dianhua"></i> {{item.mobile}}
                  </p>-->
                </div>
              </div>
              <p class="content">{{item.description}}</p>
              <p class="address">
                <i class="iconfont icon-dizhi"></i>
                <span>{{item.cityName}}</span>
                <span>{{item.area}}</span>
                <span></span>
                <a :href="'tel:'+ item.mobile" class="phone">
                  <i class="iconfont icon-dianhua"></i>
                  {{item.mobile.substring(0,3)}}****{{item.mobile.substring(7,11)}}
                </a>
              </p>
            </li>
            <li @click="addmoreTwo" class="addmore">点击加载更多</li>
            <!-- <li class="list">
              <div class="info">
                <div class="left">
                  <img src="../../assets/img/img_tc1@2x.png" alt>
                  <div>
                    <p class="name">涂圆圆</p>
                    <p>求职岗位：网络营销</p>
                  </div>
                </div>
                <div class="right">
                  <p class="money">薪资待遇：2000</p>
                  <p>
                    <i class="iconfont icon-dianhua"></i> 134****1234
                  </p>
                </div>
              </div>
              <p class="address">
                <i class="iconfont icon-dizhi"></i>
                <span>武汉</span>
                <span>江汉区</span>
                <span>新华</span>
              </p>
            </li>-->
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
// import { InfiniteScroll } from 'mint-ui';
// import {loadMore} from 'mint-ui'
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      selected: "1",
      city: "",
      recruitments: [],
      url: "",
      loading: false,
      page: 1,
      total: 10,
      pages: 1,
      jobList: [],
      topStatus: "",
      page2: 1
    };
  },
  created() {
    // this.location();
    this.initList();
    this.jobWant();
  },
  methods: {
    //   location(){
    //     var geolocation = new BMap.Geolocation();
    //     // 创建地理编码实例
    //     var myGeo = new BMap.Geocoder();
    //     var _this=this;
    //     geolocation.getCurrentPosition(function(r){
    //         if(this.getStatus() == BMAP_STATUS_SUCCESS){
    //             var pt = r.point;
    // // 根据坐标得到地址描述
    //             myGeo.getLocation(pt, function(result){
    //                 if (result){
    //                     console.log(result)
    //                     var addComp = result.addressComponents;
    //                     // alert(addComp.province + "," + addComp.city + "," + addComp.district);
    //                     _this.city=addComp.city;
    //                     _this.init();
    //                 }
    //             });
    //         }
    //         console.log(_this.city)
    //     });
    //   },
    initList() {
       var to=localStorage.getItem('mytoken');
       if(!to){
         this.$router.push({path:'/login'})
       }
      console.log(this.page);
      var _this = this;
      this.city = localStorage.getItem("city");
      this.url = this.$store.state.url;
      let urls = this.url + ":8073/recruitment/self/orderByTimeDesc";
      this.$http
        .get(
          urls +
            "?cityName=" +
            this.city +
            "&page=" +
            this.page +
            "&total=" +
            this.total
        )
        .then(res => {
          if (res.status === 200) {
            _this.recruitments = _this.recruitments.concat(
              res.body.result.list
            );
            console.log(_this.recruitments);
            _this.pages = res.body.result.pages;
          }
        });
    },
    jobWant() {
      var _this = this;
      // _this.city=this.locations;
      this.city = localStorage.getItem("city");
      this.url = this.$store.state.url;
      let urls = this.url + ":8073/jobHuting/self/orderByTimeDesc";
      // if(!_this.city){
      //   _this.city="武汉市"
      // }
      this.$http
        .get(
          urls +
            "?cityName=" +
            this.city +
            "&page=" +
            this.page2 +
            "&total=" +
            this.total
        )
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            _this.jobList = this.jobList.concat(res.body.result.list);
            // console.log(_this.recruitments)
            _this.pages = res.body.result.pages;
          }
        });
    },
    // 点击加载更多
    addmore() {
      this.page++;
      if (this.page > this.pages) {
        Toast('没有更多数据')
        return false;
      }
      this.initList();
    },
    addmoreTwo() {
      this.page2++;
      if (this.page2 > this.pages) {
        Toast('没有更多数据')
        return false;
      }
      this.jobWant();
    }
  
  }

};
</script>
<style lang="scss" scoped>
.mint-header {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 7.5rem;
  height: 0.88rem;
  background: #ff7c12;
  padding: 0 0.25rem;
  //border-bottom: 1px solid #dbd9d9;
  /deep/ .mint-header-title {
    font-size: 0.32rem;
    color: #fff;
  }
  .mint-button {
    width: 1.08rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background: #fff;
    /deep/ .mint-button-text {
      font-size: 0.24rem;
      color: #ff7c12;
    }
  }
}
.box {
  padding: 0 0.25rem;
  padding-top: 1rem;
  background: #ff7c12;
  color: #fff;
  margin-bottom: 1rem;
  // position: relative;
  // display: flex;
  // flex-direction: column;
  // height: 100%;
  .img {
    width: 100%;
    height: 2rem;
    border-radius: 0.05rem;
    display: block;
    margin-bottom: 0.2rem;
  }
  .mint-navbar {
    border: 1px solid #fff;
    border-radius: 0.1rem;
    overflow: hidden;
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
  // /deep/ .mint-tab-container-item{
  //     height: 10rem;
  //     overflow-y: auto;
  //   }
  .recommend {
    line-height: 0.88rem;
    font-size: 0.3rem;
    color: #fff;
  }
  .recruitment {
    overflow-y: auto;
    height: 10rem;
  }
  .job {
    overflow-y: auto;
    height: 10rem;
   
  }
  .list {
    //width: 100%;
    //height: 3.25rem;
    border: 1px solid #fff;
    border-radius: 0.1rem;
    padding: 0.24rem;
    margin-bottom: 0.2rem;
    background-color: #fff;
    color: #ff7c12;
    // background: linear-gradient(to top right, #ff7c12, #ff6012);
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
          padding: 0;
          p {
            font-size: 0.3rem;
            color: #ff7c12;
            line-height: 0.5rem;
            text-align: left;
            padding-left: 0.1rem;
            
          }
          .title{
              font-size: 0.32rem;
               width: 3rem;
             overflow:hidden;
            text-overflow:ellipsis; 
            // background: goldenrod;
            white-space: nowrap;
            color: #080eef;
            span{
              color: #ff7c12;
              font-size: 0.32rem;
            }
            }
          .username {
            font-size: 0.32rem;
            // width: 50%;
            width: 3rem;
             overflow:hidden;
            text-overflow:ellipsis; 
            // background: goldenrod;
            white-space: nowrap;
          }
        }
        .name {
          font-size: 0.3rem;
        }
      }
      .right {
        width: 50%;
        //padding: 0.1rem 0;
        .money {
          font-size: 0.24rem;
          margin-bottom: 0.1rem;
        }
        p {
          line-height: 0.5rem;
          text-align: right;
          font-size: 0.2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .content {
      text-align: left;
      padding-left: 1rem;
      margin-top: 0.2rem;
      font-size: 0.3rem;
    }
    .address {
      text-align: left;
      margin-top: 0.24rem;
      .phone {
        float: right;
      }
      .iconfont {
        font-size: 0.3rem;
        vertical-align: middle;
      }
    }

  }
  .addmore{
    font-size: 0.3rem;
    padding: 0.1rem;
  }
}

.iconfont {
  font-size: 0.24rem;
}
</style>


