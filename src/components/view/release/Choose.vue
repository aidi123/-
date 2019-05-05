<template>
    <div class="choose">
        <mt-header title="选择发布信息">
            <router-link to="/Release" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
        </mt-header>
        <div class="box">
          <router-link to="./Recruitment" tag="div">                  
            <img src="../../../assets/img/icon_zhaopin.png" alt="">
            <p>企业发布</p>              
          </router-link>
          
          <router-link to="./Job" tag="div">    
            <img src="../../../assets/img/icon_qiuzhi.png" alt="">
            <p>个人发布</p>
          </router-link>
           
        </div>
         
    </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1"
    };
  }
};
</script>
<style lang="scss" scoped>
.choose{
  width: 7.5rem;
  height: 100%;
  background: #FF7C12;
  .mint-header {
    height: 0.88rem;
    background: #ff7c12;
    padding: 0 0.25rem;
    //border-bottom: 1px solid #dbd9d9;
    /deep/ .mint-header-title {
      font-size: 0.32rem;
      color: #fff;
    }
    /deep/ .mintui.mintui-back {
      font-size: 0.3rem;
      color: #fff;
    }
  }
  .box {
    padding: 0.35rem 0.25rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    div {
      width: 3.4rem;
      height: 3.2rem;
      padding: .7rem 0;
      background: #fff;
      border-radius: 0.1rem;
      p{
        font-size: .3rem;
        color: #666;
        line-height: .4rem;
      }
      img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        display: block;
        margin: 0 auto .2rem;
      
      }
    }
  }
}


</style>


