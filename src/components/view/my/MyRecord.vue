<template>
  <div class="myrecord">
    <mt-header title="我的金贝" style="background:#FF7C12;">
      <router-link to="../my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button slot="right"></mt-button> -->
    </mt-header>
    <div class="content">
      <div>
        <p>当前拥有</p>
        <p>
          <span>{{nums}}</span> 金贝 &nbsp;&nbsp;
          <span>{{renmingbi}}</span>元 &nbsp;&nbsp;
          <span class="right">100金币=1元</span>
        </p>
        <span class="tixian" @click="tixian">提现</span>
      </div>
      <!-- <div>
                <p>累计收入</p>
                <p> <span>3000</span> 金贝<span>3000</span><span class="right">100金币=1元</span>元</p>
      </div>-->
    </div>
    <div class="listbox">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">金币记录</mt-tab-item>
        <mt-tab-item id="2">提现记录</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <yd-timeline>
            <yd-timeline-item v-for="(item,index) in list" :key="index">
              <!-- <p class="fristp">分享广告</p> -->
              <p style="margin-top: 10px;">{{item.updateTime | formatTime('YMDHMS')}}</p>
              <span class="nums">+{{item.cashWithdrawal}}金币</span>
            </yd-timeline-item>
          </yd-timeline>
            <p class="more" @click="more" v-show="flag">加载更多</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
           <yd-timeline>
            <yd-timeline-item v-for="(item,index) in list1" :key="index">
              <p class="fristp">提现{{item.money/100}}元</p>
              <p v-show="item.status==2">{{item.status==2?item.content:''}}</p>
              <p style="margin-top: 10px;">{{item.createTime | formatTime('YMDHMS')}}</p>
              <span class="nums" :class="item.status==2?'ones':''">{{item.status==0?'待审核':(item.status==1?'提现成功':'提现失败')}}</span>
            </yd-timeline-item>
          </yd-timeline>
            <p class="more" @click="more1" v-show="flag1">加载更多</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { TimeLine, TimeLineItem } from "vue-ydui/dist/lib.rem/timeline";
import { Navbar, TabItem } from "mint-ui";
import { Toast } from 'mint-ui';
// Vue.component(TimeLine.name, TimeLine);
// Vue.component(TimeLineItem.name, TimeLineItem);
export default {
  data() {
    return {
      selected: "1",
      list: [],
      nums: "",
      renmingbi: "",
      pageNum: 1,
      pageSize: 10,
      pages: "",
      flag:true,
      pageNum1:1,
      pageSize1:10,
      pages1:"",
      list1:[],
      flag1:true
    };
  },
  created() {
    this.init();
    this.initAll();
    this.inittixian()
  },
  methods: {
    // 红包(金币)记录
    init() {
      let url = this.$store.state.url;
      let urls = url + ":8000/red/pack/obtain/record";
      let issueUserId = localStorage.getItem("key");
      let mobileNo = localStorage.getItem("loginName");
      this.$http
        .post(urls, {
          issueUserId: issueUserId,
          mobileNo: mobileNo,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        })
        .then(res => {
          if (res.body.code === 200) {
            console.log(res);
            this.list =this.list.concat(res.body.result.list);
            this.pages = res.body.result.pages;
            if(this.pageNum >= this.pages){
              this.flag = false
            }
          }
        });
    },
    //金币总数
    initAll() {
      let url = this.$store.state.url;
      let urls = url + ":8000/red/pack/obtain/all";
      let issueUserId = localStorage.getItem("key");
      let mobileNo = localStorage.getItem("loginName");
      this.$http
        .post(urls, { issueUserId: issueUserId, mobileNo: mobileNo })
        .then(res => {
          if (res.body.code === 200) {
            console.log(res);
            if(res.body.result.virtualCurrency){
              this.nums = res.body.result.virtualCurrency;
            }else{
              this.nums = 0
            }
            this.renmingbi = this.nums / 100;
            //   this.listtwo = res.body.result.list
            //   dataStr
          }
        });
    },
    //提现记录
    inittixian(){
      let url = this.$store.state.url;
      let urls = url + ":8000/withdrawal/page/record";
      let issueUserId = localStorage.getItem("key");
      let mobileNo = localStorage.getItem("loginName");
      this.$http.post(urls,{issueUserId:issueUserId,mobileNo:mobileNo,pageNum:this.pageNum1,pageSize:this.pageSize1}).then(res=>{
        if(res.body.code ===200){
          console.log(res)
          //content 失败原因 status 0待审核 1 提现成功 2 提现失败
          this.list1 = res.body.result.list
          this.pages1 =res.body.result.pages
          if(this.pageNum1 >=this.pages1){
            this.flag1 = false
          }
        }
      })
    },
    tixian(){
       let url = this.$store.state.url;
      let urls = url + ":8000/binding/ali/is"; 
        let userId = localStorage.getItem("key");
      let mobileNo = localStorage.getItem("loginName");
        // 请求后台查看是否有绑定支付宝帐号
        this.$http.post(urls,{userId:userId,mobileNo:mobileNo}).then(res=>{
            console.log(res)
            if(res.body.code===200){
              if(res.body.result==null){
                this.$router.push({path:'/my/bindBank'})
              }else{
                this.$router.push({path:'/my/withdrawal'})
              }
            }
        })
        // 如果有绑定跳到提现页面
        // this.$router.push({path:'/my/withdrawal'})
        // this.$router.push({path:'/my/bindBank'})
        
    },
    //金币记录加载跟多
    more(){
      if(this.pageNum < this.pages){
        this.pageNum ++
        // if(this.pageNum ==this.pages ){
        //   this.flag = false
        // }
        this.init()
      }else{
        Toast('没有更多数据')
      }
    },
     more1(){
      if(this.pageNum1 < this.pages1){
        this.pageNum1 ++
        // if(this.pageNum ==this.pages ){
        //   this.flag = false
        // }
        this.inittixian()
      }else{
        Toast('没有更多数据')
      }
    }

  },

  filters: {
    formatTime: function(value, type) {
      function addZero(val) {
        if (val < 10) {
          return "0" + val;
        } else {
          return val;
        }
      }
      var dataTime = "";
      var data = new Date();
      data.setTime(value);
      var year = data.getFullYear();
      var month = addZero(data.getMonth() + 1);
      var day = addZero(data.getDate());
      var hour = addZero(data.getHours());
      var minute = addZero(data.getMinutes());
      var second = addZero(data.getSeconds());
      if (type == "YMD") {
        dataTime = year + "-" + month + "-" + day;
      } else if (type == "YMDHMS") {
        dataTime =
          year +
          "-" +
          month +
          "-" +
          day +
          " " +
          hour +
          ":" +
          minute +
          ":" +
          second;
      } else if (type == "HMS") {
        dataTime = hour + ":" + minute + ":" + second;
      } else if (type == "YM") {
        dataTime = year + "-" + month;
      }
      return dataTime;
    }
  }
};
</script>
<style lang="scss" scoped>
.myrecord {
  width: 7.5rem;
  height: 100%;
  background-color: #ff7c12;
  .content {
    width: 7rem;
    // height:2.7rem ;
    margin: 0.2rem auto;
    padding: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    div {
      width: 6.6rem;
      height: 1.1rem;
      // background-color: pink;
      position: relative;
      p {
        text-align: left;
        padding-top: 0.1rem;
        span {
          color: #ff7c12;
          font-size: 0.48rem;
        }
        .right {
          // float:right;
          color: #999999;
          font-size: 0.24rem;
          padding-top: 0.2rem;
        }
      }
      .tixian {
        width: 1rem;
        height: 0.6rem;
        line-height: 0.6rem;
        background-color: #ff7c12;
        border-radius: 0.6rem;
        color: #fff;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
  .listbox {
    width: 7rem;
    margin: 0.2rem auto;
    padding: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    text-align: left;
    .mint-navbar {
      display: inline-block;
    }
    .mint-tab-item {
      display: inline-block;
      padding: 0.2rem;
    }
    .mint-tab-item.is-selected {
      border-bottom: solid 0.02rem #ff7c12;
      color: #ff7c12;
    }
    .mint-tab-container-item {
      margin-top: 0.1rem;
    }
    .yd-timeline-item:first-child:before {
      opacity: 0;
    }
    /deep/ .yd-timeline-item .yd-timeline-icon {
      background-color: #ff7c12;
      width: 10px;
      height: 10px;
    }
    p {
      padding-right: 1rem;
    }
    .fristp {
      font-size: 0.3rem;
    }
    .nums {
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      color: #ff7c12;
      font-size: 0.3rem;
    }
    .ones{
      color: #666;
    }
    .more{
      text-align: center;
      padding-top:0.1rem;
    }
  }
}
</style>


