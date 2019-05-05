<template>
  <div class="lctbox" :class="'bgc'+bgid">
    <div class="header" :class="'bgi'+bgid">
      <div class="text">
        <input type="text" placeholder="商家名称" v-model="shopname">
        <input type="text" placeholder="主体内容，限7字内" v-model="titleone">
        <input type="text" placeholder="主体内容，限7字内" v-model="titletwo">
      </div>
      <div class="upfiles">
        <div>
          <img :src="goodsimgs" alt>
          <span
            class="iconfont icon-x move"
            v-show="goodsimgs.length == 0?false:true"
            @click="remove"
          ></span>
        </div>
        <div class="upimgbox" @change="changeImg" v-show="goodsimgs.length == 0?true:false">
          <span class="iconfont icon-jia">上传</span>
          <input type="file" class="upfile" multiple="true" id="file1" name="file1">
          <p>建议上传白底背景图最佳</p>
        </div>
      </div>
      <div class="title">
        <input type="text" placeholder="折扣信息，限13字内" v-model="discount">
        <div>
          <span>活动时间:</span>
          <span class="time">
            <input type="text" v-model="starttime"> ~
            <input type="text" v-model="endtime">
          </span>
        </div>
      </div>
      <div class="iconfont icon-fanhui back" @click="goback"></div>
    </div>
    <div class="content">
      <div class="activecontent">
        <textarea
          class="titles"
          id
          cols="30"
          rows="3"
          placeholder="标题，限30字内"
          maxlength="30"
          v-model="textcontent"
        ></textarea>
        <!-- <input type="text" placeholder="备注，限15字内" v-model="note"> -->
        <!-- <div class="phone">
          <span>活动热线：</span>
          <span>
            <input type="text" v-model="phone">
          </span>
        </div>-->
      </div>
      <div class="message">
        <ul>
          <li>
            <div class="fristbox">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe1">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe2">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe3">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe4">
            </div>
            <div class="secondbox">
              <div>
                <img :src="goodsimgs2" alt>
                <span
                  class="iconfont icon-x move"
                  v-show="goodsimgs2.length == 0?false:true"
                  @click="remove2"
                ></span>
              </div>
              <div class="upimgbox" @change="changeImg2" v-show="goodsimgs2.length == 0?true:false">
                <span class="iconfont icon-jia">上传</span>
                <input type="file" class="upfile" multiple="true" id="file2" name="file2">
                <p>建议上传白底背景图最佳</p>
              </div>
            </div>
            <div class="thirdbox">
              <div>
                <img :src="goodsimgs3" alt>
                <span
                  class="iconfont icon-x move"
                  v-show="goodsimgs3.length == 0?false:true"
                  @click="remove3"
                ></span>
              </div>
              <div class="upimgbox" @change="changeImg3" v-show="goodsimgs3.length == 0?true:false">
                <span class="iconfont icon-jia">上传</span>
                <input type="file" class="upfile" multiple="true" id="file3" name="file3">
                <p>建议上传白底背景图最佳</p>
              </div>
            </div>
            <div class="fourthbox">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe5">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe6">
              <div class="price">
                <span>参考价：</span>
                <span>
                  <input type="text" v-model="activityp">
                </span>
              </div>
              <div class="price">
                <span>活动价：</span>
                <span>
                  <input type="text" v-model="originalp">
                </span>
              </div>
            </div>
          </li>
          <li>
            <div class="fristbox">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe7">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe8">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe9">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe10">
            </div>
            <div class="secondbox">
              <div>
                <img :src="goodsimgs4" alt>
                <span
                  class="iconfont icon-x move"
                  v-show="goodsimgs4.length == 0?false:true"
                  @click="remove4"
                ></span>
              </div>
              <div class="upimgbox" @change="changeImg4" v-show="goodsimgs4.length == 0?true:false">
                <span class="iconfont icon-jia">上传</span>
                <input type="file" class="upfile" multiple="true" id="file4" name="file4">
                <p>建议上传白底背景图最佳</p>
              </div>
            </div>
            <div class="thirdbox">
              <div>
                <img :src="goodsimgs5" alt>
                <span
                  class="iconfont icon-x move"
                  v-show="goodsimgs5.length == 0?false:true"
                  @click="remove5"
                ></span>
              </div>
              <div class="upimgbox" @change="changeImg5" v-show="goodsimgs5.length == 0?true:false">
                <span class="iconfont icon-jia">上传</span>
                <input type="file" class="upfile" multiple="true" id="file5" name="file5">
                <p>建议上传白底背景图最佳</p>
              </div>
            </div>
            <div class="fourthbox">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe11">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe12">
              <div class="price">
                <span>参考价：</span>
                <span>
                  <input type="text" v-model="activityp2">
                </span>
              </div>
              <div class="price">
                <span>活动价：</span>
                <span>
                  <input type="text" v-model="originalp2">
                </span>
              </div>
            </div>
          </li>
          <li>
            <div class="fristbox">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe13">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe14">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe15">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe16">
            </div>
            <div class="secondbox">
              <div>
                <img :src="goodsimgs6" alt>
                <span
                  class="iconfont icon-x move"
                  v-show="goodsimgs6.length == 0?false:true"
                  @click="remove6"
                ></span>
              </div>
              <div class="upimgbox" @change="changeImg6" v-show="goodsimgs6.length == 0?true:false">
                <span class="iconfont icon-jia">上传</span>
                <input type="file" class="upfile" multiple="true" id="file6" name="file6">
                <p>建议上传白底背景图最佳</p>
              </div>
            </div>
            <div class="thirdbox">
              <div>
                <img :src="goodsimgs7" alt>
                <span
                  class="iconfont icon-x move"
                  v-show="goodsimgs7.length == 0?false:true"
                  @click="remove7"
                ></span>
              </div>
              <div class="upimgbox" @change="changeImg7" v-show="goodsimgs7.length == 0?true:false">
                <span class="iconfont icon-jia">上传</span>
                <input type="file" class="upfile" multiple="true" id="file7" name="file7">
                <p>建议上传白底背景图最佳</p>
              </div>
            </div>
            <div class="fourthbox">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe17">
              <input type="text" placeholder="商品描述，限10字内" v-model="describe18">
              <div class="price">
                <span>参考价：</span>
                <span>
                  <input type="text" v-model="activityp3">
                </span>
              </div>
              <div class="price">
                <span>活动价：</span>
                <span>
                  <input type="text" v-model="originalp3">
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="imgsbox">
        <img :src="goodsimgs8" alt>
        <span
          class="iconfont icon-x move"
          v-show="goodsimgs8.length == 0?false:true"
          @click="remove8"
        ></span>
        <div class="upewm" @change="changeImg8" v-show="goodsimgs8.length == 0?true:false">
          <span>上传</span>
          <input type="file" class="upewmimg" multiple="true" id="file8" name="file8">
        </div>
      </div>
      <div class="messagebox">
        <input type="text" class="phone" placeholder="商家电话" v-model="mobile">
        <input type="text" class="adress" placeholder="商家地址" v-model="adress">
      </div>
    </div>
    <div class="showmessage">
      <span @click="preview">预览</span>
      <span @click="save">保存</span>
    </div>
    <div class="guidebox" v-show="flag">
      <div class="imgboxs">
        <img src="../../../assets/img/popup_hongbao2.png" alt>
        <div class="btn">
          <span @click="noRecharge">否</span>
          <span @click="recharge">立即充值</span>
        </div>
        <div class="colose iconfont icon-x" @click="colose"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import wx from "weixin-js-sdk";
export default {
  data() {
    return {
      shopname: "",
      titleone: "",
      titletwo: "",
      goodsimgs: "",
      discount: "",
      starttime: "",
      endtime: "",
      textcontent: "",
      phone: "",
      describe1: "",
      describe2: "",
      describe3: "",
      describe4: "",
      goodsimgs2: "",
      goodsimgs3: "",
      describe5: "",
      describe6: "",
      activityp: null,
      originalp: null,

      describe7: "",
      describe8: "",
      describe9: "",
      describe10: "",
      describe11: "",
      describe12: "",
      activityp2: null,
      originalp2: null,
      goodsimgs4: "",
      goodsimgs5: "",

      describe13: "",
      describe14: "",
      describe15: "",
      describe16: "",
      describe17: "",
      describe18: "",
      activityp3: null,
      originalp3: null,
      goodsimgs6: "",
      goodsimgs7: "",
      mobile: "",
      adress: "",
      goodsimgs8: "",
      userid: "",
      messageobj: {},
      bgid: "",
      flag: false
    };
  },
  created() {
    this.init();
  },
  methods: {
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
        .post("http://www.zgstg.cn:9080/file/uploads", form)
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
        .post("http://www.zgstg.cn:9080/file/uploads", form)
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
    // 第3张图
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
        .post("http://www.zgstg.cn:9080/file/uploads", form)
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
    // 第4张图
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
        .post("http://www.zgstg.cn:9080/file/uploads", form)
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
    // 第5张图
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
        .post("http://www.zgstg.cn:9080/file/uploads", form)
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
    // 第6张图
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
        .post("http://www.zgstg.cn:9080/file/uploads", form)
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
    // 第7张图
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
        .post("http://www.zgstg.cn:9080/file/uploads", form)
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
    // 第8张图
    changeImg8(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file8").files; //获取文件
      console.log(fileObj);
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            // 字符串转数组
            var arr = res.body.urls.split(",");
            this.goodsimgs8 = arr[0]; //只取第一张
          }
        });
    },
    remove8() {
      this.goodsimgs8 = "";
    },
    //初始化
    init() {
      this.bgid = this.$route.params.id;
      if (JSON.parse(sessionStorage.getItem("leafletListtwo"))) {
        this.messageobj = JSON.parse(sessionStorage.getItem("leafletListtwo"));
        console.log(this.messageobj);
        this.adress = this.messageobj.address;
        this.mobile = this.messageobj.mobile;
        this.goodsimgs = this.messageobj.imgUrl;
        this.textcontent = this.messageobj.commodityDescription;
        this.shopname = this.messageobj.businessName;
        this.goodsimgs8 = this.messageobj.commodityUrl;
        this.discount = this.messageobj.title;
        if (this.messageobj.description) {
          var arrList = this.messageobj.description.split("%2");
          this.titleone = arrList[0];
          this.titletwo = arrList[1];
        }
        if (this.messageobj.activityTime) {
          var arrTime = this.messageobj.activityTime.split(",");
          this.starttime = arrTime[0];
          this.endtime = arrTime[1];
        }
        //---------------
        var arrlisttwo = this.messageobj.commodities;
        if (arrlisttwo[0]) {
          if (arrlisttwo[0].commodityName) {
            var desArr = arrlisttwo[0].commodityName.split("%2");
            this.describe5 = desArr[0];
            this.describe6 = desArr[1];
          }
          this.activityp = arrlisttwo[0].activityPrice;
          this.originalp = arrlisttwo[0].originalPrice;
          this.goodsimgs2 = arrlisttwo[0].imgUrl;
          var contentobj = arrlisttwo[0].commoditySupplement;
          if (contentobj.content) {
            var contentArr = contentobj.content.split("%2");
            this.describe1 = contentArr[0];
            this.describe2 = contentArr[1];
            this.describe3 = contentArr[2];
            this.describe4 = contentArr[3];
          }
          this.goodsimgs3 = contentobj.imgUrl;
        }
        //----------------
        //  var arrlisttwo = this.messageobj.commodities
        if (arrlisttwo[1]) {
          if (arrlisttwo[1].commodityName) {
            var desArr1 = arrlisttwo[1].commodityName.split("%2");
            this.describe11 = desArr1[0];
            this.describe12 = desArr1[1];
          }
          this.activityp2 = arrlisttwo[1].activityPrice;
          this.originalp2 = arrlisttwo[1].originalPrice;
          this.goodsimgs4 = arrlisttwo[1].imgUrl;
          var contentobj1 = arrlisttwo[1].commoditySupplement;
          if (contentobj1.content) {
            var contentArr = contentobj1.content.split("%2");
            this.describe7 = contentArr[0];
            this.describe8 = contentArr[1];
            this.describe9 = contentArr[2];
            this.describe10 = contentArr[3];
          }
          this.goodsimgs5 = contentobj1.imgUrl;
        }
        //--------------
        if (arrlisttwo[2]) {
          if (arrlisttwo[2].commodityName) {
            var desArr2 = arrlisttwo[2].commodityName.split("%2");
            this.describe17 = desArr2[0];
            this.describe18 = desArr2[1];
          }
          this.activityp3 = arrlisttwo[2].activityPrice;
          this.originalp3 = arrlisttwo[2].originalPrice;
          this.goodsimgs6 = arrlisttwo[2].imgUrl;
          var contentobj2 = arrlisttwo[2].commoditySupplement;
          if (contentobj2.content) {
            var contentArr = contentobj2.content.split("%2");
            this.describe13 = contentArr[0];
            this.describe14 = contentArr[1];
            this.describe15 = contentArr[2];
            this.describe16 = contentArr[3];
          }
          this.goodsimgs7 = contentobj2.imgUrl;
        }
      }
    },
    //预览
    preview() {
      this.bgid = this.$route.params.id;
      if (this.titleone) {
        if (this.titleone.length > 7) {
          Toast("主体内容字数过多");
          return false;
        }
      }
      if (this.titletwo) {
        if (this.titletwo.length > 7) {
          Toast("主体内容字数过多");
          return false;
        }
      }
      if (this.discount) {
        if (this.discount.length > 13) {
          Toast("字数过多");
          return false;
        }
      }
      var obj = {};
      obj.businessName = this.shopname;
      obj.description = this.titleone + "%2" + this.titletwo;
      obj.imgUrl = this.goodsimgs;
      obj.title = this.discount;
      obj.activityTime = this.starttime + "," + this.endtime;
      obj.commodityDescription = this.textcontent;
      obj.address = this.adress;
      obj.mobile = this.mobile;
      console.log(123);
      var arr = [];
      var obj1 = {};
      var obj2 = {};
      var obj3 = {};

      obj1.commoditySupplement = {};
      obj2.commoditySupplement = {};
      obj3.commoditySupplement = {};

      // console.log(this.describe2,this.describe2 =''?"":"%2")
      obj1.commoditySupplement.content =
        this.describe1 +
        "%2" +
        this.describe2 +
        "%2" +
        this.describe3 +
        "%2" +
        this.describe4;
      // if(obj1.commoditySupplement.content==="%2%2%2"){
      //   obj1.commoditySupplement.content =''
      // }
      obj1.commoditySupplement.imgUrl = this.goodsimgs3;
      obj1.commodityName = this.describe5 + "%2" + this.describe6;

      var re = /^[0-9]+.?[0-9]*/;
      if (this.originalp) {
        if (!re.test(this.originalp)) {
          alert("请输入数字1");
          return false;
        }
      }
      if (this.activityp) {
        if (!re.test(this.activityp)) {
          alert("请输入数字");
          return false;
        }
      }
      obj1.originalPrice = this.originalp;
      obj1.activityPrice = this.activityp;
      if (
        obj1.commoditySupplement.content === "%2%2%2" &&
        obj1.commodityName === "%2"
      ) {
        obj1 = null;
      }
      obj2.imgUrl = this.goodsimgs4;
      obj2.commoditySupplement.content =
        this.describe7 +
        "%2" +
        this.describe8 +
        "%2" +
        this.describe9 +
        "%2" +
        this.describe10;
      // if( obj2.commoditySupplement.content==="%2%2%2"){
      //   obj2.commoditySupplement.content=''
      // }
      obj2.commoditySupplement.imgUrl = this.goodsimgs5;
      obj2.commodityName = this.describe11 + "%2" + this.describe12;

      // var re = /^[0-9]+.?[0-9]*/
      if (this.originalp2) {
        if (!re.test(this.originalp2)) {
          alert("请输入数字");
          return false;
        }
      }
      if (this.activityp2) {
        if (!re.test(this.activityp2)) {
          alert("请输入数字");
          return false;
        }
      }
      obj2.originalPrice = this.originalp2;
      obj2.activityPrice = this.activityp2;
      if (
        obj2.commoditySupplement.content === "%2%2%2" &&
        obj2.commodityName === "%2"
      ) {
        obj2 = null;
      }
      obj3.imgUrl = this.goodsimgs6;
      console.log(this.describe16);
      obj3.commoditySupplement.content =
        this.describe13 +
        "%2" +
        this.describe14 +
        "%2" +
        this.describe15 +
        "%2" +
        this.describe16;
      // if(obj3.commoditySupplement.content==="%2%2%2"){
      //   obj3.commoditySupplement.content=''
      // }
      // console.log(this.describe13,1,this.describe14,2,this.describe15,3,this.describe16)
      obj3.commoditySupplement.imgUrl = this.goodsimgs7;
      obj3.commodityName = this.describe17 + "%2" + this.describe18;

      // var re = /^[0-9]+.?[0-9]*/
      if (this.originalp3) {
        if (!re.test(this.originalp3)) {
          alert("请输入数字");
          return false;
        }
      }
      if (this.activityp3) {
        if (!re.test(this.activityp3)) {
          alert("请输入数字");
          return false;
        }
      }
      obj3.originalPrice = this.originalp3;
      obj3.activityPrice = this.activityp3;
      if (
        obj3.commoditySupplement.content === "%2%2%2" &&
        obj3.commodityName === "%2"
      ) {
        obj3 = null;
      }
      arr[0] = obj1;
      arr[1] = obj2;
      arr[2] = obj3;
      arr[0].imgUrl = this.goodsimgs2;
      this.userid = localStorage.getItem("key");
      obj.userId = this.userid;
      obj.type = 6;
      obj.commodityUrl = this.goodsimgs8;
      obj.commodities = arr;
      console.log(obj);
      sessionStorage.setItem("leafletListtwo", JSON.stringify(obj));
      this.$router.push({
        path: "/creativeActivity/Leafletpreview/" + this.bgid
      });
    },
    save() {
      this.bgid = this.$route.params.id;
      if (localStorage.getItem("key")) {
        this.userid = localStorage.getItem("key");
      } else {
        Toast("请先登录");
        return false;
      }
      if (this.titleone) {
        if (this.titleone.length > 7) {
          Toast("字数过多");
          return false;
        }
      }
      if (this.titletwo) {
        if (this.titletwo.length > 7) {
          Toast("字数过多");
          return false;
        }
      }
      if (this.discount) {
        if (this.discount.length > 13) {
          Toast("字数过多");
          return false;
        }
      }
      var obj = {};
      obj.businessName = this.shopname;
      obj.description = this.titleone + "%2" + this.titletwo;
      obj.imgUrl = this.goodsimgs;
      obj.title = this.discount;
      obj.activityTime = this.starttime + "," + this.endtime;
      obj.commodityDescription = this.textcontent;
      obj.address = this.adress;
      obj.mobile = this.mobile;
      console.log(123);
      var arr = [];
      var obj1 = {};
      var obj2 = {};
      var obj3 = {};

      obj1.commoditySupplement = {};
      obj2.commoditySupplement = {};
      obj3.commoditySupplement = {};

      obj1.commoditySupplement.content =
        this.describe1 +
        "%2" +
        this.describe2 +
        "%2" +
        this.describe3 +
        "%2" +
        this.describe4;
      // if( obj1.commoditySupplement.content ==="%2%2%2"){
      //   obj1.commoditySupplement.content=''
      // }
      obj1.commoditySupplement.imgUrl = this.goodsimgs3;
      obj1.commodityName = this.describe5 + "%2" + this.describe6;

      var re = /^[0-9]+.?[0-9]*/;
      if (this.originalp) {
        if (!re.test(this.originalp)) {
          alert("请输入数字");
          return false;
        }
      }
      if (this.activityp) {
        if (!re.test(this.activityp)) {
          alert("请输入数字");
          return false;
        }
      }
      obj1.originalPrice = this.originalp;
      obj1.activityPrice = this.activityp;
      if (
        obj1.commoditySupplement.content == "%2%2%2" &&
        obj1.commodityName == "%2"
      ) {
        obj1 = null;
      }

      obj2.imgUrl = this.goodsimgs4;
      obj2.commoditySupplement.content =
        this.describe7 +
        "%2" +
        this.describe8 +
        "%2" +
        this.describe9 +
        "%2" +
        this.describe10;
      // if( obj2.commoditySupplement.content==="%2%2%2"){
      //    obj2.commoditySupplement.content=''
      // }
      obj2.commoditySupplement.imgUrl = this.goodsimgs5;
      obj2.commodityName = this.describe11 + "%2" + this.describe12;

      // var re = /^[0-9]+.?[0-9]*/
      if (this.originalp2) {
        if (!re.test(this.originalp2)) {
          alert("请输入数字");
          return false;
        }
      }
      if (this.activityp2) {
        if (!re.test(this.activityp2)) {
          alert("请输入数字");
          return false;
        }
      }
      obj2.originalPrice = this.originalp2;
      obj2.activityPrice = this.activityp2;
      if (
        obj2.commoditySupplement.content == "%2%2%2" &&
        obj2.commodityName == "%2"
      ) {
        obj2 = null;
      }
      obj3.imgUrl = this.goodsimgs6;
      obj3.commoditySupplement.content =
        this.describe13 +
        "%2" +
        this.describe14 +
        "%2" +
        this.describe15 +
        "%2" +
        this.describe16;
      // if(obj3.commoditySupplement.content==="%2%2%2"){
      //   obj3.commoditySupplement.content=""
      // }
      obj3.commoditySupplement.imgUrl = this.goodsimgs7;
      obj3.commodityName = this.describe17 + "%2" + this.describe18;

      // var re = /^[0-9]+.?[0-9]*/
      if (this.originalp3) {
        if (!re.test(this.originalp3)) {
          alert("请输入数字");
          return false;
        }
      }
      if (this.activityp3) {
        if (!re.test(this.activityp3)) {
          alert("请输入数字");
          return false;
        }
      }
      obj3.originalPrice = this.originalp3;
      obj3.activityPrice = this.activityp3;
      if (
        obj3.commoditySupplement.content == "%2%2%2" &&
        obj3.commodityName == "%2"
      ) {
        obj3 = null;
      }
      arr[0] = obj1;
      arr[1] = obj2;
      arr[2] = obj3;
      arr[0].imgUrl = this.goodsimgs2;
      console.log(obj1, obj2, obj3);
      obj.userId = this.userid;
      obj.type = 6;
      obj.commodityUrl = this.goodsimgs8;
      obj.commodities = arr;
      console.log(arr);
      obj.backGroundId = this.bgid;
      console.log(obj);
      this.url = this.$store.state.url;
      let urls = this.url + ":9988/activity/save";
      this.$http.post(urls, obj).then(res => {
        console.log(res);
        if (res.body.code == 200) {
          var id = res.body.result.id;
          localStorage.setItem("activeNum", id);
          if (id) {
            this.flag = true;
          }
          // Toast('保存成功')
          // this.$router.push({path:"/creativeActivity/LeafletsCreativeNew/"+this.bgid })
        }
      });
    },
    goback() {
      this.$router.push({ path: "/creativeActivity/CreativeActivity" });
    },
    colose() {
      this.flag = false;
      this.$router.push({
        path: "/creativeActivity/LeafletsCreativeNew/" + this.bgid
      });
    },
    noRecharge() {
      this.flag = false;
      this.$router.push({
        path: "/creativeActivity/LeafletsCreativeNew/" + this.bgid
      });
    },
    //充值
    recharge() {
      let tourls =
        location.href.split("#")[0] +
        "#" +
        "/creativeActivity/LeafletsCreativeNew/" +
        this.bgid;
      localStorage.setItem("tourls", tourls);
      this.$router.push({ path: "/creativeActivity/Recharge/" + this.bgid });
    }
  }
};
</script>
<style lang="scss" scoped>
.lctbox {
  width: 7.5rem;
  // height: 100%;
  padding-bottom: 0.2rem;
  // background-color: #351662;
  .header {
    width: 7.5rem;
    height: 11.3rem;
    background-color: pink;
    // background-image: url(../../../assets/img/lct_bgi1.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    .text {
      height: 2.4rem;
      width: 7.5rem;
      padding: 0.2rem;
      margin-top: 1.1rem;
      input {
        outline: none;
        border: none;
        width: 7.1rem;
        height: 0.6rem;
        border-radius: 0.1rem;
        background-color: #fff;
        padding: 0 0.2rem;
        margin: 0 auto 0.15rem;
      }
      input::-webkit-input-placeholder {
        color: #cccccc;
        font-size: 0.24rem;
      }
    }
    .upfiles {
      width: 5.1rem;
      height: 5.1rem;
      background-color: #666666;
      border-radius: 50%;
      margin: 0.05rem auto;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .move {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        color: #fff;
        font-size: 0.24rem;
      }
      .upimgbox {
        width: 3rem;
        height: 1.1rem;
        padding: 0.1rem;
        // background-color: pink;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .upfile {
          width: 1.3rem;
          height: 0.5rem;
          position: absolute;
          top: 0.1rem;
          left: 50%;
          //   background-color: blue;
          transform: translateX(-50%);
          opacity: 0;
        }
        span {
          width: 1.3rem;
          height: 0.5rem;
          line-height: 0.5rem;
          margin: 0 auto;
          display: block;
          border: solid 0.01rem #fff;
          border-radius: 0.5rem;
          color: #fff;
          font-size: 0.24rem;
        }
        p {
          line-height: 0.5rem;
          color: #fff;
        }
      }
    }
    .title {
      width: 4rem;
      height: 1.4rem;
      margin: 1.1rem auto 0;
      // background-color: pink;
      input {
        width: 3.7rem;
        height: 0.6rem;
        border-radius: 0.1rem;
        border: none;
        outline: none;
        padding-left: 0.1rem;
        margin: 0;
        background-color: #fff;
      }
      input::-webkit-input-placeholder {
        color: #cccccc;
        font-size: 0.24rem;
      }
      div {
        width: 3.7rem;
        height: 0.6rem;
        margin: 0.1rem auto 0;
        color: #fff;
        .time {
          width: 2.3rem;
          height: 0.6rem;
          display: block;
          float: left;
          background-color: #fff;
          color: #000;
          border-radius: 0.1rem;
          input {
            width: 0.95rem;
            height: 0.6rem;
            display: inline-block;
            // float: left;
          }
        }
        span {
          float: left;
          line-height: 0.6rem;
        }
      }
    }
    .back {
      width: 0.7rem;
      height: 0.7rem;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
      line-height: 0.7rem;
    }
  }
  .content {
    width: 7.5rem;
    padding: 0.2rem;
    .activecontent {
      width: 7.1rem;
      // height: 2.9rem;
      border-radius: 0.1rem;
      background-color: #fff;
      padding: 0.2rem;
      .titles {
        width: 6.7rem;
        height: 1.4rem;
        border-radius: 0.1rem;
        padding: 0.1rem;
      }
    }
  }
  .message {
    width: 7.1rem;
    margin-top: 0.2rem;
    padding: 0.2rem;
    border-radius: 0.1rem;
    background-color: #fff;
    li {
      width: 6.7rem;
      height: 7.1rem;
      .fristbox {
        width: 3.3rem;
        height: 3.4rem;
        padding: 0.3rem 0;
        // background-color: pink;
        float: left;
        text-align: left;
        input {
          width: 3.1rem;
          height: 0.6rem;
          border-radius: 0.1rem;
          border: solid 0.01rem #ccc;
          outline: none;
          padding-left: 0.1rem;
          margin: 0.05rem auto;
        }
      }
      .secondbox {
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 50%;
        background-color: #666;
        float: left;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .move {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%);
          color: #fff;
          font-size: 0.24rem;
        }
        .upimgbox {
          width: 3rem;
          height: 1.1rem;
          padding: 0.1rem;
          // background-color: pink;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          .upfile {
            width: 1.3rem;
            height: 0.5rem;
            position: absolute;
            top: 0.1rem;
            left: 50%;
            background-color: blue;
            transform: translateX(-50%);
            opacity: 0;
          }
          span {
            width: 1.3rem;
            height: 0.5rem;
            line-height: 0.5rem;
            margin: 0 auto;
            display: block;
            border: solid 0.01rem #fff;
            border-radius: 0.5rem;
            color: #fff;
            font-size: 0.24rem;
          }
          p {
            line-height: 0.5rem;
            color: #fff;
          }
        }
      }
      .thirdbox {
        width: 3.4rem;
        height: 3.4rem;
        margin-top: 0.3rem;
        border-radius: 50%;
        background-color: #666;
        float: left;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .move {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%);
          color: #fff;
          font-size: 0.24rem;
        }
        .upimgbox {
          width: 3rem;
          height: 1.1rem;
          padding: 0.1rem;
          // background-color: pink;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          .upfile {
            width: 1.3rem;
            height: 0.5rem;
            position: absolute;
            top: 0.1rem;
            left: 50%;
            background-color: blue;
            transform: translateX(-50%);
            opacity: 0;
          }
          span {
            width: 1.3rem;
            height: 0.5rem;
            line-height: 0.5rem;
            margin: 0 auto;
            display: block;
            border: solid 0.01rem #fff;
            border-radius: 0.5rem;
            color: #fff;
            font-size: 0.24rem;
          }
          p {
            line-height: 0.5rem;
            color: #fff;
          }
        }
      }
      .fourthbox {
        width: 3.3rem;
        height: 3.4rem;
        margin-top: 0.3rem;
        padding: 0.3rem 0;
        // background-color: pink;
        float: left;
        text-align: right;
        input {
          width: 3.1rem;
          height: 0.6rem;
          border-radius: 0.1rem;
          border: solid 0.01rem #ccc;
          outline: none;
          padding-left: 0.1rem;
          margin: 0.05rem auto;
        }
        .price {
          float: right;
          span {
            float: left;
            line-height: 0.6rem;
            margin-top: 0.1rem;
            input {
              width: 2.2rem;
              height: 0.6rem;
              margin: 0;
              padding-left: 0.2rem;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 7.1rem;
    height: 1.5rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    padding: 0.15rem 0.2rem;
    background-color: #fff;
    .imgsbox {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 0.1rem;
      //   background-color: #fff;
      //   padding: 0.1rem;
      float: left;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .move {
        width: 0.5rem;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        position: absolute;
        top: 0.01rem;
        right: 0.01rem;
        font-size: 0.24rem;
        color: #fff;
      }
      .upewm {
        width: 1.2rem;
        height: 1.2rem;
        // border: solid 0.1rem #fff;
        background-color: #666;
        position: absolute;
        top: 0rem;
        left: 0rem;
        line-height: 1.2rem;
        span {
          color: #fff;
          // line-height: 0.4rem;
        }
        .upewmimg {
          width: 1.2rem;
          height: 1.2rem;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
      }
    }
    .messagebox {
      width: 5.5rem;
      height: 1.2rem;
      float: left;
      // background-color: pink;
      text-align: left;
      padding-left: 0.2rem;
      .phone {
        width: 3rem;
        height: 0.5rem;
        background-color: #fff;
        border-radius: 0.1rem;
        outline: none;
        border: solid 0.01rem #999;
        padding: 0;
        left: 0;
        padding-left: 0.1rem;
      }
      .adress {
        width: 5.3rem;
        height: 0.5rem;
        margin-top: 0.1rem;
        background-color: #fff;
        border-radius: 0.1rem;
        outline: none;
        border: solid 0.01rem #999;
        padding: 0;
        left: 0;
        padding-left: 0.1rem;
      }
      input::-webkit-input-placeholder {
        color: #999999;
        font-size: 0.24rem;
      }
    }
  }
  .showmessage {
    width: 7.1rem;
    height: 0.88rem;
    margin: 0.2rem auto 0;
    border-radius: 0.1rem;
    display: flex;
    justify-content: space-between;
    span {
      width: 3.5rem;
      height: 0.88rem;
      line-height: 0.88rem;
      font-size: 0.3rem;
      background-color: #fff;
      color: #666;
      border-radius: 0.1rem;
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
.bgc2 {
  background-color: #351662;
}
.bgc3 {
  background-color: #c5213a;
}
.bgc4 {
  background-color: #043188;
}
.bgc5 {
  background-color: #981c0c;
}
.bgc6 {
  background-color: #211c5a;
}
.bgi2 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi1.png);
}
.bgi3 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi2.png);
}
.bgi4 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi3.png);
}
.bgi5 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi4.png);
}
.bgi6 {
  background-image: url(http://www.zgstg.cn/2019-01-18/lct_bgi5.png);
}
.color2 {
  color: #9966ff;
}
.color3 {
  color: #ff1818;
}
.color4 {
  color: #022b87;
}
.color5 {
  color: #e00c03;
}
.color6 {
  color: #404b8d;
}
</style>
