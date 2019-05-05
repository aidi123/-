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
                                <div class="textbox1">
                                    <p class="title">{{item.cName}}</p>
                                    <!-- <div class="description">
                                     <p>{{item.description}}</p>
                                    </div> -->
                                    <p class="price">￥ <span>{{item.price}}</span></p>
                                  
                                </div>
                            </li>
                            <li class="more" @click="addmore"> <p>加载更多</p></li>
                        </ul>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <ul>
                            <li v-for="item in storeList" :key="item.id" @click="tostore(item.id)">
                                <div class="imgbox">
                                    <img :src="item.imgs.split(',')[0]" alt="">
                                </div>
                                <div class="textbox">
                                    <p>{{item.storeName}} <span class="score">{{item.score}} 分</span> </p>
                                    <!-- <h3>{{item.storeName}}</h3> -->
                                    <div class="description">
                                        {{item.description}}
                                        <!-- <p class="moretext">{{item.description}}</p> -->
                                    </div>
                                    <p class="red">{{item.activity.length !=0?item.activity[0].name:null}}111</p>
                                    <p class="ptext"><span class="address">{{item.address}}</span><span>{{parseInt(parseInt(item.distance)/1000).toFixed(2)}}km</span></p>
                                </div>
                            </li>
                             <li class="more" @click="addmore2"> <p>加载更多</p></li>
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
        if(this.cName ==""){
            return false
        }
        if(ids=='h'){
            //主页
            if(this.selected==='1'){      
                let urls = this.url +':8810/commodity/self/commodityWithStore'
                console.log(urls,this.storeLong,this.storeLat)
                this.$http.post(urls,{cityName:this.cityName,commodityName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong}).then(res=>{
                    console.log(res)
                    if(res.body.code===200){
                        this.productList=this.productList.concat(res.body.result.list)
                        this.pages = res.body.result.pages
                        console.log(this.productList)
                    }
                })
           }else{
                let urls = this.url +':8810/store/self/searchStore'
                 this.$http.post(urls,{cityName:this.cityName,storeName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong}).then(res=>{
                    console.log(res)
                    if(res.body.code===200){
                        this.storeList=this.storeList.concat(res.body.result.list) 
                        this.pages = res.body.result.pages
                        console.log(this.storeList)
                    }
                })
           }
        }
        if(ids==='a'){
            if(this.selected=='2'){
                // 活动页店铺
                console.log(123456)
                let urls = this.url +':8810/store/self/storeWithActivity'
                this.$http.post(urls,{cityName:this.cityName,storeName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong}).then(res=>{
                    console.log(res)
                    if(res.body.code===200){
                         this.storeList=this.storeList.concat(res.body.result.list) 
                         this.pages = res.body.result.pages
                        console.log(this.storeList)
                    }
                })
            }else{
                // 活动页商品
                let urls = this.url+':8810/commodity/self/commodityWithActivity'
                this.$http.post(urls,{cityName:this.cityName,commodityName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong}).then(res=>{
                    console.log(res)
                    if(res.body.code===200){
                        this.productList=this.productList.concat(res.body.result.list)
                        this.pages = res.body.result.pages
                        console.log(this.productList)
                    }
                })
            }
        }
        if(ids==='w'){
            // 批发商店
            if(this.selected=='2'){
                let urls = this.url +':8810/store/self/storeByType'
                this.$http.post(urls,{cityName:this.cityName,storeName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong,typeId:2}).then(res=>{
                    console.log(res)
                     if(res.body.code===200){
                         this.storeList=this.storeList.concat(res.body.result.list) 
                         this.pages = res.body.result.pages
                        // console.log(this.storeList)
                    }
                })
            }else{
                 let urls = this.url+':8810/commodity/self/commodityWithActivity'
                this.$http.post(urls,{cityName:this.cityName,commodityName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong,typeId:2}).then(res=>{
                    console.log(res)
                    if(res.body.code===200){
                       this.productList=this.productList.concat(res.body.result.list)
                       this.pages = res.body.result.pages
                        console.log(this.productList)
                    }
                })
            }
        }
        if(ids === "g"){
            //零售
            if(this.selected=='2'){
                let urls = this.url +':8810/store/self/storeByType'
                    this.$http.post(urls,{cityName:this.cityName,storeName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong,typeId:0}).then(res=>{
                        console.log(res)
                         if(res.body.code===200){
                            this.storeList=this.storeList.concat(res.body.result.list) 
                            this.pages = res.body.result.pages
                            // console.log(this.storeList)
                        }
                    })
            }else{
                 let urls = this.url+':8810/commodity/self/commodityWithActivity'
                this.$http.post(urls,{cityName:this.cityName,commodityName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong,typeId:0}).then(res=>{
                    console.log(res)
                    if(res.body.code===200){
                        this.productList=this.productList.concat(res.body.result.list)
                        this.pages = res.body.result.pages
                        console.log(this.productList)
                    }
                })
            }
        }
        if(ids ==='b'){
            //批发商
            if(this.selected=='2'){
                let urls = this.url +':8810/store/self/storeByType'
                 this.$http.post(urls,{cityName:this.cityName,storeName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong,typeId:1}).then(res=>{
                        console.log(res)
                         if(res.body.code===200){
                            this.storeList=this.storeList.concat(res.body.result.list) 
                            this.pages = res.body.result.pages
                            // console.log(this.storeList)
                        }
                    })
            }else{
                let urls = this.url+':8810/commodity/self/commodityWithActivity'
                this.$http.post(urls,{cityName:this.cityName,commodityName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong,typeId:1}).then(res=>{
                    console.log(res)
                    if(res.body.code===200){
                        this.productList=this.productList.concat(res.body.result.list)
                        this.pages = res.body.result.pages
                        // console.log(this.productList)
                    }
                })
                
            }
        }
        if(ids==="n"){
            //新店推荐
            if(this.selected=="2"){
                 let urls = this.url +':8810/store/self/newStore'
                 this.$http.post(urls,{cityName:this.cityName,storeName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong,typeId:0}).then(res=>{
                        console.log(res)
                         if(res.body.code===200){
                            this.storeList=this.storeList.concat(res.body.result.list) 
                            this.pages = res.body.result.pages
                            // console.log(this.storeList)
                        }
                    })
            }else{
                  let urls = this.url+':8810/commodity/self/commodityWithNew'
                this.$http.post(urls,{cityName:this.cityName,commodityName:this.cName,pageNum:this.pageNum,pageSize:this.pageSize,storeLat:this.storeLat,storeLong:this.storeLong,typeId:1}).then(res=>{
                    console.log(res)
                    if(res.body.code===200){
                        this.productList=this.productList.concat(res.body.result.list)
                        this.pages = res.body.result.pages
                        // console.log(this.productList)
                    }
                })
            }
        }
        
    },
    //失去焦点
    changeCount(){
        this.url =this.$store.state.url;
        this.storeLat = localStorage.getItem('storeLat')
        this.storeLong =localStorage.getItem('storeLong')
        this.cityName =localStorage.getItem('city')
        this.productList = []
        this.storeList = []
        this.sousou()
    },
    // 点击搜索
    sousoumessage(){  
        this.productList = []
        this.storeList = []
        this.sousou()
    },
    cancel(){
        // 点击取消
        this.cName ='',
        this.productList = []
        this.storeList = []
        // this.sousou()
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
    },
    // 加载更多
    addmore(){
        this.pageNum++
        console.log(this.pageNum)
        if(this.pageNum >this.pages){
            return false
        }
        this.sousou()
    },
    addmore2(){
        this.pageNum++
        if(this.pageNum >this.pages){
            return false
        }
        this.sousou()
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
             this.pageNum = 1
             this.productList = []
              this.storeList = []
              this.sousou()
          }
          if(val==2){
            //    this.url =this.$store.state.url;
            //     this.storeLat = localStorage.getItem('storeLat')
            //     this.storeLong =localStorage.getItem('storeLong')
            //     this.cityName =localStorage.getItem('city')
              this.pageNum = 1
              this.productList = []
        this.storeList = []
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
        position: fixed;
        top:0;
        z-index:99;
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
        padding-top:1rem;
        background: #ff7c12;
        .mint-navbar{
            border-radius: 0.05rem;
            // border: solid 0.03rem rgba(255,255,255,1);
            padding: 0.02rem;
        }
        .mint-navbar .mint-tab-item{
            height: 0.5rem;
            padding: 0;
            line-height: 0.5rem;
            
            
           /deep/ .mint-tab-item-label{
                line-height: 0.5rem;
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
           height: 14.3rem;
           overflow-y:auto;
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
               .textbox1{
                   width:4.5rem;
                  height: 2.2rem;
                  float: left;
                  padding: 0.2rem 0;
                  position: relative;
                  .title{
                      font-size: 0.3rem;
                      text-align: left;
                      padding:0 0.2rem;
                        text-overflow:ellipsis; 
                        // background: greenyellow;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        text-align: left;
                  }
                  .price{
                      position: absolute;
                      bottom: 0.1rem;
                      left: 0;
                      padding: 0.2rem;
                      color: red;
                      span{
                          font-size: 0.3rem;
                          
                      }
                      
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
                    .score{
                        float: right;
                    }
                    span{
                        color: red;
                    }
                  }
                  .red{
                      margin-top:0.1rem;
                      color: red;
                  }
                  .description{
                     height: 0.7rem;
                     width: 100%;
                     padding:0.1rem 0.3rem;
                    //  background-color: pink; 
                    text-overflow:ellipsis; 
                        // background: greenyellow;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        text-align: left;
                        
                  }
                  .moretext{
                      width: 4.5rem;
                       text-overflow:ellipsis; 
                        // background: greenyellow;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                  }
                  .ptext{
                      display: flex;
                      justify-content: space-between;
                      margin-top: 0.1rem;
                      .address{
                        // width: 50%;
                      
                       overflow:hidden;
                        text-overflow:ellipsis; 
                        // background: goldenrod;
                        white-space: nowrap;
                        color: #000;
                      }
                  }
               }    
           }
           .more{
               width: 6.7rem;
               height: 0.6rem;
               background-color: #ff7c12;
               line-height: 0.6rem;
               font-size: 03rem;
               color: #fff;
           }
       }
    }
}
</style>

