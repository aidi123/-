<template>
  <div class="shopcart">
    <div class="header">
      <mt-header title="购物车">
        <mt-button icon="back" slot="left" @click="goback"></mt-button> 
        <span slot="right" @click="chage">
          <mt-button v-show="flag">管理</mt-button>
          <mt-button v-show="!flag">完成</mt-button>
        </span>
      </mt-header>
    </div>
    <div class="textbox">
      <yd-checkbox-group v-model="checkbox6">
        <!-- <yd-checkbox val="2" shape="circle">啊啊啊</yd-checkbox> -->
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <yd-checkbox :val="index" shape="circle">{{item.storeName}}</yd-checkbox>
            <div class="messagebox">
              <div class="imgbox">
                <img :src="item.cimg" alt>
              </div>
              <div class="textbox2">
                <p class="texttitle">{{item.cname}}</p>
                <p class="size">红色，M码</p>
                <div class="nums">
                  <div class="price">
                    <span>￥{{item.price}}</span>
                  </div>
                  <div class="numsbox">
                    <span @click="reduce(index)">-</span>
                    <input type="text" disabled="disabled" v-model="item.count">
                    <span @click="add(index)">+</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </yd-checkbox-group>
    </div>
    <div class="footers">
      <span class="one" @click="checkAll">
        <yd-checkbox v-model="checkbox1" shape="circle">全选</yd-checkbox>
      </span>
      <span class="two">
        <span v-show="flag">合计：
          <span class="price" >￥{{totalprice}}</span>
        </span>
        <span class="pay" v-show="flag" @click="settlement">结算 ({{totalnums}})</span>
        <span class="pay" v-show="!flag" @click="deletes">删除</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox6: [],
      nums: 1,
      checkbox1: false,
      list: [],
      flag: true,
      c:0
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 数量加减
    reduce(index) {
      if (this.list[index].count <= 1) {
        this.list[index].count = 1;
      } else {
        this.list[index].count--;
      }
    },
    add(index) {
      this.list[index].count++;
    },
    // 全选反选
    checkAll() {
      var arr = [];
      if (this.checkbox1 == false) {
        for (var i = 0; i < this.list.length; i++) {
          arr.push(i);
        }
        this.checkbox6 = arr;
      } else if (this.checkbox1 == true) {
        this.checkbox6 = [];
      }
    },
    //管理，结算删除
    chage() {
      this.flag = !this.flag;
    },
    init() {
      let url = this.$store.state.url;
      let urls = url + ":8000/shop/car/find/all";
      let userid = localStorage.getItem("key");
      this.$http.post(urls, { userId: userid }).then(res => {
        console.log(res);
        if (res.body.code === 200) {
          this.list = res.body.result;
        }
      });
    },
    // 结算
    settlement(){
      console.log(123)
    },
    // 删除
    deletes(){
      //点击删除时获取选中的id
       let ids = []
       let index = []
       for(var i = 0;i<this.list.length;i++ ){
       if(this.checkbox6.length == 0){
         return false
       }else{
          for(var j = 0;j<this.checkbox6.length;j++){
              // console.log(i,this.checkbox6[j])
              if(this.checkbox6[j] == i){
                ids.push(this.list[i].carCommodityId)
                index.push(i)
              }   
        }
       }
      }
      console.log(index)
      let url = this.$store.state.url
      let urls = url +':8000/shop/car/delete'
      console.log(ids,index)
      var _this = this
      this.$http.post(urls,{ids:ids}).then(res=>{
        if(res.body.code ===200){
          //已选中的（数组数字）数字为索引 ，删除对应索引的 数组列表
          function c(arr, arr2) {
            return arr.reduce((prev, cur, index)=>{
              let [idx, list] = prev;
              idx.indexOf(index) == -1 && list.push(cur);
              return prev
            }, [arr2, []]).pop()
          }
          _this.list = c(_this.list,index)
          _this.checkbox6 = []
        }
      })
      
    },
    goback(){
      // console.log(123)
      this.$router.go(-1)
    }

  },
  // mounted:{
  //   jsuan(){
  //     // this.c = 0
  //     for(var i = 0;i<this.list.length;i++ ){
  //       this.c += this.list[i].count
  //     }
  //   }
  // },
  watch: {
    checkbox6: {
      handler(curVal, oldVal) {
        if (curVal.length == this.list.length) {
          this.checkbox1 = true;
        } else {
          this.checkbox1 = false;
        }
      },
      deep: true
    }
  },
  computed:{
    totalnums:function (){
      let c = 0
       for(var i = 0;i<this.list.length;i++ ){
        // console.log(this.checkbox6)
       if(this.checkbox6.length == 0){
         c = 0
       }else{
          for(var j = 0;j<this.checkbox6.length;j++){
              // console.log(i,this.checkbox6[j])
              if(this.checkbox6[j] == i){
                c += this.list[i].count
              }   
        }
       }
      }
      return c
    },
    totalprice:function (){
      let c = 0
       for(var i = 0;i<this.list.length;i++ ){
        // console.log(this.checkbox6)
       if(this.checkbox6.length == 0){
         c = 0
       }else{
          for(var j = 0;j<this.checkbox6.length;j++){
              // console.log(i,this.checkbox6[j])
              if(this.checkbox6[j] == i){
                c += this.list[i].count * this.list[i].price
              }   
        }
       }
      }
      return c.toFixed(2)
    }
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
    padding-bottom: 2rem;
    // background: yellow;
    overflow: hidden;
    ul{
      width:7.5rem;
      float: left;
      overflow-y: auto;
      li {
        width: 7rem;
        margin: 0.1rem auto;
        border-radius: 0.1rem;
        padding: 0.2rem;
        background: #fff;
        text-align: left;
        /deep/ .yd-checkbox-icon {
          color: rgb(255, 124, 18) !important;
        }

        .messagebox {
          width: 6.2rem;
          height: 1.8rem;
          margin-top: 0.1rem;
          border-top: solid 0.01rem #ccc;
          // background-color: pink;
          padding-top: 0.2rem;
          margin-left: 0.4rem;
        }
        .imgbox {
          width: 1.2rem;
          height: 1.2rem;
          background: goldenrod;
          float: left;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .textbox2 {
          width: 5rem;
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
            color: #999999;
          }
          .nums {
            width: 5rem;
            height: 0.4rem;
            line-height: 0.4rem;
            //   background-color: green;
            position: absolute;
            bottom: 0rem;
            left: 0;
            display: flex;
            justify-content: space-between;
            padding-left: 0.2rem;
            .price {
              color: #ff2d2d;
            }
            .numsbox {
              width: 1.8rem;
              height: 0.4rem;
              line-height: 0.4rem;
              background: #f0f0f0;
              span {
                width: 0.5rem;
                height: 0.4rem;
                display: inline-block;
                text-align: center;
              }
              input {
                width: 0.6rem;
                height: 0.4rem;
                //   background-color: pink;
                text-align: center;
                outline: none;
                border: none;
              }
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


