<template>
  <div class="box">
    <div class="header">
      <router-link to="../Home">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>{{cityname}}</span>
      <!-- <i class="iconfont icon-arrow-down"></i> -->
       <input class="sousou" placeholder="请输入内容"  readonly="readonly" @click="tosousou"/>
      <!-- <p class="title">天天活动</p> -->
    </div>
    <div class="content">
      <div class="nav-box">
        <mt-navbar v-model="selected">
          <!-- <mt-tab-item id="1">
            <span style="font-size: .3rem;">全部</span>
          </mt-tab-item>
          <mt-tab-item id="2">
            <span>衣服</span>
          </mt-tab-item>
          <mt-tab-item id="3">
            <span>裤子</span>
          </mt-tab-item>
          <mt-tab-item id="4">
            <span>鞋子</span>
          </mt-tab-item>
          <mt-tab-item id="5">
            <span>帽子</span>
          </mt-tab-item>
          <mt-tab-item id="6">
            <span>内衣</span>
          </mt-tab-item>
          <mt-tab-item id="7">
            <span>母婴</span>
          </mt-tab-item>
          <mt-tab-item id="8">
            <span>建材</span>
          </mt-tab-item>
          <mt-tab-item id="9">
            <span>帽子</span>
          </mt-tab-item>
          <mt-tab-item id="10">
            <span>内衣</span>
          </mt-tab-item>
          <mt-tab-item id="11">
            <span>母婴</span>
          </mt-tab-item>
          <mt-tab-item id="12">
            <span>建材</span>
          </mt-tab-item> -->
        </mt-navbar>
      </div>
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../../../assets/img/ac_ss1.png" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../../assets/img/ac_ss2.png" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../../assets/img/ac_ss3.png" alt>
        </mt-swipe-item>
      </mt-swipe>
      <div class="merchant">
          <p class="left-line"></p>
          <img src="../../../assets/img/icon_jx@2x.png" alt>
          <span>天天活动</span>
          <p class="right-line"></p>
        </div>
      <div class="bodydiv">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <vueWaterfallEasy :imgsArr="imgsArr" @scrollReachBottom="getData" >
              <template slot-scope="props" >
                <div class="player_info" @click="goto(props.value.id)">
                  <p class="title">
                    <span class="name">{{props.value.name}}</span>
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
            </vueWaterfallEasy>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      value: "",
      selected: "1",
      imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
      fetchImgsArr: [],//存放每次滚动时下一批要加载的图片的数组
      pageNum:1,
      pageSize:10,
      cityname:'',
      url:'',
      activityList:[],
      pages:''
    };
  },
  components: {
    vueWaterfallEasy
  },
  created() {
    // this.imgsArr = this.initImgsArr(0, 10); //初始化第一次（即页面加载完毕时）要加载的图片数据
    // this.fetchImgsArr = this.initImgsArr(10, 20); // 模拟每次请求的下一批新的图片的数据数据
    this.initactivtyList()
  },
  methods: {
    //获取活动店铺信息
    initactivtyList(){
      this.url = this.$store.state.url
      let urls = this.url +':8810/store/self/storeWithActivity'
      this.cityname = localStorage.getItem('city')
      let storeLat = localStorage.getItem('storeLat')
      // let storeLat =localStorage.getItem('storeLat')
      let storeLong =localStorage.getItem('storeLong')
       this.$http.post(urls,{cityName:this.cityName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:storeLat,storeLong:storeLong}).then(res=>{
        if(res.body.code===200){
          this.activityList = res.body.result.list
          this.pages = res.body.result.pages
          let _th = this
          let arr =[]
          for(var i=0;i<_th.activityList.length;i++){
            arr.push({
              id:_th.activityList[i].id,
              src:_th.activityList[i].imgs !==null?_th.activityList[i].imgs.split(',')[0]:null,
              name:_th.activityList[i].storeName,
              description:_th.activityList[i].description,
              score:_th.activityList[i].score,
              activity:_th.activityList[i].activity[0].name,
              commercialStreet:_th.activityList[i].commercialStreet,
              distance:parseInt(_th.activityList[i].distance/1000).toFixed(2),
              
            })
          }
          this.imgsArr = arr
        }
      })
    },
    //加载更多
    getData(){
      this.pageNum++
      if(this.pageNum > this.pages){
         Toast("没有更多数据");
        return false
      }
       let urls = this.url +':8810/store/self/storeWithActivity'
      this.cityname = localStorage.getItem('city')
      let storeLat = localStorage.getItem('storeLat')
      // let storeLat =localStorage.getItem('storeLat')
      let storeLong =localStorage.getItem('storeLong')
       this.$http.post(urls,{cityName:this.cityName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:storeLat,storeLong:storeLong}).then(res=>{
        if(res.body.code===200){
          this.activityList = res.body.result.list
          let _th = this
          let arr =[]
          for(var i=0;i<_th.activityList.length;i++){
            arr.push({
              id:_th.activityList[i].id,
              src:_th.activityList[i].imgs !==null?_th.activityList[i].imgs.split(',')[0]:null,
              name:_th.activityList[i].storeName,
              description:_th.activityList[i].description,
              score:_th.activityList[i].score,
              activity:_th.activityList[i].activity[0].name,
              commercialStreet:_th.activityList[i].commercialStreet,
              distance:parseInt(_th.activityList[i].distance/1000).toFixed(2),
            })
          }
          this.imgsArr =this.imgsArr.concat(arr) 
        }
      })
    },
    goto(index){
      this.$router.push({
        path:'/home/shop/'+index
      })
    },
    tosousou(){
       this.$router.push({
        path:'/home/sousou/'+'a'
      })
    },
  },
  
};
</script>
<style lang="scss" scoped>
.box {
  background: #ff7c12;
  padding: 0 0.25rem;
  // -------
  // position: relative;
  // display: flex;
  // flex-direction: column;
  height: 100%;
  //---------

  .header {
    position: fixed;
    top:0;
    z-index:999;
    height: 0.88rem;
    line-height: 0.88rem;
    color: #fff;
    text-align: left;
    display: flex;
    .icon-fanhui {
      font-size: 0.3rem;
    }
    span {
      margin: 0 0.2rem;
    }
    .icon-arrow-down {
      font-size: 0.3rem;
      vertical-align: middle;
      padding-right: 0.2rem;
    }
    .title {
      font-size: 0.32rem;
    }
     .sousou{
      width: 4.5rem;
      height: 0.5rem;
      margin: 0.19rem 0;
      border-radius: 0.25rem;
      padding-left: 0.3rem;
      outline: none;
      border: none;
      background-color: #fff;
    }
    // .mint-search {
    //   width: 1.95rem;
    //   height: 0.5rem;
    //   margin: 0.19rem 0.2rem;
    //   border-radius: 0.25rem;
    //   /deep/ .mint-searchbar {
    //     padding: 0;
    //     height: 0.5rem;
    //     .mint-searchbar-inner {
    //       height: 100%;
    //       .mintui-search {
    //         font-size: 0.28rem;
    //         margin: 0.02rem 0.1rem 0;
    //       }
    //       .mint-searchbar-core {
    //         font-size: 0.24rem;
    //         line-height: 0.2rem;
    //         color: #999;
    //       }
    //     }
    //     .mint-searchbar-cancel {
    //       display: none;
    //     }
    //   }
    // }
  }
  .content{
     position: relative;
      display: flex;
      padding-top: 1rem;
      flex-direction: column;
      height: 100%;
    //切换tab标题
    .nav-box {
      overflow: hidden;
      overflow-x: auto;
      border-radius: 0.1rem;
    }
    .mint-navbar {
      /deep/ .mint-tab-item {
        padding: 0;
        height: 0.88rem;
        background: #fff;
        /deep/ .mint-tab-item-label {
          line-height: 0.88rem;
          font-size: 0.24rem;
          color: #666;
          width: 0.88rem;
        }
      }
      .mint-tab-item.is-selected {
        border: none;
        /deep/ .mint-tab-item-label {
          //width: auto;
          color: #ff7c12;
          display: inline-block;
          span {
            display: inline-block;
            height: 0.7rem;
            border-bottom: 2px solid #ff7c12;
          }
        }
      }
    }
    .mint-swipe {
      height: 2rem;
      margin: 0.2rem 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.1rem;
      }
      /deep/ .mint-swipe-indicator.is-active {
        background: #ff7c12;
        opacity: 1;
      }
      /deep/ .mint-swipe-indicator {
        margin: 0 0.1rem;
      }
    }
    .merchant {
        display: flex;
        height: 0.92rem;
        justify-content: center;
        align-items: center;

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
    .bodydiv {
      //padding: 0 0.25rem;
      flex:1;
      position: relative;
      .mint-tab-container{
        width: 100%;
        height: 100%;
        // height: 11rem;
        position: absolute;
        top: 0;
      /deep/ .mint-tab-container-wrap{
          height: 100%;
        .mint-tab-container-item{
          height: 100%;
        }
        }
      }
      .vue-waterfall-easy-container {
        height:100%;
        /deep/ .loading {
     display: none;
    }
        /deep/ .vue-waterfall-easy-scroll {
          overflow-y: auto;
        }
        /deep/ .img-box {
          width: 3.4rem;
          padding: 0 0 0.2rem !important;
          // margin-bottom: .2rem;
          .img-inner-box {
            background: #fff;
            overflow: hidden;
            border-radius: 0.1rem;
          }
          .img-wraper {
            width: 3.4rem !important;
            height: auto !important;
          }
          .player_info {
            height: 2.05rem;
            text-align: left;
            padding: 0.15rem 0.2rem 0.2rem;
            .title {
              span {
                font-size: 0.3rem;
                color: #333;
              }
              .grade {
                color: #fb1e1e;
                position: absolute;
                right: 0.2rem;
              }
              .name {
                display: inline-block;
                width: 2.1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
            .info {
              font-size: 0.24rem;
              color: #999;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .category {
              background: red;
              padding: 0 0.1rem;
              display: inline-block;
              border-radius: 0.05rem;
              margin: 0.2rem 0 0.1rem;
              color: #fff;
            }

            .address-box {
              color: #999;
              display: flex;
              justify-content: space-between;

              .address {
                background: black;
                padding: 0 0.1rem;
                border-radius: 0.05rem;
                color: #fff;
                 overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 0.2rem;
              }
              // .distance{

              // }
            }
          }
        }
        /deep/ .img-box:nth-child(even) {
          left: 3.6rem !important;
        }
      }
    }
  }
}
</style>



