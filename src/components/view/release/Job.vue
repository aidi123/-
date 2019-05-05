<template>
    <div class="job">
        <mt-header title="个人发布">
            <router-link to="./Choose" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right" @click="quxiao">取消</mt-button>
        </mt-header>
        <div class="box">
          <div class="div">
            <yd-cell-group title="描述">
              <yd-cell-item>
                  <yd-textarea v-model="description" slot="right" placeholder="100字以内" maxlength="100"></yd-textarea>
              </yd-cell-item>
            </yd-cell-group>
            <ul>
              <!-- <li class="hope">
                <label>期望薪资</label>
               <span><input v-model="minPrice" type="text" placeholder="请输入薪资">
               -<input v-model="maxPrice" type="text" placeholder="请输入薪资">
               </span> 
              </li> -->
              <!-- <li>
                <label>求职岗位</label>
                <input v-model="title" type="text" placeholder="请输入求职岗位">
              </li> -->
              <li>
                <label>联系电话</label>
                <input v-model="mobile" type="text" placeholder="请输入电话">
              </li>
              <li>
                <i class="iconfont icon-dizhi"></i>
                <span>{{cityName}}</span>
              </li>
            </ul>
            <button @click="addJobHuting">立即发布</button>
          
          </div>
          
           
        </div>
         
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      id: "13",
      // seekerName: "小李",
      area: "",
      minPrice: "",
      maxPrice: "",
      mobile: "",
      title: "",
      category: 6,
      seeker: "1",
      // cityCode: "310000",
      cityName: "武汉市",
      status: 0,
      description: ""
     
    };
  },
  methods:{
    addJobHuting(){
      var to=localStorage.getItem('mytoken');
      if(!to){
        this.$router.push({
            path: "/login"
            });
        return;
      }
      this.cityName = localStorage.getItem('city')
      this.area = localStorage.getItem('district')
      var data={
        companyName:"",
        description:this.description,
        maxPrice:this.maxPrice,
        minPrice:this.minPrice,
        mobile:this.mobile,
        cityName:this.cityName,
        area:this.area,
        title:this.title,
        category:11
      };
      this.url = this.$store.state.url
      let urls = this.url + ':8073/jobHuting/self/addJobHunting'
      console.log(data)
      this.$http
              .post(
                urls 
                ,data
              )
              .then(res => {
                console.log(res);
                if (res.status === 200) {
                  Toast('发布成功')
                  this.$router.push({
                    path: "/release"
                  });
                }
              });
    },
    quxiao(){
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="scss" scoped>
.job{
  width: 7.5rem;
  height: 100%;
  background: #ff7c12;
  .mint-header {
    height: 0.88rem;
    background: #ff7c12;
    padding: 0 0.25rem;
    //border-bottom: 1px solid #dbd9d9;
    /deep/ .mint-header-title {
      font-size: 0.32rem;
      color: #fff;
    }
    /deep/ .mint-button-text {
      font-size: 0.24rem;
    }
    /deep/ .mintui.mintui-back {
      font-size: 0.3rem;
      color: #fff;
    }
  }
  .box {
    padding: 0.2rem 0.25rem;
    background: #ff7c12;
    .div {
      background: #fff;
      // height: 7rem;
      padding: 0.2rem;
      border-radius: 0.1rem;
      .yd-cell-box{
        margin-bottom: 0;

      }
      /deep/ .yd-cell-title{
        font-size: .24rem;
        color: #666;
        padding: .15rem 0;
      }
      // /deep/ .yd-cell-title:after{
      //   height: 0;
      // }
      .yd-cell-item{
        padding: 0;
        /deep/ textarea{
          font-size: .24rem;
          color: #333;
        }
      }
      .hope{
        display: flex;
        justify-content: space-between;
        input{
          width: 1.5rem;
        }
      }
      li{
        line-height: .88rem;
        text-align: left;
        border-bottom: 1px solid #e4e4e4;
        label{
          color: #666;
          margin-right: .2rem;
        }
        input{
          border: none;
          font-size: .24rem;
          color: #333;
        }
        span{
          color: #666;
        }
        .iconfont{
          font-size: .3rem;
          color: #999;
          vertical-align: middle;
        }
      }
      button{
        width: 100%;
        height: .88rem;
        background: #ff7c12;
        font-size: .3rem;
        color: #fff;
        border: none;
        border-radius: .1rem;
        margin: .8rem 0;
      }
    }
  }
}
</style>


