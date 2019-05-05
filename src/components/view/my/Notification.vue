<template>
    <div class="bg">
        <mt-header title="消息提醒" style="background:#FF7C12;">
            <router-link to="./setting" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <ul class="box">
            <li><p class="text">活动提醒</p><mt-switch v-model="value1" class="switch" @click="change1"></mt-switch></li>
            <li class="lis"><p class="text">娱乐吐槽消息提醒</p><p class="tip" v-show="value2===false?true:false">您可能错过重要的消息通知，点击开启</p><mt-switch v-model="value2" class="switch" @click="change2"></mt-switch></li>
            <li><p class="text">同城留言提醒</p><mt-switch v-model="value3" class="switch" @click="change3"></mt-switch></li>
        </ul>
        <ul class="box">
            <li><p class="text">更新提醒</p><mt-switch v-model="value4" class="switch" @click="change4"></mt-switch></li>
        </ul>
    </div>
</template>
<script>
import Vue from "vue";
import { Icons } from "vue-ydui/dist/lib.rem/icons";
import { Switch } from "mint-ui";
Vue.component(Switch.name, Switch);
Vue.component(Icons.name, Icons);
export default {
  data() {
    return {
      value1:true,
      value2:false,
      value3:false,
      value4:true,
    };
  },
  methods: {
    change1(){
      this.value1 =!this.value1
    },
    change2(){
      this.value2 =!this.value2
    },
    change3(){
      this.value3 =!this.value3
    },
    change4(){
      this.value4 =!this.value4
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
    height: 100%;
    background: #ff7c12;
    background-size: 100% 100%;
    .box {
      background: #fff;
      border-radius: 0.1rem;
      margin: 0.5rem auto;
      width: calc(100% - 1rem);
      height: auto;
      padding: 0 0.2rem;
      li {
        height: 0.9rem;
        // line-height: 1.5;
        border-bottom: 1px solid #e5e3e3;
        padding: 0.12rem 0;
        .switch {
          float: right;
          margin-top: -0.6rem;
        }
        .text {
          // position: absolute;
          // left: 0.3rem;
          color: #666;
          font-size: 0.24rem;
          // vertical-align: middle;
          line-height: 2.5;
          // padding-left: 0.2rem;
          // float: left;
          text-align: left;
        }
        .icon-fanhui {
          color: #999;
          float: right;
          font-size: 0.2rem;
          line-height: 2.5;
          transform: rotate(180deg);
          -ms-transform: rotate(180deg); /* IE 9 */
          -moz-transform: rotate(180deg); /* Firefox */
          -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
          -o-transform: rotate(180deg); /* Opera */
        }
        .num {
          color: #999;
          font-size: 0.24rem;
          float: right;
          line-height: 2.5;
          padding-right: 0.1rem;
        }
      }
      .lis {
        height: 1.3rem;
        .tip {
          color: #ff0000;
          font-size: 0.24rem;
          float: left;
        }
        .switch {
          float: right;
          margin-top: -0.4rem;
        }
      }
    }
    .btn {
      width: 6.5rem;
      height: 0.9rem;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 0.1rem;
      font-size: 0.3rem;
      border: 0;
      outline: 0;
      color: #666;
    }
  }
}
</style>



