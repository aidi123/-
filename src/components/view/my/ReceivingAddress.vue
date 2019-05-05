<template>
    <div class="address">
       
        <div class="header">
                 <mt-header title="收货地址" style="background:#FF7C12;">
                    <router-link to="../my" slot="left">
                        <mt-button icon="back"></mt-button>  
                    </router-link>
                    <mt-button slot="right"></mt-button>
                </mt-header>
        </div>
        <div class="content">
            <div class="list">
                <ul>
                    <li v-for="item in list" :key="item.id">
                        <p>{{item.realname}}{{item.mobile}}</p>
                        <p class="two">{{item.address}}{{item.detailAddress}}</p>
                        <span @click="edit(item.id)">编辑</span>
                    </li>
                    
                </ul>
                <div class="addadress" @click="addadress">
                    新增收货地址
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
           list:[] 
        }
    },
    created(){
        this.initList()
    },
    methods:{
        initList(){
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
             this.$router.push({path:'/my/EditAddress/' + index})
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
        left: 0;
        .mint-header{
            height: 0.88rem;
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
            li{
                width: 7rem;
                padding: 0.2rem;
                border-bottom: solid 0.01rem #E6E6E6;
                position: relative;
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

