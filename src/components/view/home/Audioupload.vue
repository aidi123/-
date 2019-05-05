<template>
  <div class="audioupload">
    <mt-header title="上传" style="background:#FF7C12;">
      <router-link to="../my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="./myfavoritemanage" slot="right">
        <mt-button>取消</mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <div class="title">
        <p>标题</p>
        <input type="text" placeholder="请输入标题" v-model="title">
        <p>主讲老师</p>
        <input type="text" placeholder="请输入主讲老师姓名" v-model="name">
      </div>
      <div class="files">
        <p>背景图片</p>
        <div class="box">
          <ul>
            <!-- 背景图片 -->
            <li v-for="(item,index) in goodsimgs" :key="index">
              <img :src="item" alt>
              <span @click="removes(index)">x</span>
            </li>
            <li @change="getGoodsFile" v-show="goodsimgs.length>=1?false:true">
              <input class="hidden" type="file" multiple="true" id="file2" name="file2">
            </li>
          </ul>
        </div>
        <p>音频文件</p>
        <div class="radio">
             <p v-for="(item,index) in audioflie" :key="index">
              <!-- <img :src="item" alt> -->
              <span>
              {{item .substring(item.lastIndexOf("\/") + 1, item.length)}}
              </span>
              <span @click="remove(index)" class="removespan">x</span>
            </p>
            <!-- <button class="bottom" @change="getaudioFile" v-show="audioflie.length>=1?false:true">
              <input class="hidden" type="file" multiple="true" id="file" name="file">
            </button> -->
            <ul>
            <li @change="getaudioFile" v-show="audioflie.length>=1?false:true">
                音频上传
              <input class="hidden" type="file" multiple="true" id="file" name="file">
            </li>
          </ul>
        </div>
      </div>
      <div class="up" @click="upload">
          立即上传
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      goodssrc: [],
      goodsimgs: [],
      audiosrc:[],
      audioflie:[],
      title:'',
      name:''
    };
  },
  methods: {
    //上传图片
    getGoodsFile(e) {
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
             // 限定长度
            if (_this.goodssrc.length > 1) {
              _this.goodssrc = _this.goodssrc.slice(0, 1);
            }
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
            this.goodsimgs = this.goodsimgs.concat(arr);
            // 限定长度
            if (_this.goodsimgs.length > 1) {
              _this.goodsimgs = _this.goodsimgs.slice(0, 1);
            }
          }
        });
    },
    //移除预览图片
    removes(index) {
      //   this.goodssrc.splice(index, 1);
      // 点击时移除imgs里对应索引的元素
      // 点击删除时需上传的图片文件也删除
      this.goodsimgs.splice(index, 1);
      console.log(this.goodsimgs);
    },
    //音乐文件上传
    getaudioFile(e) {
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
            _this.audiosrc.push(this.result);
            // 限定长度
            if (_this.audiosrc.length > 1) {
              _this.audiosrc = _this.audiosrc.slice(0, 1);
            }
          };
          c++;
        }
      }
      //上传文件
      var form = new FormData();
      var fileObj = document.getElementById("file").files; //获取文件
      console.log(fileObj);
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      Toast('上传中请稍候')
      this.$http
        .post("http://suyuanwang.com.cn:9080/file/uploads", form)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            // 字符串转数组
            var arr = res.body.urls.split(",");
            this.audioflie = this.audioflie.concat(arr);
             // 限定长度
            if (_this.audioflie.length > 1) {
              _this.audioflie = _this.audioflie.slice(0, 1);
            }
          }
        });
    },
    //移除预览图片
    remove(index) {
      this.audioflie.splice(index, 1);
    },
    upload(){
        console.log(123)
        if(this.title.trim().length === 0){
         Toast('请输入标题')
         return false
        }
         if(this.name.trim().length === 0){
              Toast('请输入姓名')
         return false
        }
        this.url = this.$store.state.url
        let urls = this.url + ':8000/course/save'
        this.$http.post(urls,{
            fileContent:this.name,
            fileName:this.title,
            fileUrl:this.audioflie[0],
            fileImg:this.goodsimgs[0]
        }).then(res=>{
            console.log(res)
            if(res.body.code ===500){
                Toast(res.body.message)
            }
            if(res.body.code === 200){
                Toast('上传成功')
                this.$router.push({path:'/school'})
            }
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.audioupload {
  width: 7.5rem;
  height: 100%;
  background: #FF7C12;
  .content {
    width: 7rem;
    margin: 0.2rem auto;
    border-radius: 0.1rem;
    background-color: #fff;
    padding: 0.2rem;
    .title {
      p {
        text-align: left;
        font-size: 0.24rem;
        line-height: 0.4rem;
        color: #666;
      }
      input {
        outline: none;
        border: none;
        border-bottom: solid 1px #ccc;
        width: 100%;
        padding: 0.2rem 0;
        text-align: left;
        font-size: 0.24rem;
        margin-bottom: 0.2rem;
        // background-color: pink;
      }
    }
    .files {
      p {
        text-align: left;
      }
      .box {
        width:100%;
        ul {
          width: 6.7rem;
          display: flex;
          // justify-content:space-around;
          list-style: none;
          flex-wrap: wrap;
          align-content: flex-start;
          li {
            width: 2rem;
            height: 2rem;
            background: rgba(245, 245, 245, 1);
            margin: 0.1rem;
            position: relative;
            line-height: 2rem;
            border: 1px solid rgba(191, 191, 191, 1);
            border-radius: 0.1rem;
            .icon-tianjiajiahaowubiankuang1 {
              font-size: 1rem;
              color: #bfbfbf;
            }
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
            span {
              width: 0.3rem;
              height: 0.3rem;
              display: block;
              position: absolute;
              line-height: 0.25rem;
              top: 0.05rem;
              right: 0.05rem;
              border-radius: 50%;
              color: white;
              background: rgba(0, 0, 0, 0.5);
            }
            .hidden {
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
              height: 2rem;
              width: 2rem;
              z-index: 5;
            }
          }
        }
      }
      .radio{
           width:100%;
           .removespan{
               padding: 0 0.4rem;
           }
        ul {
          width: 6.7rem;
          display: flex;
          // justify-content:space-around;
          list-style: none;
          flex-wrap: wrap;
          align-content: flex-start;
          li {
            width: 2rem;
            height: 0.5rem;
            background: rgba(245, 245, 245, 1);
            margin: 0.1rem;
            position: relative;
            line-height: 0.5rem;
            border: 1px solid rgba(191, 191, 191, 1);
            border-radius: 0.1rem;
            // .icon-tianjiajiahaowubiankuang1 {
            //   font-size: 1rem;
            //   color: #bfbfbf;
            // }
            // img {
            //   width: 100%;
            //   height: 100%;
            //   display: block;
            // }
            span {
              width: 0.3rem;
              height: 0.3rem;
              display: block;
              position: absolute;
              line-height: 0.25rem;
              top: 0.05rem;
              right: 0.05rem;
              border-radius: 50%;
              color: white;
              background: rgba(0, 0, 0, 0.5);
            }
            .hidden {
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
              height: 0.5rem;
              width: 2rem;
              z-index: 5;
            }
          }
        }
      }

    }
    .up{
        width: 6.6rem;
        height: 0.88rem;
        margin: 1rem auto;
        text-align: center;
        line-height: 0.88rem;
        color: #fff;
        background:rgba(255,124,18,1);
        border-radius: 0.1rem;
    }
  }
}
</style>
