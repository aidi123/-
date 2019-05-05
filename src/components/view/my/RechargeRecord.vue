<template>
  <div class="box">
    <mt-header title="充值记录" style="background:#FF7C12;">
      <router-link to="../my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="listbox">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">充值红包</mt-tab-item>
        <!-- <mt-tab-item id="2">提现记录</mt-tab-item> -->
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <yd-timeline>
            <yd-timeline-item v-for="(item,index) in list" :key="index">
              <p class="fristp">订单号：{{item.orderNo}}</p>
              <p style="margin-top: 10px;">{{item.createTime | formatTime('YMDHMS')}}</p>
              <span class="nums">+{{item.money}}元</span>
            </yd-timeline-item>
          </yd-timeline>
          <p class="more" @click="more" v-show="flag">加载更多</p>
        </mt-tab-container-item>
        <!-- <mt-tab-container-item id="2">2
          
        </mt-tab-container-item> -->
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { TimeLine, TimeLineItem } from "vue-ydui/dist/lib.rem/timeline";
import { Navbar, TabItem } from "mint-ui";
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
      flag:true
    };
  },
  created() {
    this.init();
    // this.initAll();
  },
  methods: {
    // 红包充值记录
    init() {
      let url = this.$store.state.url;
      let urls = url + ":8000/recharge/recharge/page";
      let issueUserId = localStorage.getItem("key");
      // let mobileNo = localStorage.getItem("loginName");
      this.$http
        .post(urls, {
          userId: issueUserId,
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
     //金币记录加载跟多
    more(){
      if(this.pageNum < this.pages){
        this.pageNum ++
        if(this.pageNum ==this.pages ){
          this.flag = false
        }
        this.init()
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
</script>
<style lang="scss" scoped>
.box {
    height: 100%;
    background-color: #FF7C12;
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
    .more{
      text-align: center;
      padding-top:0.1rem;
    }
  }
}
</style>
