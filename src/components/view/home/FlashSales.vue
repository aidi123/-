<template>
  <div class="shopcart">
    <div class="header">
      <mt-header title="闪购">
        <mt-button icon="back" slot="left" @click="goback"></mt-button> 
      </mt-header>
    </div>
    <div class="textbox">
        <ul>
          <li v-for="(item,index) in activityList" :key="index" @click="toshop(item.id)">
            <div class="messagebox">
              <div class="imgbox">
                <img :src="item.cimg" alt>
              </div>
              <div class="textbox2">
                <p class="texttitle">{{item.cname}}</p>
                <p class="size">{{item.subject}}</p>
                <p class="price"> ￥<span> {{item.price}}</span> </p>
              </div>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
// import vueWaterfallEasy from "vue-waterfall-easy";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      cityname:'武汉',
     activityList:[],
     pageNum:1,
     pageSize:10,
     pages:0
    };
  },
 
  created() {
    this.initactivtyList()
  },
  methods: {
    //获取活动店铺信息
    initactivtyList() {
      this.url = this.$store.state.url;
      let urls = this.url + ":8000/busin/goods/commoditys";
      this.cityname = localStorage.getItem("city");
      let storeLat = localStorage.getItem("storeLat");
      // let storeLat =localStorage.getItem('storeLat')
      let storeLong = localStorage.getItem("storeLong");
      this.$http
        .post(urls, {
          cityName: this.cityName,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          storeLat: storeLat,
          storeLong: storeLong
        })
        .then(res => {
            console.log(res)
          if (res.body.code === 200) {
            this.activityList = res.body.result.list;
            this.pages = res.body.result.pages;
          }
        });
    },
    goback(){
      this.$router.push({path:'/home'})
    },
    //加载更多
    getData() {
      this.pageNum++;
      if (this.pageNum > this.pages) {
        Toast("没有更多数据");
        return false;
      }
      let urls = this.url + ":8000/busin/goods/commoditys";
      this.cityname = localStorage.getItem("city");
      let storeLat = localStorage.getItem("storeLat");
      // let storeLat =localStorage.getItem('storeLat')
      let storeLong = localStorage.getItem("storeLong");
      this.$http
        .post(urls, {
          cityName: this.cityName,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          storeLat: storeLat,
          storeLong: storeLong
        })
        .then(res => {
          if (res.body.code === 200) {
            this.activityList = res.body.result.list;
            // let _th = this;
            // let arr = [];
            // for (var i = 0; i < _th.activityList.length; i++) {
            //   arr.push({
            //     id: _th.activityList[i].id,
            //     src:
            //       _th.activityList[i].imgs !== null
            //         ? _th.activityList[i].imgs.split(",")[0]
            //         : null,
            //     name: _th.activityList[i].storeName,
            //     description: _th.activityList[i].description,
            //     score: _th.activityList[i].score,
            //     activity: _th.activityList[i].activity[0].name,
            //     commercialStreet: _th.activityList[i].commercialStreet,
            //     distance: parseInt(_th.activityList[i].distance / 1000).toFixed(
            //       2
            //     )
            //   });
            // }
            // this.imgsArr = this.imgsArr.concat(arr);
          }
        });
    },
    toshop(index) {

      // localStorage.setItem('path',this.$route.fullPath)
      this.$router.push({
        path: "/home/FlashSalesCart/" + index
      });
      
      
    },
  }
};
</script>
<style lang="scss" scoped>
.shopcart {
  width: 7.5rem;
  min-height: 100%;
  background-color: rgb(255, 124, 18);
  position: relative;
  .header{
    width: 7.5rem;
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
    .mint-header {
      background: rgb(255, 124, 18);
    }
  }
  .textbox {
    height: 100%;
    padding-top: 1rem;
    // padding-bottom: 2rem;
    // background: yellow;
    overflow: hidden;
    ul{
      width:7.5rem;
      float: left;
      overflow-y: auto;
      li {
        width: 7rem;
        margin: 0.2rem auto;
        border-radius: 0.1rem;
        padding: 0.2rem;
        background: #fff;
        text-align: left;
        .messagebox {
          width: 6.5rem;
          height: 1.6rem;
        }
        .imgbox {
          width: 1.6rem;
          height: 1.6rem;
          background: goldenrod;
          float: left;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .textbox2 {
          width: 4.9rem;
          height: 1.6rem;
          float: left;
          // background-color: yellow;
          position: relative;
          p {
            padding-left: 0.2rem;
          }
          .texttitle {
            padding-top: 0.1rem;
            font-size: 0.28rem;
            color: #333333;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .size {
            min-height: 0.8rem;
            color: #999999;   
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .price{
            color: #ff2d2d;
            span{
              font-size: 0.3rem;
            }
          }

        
        }
      }
    }


  }
  .footers {
    width: 7.5rem;
    height: 1rem;
    // line-height: 1rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 1rem;
    display: flex;
    z-index: 99;
    justify-content: space-between;
    .one {
      padding: 0.3rem 0.2rem;
      /deep/ .yd-checkbox-icon {
        color: rgb(255, 124, 18) !important;
      }
    }
    .two {
      padding: 0.2rem 0.2rem;
      //   line-height: 1rem;
      .price {
        color: #ff2d2d;
      }
      .pay {
        display: inline-block;
        padding: 0.1rem 0.2rem;
        color: #fff;
        background: #ff7c12;
        font-size: 0.3rem;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>



