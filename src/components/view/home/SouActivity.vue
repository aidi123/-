<template>
    <div class="sousou">
        <div class="header">
            <router-link to="/home" class="iconfont icon-fanhui" tag="span"></router-link>
            <span>
            <i class="iconfont icon-sousuo" @click="sousoumessage"></i>
            <input type="text" placeholder="搜索" v-model="cName" @keyup.enter="changeCount">
            </span>
            <span class="sp" @click="cancel">取消</span>
        </div>
        <div class="listbox">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">商品</mt-tab-item>
                <mt-tab-item id="2">店铺</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <ul>
                            <li v-for="(item,index) in productList" :key="index" @click="togoods(item.id)">
                                <div class="imgbox">
                                    <img :src="item.cImg" alt="">
                                </div>
                                <div class="textbox">
                                    <h3>{{item.cName}}</h3>
                                    <div class="description">
                                     <p>{{item.description}}</p>
                                    </div>
                                    <p> <span>￥{{item.price}}</span></p>
                                  
                                </div>
                            </li>
                        </ul>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <ul>
                            <li v-for="item in storeList" :key="item.id" @click="tostore(item.id)">
                                <div class="imgbox">
                                    <img :src="item.imgs.split(',')[0]" alt="">
                                </div>
                                <div class="textbox">
                                    <h3>{{item.storeName}}</h3>
                                    <div class="description">
                                        <p class="moretext">{{item.description}}</p>
                                    </div>
                                    <p>{{item.activity.length !=0?item.activity[0].name:null}}</p>
                                    <p class="ptext"><span>{{item.commercialStreet}}</span><span>{{parseInt(parseInt(item.distance)/1000).toFixed(2)}}km</span></p>
                                </div>
                            </li>
                        </ul>
                       
                    </mt-tab-container-item>
                   
              </mt-tab-container>
         
              
        </div>
    </div>
</template>
<script>
// import { Cell } from 'mint-ui';
export default {
    data(){
        return{
            selected:'1',
            url:'',
            pageNum:1,
            pageSize:10,
            storeLat:'',
            storeLong:'',
            storeName:'',
            cName:'',
            productList:[],
            storeName:'',
            storeList:[]
        }
    },
    created(){
        // this.cName='佳洁士'
        this.sousou()
    },
   methods:{
    // 封装搜索商品
    sousou(){
        console.log(this.selected)
        this.url =this.$store.state.url;
        this.storeLat = localStorage.getItem('storeLat')
        this.storeLong =localStorage.getItem('storeLong')
        this.cityName =localStorage.getItem('city')
        // 获取url的id值，1 home跳转，2活动跳转，3批发跳转，
        let ids = this.$route.params.id
        // this.$route.params.id
        // console.log(ids)
        //     if(this.selected==='1'){      
        //         let urls = this.url +':8810/commodity/self/commodityWithStore'
        //         console.log(urls,this.storeLong,this.storeLat)
        //         this.$http.post(urls,{cityName:this.cityName,commodityName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong}).then(res=>{
        //             console.log(res)
        //             if(res.body.code===200){
        //                 this.productList=res.body.result.list
        //                 console.log(this.productList)
        //             }
        //         })
        //    }else{
        //         let urls = this.url +':8810/store/self/searchStore'
        //          this.$http.post(urls,{cityName:this.cityName,storeName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong}).then(res=>{
        //             console.log(res)
        //             if(res.body.code===200){
        //                 this.storeList=res.body.result.list
        //                 console.log(this.storeList)
        //             }
        //         })
        //    }
        // if(ids==='s'){
            if(this.selected=='2'){
                // 活动页店铺
                let urls = this.url +':8810/store/self/storeWithActivity'
                this.$http.post(urls,{cityName:this.cityName,commodityName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong}).then(res=>{
                    console.log(res)
                    if(res.body.code===200){
                       this.storeList=res.body.result.list
                    }
                })
            }
        // }
        
    },
    //失去焦点
    changeCount(){
        this.url =this.$store.state.url;
        this.storeLat = localStorage.getItem('storeLat')
        this.storeLong =localStorage.getItem('storeLong')
        this.cityName =localStorage.getItem('city')
        this.sousou()
    },
    // 点击搜索
    sousoumessage(){  
        this.sousou()
    },
    cancel(){
        // 点击取消
        this.cName = '',
         this.sousou()
        // this.$router.push({
        //     path:'/home'
        // })
    },
    //点击跳到对应店铺
    tostore(index){
        console.log(index)
        this.$router.push({
            path:'/home/shop/'+index
        })
    },
    //点击跳到对应商品
    togoods(index){
        this.$router.push({
            path:'/home/Merchandise/'+index
        })
    }

   },
   watch:{
      selected(val){
          console.log(val)
          if(val==1){
            //    this.url =this.$store.state.url;
            //     this.storeLat = localStorage.getItem('storeLat')
            //     this.storeLong =localStorage.getItem('storeLong')
            //     this.cityName =localStorage.getItem('city')
              this.sousou()
          }
          if(val==2){
            //    this.url =this.$store.state.url;
            //     this.storeLat = localStorage.getItem('storeLat')
            //     this.storeLong =localStorage.getItem('storeLong')
            //     this.cityName =localStorage.getItem('city')
              this.sousou()
          }
      } 
   }

}
</script>

<style lang="scss" scoped>
.sousou{
    width: 7.5rem;
    .header{
        width: 7.5rem;
        height: 0.88rem;
        padding: 0 0.4rem;
        text-align: left;
        input{
            width: 5.7rem;
            height: 0.5rem;
            margin: 0.19rem 0;
            border-radius: 0.25rem;
            padding-left: 0.7rem;
            outline: none;
            border: none;
            background-color: #fff;
        }
        .sp{
            float: right;
            line-height: 0.88rem;
        }
        span{
            position: relative;
            color: #fff;
            i{
                position: absolute;
                top:-0.1rem;
                left: 0.15rem;
                font-size: 0.3rem;
                padding: 0.1rem;
                color: #999;
            }
        }
    }
    .listbox{
        width: 7.5rem;
        margin-top:0.2rem;
        padding: 0 0.4rem;
        .mint-navbar{
            border-radius: 0.1rem;
            border: solid 0.03rem rgba(255,255,255,1);
        }
        .mint-navbar .mint-tab-item{
            height: 0.88rem;
            padding: 0;
            line-height: 0.88rem;
            
            
           /deep/ .mint-tab-item-label{
                line-height: 0.88rem;
            }
        }
        .mint-navbar .mint-tab-item.is-selected{
            border-bottom:none;
            color:#fff; 
            background-color: #ff7c12;
            font-size: 0.3rem;
        }
        /deep/ .mint-tab-item-label{
            font-size: 0.3rem;
        }
       .mint-tab-container{
           margin-top:0.05rem;
       } 
       ul{
           width: 6.7rem;
           li{
               width: 6.7rem;
               height: 2.2rem;
               background-color: #fff;
               margin: 0.2rem 0;
            //    padding: 0.2rem 0;
            //    border-bottom: solid 0.05rem #ccc;
            //    margin-bottom: 0.1rem;
               .imgbox{
                   width: 2.2rem;
                   height: 2.2rem;
                   float: left;
                   img{
                       width: 100%;
                       height: 100%;
                       display: block;
                       margin: auto 0;
                   }
               }   
               .textbox{
                  width:4.5rem;
                  height: 2.2rem;
                  float: left;
                  padding: 0.2rem 0;
                  h3{
                    //   color: red;
                    font-size: 0.3rem;
                    text-align:left;
                    padding-left: 0.3rem;
                    padding-right: 0.4rem;
                    line-height: 0.5rem;
                     overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                  }
                  p{
                      padding-left: 0.3rem;
                      padding-right: 0.4rem;
                      width:4.5rem;
                      text-align: left;
                    //   line-height: 0.5rem;
                      font-size: 0.24rem;
                      color: #999;
                      overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    span{
                        color: red;
                    }
                  }
                  .description{
                     height: 0.7rem;
                     width: 100%;
                    //  background-color: pink; 
                  .moretext{
                      width: 4.5rem;
                      overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                  }
                  }
                  .ptext{
                      display: flex;
                      justify-content: space-between;
                  }
               }    
           }
       }
    }
}
</style>

