<template>
  <div class="editaddress">
    <div class="header">
      <mt-header title="收货地址" style="background:#FF7C12;">
        <router-link to="/my/ReceivingAddress" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right"></mt-button>
      </mt-header>
    </div>
    <div class="content">
      <div class="from">
        <mt-field label="收货人" placeholder="请填入收货人" v-model="username"></mt-field>
        <mt-field label="联系方式" placeholder="请填入电话" type="tel" v-model="phone"></mt-field>
        <yd-cell-group>
          <yd-cell-item arrow>
            <span slot="left">所在地区：</span>
            <input
              slot="right"
              type="text"
              @click.stop="show2 = true"
              v-model="model2"
              readonly
              placeholder="请选择收货地址"
            >
          </yd-cell-item>
        </yd-cell-group>

        <yd-cityselect
          v-model="show2"
          ref="cityselectDemo"
          :callback="result2"
          :items="district"
          provance="湖北省"
          city="武汉市"
          area="武昌区"
        ></yd-cityselect>
        <mt-field label="详细地址" placeholder="珞喻路726号" type="tel" v-model="adress"></mt-field>
        <yd-checklist v-model="checklist1">
          <yd-checklist-item val="1">
            <div style="height: 50px;line-height: 50px;">设为默认收货地址</div>
          </yd-checklist-item>
        </yd-checklist>
        <div class="submit" @click="submitadress">确定</div>
        <div class="delete" @click="deleteadress">删除地址</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Field, Toast } from "mint-ui";
import { CitySelect } from "vue-ydui/dist/lib.rem/cityselect";
import District from "ydui-district/dist/gov_province_city_area_id";
import { CheckList, CheckListItem } from "vue-ydui/dist/lib.rem/checklist";
export default {
  data() {
    return {
      username: "",
      phone: "",
      show2: false,
      model2: "湖北省 武汉市 武昌区",
      district: District,
      adress: "",
      checklist1: []
    };
  },
  created(){
      if(this.$route.params.id != 'null'){
          this.init()
      }
  },
  methods: {
    init(){
        let url = this.$store.state.url
        let urls = url + ':8000/binding/one' 
        if(this.$route.params.id != 'null'){
           this.$http.post(urls,{id:this.$route.params.id}).then(res=>{
               console.log(res)
               if(res.body.code ===200){
                   this.username =res.body.result.realname
                   this.phone = res.body.result.mobile
                   this.model2 = res.body.result.address
                   this.adress =res.body.result.detailAddress
                   if(res.body.result.status ==2 || res.body.result.status==0){
                       this.checklist1 =[]
                   }else{
                       this.checklist1= ['1'] 
                       console.log(this.checklist1)
                   }
               }
           })
        }
    },
    result2(ret) {
      this.model2 = ret.itemName1 + " " + ret.itemName2 + " " + ret.itemName3;
    //   console.log(this.model2);
    },
    submitadress() {
        // console.log(this.checklist1)
      let url = this.$store.state.url;
      let urls = url + ":8000/binding/save";
      let id = this.$route.params.id
     //   console.log(this.phone);
      if (this.username == "" || this.username == undefined) {
        Toast("请输入收货人姓名");
        return false;
      }
      if (this.phone == "" || this.phone == undefined) {
        Toast("请输入电话号码");
        return false;
      }
      if (this.adress == "" || this.adress == undefined) {
        Toast("请输入详细地址");
        return false;
      }
      let status
      if (this.checklist1[0]) {
        status =this.checklist1[0];
      } else {
        status = 2;
      }
    //   console.log(status)
     //   let fulladdress = this.model2 + this.adress;
      let userId = localStorage.getItem("key");
      let obj = {
        address: this.model2,
        userId: userId,
        realname: this.username,
        mobile: this.phone,
        status: status,
        detailAddress:this.adress,
        id:id
      };
      console.log(obj)
      this.$http.post(urls,obj).then(res => {
        // console.log(res);
        if(res.body.code ===200){
            Toast('操作成功')
            // this.$router.push({path:'/my/ReceivingAddress'})
            this.$router.go(-1)
        }
      });
    },
    deleteadress(){
        let url = this.$store.state.url
        let urls = url + ':8000/binding/delete' 
        if(this.$route.params.id != 'null'){
            this.$http.post(urls,{id:this.$route.params.id }).then(res=>{
                // console.log(res)
                if(res.body.code === 200){
                    Toast('操作成功')
                    this.$router.push({path:'/my/ReceivingAddress'})
                }
            })
        } 
    }
  }
};
</script>
<style lang="scss" scoped>
.editaddress {
  width: 7.5rem;
  height: 100%;
  background: #ff7c12;
  .header {
    width: 7.5rem;
    // height: 0.88rem;
    // background: pink;
    position: absolute;
    top: 0;
    left: 0;
    .mint-header {
      height: 0.88rem;
    }
  }
  .content {
    width: 7.5rem;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 0.2rem;
    .from {
      width: 7rem;
      margin: 0 auto;
      height: 100%;
      background: #fff;
      border-radius: 0.1rem;
      overflow: hidden;
      a {
        text-align: left;
      }
      /deep/ .mint-field .mint-cell-title {
        width: 1.8rem;
      }
      /deep/ .yd-cell {
        border-top: solid 0.01rem #ccc;
      }
      /deep/ .yd-cell-box {
        margin: 0;
      }
      /deep/ .yd-cell-left,
      .yd-cell-right {
        width: 1.8rem;
      }
      /deep/ .yd-cell:after {
        height: 0;
      }
      /deep/ .yd-checklist-icon {
        color: #ff7c12;
      }
      /deep/ .yd-checklist {
        border-top: solid 0.01rem #ccc;
      }
      /deep/ .yd-checklist:after {
        height: 0;
      }
      /deep/ .yd-checklist-content {
        text-align: left;
      }
      input {
        color: #666666;
        font-size: 0.24rem;
      }
      .submit {
        width: 6.6rem;
        height: 0.88rem;
        margin: 0.1rem auto;
        border-radius: 0.1rem;
        line-height: 0.88rem;
        background: #ff7c12;
        font-size: 0.3rem;
        color: #fff;
      }
      .delete {
        width: 6.6rem;
        height: 0.88rem;
        margin: 0.2rem auto;
        border-radius: 0.1rem;
        line-height: 0.88rem;
        border: solid 0.01rem #ccc;
        font-size: 0.3rem;
        color: #666666;
      }
    }
  }
}
</style>

