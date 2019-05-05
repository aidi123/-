<template>
    <div class="box" :class="'bgc'+ id">
        <header><i class="iconfont icon-fanhui" @click="goback">返回</i></header>
        <div class="bannerImg">
            <img :src="src" alt="">
        </div>
        <div class="content">
            <div class ="title">
                <p class="titlep">{{obj.title}}</p>
                <p>{{obj.describe}}</p>
            </div>
            <div class="newname" :class="'btn'+ id">
                图片新品
            </div>
            <div class="upimg">
                <div class="fristimg">
                    <span class="upimgbox">
                      <img :src="obj.goodsimgs" alt="">
                    </span>
                </div>
                <div class="imgs">
                   <span class="upimgbox">
                      <img :src="obj.goodsimgs2" alt="">
                    </span>
                </div>
                 <div class="imgs">
                   <span class="upimgbox">
                      <img :src="obj.goodsimgs3" alt="">
                    </span>
                </div>
                 <div class="imgs">
                   <span class="upimgbox">
                      <img :src="obj.goodsimgs4" alt="">
                    </span>
                </div>
                 <div class="imgs">
                   <span class="upimgbox">
                      <img :src="obj.goodsimgs5" alt="">
                    </span>
                </div>
                 <!-- <div class="imgs">
                   <span class="upimgbox">
                      <img :src="obj.goodsimgs6" alt="">
                    </span>
                </div>
                 <div class="imgs">
                   <span class="upimgbox">
                      <img :src="obj.goodsimgs7" alt="">
                    </span>
                </div> -->
            </div>
            <!-- =================== -->
            <div>
                <div class ="title box2">
                    <p class="titlep" v-show="obj2.commodityname !=''">{{obj2.commodityname}}</p>
                    <p  v-show="obj2.commodityname !=''">{{obj2.commoditydescribe}}</p>
                </div>
                <div class="newname" :class="'btn'+ id">
                    图片新品
                </div>
                <div class="upimg2">
                    <!-- <div class="fristimg">
                        <span class="upimgbox">
                        <img :src="obj2.goodsimgs8" alt="">
                        </span>
                    </div> -->
                    <div class="imgs">
                         <span class="upimgbox">
                        <img :src="obj2.goodsimgs9" alt="">
                        </span>
                    </div>
                    <div class="imgs">
                         <span class="upimgbox">
                        <img :src="obj2.goodsimgs10" alt="">
                        </span>
                    </div>
                    <div class="imgs">
                         <span class="upimgbox">
                        <img :src="obj2.goodsimgs11" alt="">
                        </span>
                    </div>
                    <div class="imgs">
                     <span class="upimgbox">
                        <img :src="obj2.goodsimgs12" alt="">
                        </span>
                    </div>
                    <!-- <div class="imgs">
                        <span class="upimgbox">
                        <img :src="obj2.goodsimgs13" alt="">
                        </span>
                    </div>
                    <div class="imgs">
                         <span class="upimgbox">
                        <img :src="obj2.goodsimgs14" alt="">
                        </span>
                    </div> -->
                </div>
             </div>
            <!-- ========================= -->
            <div class="newname">商家信息</div>
            <div class="stroemesage">  
                <ul>
                    <li><span>商家名称：</span><p>{{obj.storename}}</p> </li>
                     <li><span>商家地址：</span> <p>{{obj.adress}}</p> </li>
                      <li><span>商家电话：</span> <p>{{obj.phone}}</p> </li>
                </ul>
            </div>
            <!-- <div class="btn">
                <div :class="'bgi'+id" @click="preview">预览</div>
                <div :class="'bgi'+id">保存</div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:'',
            src:'',
            // goodssrc:[],
            obj:{},
            // goodsimgs:'',
            // goodsimgs2:'',
            // goodsimgs3:'',
            // goodsimgs4:'',
            // goodsimgs5:'',
            // goodsimgs6:'',
            // goodsimgs7:'',
        }
    },
    created(){
        // this.id = this.$route.params.id
        this.initmessage()
        this.initList()
    },
    methods:{
        initmessage(){
            this.id =this.$route.params.id
            if(this.id ==1){
                this.src ="http://www.zgstg.cn/2019-01-14/banner.png"  
            }
            if(this.id ==2){
                this.src =  "http://www.zgstg.cn/2019-01-14/banner_xp2.png"
            }
            if(this.id ==3){
                this.src = "http://www.zgstg.cn/2019-01-14/banner_xp3.png"
            }
            if(this.id == 4){
                this.src ="http://www.zgstg.cn/2019-01-14/banner_xp3 (1).png"
            }
            if(this.id ==5){
                this.src =  "http://www.zgstg.cn/2019-01-14/banner_xp3 (2).png"
            }
        },
        initList(){
           this.obj = JSON.parse(sessionStorage.getItem('obj'));
           this.obj2=JSON.parse(sessionStorage.getItem('obj2'));
        //    console.log(this.obj)

        },
        goback(){
            this.$router.go(-1)
        },
        preview(){
            this.$router.push({path:'/creativeActivity/preview/'+ this.id})
        }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        width: 7.5rem;
        padding-bottom: 0.2rem;
        header{
            width: 7.5rem;
            height: 0.88rem;
            padding:0 0.3rem;
            line-height: 0.88rem;
            position: fixed;
            top:0;
            left: 0;
            z-index: 99;
            text-align: left;
            font-size: 0.3rem;
            color: #ccc;
        }
        .bannerImg{
            width: 7.5rem;
            height: 5.6rem;
            margin-bottom: 0.2rem;
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .content{
            width:6.9rem;
            margin: 0 auto;
            .title{
                width:6.9rem ;
                // height: 1.9rem;
                border-radius: 0.1rem;
                background-color: #fff;
                padding: 0rem 0.1rem;
                .titlep{
                   font-size: 0.5rem;
                    font-weight:900; 
                }
             
            }
            .box2{
                margin-top:0.2rem;
            }
            .newname{
                width: 1.6rem;
                height: 0.5rem;
                margin: 0.3rem auto 0.1rem;
                line-height: 0.5rem;
                background-size:100% 100%;
                background-repeat: no-repeat;
                overflow: hidden; 
            }
            .upimg{
                width: 6.9rem;
                height: 10.1rem;
                padding: 0.2rem;
                background-color: #fff;
                .fristimg{
                    width: 6.5rem;
                    height: 4.9rem;
                    background-color:#E4E4E4;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .imgs{
                    width: 3.24rem;
                    height:2.4rem ;
                    background-color: #E4E4E4;
                    border-top:solid 0.01rem #BBBABA;
                    border-left:solid 0.01rem #BBBABA;
                    float: left;
                    position: relative;
                    .upimgbox{
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        span{
                            width: 0.3rem;
                            height: 0.3rem;
                            position: absolute;
                            top: 0.2rem;
                            right: 0.2rem;
                            background: #ccc;
                            border-radius: 50%;
                        }
                    }
                    .upfiles{
                        width:1.2rem;
                        height: 0.5rem;
                        line-height: 0.5rem;
                        background:rgba(0,0,0,0.5);
                        border-radius: 0.5rem;
                        display:block;
                        position: absolute;
                        top:0.2rem;
                        // left: 0.2rem;
                        color: #fff;
                        margin-left: 0.2rem;
                          .hidden {
                            opacity: 0;
                            position: absolute;
                            top: 50%;
                            left: 0;
                            transform: translateY(-50%);
                            height: 0.5rem;
                            width: 1.2rem;
                            display: block;
                            z-index: 5;
                        }
                        .icon-jia{
                            color: #fff;
                            font-size: 0.2rem;
                        }
                    }
                    &:nth-child(2n-1){
                        border-right: solid 0.01rem #BBBABA;
                    }
                }
            }
             .upimg2{
                width: 6.9rem;
                height: 5.2rem;
                padding: 0.2rem;
                background-color: #fff;
                .fristimg{
                    width: 6.5rem;
                    height: 4.9rem;
                    background-color:#E4E4E4;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .imgs{
                    width: 3.24rem;
                    height:2.4rem ;
                    background-color: #E4E4E4;
                    border-top:solid 0.01rem #BBBABA;
                    border-left:solid 0.01rem #BBBABA;
                    float: left;
                    position: relative;
                    .upimgbox{
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        span{
                            width: 0.3rem;
                            height: 0.3rem;
                            position: absolute;
                            top: 0.2rem;
                            right: 0.2rem;
                            background: #ccc;
                            border-radius: 50%;
                        }
                    }
                    .upfiles{
                        width:1.2rem;
                        height: 0.5rem;
                        line-height: 0.5rem;
                        background:rgba(0,0,0,0.5);
                        border-radius: 0.5rem;
                        display:block;
                        position: absolute;
                        top:0.2rem;
                        // left: 0.2rem;
                        color: #fff;
                        margin-left: 0.2rem;
                          .hidden {
                            opacity: 0;
                            position: absolute;
                            top: 50%;
                            left: 0;
                            transform: translateY(-50%);
                            height: 0.5rem;
                            width: 1.2rem;
                            display: block;
                            z-index: 5;
                        }
                        .icon-jia{
                            color: #fff;
                            font-size: 0.2rem;
                        }
                    }
                    &:nth-child(2n-1){
                        border-right: solid 0.01rem #BBBABA;
                    }
                }
            }
            .stroemesage{
                width: 6.9rem;
                height: 1.8rem;
                margin: 0 auto;
                padding: 0.15rem 0.2rem;
                background-color: #fff;
                ul{
                    li{
                        height: 0.5rem;
                        width: 100%;
                        line-height: 0.5rem;
                        text-align: left;
                        display: flex;
                        justify-content: space-between;
                        // background-color: pink;
                        span{
                            width: 1.3rem;
                            color: #333333;
                        }
                        p{
                           flex: 1;
                           height: 0.5rem;
                           font-size: 0.24rem;
                           color: #333;
                            word-break:keep-all;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis; 
                        }
                      
                    }
                }
            }
        }
    }
    // 动态样式
    .bgc1{
        background:#9A37DE;
    }
    .bgc2{
       background: #F8C2B6;
    }
    .bgc3{
        background: #6F94C7;
    }
    .bgc4{
        background: #967DEC;
    }
    .bgc5{
        background: #B50635;
    }
    // .bgi1{
    //     background-image: url(../../../assets/img/img_btn1.png);
    // }
    // .bgi2{
    //     background-image: url(../../../assets/img/img_btn2.png);
    // }
    // .bgi3{
    //     background-image: url(../../../assets/img/img_btn3.png);
    // }
    //  .bgi4{
    //     background-image: url(../../../assets/img/img_btn4.png);
    // }
    //  .bgi5{
    //     background-image: url(../../../assets/img/img_btn5.png);
    // }
    .btn1{
       background-image: url(../../../assets/img/cr_btn1.png);
    }
     .btn2{
       background-image: url(../../../assets/img/cr_btn2.png);
    }
     .btn3{
       background-image: url(../../../assets/img/cr_btn3.png);
    }
     .btn4{
       background-image: url(../../../assets/img/cr_btn4.png);
    }
     .btn5{
       background-image: url(../../../assets/img/cr_btn5.png);
    }
    .border1{
        border: solid 1px #9A37DE;
    }
     .border2{
        border: solid 1px #FF7C7C;
    }
     .border3{
        border: solid 1px #1C3BB0;
    }
     .border4{
        border: solid 1px #601986;
    }
     .border5{
        border: solid 1px #B50635;
    }
     
</style>
