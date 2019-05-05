<template>
    <div class="bg">
        <mt-header title="个人信息" style="background:#FF7C12;">
            <router-link to="./setting" slot="left">
                <mt-button icon="back"></mt-button>  
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <ul class="box">
          <li class="headerImg">
            <span class="imgbox">
              <img :src="goodsimgs" alt="">
              <!-- <span @click="removes(index)">x</span> -->
            </span> 
            <span @change="changeImg" class="change">更换头像 
              <input class="hidden" type="file" multiple="true" id="file2" name="file2">
            </span>
            </li>
            <li><span class="text">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span><input type="text" placeholder="昵称" v-model="userName"></li>
            <!-- <li><span class="text">个人签名</span><input type="text" placeholder="请填写个人签名" v-model="signName"></li> -->
        </ul>
        <!-- <router-link to="/my/setting" tag="button" class="btn" @click="save">保存个人信息</router-link> -->
        <button class="btn" @click="save">保存个人信息</button>
    </div>
</template>
<script>
// import Vue from "vue";
// import { Icons } from "vue-ydui/dist/lib.rem/icons";
// import { MessageBox } from "mint-ui";
// Vue.component(Icons.name, Icons);
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      // message:{},
      url:'',
      userName:'',
      signName:'',
      goodssrc:[],
      goodsimgs:'',
      src:''
    };
  },
  created() {
    this.initusermessage()
  },
  methods: {
    //初始化数据
    initusermessage(){
      // 获取公共ip
      this.url = this.$store.state.url
      var urls =  this.url + ':8000/user/self/getUacUserById/'
      this.$http.post(urls+ localStorage.getItem('key')).then(res=>{
        console.log(res)
        if(res.body.code===200){
          this.signName =res.body.result.signName
          this.userName =res.body.result.userName
          this.goodsimgs = res.body.result.headImg !=null?res.body.result.headImg.split(',')[0]:null
        }
      })
    },
    //跟换图片
    changeImg(e) {
      let _this = this;
      var files = e.target.files; //获取的是对象
      console.log(files);
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      var reader = new FileReader();
      var c = 0;
      var t1 = setInterval(frame, 500);
      function frame() {
        if (c == files.length) {
          clearInterval(t1);
        } else {
          console.log(c);
          reader.readAsDataURL(files[c]);
          reader.onloadend = function() {
            _this.goodssrc.push(this.result);
          };
          c++;
        }
      }
      //上传图片
      var form = new FormData();
      var fileObj = document.getElementById("file2").files; //获取文件
      console.log(fileObj);
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn/nine/file/uploads", form)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            // 字符串转数组
            var arr = res.body.urls.split(",");
            this.goodsimgs =arr[0]  //只取第一张
            console.log(this.goodsimgs)
          }
        });
    },
    // removes(){
    //    this.goodsimgs.splice(index, 1);
    // },
    save() {
      console.log(123)
      var test ={
        // "birthday": "string",
        // "email": "string",
        "headImg": this.goodsimgs,
        // "password": "string",
        // "sex": 0,
        "signName": this.signName,
        "userId": localStorage.getItem('key'),
        "userName": this.userName
      }
      var urls = this.url + ':8000/user/self/modifyUserInfo'
      this.$http.post(urls,JSON.stringify(test)).then(res=>{
        console.log(res)
        if(res.body.code===200){
          Toast('保存成功')
        }
      })
     
      
    },

  }
};
</script>
<style lang="scss" scoped>
body {
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff7c12;
    .box {
      background: #fff;
      border-radius: 0.1rem;
      margin: 0.5rem auto;
      width: calc(100% - 1rem);
      height: auto;
      padding: 0 0.2rem;
      li {
        height: 0.9rem;
        line-height: 1;
        border-bottom: 1px solid #e5e3e3;
        padding: 0.3rem 0;
        position: relative;
        .icon {
          float: left;
          height: 0.3rem;
          vertical-align: middle;
        }
        .iconAbout {
          padding-left: 0.1rem;
        }
        .text {
          // position: absolute;
          // left: 0.3rem;
          color: #666;
          font-size: 0.24rem;
          vertical-align: middle;
          // padding-left: 0.2rem;
          float: left;
          padding-right: 0.2rem;
        }
        .icon-fanhui {
          color: #999;
          float: right;
          font-size: 0.2rem;
          transform: rotate(180deg);
          -ms-transform: rotate(180deg); /* IE 9 */
          -moz-transform: rotate(180deg); /* Firefox */
          -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
          -o-transform: rotate(180deg); /* Opera */
        }
        input {
          border: 0;
          outline: 0;
          float: left;
          font-size: 0.24rem;
          margin: 0;
          padding: 0;
        }
        input::-webkit-input-placeholder {
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        input::-ms-input-placeholder {
          /* Microsoft Edge */
          color: #999;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
      }
      .headerImg{
        position: relative;
        height: 1.4rem;
        padding: 0.2rem;
        .imgbox{
          height: 1rem;
          width: 1rem;
          float: left;
          background-color: pink;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .change{
          width: 1rem;
          height: 0.88rem;
          line-height: 0.88rem;
          float: right;
        }
         .hidden {
            opacity: 0;
            position: absolute;
            top: 50%;
            right: 0.2rem;
            transform: translateY(-50%);
            height: 0.88rem;
            width: 1rem;
            z-index: 5;
          }
      }
    }
    .btn {
      width: 6.5rem;
      height: 0.9rem;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 0.1rem;
      font-size: 0.3rem;
      border: 0;
      outline: 0;
      color: #666;
    }
  }
}
</style>



