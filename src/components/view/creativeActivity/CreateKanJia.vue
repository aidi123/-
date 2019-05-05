<template>
  <div class="box" :class="'bgc'+ id">
    <header>
      <i class="iconfont icon-fanhui" @click="goback">返回</i>
    </header>
    <div class="bannerImg">
      <img :src="src" alt>
    </div>
    <div class="content">
      <div class="title">
        <input type="text" placeholder="请输入新品标题" v-model="title">
        <input type="text" placeholder="请输入商品描述" v-model="describe">
      </div>
      <div class="time">
        <mt-field label="距离活动时间结束时间" placeholder="距离活动时间结束时间" type="date" v-model="birthday"></mt-field>
      </div>
      <div class="price">
        <span>惊爆价：
          <input type="text" v-model="horrifyingPrice"  :class="'border' + id"> 元
        </span>
        <span>原价：
          <input type="text" v-model="originalprice"  :class="'border' + id"> 元
        </span>
        <span>剩余数量：
          <input type="text" v-model="numbs"  :class="'border' + id"> 件
        </span>
      </div>
      <div class="newname" :class="'btn'+ id">图片新品</div>
      <div class="upimg">
        <div class="fristimg">
          <span class="upimgbox">
            <img :src="goodsimgs" alt>
            <span @click="remove" v-show="goodsimgs.length==0?false:true">X</span>
          </span>
          <span class="upfiles" @change="changeImg" v-show="goodsimgs.length==0?true:false">
            <i class="iconfont icon-jia"></i>
            上传
            <input class="hidden" type="file" multiple="true" id="file1" name="file1">
          </span>
        </div>
        <div class="imgs">
          <span class="upimgbox">
            <img :src="goodsimgs2" alt>
            <span @click="remove2" v-show="goodsimgs2.length==0?false:true">X</span>
          </span>
          <span class="upfiles" @change="changeImg2" v-show="goodsimgs2.length==0?true:false">
            <i class="iconfont icon-jia"></i>
            上传
            <input class="hidden" type="file" multiple="true" id="file2" name="file2">
          </span>
        </div>
        <div class="imgs">
          <span class="upimgbox">
            <img :src="goodsimgs3" alt>
            <span @click="remove3" v-show="goodsimgs3.length==0?false:true">X</span>
          </span>
          <span class="upfiles" @change="changeImg3" v-show="goodsimgs3.length==0?true:false">
            <i class="iconfont icon-jia"></i>
            上传
            <input class="hidden" type="file" multiple="true" id="file3" name="file3">
          </span>
        </div>
        <div class="imgs">
          <span class="upimgbox">
            <img :src="goodsimgs4" alt>
            <span @click="remove4" v-show="goodsimgs4.length==0?false:true">X</span>
          </span>
          <span class="upfiles" @change="changeImg4" v-show="goodsimgs4.length==0?true:false">
            <i class="iconfont icon-jia"></i>
            上传
            <input class="hidden" type="file" multiple="true" id="file4" name="file4">
          </span>
        </div>
        <div class="imgs">
          <span class="upimgbox">
            <img :src="goodsimgs5" alt>
            <span @click="remove5" v-show="goodsimgs5.length==0?false:true">X</span>
          </span>
          <span class="upfiles" @change="changeImg5" v-show="goodsimgs5.length==0?true:false">
            <i class="iconfont icon-jia"></i>
            上传
            <input class="hidden" type="file" multiple="true" id="file5" name="file5">
          </span>
        </div>
        <!-- <div class="imgs">
                   <span class="upimgbox">
                      <img :src="goodsimgs6" alt="">
                      <span @click="remove6" v-show="goodsimgs6.length==0?false:true">X</span>
                    </span>
                    <span class="upfiles" @change="changeImg6" v-show="goodsimgs6.length==0?true:false">
                        <i class="iconfont icon-jia"></i>
                        上传
                      <input class="hidden"  type="file" multiple="true" id="file6" name="file6"> 
                    </span>
        </div>-->
        <!-- <div class="imgs">
                   <span class="upimgbox">
                      <img :src="goodsimgs7" alt="">
                      <span @click="remove7" v-show="goodsimgs7.length==0?false:true">X</span>
                    </span>
                    <span class="upfiles" @change="changeImg7" v-show="goodsimgs7.length==0?true:false">
                        <i class="iconfont icon-jia"></i>
                        上传
                      <input class="hidden"  type="file" multiple="true" id="file7" name="file7"> 
                    </span>
        </div>-->
      </div>
      <!-- =============== -->
      <div class="title box2">
        <input type="text" placeholder="请输入产品名字" v-model="commodityname">
        <input type="text" placeholder="请输入商品描述" v-model="commoditydescribe">
      </div>
      <div class="newname" :class="'btn'+ id">图片新品</div>
      <div class="upimg2">
        <!-- <div class="fristimg">
                    <span class="upimgbox">
                      <img :src="goodsimgs8" alt="">
                      <span @click="remove8" v-show="goodsimgs8.length==0?false:true">X</span>
                    </span>
                    <span class="upfiles" @change="changeImg8" v-show="goodsimgs8.length==0?true:false">
                        <i class="iconfont icon-jia"></i>
                        上传
                      <input class="hidden"  type="file" multiple="true" id="file8" name="file8"> 
                    </span>
        </div>-->
        <div class="imgs">
          <span class="upimgbox">
            <img :src="goodsimgs9" alt>
            <span @click="remove9" v-show="goodsimgs9.length==0?false:true">X</span>
          </span>
          <span class="upfiles" @change="changeImg9" v-show="goodsimgs9.length==0?true:false">
            <i class="iconfont icon-jia"></i>
            上传
            <input class="hidden" type="file" multiple="true" id="file9" name="file9">
          </span>
        </div>
        <div class="imgs">
          <span class="upimgbox">
            <img :src="goodsimgs10" alt>
            <span @click="remove10" v-show="goodsimgs10.length==0?false:true">X</span>
          </span>
          <span class="upfiles" @change="changeImg10" v-show="goodsimgs10.length==0?true:false">
            <i class="iconfont icon-jia"></i>
            上传
            <input
              class="hidden"
              type="file"
              multiple="true"
              id="file10"
              name="file10"
            >
          </span>
        </div>
        <div class="imgs">
          <span class="upimgbox">
            <img :src="goodsimgs11" alt>
            <span @click="remove11" v-show="goodsimgs11.length==0?false:true">X</span>
          </span>
          <span class="upfiles" @change="changeImg11" v-show="goodsimgs11.length==0?true:false">
            <i class="iconfont icon-jia"></i>
            上传
            <input
              class="hidden"
              type="file"
              multiple="true"
              id="file11"
              name="file11"
            >
          </span>
        </div>
        <div class="imgs">
          <span class="upimgbox">
            <img :src="goodsimgs12" alt>
            <span @click="remove12" v-show="goodsimgs12.length==0?false:true">X</span>
          </span>
          <span class="upfiles" @change="changeImg12" v-show="goodsimgs12.length==0?true:false">
            <i class="iconfont icon-jia"></i>
            上传
            <input
              class="hidden"
              type="file"
              multiple="true"
              id="file12"
              name="file12"
            >
          </span>
        </div>
        <!-- <div class="imgs">
                   <span class="upimgbox">
                      <img :src="goodsimgs13" alt="">
                      <span @click="remove13" v-show="goodsimgs13.length==0?false:true">X</span>
                    </span>
                    <span class="upfiles" @change="changeImg13" v-show="goodsimgs13.length==0?true:false">
                        <i class="iconfont icon-jia"></i>
                        上传
                      <input class="hidden"  type="file" multiple="true" id="file13" name="file13"> 
                    </span>
        </div>-->
        <!-- <div class="imgs">
                   <span class="upimgbox">
                      <img :src="goodsimgs14" alt="">
                      <span @click="remove14" v-show="goodsimgs14.length==0?false:true">X</span>
                    </span>
                    <span class="upfiles" @change="changeImg14" v-show="goodsimgs14.length==0?true:false">
                        <i class="iconfont icon-jia"></i>
                        上传
                      <input class="hidden"  type="file" multiple="true" id="file14" name="file14"> 
                    </span>
        </div>-->
      </div>
      <!-- ============== -->
      <div class="rulesname" :class="'btn'+ id">活动规则</div>
      <textarea name="请输入活动规则，500字以内；" placeholder="请输入活动规则，500字以内" cols="30" rows="10" class="rules" v-model="activityRules"></textarea>
      <div class="newname" :class="'btn'+ id">商家信息</div>
      <div class="stroemesage">
        <ul>
          <li>
            <span>商家名称：</span>
            <input type="text" placeholder="请输入商家名称" :class="'border' + id" v-model="storename">
          </li>
          <li class="tiems">
            <span class="timesp">
              <mt-field label="领取时间：" placeholder type="date" v-model="birthday1"></mt-field>
            </span>
            <span class="timesp timesp1" >
              <mt-field label="至" placeholder type="date" v-model="birthday2"></mt-field>
            </span>
          </li>
          <li>
            <span>商家地址：</span>
            <input type="text" placeholder="请输入商家地址" :class="'border' + id" v-model="adress">
          </li>
          <li>
            <span>商家电话：</span>
            <input type="text" placeholder="请输入商家电话" :class="'border' + id" v-model="phone">
          </li>
        </ul>
      </div>
      <div class="btn">
        <div :class="'bgi'+id" @click="preview">预览</div>
        <div :class="'bgi'+id" @click="save">保存</div>
      </div>
    </div>
    <!-- <div class="guidebox" v-show="flag">
      <div class="imgboxs">
        <img src="../../../assets/img/popup_hongbao2.png" alt>
        <div class="btn">
          <span @click="noRecharge">否</span>
          <span @click="recharge">立即充值</span>
        </div>
        <div class="colose iconfont icon-x" @click="colose"></div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: "",
      src: "",
      // goodssrc:[],
      goodsimgs: "",
      goodsimgs2: "",
      goodsimgs3: "",
      goodsimgs4: "",
      goodsimgs5: "",
      goodsimgs6: "",
      goodsimgs7: "",
      // goodsimgs8:'',
      goodsimgs9: "",
      goodsimgs10: "",
      goodsimgs11: "",
      goodsimgs12: "",
      goodsimgs13: "",
      goodsimgs14: "",
      title: "",
      describe: "",
      storename: "",
      adress: "",
      phone: "",
      userid: "",
      commoditydescribe: "",
      commodityname: "",
      flag: false,
      birthday: "",
      horrifyingPrice: "",
      originalprice: "",
      numbs: "",
      birthday1:'',
      birthday2:'',
      activityRules:''
    };
  },
  created() {
    // this.id = this.$route.params.id
    this.initmessage();
  },
  methods: {
    initmessage() {
      this.id = this.$route.params.id;
      if (this.id == 1) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg1.png";
      }
      if (this.id == 2) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg2.png";
      }
      if (this.id == 3) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg3.png";
      }
      if (this.id == 4) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg5.png";
      }
      if (this.id == 5) {
        this.src = "http://www.zgstg.cn/2019-02-28/kanjiabanner_bg6.png";
      }
    },
    //初始化数据(预览返回时)
    initList() {
      if (JSON.parse(sessionStorage.getItem("obj"))) {
        this.obj = JSON.parse(sessionStorage.getItem("obj"));
        (this.goodsimgs = this.obj.goodsimgs),
          (this.goodsimgs2 = this.obj.goodsimgs2),
          (this.goodsimgs3 = this.obj.goodsimgs3),
          (this.goodsimgs4 = this.obj.goodsimgs4),
          (this.goodsimgs5 = this.obj.goodsimgs5),
          (this.goodsimgs6 = this.obj.goodsimgs6),
          (this.goodsimgs7 = this.obj.goodsimgs7),
          (this.title = this.obj.title),
          (this.describe = this.obj.describe),
          (this.storename = this.obj.storename),
          (this.adress = this.obj.adress),
        this.birthday = this.obj.birthday,
        this.horrifyingPrice=this.obj.horrifyingPrice,
        this.originalprice =this.obj.originalprice,
        this.numbs =this.obj.numbs,
        this.phone = this.obj.phone
      }
      if (JSON.parse(sessionStorage.getItem("obj2"))) {
        this.obj2 = JSON.parse(sessionStorage.getItem("obj2"));
        // this.goodsimgs8=this.obj2.goodsimgs8,
        (this.goodsimgs9 = this.obj2.goodsimgs9),
          (this.goodsimgs10 = this.obj2.goodsimgs10),
          (this.goodsimgs11 = this.obj2.goodsimgs11),
          (this.goodsimgs12 = this.obj2.goodsimgs12),
          (this.goodsimgs13 = this.obj2.goodsimgs13),
          (this.goodsimgs14 = this.obj2.goodsimgs14),
          (this.commoditydescribe = this.obj2.commoditydescribe);
        this.commodityname = this.obj2.commodityname;
        this.activityRules =this.obj2.activityRules;
        this.birthday1 = this.obj2.birthday1;
        this.birthday2 = this.obj2.birthday2;
      }
    },
    // 上传图片第一张
    changeImg(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file1").files; //获取文件
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
            this.goodsimgs = arr[0]; //只取第一张
          }
        });
    },
    remove() {
      this.goodsimgs = "";
    },
    // 第二张图
    changeImg2(e) {
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
            this.goodsimgs2 = arr[0]; //只取第一张
          }
        });
    },
    remove2() {
      this.goodsimgs2 = "";
    },
    //第三张图
    changeImg3(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file3").files; //获取文件
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
            this.goodsimgs3 = arr[0]; //只取第一张
          }
        });
    },
    remove3() {
      this.goodsimgs3 = "";
    },
    //第四张图
    changeImg4(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file4").files; //获取文件
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
            this.goodsimgs4 = arr[0]; //只取第一张
          }
        });
    },
    remove4() {
      this.goodsimgs4 = "";
    },
    //第五张图
    changeImg5(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file5").files; //获取文件
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
            this.goodsimgs5 = arr[0]; //只取第一张
          }
        });
    },
    remove5() {
      this.goodsimgs5 = "";
    },
    //第6张图
    changeImg6(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file6").files; //获取文件
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
            this.goodsimgs6 = arr[0]; //只取第一张
          }
        });
    },
    remove6() {
      this.goodsimgs6 = "";
    },
    //第7张图
    changeImg7(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file7").files; //获取文件
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
            this.goodsimgs7 = arr[0]; //只取第一张
          }
        });
    },
    remove7() {
      this.goodsimgs7 = "";
    },
    //第8张图
    //  changeImg8(e) {
    //     var form = new FormData();
    //     var fileObj = document.getElementById("file8").files; //获取文件
    //     console.log(fileObj);
    //     var arr = [];
    //     for (let i in fileObj) {
    //         // arr.push(fileObj[i]);
    //         form.append("files", fileObj[i]);
    //     }
    //     this.$http
    //         .post("http://suyuanwang.com.cn:9080/file/uploads", form)
    //         .then(res => {
    //         console.log(res);
    //         if (res.status === 200) {
    //             // 字符串转数组
    //             var arr = res.body.urls.split(",");
    //             this.goodsimgs8 =arr[0]  //只取第一张
    //         }
    //     });
    // },
    // remove8(){
    //     this.goodsimgs8=''
    // },
    //第9张图
    changeImg9(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file9").files; //获取文件
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
            this.goodsimgs9 = arr[0]; //只取第一张
          }
        });
    },
    remove9() {
      this.goodsimgs9 = "";
    },
    //第10张图
    changeImg10(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file10").files; //获取文件
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
            this.goodsimgs10 = arr[0]; //只取第一张
          }
        });
    },
    remove10() {
      this.goodsimgs10 = "";
    },
    //第11张图
    changeImg11(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file11").files; //获取文件
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
            this.goodsimgs11 = arr[0]; //只取第一张
          }
        });
    },
    remove11() {
      this.goodsimgs11 = "";
    },
    //第12张图
    changeImg12(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file12").files; //获取文件
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
            this.goodsimgs12 = arr[0]; //只取第一张
          }
        });
    },
    remove12() {
      this.goodsimgs12 = "";
    },
    //第13张图
    changeImg13(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file13").files; //获取文件
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
            this.goodsimgs13 = arr[0]; //只取第一张
          }
        });
    },
    remove13() {
      this.goodsimgs13 = "";
    },
    //第14张图
    changeImg14(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file14").files; //获取文件
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
            this.goodsimgs14 = arr[0]; //只取第一张
          }
        });
    },
    remove14() {
      this.goodsimgs14 = "";
    },
    goback() {
      this.$router.push({ path: "/creativeActivity/CreativeActivity" });
    },

    //预览
    preview() {
      var obj = {};
      var obj2 = {};
      (obj.goodsimgs = this.goodsimgs),
        (obj.goodsimgs2 = this.goodsimgs2),
        (obj.goodsimgs3 = this.goodsimgs3),
        (obj.goodsimgs4 = this.goodsimgs4),
        (obj.goodsimgs5 = this.goodsimgs5),
        (obj.goodsimgs6 = this.goodsimgs6),
        (obj.goodsimgs7 = this.goodsimgs7),
        obj.birthday = this.birthday,
        obj.horrifyingPrice=this.horrifyingPrice,
        obj.originalprice =this.originalprice
        obj.numbs =this.numbs,
        // obj2.goodsimgs8=this.goodsimgs8,
        (obj2.goodsimgs9 = this.goodsimgs9),
        (obj2.goodsimgs10 = this.goodsimgs10),
        (obj2.goodsimgs11 = this.goodsimgs11),
        (obj2.goodsimgs12 = this.goodsimgs12),
        (obj2.goodsimgs13 = this.goodsimgs13),
        (obj2.goodsimgs14 = this.goodsimgs14),
        obj2.birthday1 = this.birthday1,
        obj2.birthday2 = this.birthday2,
        (obj.title = this.title),
        (obj.describe = this.describe);
      obj.storename = this.storename;
      obj.adress = this.adress;
      obj.phone = this.phone;
      obj2.commoditydescribe = this.commoditydescribe;
      obj2.commodityname = this.commodityname;
      obj2.activityRules =this.activityRules;

    //   console.log(obj);
      sessionStorage.setItem("obj", JSON.stringify(obj));
      sessionStorage.setItem("obj2", JSON.stringify(obj2));
      this.$router.push({path:'/creativeActivity/KanjiaPreview/'+ this.id})
      // console.log(obj,obj2);
    },
    //保存
    save() {
      // console.log(this.userid,localStorage.getItem('key'))
      if (localStorage.getItem("key")) {
        this.userid = localStorage.getItem("key");
        // console.log( this.userid)
      } else {
        Toast("请先登录");
        return false;
      }
      if (!this.title) {
        Toast("请输入活动名");
        return false;
      }
      if (!this.describe) {
        Toast("请输入活动内容");
        return false;
      }
      if (!this.goodsimgs) {
        Toast("请输入主图");
        return false;
      }
      this.url = this.$store.state.url;
      let urls = this.url + ":9988/activity/save";
      var obj3 = {};
      obj3.userId = this.userid;
      (obj3.title = this.title), (obj3.description = this.describe);
      obj3.businessName = this.storename;
      obj3.address = this.adress;
      obj3.mobile = this.phone;
      obj3.imgUrl = this.goodsimgs;
      obj3.detailedImgUrl =
        this.goodsimgs2 +
        "," +
        this.goodsimgs3 +
        "," +
        this.goodsimgs4 +
        "," +
        this.goodsimgs5 +
        "," +
        this.goodsimgs6 +
        "," +
        this.goodsimgs7;
      obj3.backGroundId = this.id;
      obj3.type = 2;
      obj3.commodityUrl =
        this.goodsimgs9 +
        "," +
        this.goodsimgs10 +
        "," +
        this.goodsimgs11 +
        "," +
        this.goodsimgs12 +
        "," +
        this.goodsimgs13 +
        "," +
        this.goodsimgs14;
      obj3.commodityDescription = this.commoditydescribe;
      obj3.commodityName = this.commodityname;

      obj3.activityTimes ={}
      obj3.activityTimes.receiveTime=this.birthday1+'至'+ this.birthday2
      obj3.activityTimes.endTime = this.birthday
      obj3.beforePrice = this.originalprice
      obj3.nowPrice  = this.horrifyingPrice
      obj3.bargainCount = this.numbs
    //   obj3.receiveTime = this.birthday1
    //   obj3.endTime = this.birthday2
      //活动规则
      obj3.activityTimes.activityRule = this.activityRules
      console.log(obj3)
      this.$http.post(urls, obj3).then(res => {
        if (res.body.code === 200) {
          // Toast('创建成功')
          let id = res.body.result.id;
          localStorage.setItem("activeNum", id);
          if (id) {
            this.flag = true;
          }
           this.$router.push({ path: "/creativeActivity/KanJia/" + this.id });
          // localStorage.setItem('activeNum',res.body.result.id)
          //   this.$router.push({path:'/creativeActivity/saveactivity/'+this.id})
        }
      });
    },
    colose() {
      this.flag = false;
      this.$router.push({ path: "/creativeActivity/KanJia/" + this.id });
    },
    noRecharge() {
      this.flag = false;
      this.$router.push({ path: "/creativeActivity/KanJia/" + this.id });
    },
    //充值
    recharge() {
      let tourls =
        location.href.split("#")[0] +
        "#" +
        "/creativeActivity/KanJia/" +
        this.id;
      localStorage.setItem("tourls", tourls);
      this.$router.push({ path: "/creativeActivity/KanJia/" + this.id });
    }
  },
  mounted() {
    this.initList();
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 7.5rem;
  padding-bottom: 0.2rem;
  header {
    width: 7.5rem;
    height: 0.88rem;
    padding: 0 0.3rem;
    line-height: 0.88rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    text-align: left;
    font-size: 0.3rem;
    color: #ccc;
  }
  .bannerImg {
    width: 7.5rem;
    height: 5.6rem;
    margin-bottom: 0.2rem;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .content {
    width: 6.9rem;
    margin: 0 auto;
    .title {
      width: 6.9rem;
      height: 1.9rem;
      border-radius: 0.1rem;
      background-color: #fff;
      padding: 0.05rem 0.1rem;
      input {
        width: 100%;
        height: 0.89rem;
        outline: none;
        border: none;
        border-bottom: dashed 1px #ccc;
        padding: 0;
        margin: 0;
        // background-color: pink;
        padding: 0.1rem;
        &:nth-child(2) {
          border: none;
        }
      }
      input::-webkit-input-placeholder {
        color: #999999;
      }
    }
    .price {
      width: 6.9rem;
      padding: 0.2rem;
      background-color: #fff;
      border-radius: 0.1rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      span {
        width: 3.2rem;
        height: 0.7rem;
        text-align: left;
        margin-bottom: 0.2rem;
        input {
          width: 1rem;
          height: 0.7rem;
          outline: none;
          border-radius: 0.1rem;
          text-align: center;
        //   border: solid 0.02rem #b81c25;
        }
      }
    }
    .time {
      margin: 0.2rem 0;
      border-radius: 0.1rem;
      overflow: hidden;
      //    /deep/ .mint-cell-wrapper{
      //        padding: 0;
      //    }
      /deep/ .mint-cell-title {
        width: 3rem;
        text-align: left;
        color: #666;
      }
    }
    .box2 {
      margin-top: 0.2rem;
    }
    .rules {
      width: 6.9rem;
      height: 2.5rem;
      padding: 0.2rem;
      background-color: #fff;
      border-radius: 0.1rem;
    }
    .rulesname,
    .newname {
      width: 1.6rem;
      height: 0.5rem;
      margin: 0.3rem auto 0.1rem;
      line-height: 0.5rem;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      overflow: hidden;
    }
    .upimg {
      width: 6.9rem;
      height: 10.1rem;
      padding: 0.2rem;
      background-color: #fff;
      .fristimg {
        width: 6.5rem;
        height: 4.9rem;
        background-color: #e4e4e4;
        position: relative;
        overflow: hidden;
        .upimgbox {
          img {
            width: 100%;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // max-height: 100%;
          }
          span {
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            top: 0.2rem;
            right: 0.2rem;
            background: #ccc;
            border-radius: 50%;
          }
        }
        .upfiles {
          width: 1.2rem;
          height: 0.5rem;
          line-height: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 0.5rem;
          display: block;
          position: absolute;
          top: 0.2rem;
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
          .icon-jia {
            color: #fff;
            font-size: 0.2rem;
          }
        }
      }
      .imgs {
        width: 3.24rem;
        height: 2.4rem;
        background-color: #e4e4e4;
        border-top: solid 0.01rem #bbbaba;
        border-left: solid 0.01rem #bbbaba;
        float: left;
        position: relative;
        overflow: hidden;
        .upimgbox {
          img {
            width: 100%;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          span {
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            top: 0.2rem;
            right: 0.2rem;
            background: #ccc;
            border-radius: 50%;
          }
        }
        .upfiles {
          width: 1.2rem;
          height: 0.5rem;
          line-height: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 0.5rem;
          display: block;
          position: absolute;
          top: 0.2rem;
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
          .icon-jia {
            color: #fff;
            font-size: 0.2rem;
          }
        }
        &:nth-child(2n-1) {
          border-right: solid 0.01rem #bbbaba;
        }
      }
    }
    .upimg2 {
      width: 6.9rem;
      height: 5.2rem;
      padding: 0.2rem;
      background-color: #fff;
      .fristimg {
        width: 6.5rem;
        height: 4.9rem;
        background-color: #e4e4e4;
        position: relative;
        .upimgbox {
          img {
            width: 100%;
            height: 100%;
          }
          span {
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            top: 0.2rem;
            right: 0.2rem;
            background: #ccc;
            border-radius: 50%;
          }
        }
        .upfiles {
          width: 1.2rem;
          height: 0.5rem;
          line-height: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 0.5rem;
          display: block;
          position: absolute;
          top: 0.2rem;
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
          .icon-jia {
            color: #fff;
            font-size: 0.2rem;
          }
        }
      }
      .imgs {
        width: 3.24rem;
        height: 2.4rem;
        background-color: #e4e4e4;
        border-top: solid 0.01rem #bbbaba;
        border-left: solid 0.01rem #bbbaba;
        float: left;
        position: relative;
        overflow: hidden;
        .upimgbox {
          img {
            width: 100%;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          span {
            width: 0.3rem;
            height: 0.3rem;
            position: absolute;
            top: 0.2rem;
            right: 0.2rem;
            background: #ccc;
            border-radius: 50%;
          }
        }
        .upfiles {
          width: 1.2rem;
          height: 0.5rem;
          line-height: 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 0.5rem;
          display: block;
          position: absolute;
          top: 0.2rem;
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
          .icon-jia {
            color: #fff;
            font-size: 0.2rem;
          }
        }
        &:nth-child(2n-1) {
          border-right: solid 0.01rem #bbbaba;
        }
      }
    }
    .stroemesage {
      width: 6.9rem;
      // height: 3rem;
      border-radius: 0.1rem;
      margin: 0 auto;
      padding: 0.3rem 0.2rem;
      background-color: #fff;
      ul {
        li {
          height: 0.8rem;
          width: 100%;
          line-height: 0.8rem;
          text-align: left;
          // background-color: pink;
          span {
            color: #333333;
          }
          input {
            width: 5rem;
            height: 0.7rem;
            padding: 0.2rem;
            outline: none;
            border-radius: 0.1rem;
            border: solid 0.02rem #ccc;
          }
          input::-webkit-input-placeholder {
            color: #999999;
          }
        }
        .tiems {
          width: 100%;
          margin: 0.2rem 0;
          border: none;
          display: flex;
          justify-content: space-between;
          .timesp {
            width: 3.4rem;
            text-align: center;
            /deep/ .mint-cell-wrapper {
              padding: 0;
            }
            /deep/ .mint-field .mint-cell-title {
              width: 1.2rem;  
            }
             /deep/ .mint-field-core{
              width: 1.5rem;
              height: 0.7rem;
              border-radius: 0.1rem;
               border: solid 0.02rem #ccc;
               text-align: center;
          }
            // input{
            //     width: 1.2rem;
            //     border: solid 0.02rem #ccc;
            // }
          }
          .mint-cell:last-child {
            background-position: 0px 0px;
          }
           .timesp1{
            padding-right: 0.2rem;
             /deep/ .mint-field .mint-cell-title {
              width: 1rem;  
            }
          }
        
        }
       
      }
    }
    .btn {
      width: 6.9rem;
      height: 0.8rem;
      margin-top: 0.2rem;
      display: flex;
      justify-content: space-between;
      div {
        width: 3.4rem;
        height: 0.8rem;
        line-height: 0.8rem;
        border-radius: 0.8rem;
        font-size: 0.36rem;
        color: #fff;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        overflow: hidden;
      }
    }
  }
  .guidebox {
    width: 7.5rem;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    .imgboxs {
      width: 5.3rem;
      height: 5.2rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -74%);
      img {
        width: 100%;
      }
      .btn {
        width: 5.3rem;
        height: 0.9rem;
        position: absolute;
        bottom: 0.2rem;
        left: 0;
        display: flex;
        justify-content: space-around;
        span {
          width: 2.2rem;
          height: 0.88rem;
          display: block;
          border-radius: 0.88rem;
          line-height: 0.88rem;
          background-color: #ffcb2c;
          color: #6e3c06;
        }
      }
      .colose {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        border: solid 0.02rem #fff;
        color: #fff;
        text-align: center;
        line-height: 0.36rem;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.24rem;
      }
    }
  }
}
// 动态样式
.bgc1 {
  background: #B81C25;
}
.bgc2 {
  background:#6F0400;
}
.bgc3 {
  background: #7FE3FA;
}
.bgc4 {
  background: #5A81EB;
}
.bgc5 {
  background: #D01FED;
}
.bgi1 {
  background-image: url(../../../assets/img/img_btn1.png);
}
.bgi2 {
  background-image: url(../../../assets/img/img_btn2.png);
}
.bgi3 {
  background-image: url(../../../assets/img/img_btn3.png);
}
.bgi4 {
  background-image: url(../../../assets/img/img_btn4.png);
}
.bgi5 {
  background-image: url(../../../assets/img/img_btn5.png);
}
.btn1 {
  background-image: url(../../../assets/img/cr_btn1.png);
}
.btn2 {
  background-image: url(../../../assets/img/cr_btn2.png);
}
.btn3 {
  background-image: url(../../../assets/img/cr_btn3.png);
}
.btn4 {
  background-image: url(../../../assets/img/cr_btn4.png);
}
.btn5 {
  background-image: url(../../../assets/img/cr_btn5.png);
}
.border1 {
  border: solid 1px #B81C25;
}
.border2 {
  border: solid 1px #B81C25;
}
.border3 {
  border: solid 1px #7FE3FA;
}
.border4 {
  border: solid 1px #5A81EB;
}
.border5 {
  border: solid 1px #D01FED;
}
</style>

