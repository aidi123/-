<template>
  <div class="shop">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item" alt>
      </mt-swipe-item>
      <!-- <mt-swipe-item>
        <img src="../../../assets/img/img_dp_banner@2x.png" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../assets/img/img_dp_banner@2x.png" alt>
      </mt-swipe-item> -->
    </mt-swipe>

    <p class="icon">
      <router-link to="/home" slot="left">
        <i class="iconfont icon-fanhui"></i>
      </router-link>

      <!-- <span>
        <i class="iconfont icon-star"></i>
        <i class="iconfont icon-gaoji" @click="popup"></i>
      </span> -->
    </p>

    <!-- <mt-popup v-model="popupVisible" class="mint-popup-1"> -->
      <!-- <ul>
        <li>
          <yd-button @click.native="show = true" class="btn">
            <i class="iconfont icon-fenxiang1"></i> 分享
          </yd-button>
        </li>
        <router-link to="/home" tag="li">
          <i class="iconfont icon-shouye"></i> 首页
        </router-link>
        <router-link to="/my/MyFavorite" tag="li">
          <i class="iconfont icon-star"></i> 我的收藏
        </router-link>
        <router-link to="/Report" tag="li">
          <i class="iconfont icon-jubao"></i> 我要举报
        </router-link>
      </ul> -->
    <!-- </mt-popup> -->
    <yd-popup v-model="show" position="bottom" height="40%">
      <p class="title">分享到</p>
      <ul>
        <li>
          <i class="iconfont icon-weixin"></i>
          <p>微信好友</p>
        </li>
        <li>
          <i class="iconfont icon-pengyouquan"></i>
          <p>朋友圈</p>
        </li>
        <li>
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
        </li>
      </ul>
      <yd-button class="btn" @click.native="show = false">取消</yd-button>
    </yd-popup>
    <div class="box">
      <div class="shop-info">
        <p class="name">{{shopmessageList.storeName}}</p>
        <yd-cell-item>
          <yd-rate slot="left" v-model="shopmessageList.score" active-color="#FF7C12" :readonly="true"></yd-rate>
          <span slot="right">{{shopmessageList.score}}分</span>
        </yd-cell-item>
        <p class="address">
          <i class="iconfont icon-dizhi"></i>{{parseFloat(shopmessageList.distance/1000).toFixed(2)}}km | {{shopmessageList.address}} 
          <!-- <a :href="'tel:'+15872365832" class="right"><i class="iconfont icon-dianhua"></i></a>  -->
        </p>
        <p class="state">营业中
          <a :href="'tel:'+ shopmessageList.phone" class="right"><i class="iconfont icon-dianhua"></i></a> 
        
        </p>
      </div>

      <mt-navbar v-model="selected1">
        <!-- <mt-search v-model="value" placeholder="搜索"></mt-search> -->
        <mt-tab-item id="1">宝贝</mt-tab-item>
        <mt-tab-item id="2">优惠</mt-tab-item>
        <mt-tab-item id="3">评价</mt-tab-item>
        <mt-tab-item id="4">店铺信息</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected1">
        <mt-tab-container-item id="1">
          <vueWaterfallEasy :imgsArr="imgsArr" @scrollReachBottom="getData">
            <template slot-scope="props">
              <div class="player_info" @click="togoodsdetails(props.value.id)">
                <p class="title">{{props.value.cName}}</p>
                <p class="money">￥{{props.value.price}}</p>
              </div>
            </template>
          </vueWaterfallEasy>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul class="discounts">
            <li>
              <div class="div">
                <p class="title">满三件送一件</p>
                <span>部分商品可用</span>
                <p class="time">2018.6.23-2018.12.30</p>
              </div>
              <p class="p">
                使用范围：
                <span>部分商品可用</span>
              </p>
              <p class="p">
                限平台：
                <span>全平台</span>
              </p>
            </li>
            <li>
              <div class="div">
                <p class="title">满三件送一件</p>
                <span>部分商品可用</span>
                <p class="time">2018.6.23-2018.12.30</p>
              </div>
              <p class="p">
                使用范围：
                <span>部分商品可用</span>
              </p>
              <p class="p">
                限平台：
                <span>全平台</span>
              </p>
            </li>
            <li>
              <div class="div">
                <p class="title">满三件送一件</p>
                <span>部分商品可用</span>
                <p class="time">2018.6.23-2018.12.30</p>
              </div>
              <p class="p">
                使用范围：
                <span>部分商品可用</span>
              </p>
              <p class="p">
                限平台：
                <span>全平台</span>
              </p>
            </li>
            <li>
              <div class="div">
                <p class="title">满三件送一件</p>
                <span>部分商品可用</span>
                <p class="time">2018.6.23-2018.12.30</p>
              </div>
              <p class="p">
                使用范围：
                <span>部分商品可用</span>
              </p>
              <p class="p">
                限平台：
                <span>全平台</span>
              </p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="evaluate">
            <mt-navbar v-model="selected2">
              <mt-tab-item id="1">全部（230）</mt-tab-item>
              <mt-tab-item id="2">追加（20）</mt-tab-item>
              <mt-tab-item id="3">有图（169）</mt-tab-item>
            </mt-navbar>
            <ul>
              <li>性价比高78</li>
              <li>回头客8</li>
              <li>价格实惠26</li>
              <li>服务热情20</li>
              <li>环境优雅23</li>
            </ul>
          </div>
          <mt-tab-container v-model="selected2">
            <mt-tab-container-item id="1">
              <ul class="lists">
                <router-link to="EvaluationDetails" tag="li">
                  <div class="headimg-box">
                    <img src="../../../assets/img/pic_pl1@2x.png" alt>
                    <div class="star-box">
                      <p class="name">天使</p>
                      <yd-cell-item>
                        <yd-rate
                          slot="left"
                          v-model="evaluateRate"
                          active-color="#FF7C12"
                          :readonly="true"
                        ></yd-rate>
                      </yd-cell-item>
                    </div>
                    <span class="time">2018-05-20</span>
                  </div>
                  <p class="content">
                    可以说是非常满意的一家店啦。是我小男神推荐给我哒，然后今天就抱着过去试了试的心态来了，
                    超出我的意外,衣服质量没得话说性价比超级 超出我的意外,衣服质量没得话说性价比超级
                  </p>
                  <div class="img-box">
                    <img src="../../../assets/img/img_pl1@2x.png" alt>
                    <img src="../../../assets/img/img_pl2@2x.png" alt>
                    <img src="../../../assets/img/img_pl3@2x.png" alt>
                  </div>
                </router-link>
                <li>
                  <div class="headimg-box">
                    <img src="../../../assets/img/pic_pl1@2x.png" alt>
                    <div class="star-box">
                      <p class="name">天使</p>
                      <yd-cell-item>
                        <yd-rate
                          slot="left"
                          v-model="evaluateRate"
                          active-color="#FF7C12"
                          :readonly="true"
                        ></yd-rate>
                      </yd-cell-item>
                    </div>
                    <span class="time">2018-05-20</span>
                  </div>
                  <p class="content">
                    可以说是非常满意的一家店啦。是我小男神推荐给我哒，然后今天就抱着过去试了试的心态来了，
                    超出我的意外,衣服质量没得话说性价比超级 超出我的意外,衣服质量没得话说性价比超级
                  </p>
                  <div class="img-box">
                    <img src="../../../assets/img/img_pl1@2x.png" alt>
                    <img src="../../../assets/img/img_pl2@2x.png" alt>
                    <img src="../../../assets/img/img_pl3@2x.png" alt>
                  </div>
                </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <ul class="lists">
                <router-link to="EvaluationDetails" tag="li">
                  <div class="headimg-box">
                    <img src="../../../assets/img/pic_pl1@2x.png" alt>
                    <div class="star-box">
                      <p class="name">天使</p>
                      <yd-cell-item>
                        <yd-rate
                          slot="left"
                          v-model="evaluateRate"
                          active-color="#FF7C12"
                          :readonly="true"
                        ></yd-rate>
                      </yd-cell-item>
                    </div>
                    <span class="time">2018-05-20</span>
                  </div>
                  <p class="content">
                    可以说是非常满意的一家店啦。是我小男神推荐给我哒，然后今天就抱着过去试了试的心态来了，
                    超出我的意外,衣服质量没得话说性价比超级 超出我的意外,衣服质量没得话说性价比超级
                  </p>
                  <div class="img-box">
                    <img src="../../../assets/img/img_pl1@2x.png" alt>
                    <img src="../../../assets/img/img_pl2@2x.png" alt>
                    <img src="../../../assets/img/img_pl3@2x.png" alt>
                  </div>
                </router-link>
                <li>
                  <div class="headimg-box">
                    <img src="../../../assets/img/pic_pl1@2x.png" alt>
                    <div class="star-box">
                      <p class="name">天使</p>
                      <yd-cell-item>
                        <yd-rate
                          slot="left"
                          v-model="evaluateRate"
                          active-color="#FF7C12"
                          :readonly="true"
                        ></yd-rate>
                      </yd-cell-item>
                    </div>
                    <span class="time">2018-05-20</span>
                  </div>
                  <p class="content">
                    可以说是非常满意的一家店啦。是我小男神推荐给我哒，然后今天就抱着过去试了试的心态来了，
                    超出我的意外,衣服质量没得话说性价比超级 超出我的意外,衣服质量没得话说性价比超级
                  </p>
                  <div class="img-box">
                    <img src="../../../assets/img/img_pl1@2x.png" alt>
                    <img src="../../../assets/img/img_pl2@2x.png" alt>
                    <img src="../../../assets/img/img_pl3@2x.png" alt>
                  </div>
                </li>
              </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <ul class="lists">
                <router-link to="EvaluationDetails" tag="li">
                  <div class="headimg-box">
                    <img src="../../../assets/img/pic_pl1@2x.png" alt>
                    <div class="star-box">
                      <p class="name">天使</p>
                      <yd-cell-item>
                        <yd-rate
                          slot="left"
                          v-model="evaluateRate"
                          active-color="#FF7C12"
                          :readonly="true"
                        ></yd-rate>
                      </yd-cell-item>
                    </div>
                    <span class="time">2018-05-20</span>
                  </div>
                  <p class="content">
                    可以说是非常满意的一家店啦。是我小男神推荐给我哒，然后今天就抱着过去试了试的心态来了，
                    超出我的意外,衣服质量没得话说性价比超级 超出我的意外,衣服质量没得话说性价比超级
                  </p>
                  <div class="img-box">
                    <img src="../../../assets/img/img_pl1@2x.png" alt>
                    <img src="../../../assets/img/img_pl2@2x.png" alt>
                    <img src="../../../assets/img/img_pl3@2x.png" alt>
                  </div>
                </router-link>
                <li>
                  <div class="headimg-box">
                    <img src="../../../assets/img/pic_pl1@2x.png" alt>
                    <div class="star-box">
                      <p class="name">天使</p>
                      <yd-cell-item>
                        <yd-rate
                          slot="left"
                          v-model="evaluateRate"
                          active-color="#FF7C12"
                          :readonly="true"
                        ></yd-rate>
                      </yd-cell-item>
                    </div>
                    <span class="time">2018-05-20</span>
                  </div>
                  <p class="content">
                    可以说是非常满意的一家店啦。是我小男神推荐给我哒，然后今天就抱着过去试了试的心态来了，
                    超出我的意外,衣服质量没得话说性价比超级 超出我的意外,衣服质量没得话说性价比超级
                  </p>
                  <div class="img-box">
                    <img src="../../../assets/img/img_pl1@2x.png" alt>
                    <img src="../../../assets/img/img_pl2@2x.png" alt>
                    <img src="../../../assets/img/img_pl3@2x.png" alt>
                  </div>
                </li>
              </ul>
            </mt-tab-container-item>
          </mt-tab-container>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <ul class="shop-details">
            <li>
              <p>门店服务</p>
              <span v-for="item in shopmessageList.storeServices" :key="item.id">{{item.name}}</span>
              <!-- <span>沙发</span>
              <span>试衣间</span> -->
            </li>
            <li>
              <p>营业时间</p>
              <span>{{shopmessageList.shopTime}}</span>
            </li>
            <li>
              <p>公司简介</p>
              <span>
                {{shopmessageList.description}}
              </span>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import { Popup } from "mint-ui";
import vueWaterfallEasy from "vue-waterfall-easy";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      selected1: "1",
      selected2: "1",
      show: false,
      // value: "",
      popupVisible: false,
      rate: 1,
      evaluateRate: 4,
      imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
      fetchImgsArr: [],//存放每次滚动时下一批要加载的图片的数组
      shopmessageList:{},
      banner:[],
      page:1,
      total:10,
      pages:null
    };
  },
  components: {
    Popup,
    vueWaterfallEasy
  },
    created() {
    // this.imgsArr = this.initImgsArr(0, 10); //初始化第一次（即页面加载完毕时）要加载的图片数据
    // this.fetchImgsArr = this.initImgsArr(10, 20); // 模拟每次请求的下一批新的图片的数据数据
    this.initshop()
    this.initshopgoods()
  },
  methods: {
    // 初始化数据
    initshop(){
      this.url = this.$store.state.url
      let urls = this.url +':8810/store/self/selectById'
      let id = parseInt(this.$route.params.id)
      let lat = localStorage.getItem('storeLat')
      let lng = localStorage.getItem('storeLong')
       let path = this.$route.fullPath
      localStorage.setItem('path',path)
      this.$http.get(urls+'?id='+id +'&storeLat='+lat+'&storeLong='+lng).then(res=>{
        console.log(res)
        if(res.body.code===200){
          this.shopmessageList= res.body.result
          this.banner = res.body.result.banner.split(',')
        }
      })
    },
    //查找店铺商品
    initshopgoods(){
      this.url = this.$store.state.url
      let urls = this.url +':8810/commodity/self/getByStore'
      let id = parseInt(this.$route.params.id)
      this.$http.get(urls+'?storeId='+id+'&page='+this.page+'&total='+this.total).then(res=>{
        console.log(res)
        if(res.body.code===200){
          this.shopgoodsList=res.body.result.list
          this.pages = res.body.result.pages
          let _th = this
          var arr =[]
          for(var i = 0;i<_th.shopgoodsList.length;i++){
            arr.push({
              id:_th.shopgoodsList[i].id,
              src:_th.shopgoodsList[i].cImg != null ?_th.shopgoodsList[i].cImg.split(',')[0]:null,
              cName:_th.shopgoodsList[i].cName,
              price:_th.shopgoodsList[i].price
            })
          }
          this.imgsArr = arr 
          console.log(this.imgsArr)
        }
      })
    },
    //加载更多
    getData(){
      this.page++
      console.log(this.pages)
      console.log(this.page)
      if(this.page > this.pages){
         Toast("没有更多数据");
        return false
      }
      let urls = this.url +':8810/commodity/self/getByStore'
      let id = parseInt(this.$route.params.id)
      this.$http.get(urls+'?storeId='+id+'&page='+this.page+'&total='+this.total).then(res=>{
        console.log(res)
        if(res.body.code===200){
          this.shopgoodsList=res.body.result.list
          // this.pages = res.body.pages
          let _th = this
          var arr =[]
          for(var i = 0;i<_th.shopgoodsList.length;i++){
            arr.push({
              id:_th.shopgoodsList[i].id,
              src:_th.shopgoodsList[i].cImg != null ?_th.shopgoodsList[i].cImg.split(',')[0]:null,
              cName:_th.shopgoodsList[i].cName,
              price:_th.shopgoodsList[i].price
            })
          }
          this.imgsArr = this.imgsArr.concat(arr) 
          console.log(this.imgsArr)
        }
      })
    },
    //点击进入商品详情
    togoodsdetails(index){
       this.$router.push({
            path:'/home/Merchandise/'+index
        })
    },
    //---------------
    popup() {
      this.popupVisible = !this.popupVisible;
    },
    // initImgsArr(n, m) {
    //   //num 图片数量
    //   //初始化图片数组的方法，把要加载的图片装入
    //   var arr = [];
    //   for (var i = n; i < m; i++) {
    //     arr.push({
    //       id: i,
    //       src: `./static/img/${i + 1}.png`,
    //       link: "",
    //       title: "高级轻型羽绒",
    //       money: "149"
    //     }); //src为加载的图片的地址、link为超链接的链接地址、 //info为自定义的图片展示信息，请根据自己的情况自行填写
    //   }
    //   return arr;
    // },

    fetchImgsData() {
      //获取新的图片数据的方法，用于页面滚动满足条件时调用
      // this.imgsArr = this.imgsArr.concat(this.fetchImgsArr); //数组拼接，把下一批要加载的图片放入所有图片的数组中
    }
  },

};
</script>
<style lang="scss" scoped>
.shop{
  width: 7.5rem;
  // height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color:#ff7c12;
//轮播
.mint-swipe {
  height: 4.5rem;
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
//图标
.icon {
  position: fixed;
  top: 0.66rem;
  height: 0.4rem;
  width: 7.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.25rem;
  .iconfont {
    font-size: 0.37rem;
    color: #fff;
  }
  .icon-star {
    margin: 0 0.3rem;
  }
}
//更多
.mint-popup-1 {
  width: 2.3rem;
  border-radius: 0.05rem;
  padding: 0 10px;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  background: #000;
  opacity: 0.8;
  position: absolute;
  top: 1.24rem;
  left: 6.1rem;
  .btn {
    width: 100%;
    padding: 0;
    height: 0.7rem;
    background: #000;
    opacity: 0.8;
    text-align: left;
    color: #999;
  }
  li {
    line-height: 0.7rem;
    font-size: 0.24rem;
    color: #999;
    text-align: left;
    border-bottom: 1px solid #4f4f4f;
    .iconfont {
      font-size: 0.3rem;
      vertical-align: middle;
    }
  }
  :last-child {
    border: none;
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
.mint-popup-1::before {
  display: inline-block;
  width: 0;
  height: 0;
  border: solid transparent;
  border-width: 10px;
  border-bottom-color: #000;
  opacity: 0.8;
  content: "";
  position: absolute;
  top: -20px;
  right: 20px;
}
/deep/ .v-modal {
  display: none;
}
//tab切换部分
.box {
  padding: 0.2rem 0.25rem;
  flex:1;
  .icon-dianhua{
    font-size: 0.3rem;
  }
  .shop-info {
    padding: 0.2rem 0.25rem;
    background: #fff;
    text-align: left;
    border-radius: 0.1rem;
    position: relative;
    .name {
      font-size: 0.3rem;
      color: #333;
    }
    .state {
      width: 1.5rem;
      //height: .42rem;
      line-height: 0.42rem;
      padding-right: 0.1rem;
      text-align: right;
      position: absolute;
      top: 0.28rem;
      right: 0;
      background: url(../../../assets/img/biaoqian.png);
      background-size: 100% 100%;
      color: #fff;
    }
    .yd-cell-item {
      padding: 0;
      height: 0.5rem;
      font-size: 0.26rem;
      /deep/ .yd-cell-right {
        min-height: 0;
        justify-content: flex-start;
        color: #ff7c12;
      }
      /deep/ a {
        font-size: 0.26rem;
      }
    }
    .yd-cell-item:not(:last-child):after {
      height: 0;
    }
    .address {
      color: #333;
      width: 6.7rem;
      overflow:hidden;
        text-overflow:ellipsis; 
        white-space: nowrap;
      .icon-dizhi {
        font-size: 0.26rem;
        color: #999;
      }
      .right{
        float: right;
      }
    }
  }
  //切换tab标题
  .mint-navbar {
    border-radius: 0.1rem;
    margin: 0.2rem 0;
    overflow: hidden;
    .mint-tab-item {
      padding: 0;
      height: 0.88rem;
      /deep/ .mint-tab-item-label {
        line-height: 0.88rem;
        height: 0.7rem;
        font-size: 0.24rem;
        color: #666;
      }
    }
    .mint-tab-item.is-selected {
      border: none;
      /deep/ .mint-tab-item-label {
        width: auto;
        color: #ff7c12;
        display: inline-block;
        border-bottom: 2px solid #ff7c12;
      }
    }
  }
  //tab内容
  /deep/ .mint-tab-container{
    position: absolute;
    width:7rem;
    height: 10rem;
  }
  /deep/ .mint-tab-container-wrap {
    height: 100%;
    //宝贝  瀑布流
    /deep/ .mint-tab-container-item{
      height: 100%;
    .vue-waterfall-easy-container {
      .loading {
     display: none;
    }
      // height: 10rem;
      height: 100%;
      /deep/ .vue-waterfall-easy-scroll {
        overflow-y: auto;
      }
      /deep/ .img-box {
        width: 3.4rem;
        // padding: 0 0 0.2rem !important;
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
          height: 1.14rem;
          text-align: left;
          padding: 0.15rem 0.2rem 0.2rem;
          .title {
            font-size: 0.3rem;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .money {
            font-size: 0.3rem;
            color: #ff010e;
            line-height: 0.5rem;
          }
        }
      }
      // /deep/ .img-box:nth-child(even) {
      //   // left: 3.6rem !important;
      // }
    }
    }
    //优惠
    .discounts {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      background: #fff;
      padding: 0.2rem 0.2rem 0;
      border-radius: 0.1rem;
      li {
        width: 3.2rem;
        height: 3.2rem;
        background: #f9f9f9;
        margin-bottom: 0.2rem;
        .div {
          height: 2.13rem;
          background: url(../../../assets/img/img_yh2@2x.png);
          background-size: 100%;
          color: #fff;
          padding-top: 0.4rem;
          position: relative;
          .title {
            font-size: 0.32rem;
            margin-bottom: 0.05rem;
          }
          .time {
            color: #ffc799;
            position: absolute;
            bottom: 0.25rem;
            width: 100%;
          }
        }
        .p {
          font-size: 0.22rem;
          color: #666;
          text-align: left;
          padding: 0.15rem 0.2rem 0;
          span {
            font-size: 0.22rem;
            color: #999;
          }
        }
      }
    }
    //评价
    .evaluate {
      //height: 2.2rem;
      background: #fff;
      border-radius: 0.1rem;
      padding: 0.2rem;
      .mint-navbar {
        border: 1px solid #ff7c12;
        border-radius: 0.1rem;
        overflow: hidden;
        margin: 0;
        .mint-tab-item {
          padding: 0;
          height: 0.6rem;
          line-height: 0.6rem;
          border-right: 1px solid #ff7c12;
          /deep/ .mint-tab-item-label {
            line-height: 0.6rem;
            height: 0.6rem;
            font-size: 0.24rem;
            color: #ff7c12;
            border: none;
          }
        }
        :last-child {
          border: none;
        }
        .mint-tab-item.is-selected {
          background: #ff7c12;
          /deep/ .mint-tab-item-label {
            color: #fff;
          }
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          padding: 0 0.2rem;
          border: 1px solid #999;
          border-radius: 0.2rem;
          color: #666;
          margin-top: 0.2rem;
          line-height: 0.4rem;
        }
      }
    }
    .lists {
      li {
        // height: 4.13rem;
        background: #fff;
        margin-top: 0.2rem;
        border-radius: 0.1rem;
        
        text-align: left;
        padding: 0.2rem;
        .headimg-box {
          height: 0.8rem;
          display: flex;
          position: relative;
          .star-box {
            //padding-top: 0.1rem;
            .name {
              font-size: 0.3rem;
            }
            .yd-cell-item {
              padding: 0;
              height: 0.4rem;
              /deep/ a {
                font-size: 0.26rem;
              }
              .yd-cell-right {
                display: none;
              }
            }
            .yd-cell-item:not(:last-child):after {
              height: 0;
            }
          }
          .time {
            position: absolute;
            right: 0.2rem;
            top: 0.1rem;
            color: #999;
          }
          img {
            width: 0.8rem;
            margin-right: 0.1rem;
          }
        }
        .content {
          height: 0.96rem;
          text-indent: 0.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          margin: 0.2rem 0;
        }
        .img-box {
          display: flex;
          justify-content: space-between;
          img {
            width: 2.06rem;
            height: 1.6rem;
            border-radius: 0.1rem;
          }
        }
      }
    }
    //店铺信息
    .shop-details {
      padding: 0.3rem 0.2rem;
      background: #fff;
      border-radius: 0.1rem;
      text-align: left;
      li {
        border-bottom: 1px solid #ccc;
        padding-bottom: 0.2rem;
        margin-bottom: 0.3rem;
        p {
          font-size: 0.3rem;
          color: #333;
          margin-bottom: 0.2rem;
        }
        span {
          color: #666;
          margin-right: 0.3rem;
        }
      }
      :last-child {
        border: none;
      }
    }
  }

  //搜索框
  .mint-search {
    width: 1.4rem;
    height: 0.5rem;
    margin: 0.19rem 0 0.19rem 0.2rem;
    border-radius: 0.25rem;
    /deep/ .mint-searchbar {
      padding: 0;
      height: 0.5rem;
      .mint-searchbar-inner {
        height: 100%;
        background: #f4f4f4;
        .mintui-search {
          font-size: 0.3rem;
          margin: 0.02rem 0.1rem 0;
        }
        .mint-searchbar-core {
          font-size: 0.24rem;
          line-height: 0.2rem;
          color: #999;
        }
      }
      .mint-searchbar-cancel {
        display: none;
      }
    }
  }
}
}
</style>


