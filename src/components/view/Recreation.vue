<template>
  <div class="bg">
    <img src="http://suyuanwang.com.cn:9080/resources/2018-12-21/1545389307(1).jpg" alt class="bannerImg">
    <span class="goback" @click="goback"><i class="iconfont icon-fanhui"></i> 返回</span>
    
    <div class="person">
      <img :src="goodsimgs" alt class="headImg">
      <router-link to="/recreation/publish" tag="button" class="releaseBtn">发布</router-link>
      <p class="name">
        {{userName}}
      </p>
      <h6 class="phone"></h6>
    </div>
    <ul class="box">
      <li  v-for="(item,i) in circle" :key="i">
        <img :src="item.header.userImg" alt class="head">
        <div class= "titlebox">
          <p class="id">{{item.header.userName}}</p>
          <p class="time">{{item.content}}</p>
        </div>
        <!-- <br> -->
        <!-- <p class="text">{{item.content}}</p> -->
        <!-- <div class="imgs">
          <span v-for="(img,s) in item.lifeImgs" :key="s">
            <img  :src="img" alt class="showImg">
          </span>
        </div> -->
         <div class = "imgbox">
            <vue-preview :slides="item.arrs" @close="handleClose" class="imgstyle"></vue-preview>   
          <!-- <img v-for="(items,index2) in listthree[index].imgs.split(',')" :key="index2" :src="items" class="imgs" @click="modd(index2)"> -->
          </div>
        <span class="share">
        </span>
        <router-link to="./recreation/comments" tag="span" class="comment">
        </router-link>
        <span class="like">
        </span>
      </li>
      <li class = "addmore" @click="more"><p @click="more"><i class="iconfont icon-shuaxin1"></i>&nbsp;点击加载更多~</p></li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Icons } from "vue-ydui/dist/lib.rem/icons";
Vue.component(Icons.name, Icons);
export default {
  data() {
    return {
      circle:[],
      city:'',
      page:1,
      total:10,
      pages:0,
      signName:'',
      userName:'',
      goodsimgs:''
    };
  },
  created(){
    this.initusermessage()
    this.init();
  },
  methods: {
     initusermessage(){

      this.url = this.$store.state.url
      var urls =  this.url + ':8000/user/self/getUacUserById/'
      this.$http.post(urls+ localStorage.getItem('key')).then(res=>{
        if(res.body.code===200){
          this.signName =res.body.result.signName
          this.userName =res.body.result.userName
          this.goodsimgs = res.body.result.headImg !=null?res.body.result.headImg.split(',')[0]:null
        }
      })
    },
    init(){
       var to=localStorage.getItem('mytoken');
       if(!to){
         this.$router.push({path:'/login'})
       }
      var _this=this;
      this.url = this.$store.state.url
      let urls = this.url + ":8800/lifeCircle/self/api/getCircle"
      this.city = localStorage.getItem('city')
      this.$http
              .get(
                urls +
                  "?cityName=" +
                  this.city +'&page='+this.page+'&total='+this.total
              )
              .then(res => {
                if (res.status === 200) {
                   this.circle =this.circle.concat(res.body.result.list) 
                  this.pages2 = res.body.result.pages
                  let _this = this
                  let arrimgs = []
                  for(var i = 0;i<_this.circle.length;i++){
                      var arr = []
                     _this.circle[i].imgs.split(',').forEach(item=>{
                         let obj ={}
                         obj.src=item,
                         obj.msrc =item,
                         obj.w = 600,
                         obj.h = 400
                         arr.push(obj)
                     })
                     _this.circle[i].arrs = arr
                  }
                }
              });
    },
    handleClose(){

    },
    more(){
      this.page++
      if(this.page>this.pages){
        return false
      }
      this.init()
    },
    goback(){
      this.$router.push({path:'/home'})
    }

  }
};
</script>
<style lang="scss" scoped>
body {
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // height: calc(100% - 1rem);
    // height: 100%;
    background: #ff7c12;
    background-size: 100% 100%;
    // margin-bottom: 1rem;
    .bannerImg {
      width: 100%;
      display: block;
    }
    .goback{
      position: fixed;
      z-index:999;
      top:0.3rem;
      left: 0.3rem;
      font-size: 0.3rem;
      color: #fff;
      .icon-fanhui{
        font-size: 0.24rem;
        color: #fff;
      }
    }
    .person {
      position: relative;
      width: 100%;
      // height: 1.82rem;
      height: auto;
      // background: #fff;
      
      .releaseBtn {
        background: #fff;
        color: #ff7c12;
        border: 0;
        outline: 0;
        width: 1rem;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.28rem;
        float: right;
        margin: 0.5rem;
        border-radius: 0.5rem;
      }
      .headImg {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0.3rem;
        transform: translateY(-50%);
      }
      .name {
        width: 2.5rem;
        text-align: center;
        padding-left: 0.2rem;
        padding-top: 1rem;
        color: #fff;
        font-size: 0.3rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .icon-nvsheng2 {
        color: #ff3dc8;
      }
      .phone {
        text-align: left;
        padding-left: 0.2rem;
        color: #666;
        font-size: 0.24rem;
        padding-bottom: 0.2rem;
      }
    }
    .icon-shezhi1-copy {
      float: left;
      color: #fff;
      font-size: 0.5rem;
      margin: 0.5rem;
    }

    .box {
      background: #fff;
      border-radius: 0.1rem;
      margin: 0.2rem;
      width: calc(100% - 0.4rem);
      height: 11rem;
      overflow-y:auto;
      padding: 0.2rem;
      li {
        text-align: left;
        border-bottom: solid 1px #ff7c12;
        padding-top: 0.2rem;
        .news {
          width: 1.78rem;
          height: 0.58rem;
          background: #999;
          color: #fff;
          border-radius: 0.1rem;
          border: 0;
          outline: 0;
          margin: 0 auto;
          margin-bottom: 0.2rem;
          display: block;
        }
        .head {
          width: 0.8rem;
          height: 0.8rem;
          display: block;
          float: left;
          margin-right: 0.1rem;
        }
        .id {
          color: #35174f;
          font-size: 0.32rem;
          text-align: left;
        }
        .time {
          color: #000;
          font-size: 0.26rem;
          text-align: left;
        }
        .text {
          color: #000;
          font-size: 0.3rem;
          text-align: left;
          padding-bottom: 0.1rem;
          text-indent:2em;
        }
        // .imgs {
        //   width: 100%;
        //   .showImg {
        //     width:2rem;
        //     height: 2rem;
        //     margin: 0.1rem;
        //   }
        // }
       
        .imgbox{
        display: flex;
        flex-wrap: wrap;
        margin-top:0.1rem;
        /deep/ figure{
            width: 2rem;
            height: 2rem;
            float: left;
             margin: 0.1rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 0.1rem;
            }
        }
        /deep/ .pswp__button--share{
            display: none;
        }
    }
        .address {
          color: #999;
          font-size: 0.24rem;
          text-align: left;
          padding: 0.1rem 0;
        }
        .share {
          float: left;
          color: #999;
          font-size: 0.24rem;
        }
        .comment {
          color: #999;
          font-size: 0.24rem;
        }
        .like {
          float: right;
          color: #999;
          font-size: 0.24rem;
        }
        .img {
          width: 100%;
        }
      }
      .addmore{
        text-align: center;
        border: none;
        p{
        font-size: 0.3rem;
        }
      }
    }
    // .more {
    //   color: #fff;
    //   font-size: 0.24rem;
    //   padding: 0.1rem 0 0.3rem 0;
    // }
  }
}
</style>



