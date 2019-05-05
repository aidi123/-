<template>
  <div class="merchandise">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide" v-for="(item,index) in imgList" :key="index">
        <img :src="item" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="icon">
      <!-- <router-link to="Shop" slot="left"> -->
      <span @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </span>
      <!-- </router-link> -->
      <p>
        <!-- <span style="margin-right: .1rem;">
          <i class="iconfont icon-star"></i>
        </span> -->
        <!-- <span>
          <i class="iconfont icon-gaoji" @click="popup"></i>
        </span>-->
      </p>
    </div>
    <mt-popup v-model="popupVisible" class="mint-popup-1">
      <ul>
        <li>
          <yd-button @click.native="show = true" class="btn">
            <i class="iconfont icon-fenxiang1"></i> 分享
          </yd-button>
        </li>
        <router-link to="../Home" tag="li">
          <i class="iconfont icon-shouye"></i> 首页
        </router-link>
        <router-link to="../my/MyFavorite" tag="li">
          <i class="iconfont icon-star"></i> 我的收藏
        </router-link>
        <router-link to="Report" tag="li">
          <i class="iconfont icon-jubao"></i> 我要举报
        </router-link>
      </ul>
    </mt-popup>
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
      <div class="div">
        <p>{{goodsList.cName}}</p>
        <div class="money-sales">
          <p class="money-box">
            <span style="font-size: .26rem;">￥</span>
            <span style="font-size: .38rem;">{{goodsList.price}}</span>.00
          </p>
          <!-- <p class="sales-box">
            <span>销量：</span>
            <span style="font-size: .3rem; color: #FF8200;">{{goodsList.tradesum}}</span>
          </p>-->
        </div>
      </div>
      <div class="info-box">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">商品信息</mt-tab-item>
          <mt-tab-item id="2">图文详情</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1" class="item1">
            <p>
              <span class="title">上市年份季节</span>
              <span>{{productTpList.season}}</span>
            </p>
            <!-- <p>
              <span class="title">季节</span>
              <span>{{productTpList.season}}</span>
            </p>-->
            <!-- <p>
              <span class="title">厚薄</span>
              <span>{{productTpList.thick}}</span>
            </p>-->
            <p>
              <span class="title">材质成份</span>
              <span>{{productTpList.composition}}</span>
            </p>
            <!-- <p>
              <span class="title">袖长</span>
              <span>{{productTpList.sleeve}}</span>
            </p>-->
            <p>
              <span class="title">货号</span>
              <span>{{productTpList.artNunber}}</span>
            </p>
            <!-- <p>
              <span class="title">领型</span>
              <span>{{productTpList.collarType}}</span>
            </p>-->
            <p>
              <span class="title">颜色</span>
              <span>{{productTpList.color}}</span>
            </p>
            <p>
              <span class="title">尺码</span>
              <span>{{productTpList.size}}</span>
            </p>
            <!-- <p>
              <span class="title">面料</span>
              <span>{{productTpList.fabric}}</span>
            </p>-->
          </mt-tab-container-item>
          <mt-tab-container-item id="2" class="item2">
            <img v-for="(item,index) in infoImg" :key="index" :src="item" alt>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <div class="xuanxiang">
      <div class="one">
        <span @click="toback">
          <div class="iconfont icon-icon_home_n"></div>
          <p>商店</p>
        </span>
        <router-link to="/ShoppingCart" tag="span">
          <div class="iconfont icon-gouwuche1">
            <span class="nums">{{numsbox}}</span>
          </div>
          <p>购物车</p>
        </router-link>
      </div>
      <div class="two">
        <span class="one" @click="joincar">加入购物车</span>
        <span class="two" @click="buy">立即购买</span>
      </div>
    </div>
    <div class="goodsbox" :class="flags">
      <div class="topboxs">
        <div class="imgboxs">
          <img :src="infoImg[0]" alt>
        </div>
        <div class="titlebox">
          <p class="titlep1">￥
            <span>{{goodsList.price}}</span>.00
          </p>
          <p>规格：{{specifications}}</p>
        </div>
      </div>
      <div class="twoboxs">
        <p>规格</p>
        <span
          v-for="(item,index) in color"
          :key="index"
          :class="chose==index?'isselected':''"
          @click="choseprofrom(index)"
        >{{item}}</span>
        <!-- <span>天蓝色</span>
            <span>天蓝色</span>
             <span>天蓝色</span>
              <span>天色</span>
               <span>天蓝色</span>
        <span>天色</span>-->
      </div>
      <div class="twoboxs">
        <p>尺码</p>
        <span
          v-for="(item,index) in productsize"
          :key="index"
          :class="chose2==index?'isselected':''"
          @click="choseprofrom2(index)"
        >{{item}}</span>
      </div>
      <div class="numboxs">
        <div>数量</div>
        <div class="inpuenums">
          <span @click="reduce">-</span>
          <input type="text" disabled="disabled" v-model="number">
          <span @click="add">+</span>
        </div>
      </div>
      <div class="goumai">
        <span @click="determine">确定</span>
      </div>
      <span class="colse iconfont icon-x" @click="colsed"></span>
    </div>
    <div class="adressbox" :class="flags2">
      <div class="chooseadress">选择地址</div>
      <div>
        <p>您还没有添加收货地址</p>
        <span class="addadress" @click="Editaddress">新增收货地址</span>
      </div>
       <span class="colse iconfont icon-x" ></span>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      selected: "2",
      popupVisible: false,
      show: false,
      swiperOption: {
        autoplay: {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          autoplay: 3000 //自动循环时间
        }, //可选选项，自动滑动
        speed: 2000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        loop: true, //循环切换
        // scrollbar: ".swiper-scrollbar",
        observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          type: "fraction", //分页器形状
          clickable: true //点击分页器的指示点分页器会控制Swiper切换
        }
      },
      url: "",
      goodsList: {},
      imgList: [],
      productTpList: {},
      infoImg: [],
      flags: "",
      number: 1,
      color: [],
      productsize: [],
      chose: 0,
      chose2: 0,
      specifications: "",
      colors: "红色",
      productsizes: "s",
      types: 0, //1购物车，2 立即购买
      numsbox: 0,
      flags2:''
    };
  },
  created() {
    this.initList();
    this.init();
  },
  methods: {
    popup() {
      this.popupVisible = !this.popupVisible;
    },
    //初始化数据
    initList() {
      this.url = this.$store.state.url;
     //   let urls = this.url + ":8810/commodity/self/getCommodity";
      let urls = this.url +":8000/busin/goods/one"
      this.$http.post(urls,{id:this.$route.params.id}).then(res => {
          console.log(res)
        if (res.body.code === 200) {
          this.goodsList = res.body.result;
          this.imgList = res.body.result.cimg.split(",");
          this.productTpList = JSON.parse(res.body.result.productTp);
          this.infoImg =
            res.body.result.cinfoImg === null
              ? null
              : res.body.result.cinfoImg.split(",");
          if (this.productTpList.color) {
            if (this.productTpList.color.indexOf("，") != -1) {
              this.color = this.productTpList.color.split("，");
            }
            if (this.productTpList.color.indexOf(",") != -1) {
              this.color = this.productTpList.color.split(",");
            }
          }
          if (this.productTpList.size) {
            if (this.productTpList.size.indexOf("，") != -1) {
              this.productsize = this.productTpList.size.split("，");
            }
            if (this.productTpList.size.indexOf(",") != -1) {
              this.productsize = this.productTpList.size.split(",");
            }
          }
          this.specifications =
            this.color[0] + " " + this.productsize[0] + " " + "1";
          localStorage.setItem('adress', this.specifications)
        }
      });
    },
    //查询购物车订单条数
    init() {
      let url = this.$store.state.url;
      let urls = url + ":8000/shop/car/count";
    
      let id = localStorage.getItem("key");
      this.$http.post(urls, { userId: id }).then(res => {
        console.log(res);
        if (res.body.code === 200) {
          this.numsbox = res.body.result;
        }
      });
    },
    goback() {
      //  let path = localStorage.getItem('path')
      //  console.log(path)
      //  this.$router.go(-1)
       this.$router.push({
        path:'/home/flashsales'
      });
    },
    joincar() {
      if (localStorage.getItem("key")) {
        //  Toast('弹出')
        this.flags = "shows";
        this.types = 1;
      } else {
        Toast("请先登录");
      }
    },
    buy() {
      // 判断是否有地址
      if (localStorage.getItem("key")) {
        //  Toast('弹出')
        this.flags = "shows";
        this.types = 2;
      } else {
        Toast("请先登录");
      }
    },
    colsed() {
      this.flags = "";
    },
    // 选中
    choseprofrom(index) {
      // console.log(index)
      this.chose = index;
      this.colors = this.color[index];
    },
    choseprofrom2(index) {
      // console.log(index)
      this.chose2 = index;
      this.productsizes = this.productsize[index];
    },
    //减少
    reduce() {
      if (this.number <= 1) {
        this.number = 1;
      } else {
        this.number--;
      }
    },
    //添加
    add() {
      this.number++;
    },
    //加入购物车 立即购买
    determine() {
      // 商品id 单价 总价 颜色 尺码 数量
      // 点击确定，判读是否有登录
      let url = this.$store.state.url;
      let urls = url + ":8000/shop/car/save";
      let obj = {};
      let arr = [];
      let obj1 = {};
      // console.log(this.$route.params.id )
      obj1.commodityId = this.$route.params.id;
      obj1.count = this.number;
      obj1.commodityPrice = this.goodsList.price;
      arr[0] = obj1;
      obj.userId = localStorage.getItem("key");
      obj.commodities = arr;
      localStorage.setItem('path',this.$route.fullPath)
      if (this.types == 1) {
        this.$http.post(urls, obj).then(res => {
          if (res.body.code === 200) {
            this.numsbox += 1;
            this.flags = false;
          }
        });
      }
      if (this.types == 2) {
        //传相关数据信息到后台，返回编号，
        // 判断地址是否为空，如果为空，弹出添加地址的选项
        let url = this.$store.state.url;
        let urls = url + ":8000/binding/find/page";
        let userid = localStorage.getItem("key");
        //  console.log(userid)
        this.$http.post(urls, { userId: userid }).then(res => {
          //  console.log(res)
          if (res.body.code === 200) {
            if (res.body.result.list.length > 0) {
              //如果不为空，发送请求 立即购买接口
              let id = this.goodsList.businGoodsId
              this.$router.push({
                path: "/my/BuyOrder/" + id
              });
              this.flags = '';
            } else {
              //  弹出添加按钮
              this.flags = '';
              this.flags2 = 'shows2'
              console.log(123);
            }
          }
        });
      }
    },
    colsed2(){
      this.flags2 = ''
    },
    Editaddress(){
      this.$router.push({path:'/my/EditAddress/'+'null'})
      this.flags2 = ''
    },
    toback() {
      let path = localStorage.getItem("path");
      this.$router.push({ path: path });
    }
  },
  watch: {
    colors: function(newval) {
      this.specifications =
        newval + " " + this.productsizes + " " + this.number;
        localStorage.setItem('adress',this.specifications)
    },
    productsizes: function(newval) {
      this.specifications = this.colors + " " + newval + " " + this.number;
      localStorage.setItem('adress',this.specifications)
    },
    number: function(newval) {
      this.specifications =
        this.colors + " " + this.productsizes + " " + newval;
        localStorage.setItem('adress',this.specifications)
    }
  }
};
</script>
<style lang="scss" scoped>
.merchandise {
  width: 7.5rem;
  height: 100%;
  background-color: #ff7c12;
  .swiper-slide {
    img {
      display: block;
      width: 7.5rem;
      height: 5.63rem;
    }
  }
  .swiper-pagination {
    width: 0.78rem;
    height: 0.36rem;
    line-height: 0.36rem;
    background: rgba(0, 0, 0, 0.36);
    border-radius: 0.18rem;
    font-size: 0.24rem;
    color: #fff;
    margin-left: 6.47rem;
    /deep/ .swiper-pagination-current {
      color: #ff7c12;
    }
  }
  .icon {
    position: fixed;
    top: 0.6rem;
    height: 0.6rem;
    width: 7.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.25rem;
    z-index: 10;
    span {
      display: inline-block;
      width: 0.6rem;
      height: 0.6rem;
      line-height: 0.6rem;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
    }
    .iconfont {
      font-size: 0.35rem;
      color: #fff;
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
    top: 1.4rem;
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
  .box {
    padding: 0.2rem 0.25rem;
    margin-bottom: 0.98rem;
    background: #ff7c12;
    .div {
      padding: 0.2rem;
      border-radius: 0.1rem;
      background: #fff;
      text-align: left;
      p {
        font-size: 0.28rem;
        color: #333;
      }
      .money-sales {
        display: flex;
        justify-content: space-between;
        .money-box {
          color: #ff2d2d;
        }
        .sales-box {
          font-size: 0.24rem;
          color: #999;
        }
      }
      // margin: 0.2rem 0;
    }
    .info-box {
      margin-top: 0.2rem;
      padding: 0.3rem 0.2rem;
      background: #fff;
      border-radius: 0.1rem;
      .mint-navbar {
        border: 1px solid #ff7c12;
        border-radius: 0.1rem;
        overflow: hidden;
        .mint-tab-item {
          padding: 0;
          height: 0.6rem;
          line-height: 0.6rem;
          /deep/ .mint-tab-item-label {
            line-height: 0.6rem;
            font-size: 0.24rem;
            color: #ff7c12;
          }
        }
        .mint-tab-item.is-selected {
          background: #ff7c12;
          border: none;
          /deep/ .mint-tab-item-label {
            color: #fff;
          }
        }
      }
      .item1 {
        padding: 0.2rem 0.15rem 0;
        p {
          display: flex;
          color: #666;
          margin-bottom: 0.3rem;
          .title {
            color: #333;
            width: 1.5rem;
            margin-right: 0.3rem;
            text-align: left;
          }
        }
        :last-child {
          margin: 0;
        }
      }
      .item2 {
        padding-top: 0.3rem;
        height: 10rem;
        overflow-y: auto;
        img {
          width: 100%;
        }
      }
    }
  }
  .xuanxiang {
    width: 7.5rem;
    height: 0.98rem;
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
    div {
      height: 0.98rem;
    }
    .one {
      width: 3rem;
      float: left;
      // background-color: yellowgreen;
      display: flex;
      justify-content: space-around;
      span {
        width: 1.5rem;
        height: 0.98rem;
        color: #999999;
        // display: inline-block;
        div {
          width: 0.5rem;
          height: 0.5rem;
          margin: 0.05rem auto;
          line-height: 0.5rem;
          position: relative;
          font-size: 0.4rem;

          // .icon-gouwuche1{

          // }
          .nums {
            padding: 0 0.1rem;
            width: 0.4rem;
            height: 0.22rem;
            border-radius: 0.06rem;
            line-height: 0.2rem;
            position: absolute;
            top: 0rem;
            right: -0.2rem;
            background: red;
            font-size: 0.2rem;
            color: #fff;
          }
        }
      }
    }
    .two {
      width: 4.5rem;
      float: left;
      background-color: yellow;
      span {
        width: 2.25rem;
        height: 0.98rem;
        line-height: 0.98rem;
        color: #fff;
        font-size: 0.3rem;
      }
      .one {
        background-color: #ff7c12;
      }
      .two {
        background-color: #ff010e;
      }
    }
  }
  .goodsbox {
    width: 7.5rem;
    height: 8.7rem;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: -8.7rem;
    z-index: 999;
    transition: all 0.6s;
    // animation:mymove 5s infinite;
    .topboxs {
      width: 7.1rem;
      height: 1.7rem;
      margin: 0.2rem;
      .imgboxs {
        width: 2.2rem;
        height: 1.7rem;
        background: #fff;
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
      .titlebox {
        width: 4.9rem;
        height: 1.7rem;
        float: left;
        .titlep1 {
          color: red;
          span {
            font-size: 0.3rem;
          }
        }
        p {
          text-align: left;
          line-height: 0.8rem;
          padding-left: 0.2rem;
        }
      }
    }
    .twoboxs {
      width: 7.1rem;
      margin: 0.2rem;
      text-align: left;
      p {
        line-height: 0.6rem;
      }
      span {
        width: 1.2rem;
        height: 0.4rem;
        display: inline-block;
        margin: 0.1rem;
        border-radius: 0.08rem;
        background: #f0f0f0;
        color: #666666;
        line-height: 0.4rem;
        text-align: center;
      }
      .isselected {
        background: #ff7c12;
        color: #fff;
      }
    }
    .numboxs {
      width: 7.1rem;
      margin: 0.2rem;
      display: flex;
      justify-content: space-between;
      line-height: 0.4rem;
      .inpuenums {
        background: #ccc;
        span {
          width: 0.5rem;
          height: 0.4rem;
          display: inline-block;
          background: #ccc;
        }
        input {
          width: 0.6rem;
          height: 0.4rem;
          background: #ccc;
          border: none;
          outline: none;
          text-align: center;
        }
      }
    }
    .goumai {
      width: 7.5rem;
      height: 1rem;

      position: absolute;
      left: 0;
      bottom: 0;
      span {
        width: 7.1rem;
        height: 0.8rem;
        line-height: 0.8rem;
        display: inline-block;
        border-radius: 0.8rem;
        margin: 0 auto;
        font-size: 0.3rem;
        color: #fff;
        background: red;
      }
    }
    .colse {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      color: #999999;
    }
  }
  .adressbox{
    width: 7.5rem;
    height: 2.6rem;
    position: fixed;
    left: 0;
    bottom: -2.6rem;
    background: #FFF;
    transition: all 0.6s;
    .chooseadress{
      width: 7.5rem;
      height:0.8rem ;
      background: #EBEBEB;
      text-align: center;
      line-height: 0.8rem;
    }
    p{
      text-align: center;
      font-size: 0.3rem;
      line-height: 0.8rem;
      color: #999999
    }
    .addadress{
      display: inline-block;
      padding: 0.1rem 0.3rem;
      border: solid 0.01rem #ff7c12;
      border-radius: 0.1rem;
      line-height: 0.5rem;
      color: #ff7c12;
    }
    .colse {
      
      width: 0.5rem;
      height: 0.5rem;
      line-height: 0.5rem;
      border-radius: 50%;
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      color: #fff;
      font-size: 0.2rem;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  .shows {
    transform: translateY(-8.7rem);
  }
  .shows2 {
    transform: translateY(-2.6rem);
  }
}
</style>


