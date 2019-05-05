<template>
    <div class="address">
       
        <div class="header">
                 <mt-header title="收货地址" style="background:#FF7C12;">
                    <span  slot="left" @click="goback">
                        <mt-button icon="back"></mt-button>  
                    </span>
                    <mt-button slot="right"></mt-button>
                </mt-header>
        </div>
        <div class="content">
            <div class="list">
                <yd-checkbox-group v-model="checkbox6">
                    <!-- <yd-checkbox :val="index" shape="circle" v-for="(item,index) in list" :key="index">
                        <div>
                            <p>萌先生136****4452</p>
                            <p class="two">湖北省武汉市洪山区城区湖北省武汉市洪山区光谷广场武汉市洪山区珞喻路726号</p>
                            <span v-on:click="edit(index)">编辑</span>
                        </div>
                    </yd-checkbox> -->
                     
                        <div class="messagebox" :val="index" shape="circle" v-for="(item,index) in list" :key="index">
                            <div class="choose1">
                             <yd-checkbox :val="index" shape="circle"></yd-checkbox>
                            </div>
                            <p>{{item.realname}}{{item.mobile}}</p>
                            <p class="two">{{item.address}}{{item.detailAddress}}</p>
                            <span v-on:click="edit">编辑</span>
                        </div>
                    
                    
                </yd-checkbox-group>
                <div class="addadress" @click="addadress">
                    新增收货地址
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {CheckBox, CheckBoxGroup} from 'vue-ydui/dist/lib.rem/checkbox';
export default {
    data () {
        return {
           list:[],
           checkbox6:[],
           
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            let url = this.$store.state.url
           let urls = url + ':8000/binding/find/page'
           let userid = localStorage.getItem('key')
           console.log(userid)
           this.$http.post(urls,{userId:userid}).then(res=>{
               console.log(res)
               if(res.body.code === 200){
                   this.list = res.body.result.list
               }
           })
        },
        addadress(){
            this.$router.push({path:'/my/EditAddress/'+'null'})
        },
        edit(index){
            console.log(123)
             this.$router.push({path:'/my/EditAddress/' + index})
        },
        choose(){
            console.log(123)
            console.log(this.checkbox6)
        },
        goback(){
            this.$router.go(-1)
        },
         getArrDifference(arr1,arr2){
                    return arr1.concat(arr2).filter(function(v, i, arr) {
                        return arr.indexOf(v) === arr.lastIndexOf(v);
                    });
                }
    },
    watch:{
        checkbox6:{
         handler(curVal,oldVal){
             //如果新的数据比老的数据多，选取不同的那个
             //如果新的数据比老的数据少，则为空
            //  console.log(curVal,oldVal)
            //  if(curVal.length <= oldVal.length){
            //      this.checkbox6 = []
            //  }
            // console.log(this.list)
            var c =[]
             if(curVal.length > oldVal.length){
                c = this.getArrDifference(curVal,oldVal)
                this.checkbox6 = c
             }
             //选中地址存放在vuex中
             for(var i = 0;i<this.list.length;i++){
                 if(this.checkbox6.length >0){
                     if(this.checkbox6[0] == i){
                          this.$store.commit('getAdress',this.list[i])
                     }
                 }else{
                     this.$store.commit('getAdress',{})
                 }
             }

　　　　　},
　　　　　deep:true
        }
    }
}
</script>
<style lang="scss" scoped>
.address{
    width: 7.5rem;
    height: 100%;
    background: #FF7C12;
    .header{
        width: 7.5rem;
        // height: 0.88rem;
        // background: pink;
        position: absolute;
        top:0;
        left: 50%;
        transform: translateX(-50%);
        .mint-header{
            height: 0.88rem;
            font-size: 0.24rem;
           /deep/ .mintui-back:before{
                font-size: 0.3rem;
            }
        }
    }
    .content{
        width: 7.5rem;
        height: 100%;
        padding-top:1rem;
        padding-bottom: 0.2rem;
        
        .list{
            width: 7rem;
            height: 100%;
            margin: 0 auto;
            background: #fff;
            border-radius: 0.1rem;
            overflow: hidden;
            position: relative;
            // .yd-checkbox{
            //     display: flex;
            //     padding: 0.2rem;
            //     position: relative;
            //     border-bottom: solid 0.01rem #ccc;
            //     /deep/ .yd-checkbox-icon{
            //         position: absolute;
            //         top:50%;
            //         left: 0.2rem;
            //         transform: translateY(-50%);
            //          color: rgb(255, 124, 18) !important;
            //     }
            //    /deep/ .yd-checkbox-text{
            //         width: 7rem;
            //         text-align: left;
            //         padding-left: 0.6rem;
            //         padding-right: 0.6rem;
                    
            //     }
            //      span{
            //             width: 0.8rem;
            //             height: 0.4rem;
            //             line-height: 0.4rem;
            //             position: absolute;
            //             top:50%;
            //             right: 0rem;
            //             transform: translateY(-50%);
            //             color: #FF7C12;
            //             z-index: 10
            //         }

            // }
            .messagebox{
                width: 7rem;
                padding: 0.2rem 0 0.2rem 0.7rem;
                border-bottom: solid 0.01rem #E6E6E6;
                position: relative;
                .choose1{
                    width: 0.4rem;
                    height: 0.4rem;
                    overflow: hidden;
                    position: absolute;
                    top:50%;
                    left: 0.2rem;
                    transform: translateY(-50%);
                    /deep/ .yd-checkbox-icon{
                        width: 0.4rem !important;
                        height: 0.4rem !important;
                       color: rgb(255, 124, 18) !important; 
                    }
                }
               p{
                   width: 5.6rem;
                   text-align: left;
               } 
               .two{
                  overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical; 
               }
               span{
                   width: 0.8rem;
                   height: 0.4rem;
                   line-height: 0.4rem;
                   position: absolute;
                   top:50%;
                   right: 0.1rem;
                   transform: translateY(-50%);
                   color: #FF7C12;
               }
            }
            .addadress{
                width: 7rem;
                height:0.88rem ;
                position: absolute;
                left: 0;
                bottom: 0;
                line-height: 0.88rem;
                color: #FF7C12;
                background: #F1F1F1;
            }
        }
    }
}

</style>



