<template>
    <div class="activebox">
        <mt-header title="共享服务" style="background:#FF7C12;">
            <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="banner">
            <div class="top">
                <img src="../../../assets/img/pulic_cc.png" alt="">
            </div>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">商业板块</mt-tab-item>
            <mt-tab-item id="2">文字信息</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="listbox">
                        <ul>
                            <li v-for="(item,index) in activeList" :key="index" @click="toactive(item.id,item.backGroundId,item.type)">
                                <div class="imgbox"><img :src="item.imgUrl" alt=""></div>
                                <div class="titlebox">
                                    <h3>{{item.title}}</h3>
                                    <p>{{item.description.replace('%2','')}}</p>
                                </div>
                                <div class="hongbao">
                                    <div class="titles">
                                        <p>红包剩</p>
                                        <p>{{item.redPackCount}}个</p>
                                    </div>
                                </div>
                            </li>
                            <p class="more" @click="more">加载更多</p>
                        </ul>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                  敬请期待
                </mt-tab-container-item>
                
        </mt-tab-container>
        <!-- <div class="listbox">
            <ul>
                <li v-for="(item,index) in activeList" :key="index" @click="toactive(item.id,item.backGroundId,item.type)">
                    <div class="imgbox"><img :src="item.imgUrl" alt=""></div>
                    <div class="titlebox">
                        <h3>{{item.title}}</h3>
                        <p>{{item.description.replace('%2','')}}</p>
                    </div>
                </li>
                <p class="more" @click="more">加载更多</p>
            </ul>
        </div> -->
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
    data () {
        return {
           pageSize:10,
           pageNum:1,
           activeList:[],
           total:null,
           selected:'1'
        }
    },
    created(){
        this.initList()
    },
    methods:{
        initList(){
          console.log(this.$store.state.url) 
            let url = this.$store.state.url
            let urls = url+':9988/activity/all/page'
            this.$http.post(urls,{pageSize:this.pageSize,pageNum:this.pageNum}).then(res=>{
                console.log(res)
                if(res.body.code===200){
                    this.activeList =this.activeList.concat(res.body.result.list) 
                    this.total = res.body.result.pages
                }
            })
        },
          // 点击时跳转到
      toactive(activeNum,bgid,type){
        localStorage.setItem('activeNum',activeNum)
        if(type==1){
            this.$router.push({path:'/creativeActivity/saveactivity/'+ bgid})
        }
        if(type==2){
             this.$router.push({path:'/creativeActivity/KanJia/'+ bgid})
        }
        if(type==5){
             this.$router.push({path:'/creativeActivity/leafletonenew/'+ bgid})
        }
        if(type==6){
             this.$router.push({path:'/creativeActivity/LeafletsCreativeNew/'+ bgid})
        }

      },
      more(){
          this.pageNum++
          if(this.pageNum>this.total){
             Toast('没有更多数据')
              return false
          }
          this.initList()
          
      }

    }
}
</script>
<style lang="scss" scoped>
    .activebox{
        height: 100%;
        // overflow: hidden;
        background: #FF7C12;
        .mint-header{
            width: 7.5rem;
            position: fixed;
            z-index: 999;
        }
        .banner{
            width: 7.5rem;
            padding-top:0.88rem;
            .top{
            width: 7rem;
            height:1.4rem;
            margin: 0.1rem auto;
            // padding:0.2rem;
            border-radius: 0.1rem;
            background-color: #fff;  
            img{
                width: 100%;
                height: 100%;
            }
            }
        }
        .mint-navbar{
            width: 7rem;
            height: 0.6rem;
            border-radius: 0.1rem;
            border: solid 0.02rem #fff;
            margin: 0.2rem auto 0;
            overflow: hidden;
        }
        .mint-navbar .mint-tab-item{
            padding: 0;
            line-height: 0.6rem;
            color: #fff;
            background-color: #FF7C12;
        }
        .mint-navbar .mint-tab-item.is-selected{
            padding: 0;
            line-height: 0.6rem;
            border-bottom:none;
            color: #FF7C12;
            background-color: #fff;
            margin: 0;
        }
        /deep/ .mint-tab-item-label{
            line-height: 0.6rem;
        }
        .listbox{
            width: 7.5rem;
            // margin-top:0.2rem;
            padding:0 0.2rem 0.2rem;

            // background-color: #fff;
            li{
                width:7.1rem;
                height: 1.5rem;
                margin: 0.2rem 0;
                border-radius: 0.1rem;
                background-color: #fff;
                padding: 0.1rem;
                .imgbox{
                    width: 1.3rem;
                    height: 1.3rem;
                    float: left;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .titlebox{
                    width:4.3rem ;
                    height: 1.3rem;
                    padding: 0.1rem 0.2rem;
                    // background-color: pink;
                    float: left;
                    h3{
                        font-weight: 900;
                        font-size: 0.3rem;
                        text-align: left;
                         display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                    p{
                        text-align: left;
                       display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        font-size: 0.3rem;
                    }
                }
                .hongbao{
                    width: 1rem;
                    height: 1.3rem;
                    float: right;
                    background-image: url(../../../assets/img/hongbao_fx.png);
                    background-repeat: no-repeat;
                    .titles{
                        width: 100%;
                        margin-top:0.6rem;
                        color: #FF7C12;
                    }
                }
            }
            .more{
                color: #fff;
            }
        }
    }
</style>
