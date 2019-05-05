<template>
  <div class="bg">
    <mt-header style="background:#FF7C12;">
      <router-link to="../recreation" slot="left">
        <mt-button>取消</mt-button>
      </router-link>
      <span slot="right">
        <div @click="addLifeCircle">发表</div>
      </span>
    </mt-header>
    <ul class="box">
      <li class="lis">
        <yd-cell-group>
          <yd-cell-item>
            <yd-textarea v-model="content" slot="right" placeholder="这一刻的想法..." maxlength="100"></yd-textarea>
          </yd-cell-item>
        </yd-cell-group>
        <!-- <yd-lightbox class="imgBox">
          <ul class="imgs">
              <li class="ims">
                  <img src="" class="showImg">
              </li>
          </ul>
          <span>
            <input  type="file" id="upload_file" multiple style="display: none"/>
            <div class="add">
                <div class="add-image" align="center">
                    <i class="iconfont icon-jia"></i>
                </div>
            </div>
          </span>
        </yd-lightbox> -->
        
      </li>
       <li class="headerImg">
          <span class="imgbox" v-for="(item,index) in goodsimgs" :key="index">
            <img :src="item" alt="item">
            <span @click="removes(index)">x</span>
          </span> 
          <span @change="changeImg" class="change">
            <i class="iconfont icon-jia"></i>
            <input class="hidden" type="file" multiple="true" id="file2" name="file2">
          </span>
          <!-- <p class="address"><i class="iconfont icon-dizhi"></i>&nbsp;{{cityName}}</p> -->
        </li>

    </ul>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
      imgList:[],
      content:'',
      goodssrc:[],
      goodsimgs:[],
      cityName:''
     
    }
  },
  methods:{
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
        .post("http://suyuanwang.com.cn:9080/file/uploads", form)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            // 字符串转数组
            var arr = res.body.urls.split(",");
            this.goodsimgs =this.goodsimgs.concat(arr)  
            console.log(this.goodsimgs)
            if(this.goodsimgs.length >6){
              Toast('最多传6张')
              this.goodsimgs.length = 6
            }
           
          }
        });
    },
    removes(index){
       this.goodsimgs.splice(index, 1);
    },
    addLifeCircle(){
      let _this =this
       var to=localStorage.getItem('mytoken');
      if(!to){
        this.$router.push({
            path: "/"
            });
        return;
      }
    if(this.goodsimgs.length ===0){
      Toast('请上传图片')
      return false
    }
      this.cityName = localStorage.getItem('city')
      this.url = this.$store.state.url
      let urls = this.url + ":8800/lifeCircle/self/addLifeCircle"
      let data={content:this.content,img:this.goodsimgs.join(','),cityName: _this.cityName}
      console.log(data)
      this.$http.post(urls,data).then(res=>{
        console.log(res)
        if(res.body.code === 200){
          Toast(res.body.message);
           this.$router.push({
            path: "/recreation"
            });
        }
      })
    }
  }
}

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
    background-size: 100% 100%;
    .box {
      background: #fff;
      border-radius: 0.1rem;
      margin: 0.2rem auto;
      width: calc(100% - 0.4rem);
      height: auto;
      padding: 0.2rem;
      // .imgs{
      //   width:100%;
      // }
      // .ims{
      //   margin: 1px;
      //   width:1rem;
      //   height: 1rem;
      //   display:inline
      // }
      .showImg{
        width:1rem;
        height: 1rem;
      }
      .add{
        display:inline
      }
      .lis {
        height: auto;
        .yd-textarea>textarea::-webkit-input-placeholder {
          color: #000;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        .yd-textarea>textarea::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #000;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        .yd-textarea>textarea:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #000;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        .yd-textarea>textarea:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #000;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        .yd-textarea>textarea::-ms-input-placeholder {
          /* Microsoft Edge */
          color: #000;
          font-size: 0.24rem;
          font-family: "Microsoft YaHei";
          font-weight: 400;
        }
        .yd-textarea,
        .yd-cell-right,
        .yd-cell-item,
        .yd-cell-box {
          padding: 0;
          margin: 0;
        }
        .imgBox {
          width: 100%;
          height: 2rem;
         
          background: #F2F2F2;
          .icon-jia {
            font-size: 1rem;
            height: 2rem;
            line-height: 2rem;
            color: #B7B7B7;
          }
         
        }
      }
      .headerImg{
        width: 100%;
        text-align: left;
        .imgbox{
          width: 2rem;
          height: 2rem;
          display: block;
          float: left;
          margin: 0.1rem;
          border-radius: 0.1rem;
          overflow: hidden;
           position: relative;
          img{
            width: 100%;
            height: 100%;
            display: block;
          }
           span{
            position: absolute;
            top:0.1rem;
            right: 0.1rem;
            padding: 0rem 0.1rem 0.03rem 0.1rem;
            border-radius: 50%;
            background-color: #B7B7B7;
          }

        }
        .change{
          width: 2rem;
          height: 2rem;
          display: inline-block;
          border-radius: 0.1rem;
          border: solid 1px #ccc;
          position: relative;
          line-height: 2rem;
          text-align: center;
          margin: 0.1rem;
          // float: left;
          .hidden {
            opacity: 0;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            height: 2rem;
            width: 2rem;
            z-index: 5;
          }
          .icon-jia{
            font-size: 0.6rem;
          }
        }
        
      }
    }
  }
}
</style>



