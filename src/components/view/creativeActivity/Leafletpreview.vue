<template>
  <div class="lctbox" :class="'bgc'+bgi">
    <div class="header">
      <div class="text">
        <p>{{description1}}</p>
        <p>{{description2}}</p>
      </div>
      <div class="upfiles">
        <div>
          <img :src="list.imgUrl" alt>
        </div>
      </div>
      <div class="title">
        <span class="titlesbox"> {{list.title}}</span>
        <p> 活动时间：{{startTime}}-{{startTime}}</p>
      </div>
      <div class="iconfont icon-fanhui back" @click="goback">
      </div>
    </div>
    <div class="content">
      <div class="activecontent">
        <p> {{list.commodityDescription}} </p>
         <span>活动热线：{{list.mobile}}</span>
      </div>
      <div class="message">
        <ul>
          <li v-for="(item,index) in commodities" :key="index" v-show="item != null">
            <div class="fristbox">
              <p>{{item.commoditySupplement.content | mydescription(0) }}</p>
               <p>{{item.commoditySupplement.content | mydescription(1) }}</p>
                <p>{{item.commoditySupplement.content | mydescription(2) }}</p>
                 <p>{{item.commoditySupplement.content | mydescription(3) }}</p>
            </div>
            <div class="secondbox">
              <div>
                <img :src="item.imgUrl" alt>
              </div>
            </div>
            <div class="thirdbox">
              <div>
                <img :src="item.commoditySupplement.imgUrl" alt>
              </div>
            </div>
            <div class="fourthbox">
                 <p>{{item.commodityName |mydescription(0)}}</p>
               <p>{{item.commodityName |mydescription(1)}}</p>
                <p class="priceone"><span>参考价：</span> <span class="numpric">￥{{item.originalPrice}}</span> </p>
                 <p  class="pricetwo"><span>活动价：</span> <span class="numprictwo">￥{{item.activityPrice}}</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
     <div class="footer">
      <div class="imgsbox">
         <img :src="list.commodityUrl" alt>
      </div>
      <div class="messagebox">
          <p class="phone">{{list.mobile}}</p>
          <p class="adress">地址：{{list.address}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list:{},
      description1:'',
      description2:'',
      startTime:'',
      endTime:'',
      commodities:[],
      bgi:''
    }
  },
  created(){
    this.init()
  },
  methods:{
    init(){
       this.bgi = this.$route.params.id;
        if(JSON.parse(sessionStorage.getItem('leafletListtwo'))){
            this.list = JSON.parse(sessionStorage.getItem('leafletListtwo'))
            // console.log(this.list)
             if(this.list.description){
            var arr =this.list.description.split('%2')
            this.description1 = arr[0]
             this.description2 = arr[1]
            }
            if(this.list.activityTime){
                var arr1= this.list.activityTime.split(',')
                // console.log(arr1)
                this.startTime =arr1[0]
                this.endTime = arr1[1]
            }
            let arr = this.list.commodities
            for(var i=0;i<arr.length;i++){
              if(arr[i] != null){
                this.commodities.push(arr[i])
              }
              
            }
        }
    },
    goback(){
        this.$router.go(-1)
    }
  },
  filters:{
    mydescription:function(myInput,num){ 
      if(myInput){
        var arr = myInput.split('%2')
      }
      return arr[num]
    }
  }
};
</script>
<style lang="scss" scoped>
.lctbox {
  width: 7.5rem;
  // height: 100%;
  padding-bottom: 0.2rem;
  // background-color: #351662;
  .header {
    width: 7.5rem;
    height: 11.3rem;
    // background-color: pink;
    // background-image: url(../../../assets/img/lct_bgi1.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    .text {
      height: 2.4rem;
      width: 7.5rem;
      //   padding: 0.2rem;
      margin-top: 1rem;
      p{
          color: #EAAE54;
          font-size: 0.9rem;
      }
     
    }
    .upfiles {
      width: 5.1rem;
      height: 5.1rem;
     //   margin-top:0.6rem;
      background-color: #666666;
      border-radius: 50%;
      margin: 0.3rem auto;
      position: relative;
      overflow: hidden;
      img{
        width: 100%;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .title {
      width: 4.5rem;
      height: 1.4rem;
      margin: 1.1rem auto 0;
     p{
         padding: 0.2rem 0rem;
         font-size: 0.3rem;
         color: #fff;
      }
      .titlesbox{
         padding: 0.1rem 0.25rem;
         font-size: 0.3rem;
         border-radius: 0.1rem;
         background: #EAC154;
         color: #000000;
      }
    }
    .back{
        width:0.7rem;
        height: 0.7rem;
        background: rgba(0,0,0,0.4);
        color: #fff;
        border-radius: 50%;
        position: absolute;
        top:0.2rem;
        left: 0.2rem;
        line-height: 0.7rem;
    }
  }
  .content {
    width: 7.5rem;
    padding: 0.2rem;
    .activecontent {
      width: 7.1rem;
      height: 2.9rem;
      border-radius: 0.1rem;
      background-color: #fff;
      padding: 0.8rem 1.1rem 0.4rem;
      p{
         font-size: 0.32rem; 
         overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        margin-bottom: 0.3rem;
      }
      span{
          padding: 0.1rem 0.2rem;
          background-color: #FF0000;
          border-radius: 0.1rem;
          color: #fff;
      }
    }
  }
  .message {
    width: 7.1rem;
    margin-top: 0.2rem;
    padding: 0.2rem;
    border-radius: 0.1rem;
    background-color: #fff;
    li {
      width: 6.7rem;
      height: 7.1rem;
      .fristbox {
        width: 3.3rem;
        height: 3.4rem;
        padding: 0.8rem 0;
        float: left;
        p{
            font-family:NotoSansHans-Regular;
            color: #9966FF;
            text-align: right;
            line-height: 0.45rem;
            padding-right: 0.2rem;
             overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1;
        }
      }
      .secondbox {
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 50%;
        background-color: #666;
        float: left;
        position: relative;
        overflow: hidden;
        img{
        width: 100%;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
       }
      }
      .thirdbox {
        width: 3.4rem;
        height: 3.4rem;
        margin-top: 0.3rem;
        border-radius: 50%;
        background-color: #666;
        float: left;
        position: relative;
         overflow: hidden;
        img{
        width: 100%;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
       }
      }
      .fourthbox {
        width: 3.3rem;
        height: 3.4rem;
        margin-top: 0.3rem;
        padding: 0.8rem 0;
        // background-color: pink;
        float: left;
        // text-align: right;
         p{
            color: #9966FF;
            text-align:left;
            line-height: 0.45rem;
            padding-left: 0.2rem;
             overflow:hidden; 
            text-overflow:ellipsis;
            display:-webkit-box; 
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1;
        }
        .priceone{
            color: #666;
            .numpric{
                text-decoration: line-through;
            }
        }
        .pricetwo{
            color:#333333;
            .numprictwo{
                color: #FF0000;
                font-size:0.3rem; 
            }
        }
      }
    }
  }
  .footer {
    width: 7.1rem;
    height: 1.5rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    padding: 0.15rem 0.2rem;
    background-color: #fff;
    .imgsbox {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 0.1rem;
    //   background-color: #fff;
    //   padding: 0.1rem;
      float: left;
      position: relative;
      overflow: hidden;
       img{
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
    }
    .messagebox {
      width: 5.5rem;
      height: 1.2rem;
      float: left;
      // background-color: pink;
      text-align: left;
      padding-left: 0.2rem;
      .phone{
          color: #FF0000;
          font-size: 0.3rem;
      }
      .address{
          color: #666;
      }
    }
  }
}
.bgc1{
  background-color: #a21d12;
}
.bgc2{
  background-color: #351662;
}
.bgc3{
  background-color: #C5213A;
}
.bgc4{
  background-color: #043188;
}
.bgc5{
  background-color: #981C0C;
}
.bgi2 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi1.png);
}
.bgi3 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi2.png);
}
.bgi4 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi3.png);
}
.bgi5 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi4.png);
}
.bgi6 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi5.png);
}

</style>


