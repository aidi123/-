<template>
    <div class="leafletbox" :class="'bgc'+bgi">
        <div class="header">
            <div class="title">
                <div class="title1">
                    <p class="pfrist">{{list.businessName}}</p>
                    <p class="psecond">{{list.title}}</p>
                    <p class="pthird">{{list.description}}</p>
                    <p>活动时间:{{list.activityTime}}</p>
                   
                </div>
                <div class="title2">
                     <p class="pfourth">{{list.commodityDescription}}</p>
                     <p class="pfifth">({{list.commodityName}})</p>
                     <p class="psixth"> {{list.activityInfoList[0].conditions}}</p>
                      <p class="pseventh">{{list.activityInfoList[0].obtain}} </p>
                       <p class="peighth"> {{list.activityInfoList[1].conditions}}</p>
                        <p class="pninth"> {{list.activityInfoList[1].obtain}}</p>
                </div>
            </div>
            <div class="imgbox">
                <img :src="list.imgUrl" alt="">
                <div class="imgone imgdw">
                    <img :src="listarr[0]" alt="">
                </div>
                <div class="imgtwo imgdw" >
                      <img :src="listarr[1]" alt="">
                </div>
                <div class="imgthree">
                      <img :src="listarr[2]" alt="">
                </div>
            </div>
            <div class="iconfont icon-fanhui back" @click="goback">
             </div>
        </div>
        <div class="concent">
            <ul>
                <li v-for="(item,index) in list.commodities" :key="index" v-show="item.imgUrl.length>0?true:false">
                    <div>
                        <img :src="item.imgUrl" alt=""></div>
                    <p>活动价:￥<span class="price">{{item.activityPrice}}</span>
                    原价:<span class="line"> ￥{{item.originalPrice}}</span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="imgsbox">
                <img :src="list.commodityUrl" alt="">  
            </div>
            <div class="messagebox">
                <p class="phone">{{list.mobile}}</p>
                <p class="adress">{{list.address}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
           bgi:'',
           src:'',
           list:{},
           listarr:[]
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.bgi = this.$route.params.id
            if(JSON.parse(sessionStorage.getItem('leafletList'))){
                // console.log(JSON.parse(sessionStorage.getItem('leafletList')))
                this.list = JSON.parse(sessionStorage.getItem('leafletList'))
                if(this.list.detailedImgUrl){
                    this.listarr = this.list.detailedImgUrl.split(',')
                }
            }
           
        },
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    .leafletbox{
        width: 7.5rem;
        // height: 100%;
        background-color:#A21D12; 
        .header{
            width: 100%;
            overflow: hidden;
            .title{
                 width: 3.75rem;
                height: 5.6rem;
                float: left;
                padding:0 0.2rem;
                // background-color: pink;
                p{
                    font-family: NotoSansHans-Regular;
                    font-weight: 400;
                }
                .title1{
                    width: 3.5rem;
                    height:2.6rem;
                    margin-top:0.3rem;
                    border:solid 1px #fff;
                    color:rgba(255,255,255,1);
                    p{
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        -webkit-text-overflow:ellipsis;
                        overflow:hidden;  
                    }
                    .pfrist{
                        font-size: 0.36rem;
                        line-height: 0.7rem;
                    }
                    .psecond{
                        font-size: 0.45rem;
                        line-height: 0.7rem;
                    }
                    .pthird{
                        width: 2.9rem;
                        height: 0.4rem;
                        line-height: 0.4rem;
                        margin: 0.1rem auto;
                        background-color: #fff;
                        color: #A21D12;
                    }
                }
                .title2{
                     p{
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        -webkit-text-overflow:ellipsis;
                        overflow:hidden;  
                    }
                    .pfourth{
                        font-size:0.48rem; 
                        color: #F9EA01;
                    }
                    .pfifth{
                        color:rgba(255,255,255,1);
                    }
                    .psixth,
                    .peighth{
                         color:rgba(255,255,255,1);
                    }
                    .pseventh,
                    .pninth{
                        color: #F9EA01;
                        font-size: 0.38rem;
                    }
                }
            }
            .imgbox{
                width: 3.55rem;
                height: 5.6rem;
                padding-right: 0.2rem;
                float: left;
                // background-color: rebeccapurple;
                position: relative;
                box-sizing: border-box;
                border-left: solid 0.05rem #fff;
                border-right: solid 0.05rem #fff;
                img{
                    width: 100%;
                    position: absolute;
                    top:50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
                .imgdw{
                     width:1.8rem;
                    height: 1.8rem;
                    border-radius: 50%;
                    border: solid 0.05rem #fff;
                    overflow: hidden;
                    position: absolute;
                    bottom: 0;
                    // background-color: pink;
                }
                .imgone{
                    left: -0.3rem;
                }
                .imgtwo{
                   right: -0.15rem;
                }
                .imgthree{
                    width: 1.6rem;
                    height: 1.6rem;
                    border-radius: 50%;
                    border: solid 0.05rem #fff;
                    // background-color: pink;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-53%);
                    overflow: hidden;
                    img{
                          width: 100%;
                    position: absolute;
                    top:50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    }
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
        .concent{
            width: 7.5rem;
            padding: 0.19rem;
            overflow: hidden;
            ul{
                li{
                    float: left;
                    div{
                        width: 3.5rem;
                        height: 2.6rem;
                        padding: 0.05rem;
                        background-color: #fff;
                        overflow: hidden;
                        position: relative;
                        img{
                            width: 100%;
                            position: absolute;
                            top:50%;
                            left: 50%;
                            transform: translate(-50%,-50%); 
                        }
                    }
                    p{
                        line-height: 0.5rem;
                        text-align: left;
                        padding-left: 0.1rem;
                        color: #fff;
                        border: solid 0.01rem #fff;
                        .line{
                            text-decoration:line-through
                        }
                        .price{
                            font-size: 0.35rem;
                        }
                    }
                }
                li:nth-child(2n+1){
                    margin-right: 0.05rem;
                }
            }
        }
        .footer{
            width: 7.5rem;
            height: 1.5rem;
            padding: 0.1rem 0.2rem;
            // background-color: #64110A;
            .imgsbox{
                width: 1.2rem;
                height: 1.2rem;
                background-color: #fff;
                padding: 0.05rem;
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
            .messagebox{
                width: 5.9rem;
                height: 1.2rem;
                float: left;
                p{
                    color: #F9EA01;
                    font-weight:400;
                    text-align: left;
                    padding-left: 0.2rem;
                }
                .phone{
                    font-family:FZDHTJW--GB1-0;
                    font-size: 0.36rem;
                }
                .adress{
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
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
</style>
