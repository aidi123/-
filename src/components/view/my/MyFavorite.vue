<template>
    <div>
        <mt-header title="我的收藏" style="background:#FF7C12;">
            <router-link to="../my" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <router-link to="./myfavoritemanage" slot="right">
              <mt-button>管理</mt-button>
            </router-link>
        </mt-header>
        <div class="box">
                    <div class="clothes">
                        <div class="introduce">
                            <img src="../../../assets/img/img_wo_sc1@2x.png" alt="">
                            <p class="clothesName">高级轻型羽绒</p>
                            <p class="price">￥159</p>
                        </div>
                        <div class="introduce">
                            <img src="../../../assets/img/img_wo_sc2@2x.png" alt="">
                            <p class="clothesName">精纺美利奴V领针织...</p>
                            <p class="price">￥149</p>
                        </div>
                    </div>    
                    <ul class="recruitment">
                        <li class="list">
                            <div class="info">
                                <div class="left">
                                    <img src="../../../assets/img/pic_wo1@2x.png" alt="">
                                    <div>
                                        <p>涂圆圆</p>
                                        <p> 2018.11.10 </p>
                                    </div>
                                </div>
                                <div class="right">
                                    <p class="money">薪资待遇：2000</p>
                                    <p><i class="iconfont icon-dianhua"></i> 134****1234</p>
                                </div>
                            </div>
                            <div class="content">
                            <p>1. 深入理解iOS和Android等平台的UI设计。</p>
                            <p>2. 具备一定的手绘能力。</p>
                            <p>3. 团队合作力强，善于沟通表达。</p>
                            <p>PS：请在投递该岗位时附带自己的作品。</p>
                          </div>
                            <p class="address">
                              <i class="iconfont icon-dizhi"></i> 
                              <span>武汉</span>
                              <span>江汉区</span>  
                              <span>新华</span>
                            </p>
                        </li>
                    </ul>
                    <div class="stores">
                        <div class="introduce">
                            <img src="../../../assets/img/img_wosc1@2x.png" alt="">
                            <span class="store">万达广场汉北店</span><span class="score">4.9分</span><br>
                            <p class="clothesDetail">万达广场是由全球商业...</p>
                            <span class="address">汉口北</span>&nbsp;&nbsp;<span class="discounts">满减优惠</span><span class="distance">320m</span>
                        </div>
                        <div class="introduce">
                            <img src="../../../assets/img/img_wosc2@2x.png" alt="">
                            <span class="store">优衣库专卖店</span><span class="score">4.9分</span><br>
                            <p class="clothesDetail">男装 SUPIMA COTTON圆...</p>
                            <span class="address">汉口北</span>&nbsp;&nbsp;<span class="discounts">量大八折</span><span class="distance">150m</span>
                        </div>
                    </div>
                    <ul class="job">
                        <li class="list">
                            <div class="info">
                                <div class="left">
                                    <img src="../../../assets/img/pic_wo1@2x.png" alt="">
                                    <div>
                                        <p class="name">权律二</p>
                                        <p>求职岗位：网络营销</p>
                                    </div>
                                </div>
                                <div class="right">
                                    <p class="money">期望薪资：2000</p>
                                    <p><i class="iconfont icon-dianhua"></i> 134****1234</p>
                                </div>                         
                            </div>
                            <p class="address">
                                <i class="iconfont icon-dizhi"></i> 
                                <span>武汉</span>
                                <span>江汉区</span>  
                                <span>新华</span>
                            </p>
                        </li>
                    </ul>
                    <p class="more">没有更多了~</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1",
      url:''
    };
  },
  created () {
    this.initstoreList()
  },
  methods:{
    // 查询门店收藏
    initstoreList(){
      this.url = this.$store.state.url
      let urls = this.url + ':8810/collection/self/selectAll'
      this.$http.get(urls +'?type=store').then(res=>{
        console.log(res)
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-header {
  z-index: 9;
  position: fixed;
  top:0;
  width: 7.5rem;
}
.box {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 0.2rem;
  background: #ff7c12;
  background-size: 100% 100%;
  width: 100%;
  color: #fff;
  .clothes {
    margin-top: 1rem;
    width: 100%;
    .introduce {
      vertical-align:top;
      width: 3.5rem;
      height: auto;
      display: inline-block;
      border-radius: 0.1rem;
      overflow: hidden;
      background: #fff;
      img {
        width: 100%;
      }
      .clothesName {
        color: #333;
        font-size: 0.3rem;
        text-align: left;
        padding: 0.1rem 0.2rem;
      }
      .price {
        color: #ff010e;
        font-size: 0.3rem;
        text-align: left;
        padding: 0 0 0.2rem 0.2rem;
      }
    }
  }
  .stores {
    margin-top: 0.2rem;
    width: 100%;
    .introduce {
      vertical-align:top;
      width: 3.5rem;
      height: auto;
      display: inline-block;
      border-radius: 0.1rem;
      overflow: hidden;
      background: #fff;
      img {
        width: 100%;
      }
      .clothesDetail {
        color: #666;
        font-size: 0.24rem;
        float: left;
        padding-left: 0.2rem;
        padding-bottom: 0.2rem;
        padding-top: 0.05rem;
      }
      .store {
        color: #333;
        font-size: 0.3rem;
        float: left;
        padding-left: 0.2rem;
        padding-top: 0.1rem;
      }
      .score {
        color: #ff010e;
        float: right;
        font-size: 0.3rem;
        padding-right: 0.2rem;
        padding-top: 0.1rem;
      }
      .address {
        padding: 0 0.15rem;
        border-radius: 0.05rem;
        background: #0b9b95;
        color: #fff;
        float: left;
        margin-bottom: 0.2rem;
        margin-right: 0.1rem;
        margin-left: 0.2rem;
      }
      .discounts {
        padding: 0 0.15rem;
        border-radius: 0.05rem;
        background: #ff7c12;
        color: #fff;
        float: left;
        // margin-top: 0.18rem;
      }
      .distance {
        float: right;
        color: #999;
        font-size: 0.24rem;
        margin-right: 0.2rem;
        // padding-top: 0.05rem;
      }
    }
  }
  .recommend {
    line-height: 0.88rem;
    font-size: 0.3rem;
    color: #fff;
  }
  .list {
    display: block;
    border: 1px solid #fff;
    border-radius: 0.1rem;
    padding: 0.24rem;
    margin-top: 0.2rem;
    background: linear-gradient(to top right, #ff7c12, #ff6012);
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
          padding: 0.1rem 0;
          p {
            font-size: 0.24rem;
            color: #fff;
            line-height: 0.42rem;
            text-align: left;
            padding-left: 0.1rem;
          }
        }
        .name {
          font-size: 0.3rem;
        }
      }
      .right {
        //padding: 0.1rem 0;
        .money {
          font-size: 0.3rem;
          margin-bottom: 0.1rem;
        }
        p {
          line-height: 0.42rem;
          text-align: right;
        }
      }
    }
    .content {
      text-align: left;
      margin-top: 0.2rem;
    }
    .address {
      text-align: left;
      margin-top: 0.2rem;
      .iconfont {
        font-size: 0.3rem;
        vertical-align: middle;
      }
    }
  }
}
.more {
  color: #fff;
  font-size: 0.24rem;
  padding: 0.3rem 0;
}
.iconfont {
  font-size: 0.24rem;
}
</style>


