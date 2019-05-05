<template>
  <div class="LeafletsCreative" :class="'bgc'+bgi">
    <mt-header title="电子传单制作" :class="'bgc'+bgi">
      <router-link to="/creativeActivity/CreativeActivity" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button slot="right"></mt-button> -->
    </mt-header>
    <div class="header">
      <div class="text">
        <input type="text" placeholder="商家名称" v-model="obj.shopname">
        <input type="text" placeholder="标题，限8个字内" v-model="obj.title">
        <input type="text" placeholder="折扣信息，限12字内" v-model="obj.discount" >
        <input type="text" placeholder="活动时间" v-model="obj.time">
        <input type="text" placeholder="活动信息" v-model="obj.active">
        <input type="text" placeholder="副标题" v-model="obj.titles">
        <input type="text" placeholder="主体内容，限15字内" v-model="obj2.maincontent">
        <input type="text" placeholder="内容，限15字内" v-model="obj2.content">
        <input type="text" placeholder="主体内容，限15字内" v-model="obj2.maincontenttwo">
        <input type="text" placeholder="内容，限15字内" v-model="obj2.contenttwo">
      </div>
      <div class="imgbox">
        <div class="imgs">
          <img :src="goodsimgs" alt>
          <span class="iconfont icon-x" v-show="goodsimgs.length == 0?false:true" @click="remove"></span>
        </div>
        <div class="upbox" @change="changeImg" v-show="goodsimgs.length == 0?true:false">
          <span class="iconfont icon-jia">上传</span>
          <input type="file" class="upflies" multiple="true" id="file1" name="file1">
        </div>
        <div class="imgone dwimg">
          <img :src="goodsimgs2" alt>
          <span class="iconfont icon-x" v-show="goodsimgs2.length == 0?false:true" @click="remove2"></span>
          <div class="upboxone" @change="changeImg2" v-show="goodsimgs2.length == 0?true:false">
            上传
            <input type="file" class="upfliesone" multiple="true" id="file2" name="file2">
          </div>
        </div>
        <div class="imgtwo dwimg">
          <img :src="goodsimgs3" alt>
          <span class="iconfont icon-x" v-show="goodsimgs3.length == 0?false:true" @click="remove3"></span>
          <div class="upboxone" @change="changeImg3" v-show="goodsimgs3.length == 0?true:false">
            上传
            <input type="file" class="upfliesone" multiple="true" id="file3" name="file3">
          </div>
        </div>
        <div class="imgthree">
          <img :src="goodsimgs4" alt>
          <span class="iconfont icon-x" v-show="goodsimgs4.length == 0?false:true" @click="remove4"></span>
          <div class="upboxthree" @change="changeImg4" v-show="goodsimgs4.length == 0?true:false">
            上传
            <input type="file" class="upfliesthree" multiple="true" id="file4" name="file4">
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="upimgbox">
            <img :src="goodsimgs5" alt>
            <span class="iconfont icon-x move" v-show="goodsimgs5.length == 0?false:true" @click="remove5"></span>
            <div class="upimgfilebox" @change="changeImg5" v-show="goodsimgs5.length == 0?true:false">
              <span class="iconfont icon-jia">上传</span>
              <input type="file" class="upimgfiles" multiple="true" id="file5" name="file5">
            </div>
          </div>
          <div class="activep">
            <span>活动价
              <input type="text" v-model="activityp">
            </span>
            <span>原价
              <input type="text" v-model="originalp">
            </span>
          </div>
        </li>
        <li>
          <div class="upimgbox">
            <img :src="goodsimgs6" alt>
            <span class="iconfont icon-x move" v-show="goodsimgs6.length == 0?false:true" @click="remove6"></span>
            <div class="upimgfilebox" @change="changeImg6" v-show="goodsimgs6.length == 0?true:false">
              <span class="iconfont icon-jia">上传</span>
              <input type="file" class="upimgfiles" multiple="true" id="file6" name="file6">
            </div>
          </div>
          <div class="activep" >
            <span>活动价
              <input type="text" v-model="activityp2">
            </span>
            <span>原价
              <input type="text" v-model="originalp2">
            </span>
          </div>
        </li>
        <li>
          <div class="upimgbox">
            <img :src="goodsimgs7" alt>
            <span class="iconfont icon-x move" v-show="goodsimgs7.length == 0?false:true" @click="remove7"></span>
            <div class="upimgfilebox" @change="changeImg7" v-show="goodsimgs7.length == 0?true:false">
              <span class="iconfont icon-jia">上传</span>
              <input type="file" class="upimgfiles" multiple="true" id="file7" name="file7">
            </div>
          </div>
          <div class="activep">
            <span>活动价
              <input type="text" v-model="activityp3">
            </span>
            <span>原价
              <input type="text" v-model="originalp3">
            </span>
          </div>
        </li>
         <li>
          <div class="upimgbox">
            <img :src="goodsimgs8" alt>
            <span class="iconfont icon-x move" v-show="goodsimgs8.length == 0?false:true" @click="remove8"></span>
            <div class="upimgfilebox" @change="changeImg8" v-show="goodsimgs8.length == 0?true:false">
              <span class="iconfont icon-jia">上传</span>
              <input type="file" class="upimgfiles" multiple="true" id="file8" name="file8">
            </div>
          </div>
          <div class="activep">
            <span>活动价
              <input type="text" v-model="activityp4">
            </span>
            <span>原价
              <input type="text" v-model="originalp4">
            </span>
          </div>
        </li>
        <li>
          <div class="upimgbox">
            <img :src="goodsimgs9" alt>
            <span class="iconfont icon-x move" v-show="goodsimgs9.length == 0?false:true" @click="remove9"></span>
            <div class="upimgfilebox" @change="changeImg9" v-show="goodsimgs9.length == 0?true:false">
              <span class="iconfont icon-jia">上传</span>
              <input type="file" class="upimgfiles" multiple="true" id="file9" name="file9">
            </div>
          </div>
          <div class="activep">
            <span>活动价
              <input type="text" v-model="activityp5">
            </span>
            <span>原价
              <input type="text" v-model="originalp5">
            </span>
          </div>
        </li>
        <li>
          <div class="upimgbox">
            <img :src="goodsimgs10" alt>
            <span class="iconfont icon-x move" v-show="goodsimgs10.length == 0?false:true" @click="remove10"></span>
            <div class="upimgfilebox" @change="changeImg10" v-show="goodsimgs10.length == 0?true:false">
              <span class="iconfont icon-jia">上传</span>
              <input type="file" class="upimgfiles" multiple="true" id="file10" name="file10">
            </div>
          </div>
          <div class="activep">
            <span>活动价
              <input type="text" v-model="activityp6">
            </span>
            <span>原价
              <input type="text"  v-model="originalp6">
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="imgsbox">
         <img :src="goodsimgs11" alt>
          <span class="iconfont icon-x move" v-show="goodsimgs11.length == 0?false:true" @click="remove11"></span>
        <div class="upewm" @change="changeImg11" v-show="goodsimgs11.length == 0?true:false">
          <span>上传店家二维码</span>
          <input type="file" class="upewmimg" multiple="true" id="file11" name="file11">
        </div>
      </div>
      <div class="messagebox">
        <input type="text" class="phone" placeholder="商家电话" v-model="mobile">
        <input type="text" class="adress" placeholder="商家地址" v-model="address">
      </div>
    </div>
    <div class="showmessage">
      <span @click="topreview">预览</span>
      <span @click="save">保存</span>
    </div>
    <div class="guidebox" v-show="flag">
        <div class="imgboxs">
            <img src="../../../assets/img/popup_hongbao2.png" alt="">
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
export default {
  data() {
    return {
      goodsimgs: "",
      goodsimgs2: "",
      goodsimgs3: "",
      goodsimgs4: "",
    
      goodsimgs5:"",
      goodsimgs6:"",
      goodsimgs7:"",
      goodsimgs8:"",
      goodsimgs9:"",
      goodsimgs10:"",
      goodsimgs11:"",
      activityp:"",
      originalp:"",
       activityp2:"",
      originalp2:"",
       activityp3:"",
      originalp3:"",
       activityp4:"",
      originalp4:"",
       activityp5:"",
      originalp5:"",
       activityp6:"",
      originalp6:"",
      mobile:'',
      address:'',
      obj:{
          shopname:'',
          title:'',
          discount:'',
          time:'',
          active:'',
          titles:'',
      },
      obj2:{
          maincontent:'',
          content:'',
          maincontenttwo:'',
          contenttwo:''
      },
      url:'',
      userid:'',
      leafletList:{},
      bgi:'',
      flag:false
    };
  },
  created(){
    this.init()
  },
  methods: {
    // 图片上传
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
    // 图片上传
    changeImg2(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file2").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
    // 图片上传
    changeImg3(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file3").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
    //图片上传
    changeImg4(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file4").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
    //图片上传5
    changeImg5(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file5").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
     //图片上传6
    changeImg6(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file6").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
      //图片上传7
    changeImg7(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file7").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
     //图片上传8
    changeImg8(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file8").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
    //图片上传9
    changeImg9(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file9").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
      //图片上传10
    changeImg10(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file10").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
    //图片上传11
     changeImg11(e) {
      var form = new FormData();
      var fileObj = document.getElementById("file11").files; //获取文件
      var arr = [];
      for (let i in fileObj) {
        // arr.push(fileObj[i]);
        form.append("files", fileObj[i]);
      }
      this.$http
        .post("http://www.zgstg.cn:9080/file/uploads", form)
        .then(res => {
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
    //初始化
    init(){
        // 获取
        this.bgi = this.$route.params.id
        if(JSON.parse(sessionStorage.getItem('leafletList'))){
          this.leafletList = JSON.parse(sessionStorage.getItem('leafletList'))
          // console.log(sessionStorage.getItem('leafletList'))
          this.goodsimgs = this.leafletList.imgUrl
          let headerimg = this.leafletList.detailedImgUrl.split(',')
          // console.log(this.leafletList.detailedImgUrl)
          this.goodsimgs2 = headerimg[0]
          this.goodsimgs3 = headerimg[1]
          this.goodsimgs4 = headerimg[2]

          let contentmessage=this.leafletList.commodities
          this.goodsimgs5 =contentmessage[0].imgUrl
          this.originalp =contentmessage[0].originalPrice
          this.activityp =contentmessage[0].activityPrice

          this.goodsimgs6 =contentmessage[1].imgUrl
           this.originalp2 =contentmessage[1].originalPrice
          this.activityp2 =contentmessage[1].activityPrice
            this.goodsimgs7 =contentmessage[2].imgUrl
           this.originalp3 =contentmessage[2].originalPrice
          this.activityp3 =contentmessage[2].activityPrice

           this.goodsimgs8 =contentmessage[3].imgUrl
           this.originalp4 =contentmessage[3].originalPrice
          this.activityp4 =contentmessage[3].activityPrice
           this.goodsimgs9 =contentmessage[4].imgUrl
           this.originalp5 =contentmessage[4].originalPrice
          this.activityp5 =contentmessage[4].activityPrice
           this.goodsimgs10 =contentmessage[5].imgUrl
           this.originalp6 =contentmessage[5].originalPrice
          this.activityp6 =contentmessage[5].activityPrice

          this.goodsimgs11 =this.leafletList.commodityUrl
          this.obj.shopname = this.leafletList.businessName
          this.obj.title =this.leafletList.title
          this.obj.discount =this.leafletList.description 
          this.obj.time = this.leafletList.activityTime
          this.obj.active = this.leafletList.commodityDescription
          this.obj.titles =this.leafletList.commodityName
          this.mobile =this.leafletList.mobile
          this.address = this.leafletList.address

          let headermessage = this.leafletList.activityInfoList
          this.obj2.content = headermessage[0].obtain
          this.obj2.maincontent = headermessage[0].conditions
          this.obj2.contenttwo = headermessage[1].obtain
          this.obj2.maincontenttwo = headermessage[1].conditions
        }
    },
    //点击预览
    topreview(){
      this.bgi = this.$route.params.id
       var obj3 ={}
        obj3.originalPrice = this.originalp
        obj3.activityPrice = this.activityp
        obj3.imgUrl = this.goodsimgs5
        var obj4 ={}
        obj4.originalPrice = this.originalp2
        obj4.activityPrice = this.activityp2
        obj4.imgUrl = this.goodsimgs6
        var obj5 ={}
         obj5.originalPrice = this.originalp3
        obj5.activityPrice = this.activityp3
        obj5.imgUrl = this.goodsimgs7
         var obj6 ={}
         obj6.originalPrice = this.originalp4
        obj6.activityPrice = this.activityp4
        obj6.imgUrl = this.goodsimgs8
         var obj7 ={}
         obj7.originalPrice = this.originalp5
        obj7.activityPrice = this.activityp5
        obj7.imgUrl = this.goodsimgs9
          var obj8 ={}
         obj8.originalPrice = this.originalp6
        obj8.activityPrice = this.activityp6
        obj8.imgUrl = this.goodsimgs10
        var arr = [] //图片价格信息
        arr[0] = obj3
        arr[1] = obj4
        arr[2] = obj5
        arr[3] = obj6
        arr[4] = obj7
        arr[5] = obj8
        var arr1 = []
        var obj9={}
        obj9.conditions = this.obj2.maincontent
        obj9.obtain = this.obj2.content
        obj9.sequence = 1
        var  obj10 = {}
        obj10.conditions = this.obj2.maincontenttwo
        obj10.obtain = this.obj2.contenttwo
         obj10.sequence = 2
        arr1[0] = obj9
        arr1[1] = obj10
        var detailedImgUrl = this. goodsimgs2 +','+this.goodsimgs3+','+this.goodsimgs4
       this.userid = localStorage.getItem('key')
        var updata = {businessName:this.obj.shopname,title:this.obj.title,description:this.obj.discount,activityTime:this.obj.time,commodityDescription:this.obj.active,commodityName:this.obj.titles,activityInfoList:arr1,imgUrl:this.goodsimgs,detailedImgUrl:detailedImgUrl,commodities:arr,commodityUrl:this.goodsimgs11,mobile:this.mobile,address:this.address,type:5,userId:this.userid}
        sessionStorage.setItem('leafletList', JSON.stringify(updata))
         this.$router.push({ path: "/creativeActivity/leaflets/"+this.bgi})
    },
    //点击保存
    save() {
        // obj2加顺序
        var obj3 ={}
        obj3.originalPrice = this.originalp
        obj3.activityPrice = this.activityp
        obj3.imgUrl = this.goodsimgs5
        var obj4 ={}
        obj4.originalPrice = this.originalp2
        obj4.activityPrice = this.activityp2
        obj4.imgUrl = this.goodsimgs6
        var obj5 ={}
         obj5.originalPrice = this.originalp3
        obj5.activityPrice = this.activityp3
        obj5.imgUrl = this.goodsimgs7
         var obj6 ={}
         obj6.originalPrice = this.originalp4
        obj6.activityPrice = this.activityp4
        obj6.imgUrl = this.goodsimgs8
         var obj7 ={}
         obj7.originalPrice = this.originalp5
        obj7.activityPrice = this.activityp5
        obj7.imgUrl = this.goodsimgs9
          var obj8 ={}
         obj8.originalPrice = this.originalp6
        obj8.activityPrice = this.activityp6
        obj8.imgUrl = this.goodsimgs10
        var arr = [] //图片价格信息
        arr[0] = obj3
        arr[1] = obj4
        arr[2] = obj5
        arr[3] = obj6
        arr[4] = obj7
        arr[5] = obj8
        var arr1 = []
        var obj9={}
        obj9.conditions = this.obj2.maincontent
        obj9.obtain = this.obj2.content
        obj9.sequence = 1
        var  obj10 = {}
        obj10.conditions = this.obj2.maincontenttwo
        obj10.obtain = this.obj2.contenttwo
         obj10.sequence = 2
        arr1[0] = obj9
        arr1[1] = obj10
        var detailedImgUrl = this. goodsimgs2 +','+this.goodsimgs3+','+this.goodsimgs4
       this.userid = localStorage.getItem('key')
        var updata = {businessName:this.obj.shopname,title:this.obj.title,description:this.obj.discount,activityTime:this.obj.time,commodityDescription:this.obj.active,commodityName:this.obj.titles,activityInfoList:arr1,imgUrl:this.goodsimgs,detailedImgUrl:detailedImgUrl,commodities:arr,commodityUrl:this.goodsimgs11,mobile:this.mobile,address:this.address,type:5,userId:this.userid,backGroundId:this.bgi}
        console.log(updata)
           this.url = this.$store.state.url
            let urls = this.url + ':9988/activity/save'
            this.$http.post(urls,updata).then(res=>{
                console.log(res)
                if(res.body.code ===200){
                  this.bgi = res.body.result.backGroundId
                   var id =res.body.result.id
                   localStorage.setItem('activeNum',id)
                   if(id){
                    this.flag = true
                  }
                }
            })
    },
    //立即充值
    recharge(){
      //存放保存成功后要跳转的地址
     let tourls = location.href.split('#')[0] +'#'+'/creativeActivity/leaflets/'+this.bgi
     localStorage.setItem('tourls',tourls)
       this.$router.push({path:"/creativeActivity/Recharge/"+this.bgi })
    },
    noRecharge(){
      this.flag = false
      // this.$router.push({ path: "/creativeActivity/leaflets/"+this.bgi});
      this.$router.push({ path: "/creativeActivity/activitylist"})
      
    },
    colose(){
      this.flag = false
      this.$router.push({ path: "/creativeActivity/activitylist"});
    }
  }
};
</script>
<style lang="scss" scoped>
.LeafletsCreative {
  width: 7.5rem;
  // height: 100%;
  background-color: #a21d12;
  .top {
    width: 7.5rem;
    height: 0.88rem;
  }
  .header {
    width: 7.5rem;
    padding: 0 0.2rem;
    .text {
      width: 3.5rem;
      height: 5.6rem;
      // background-color: pink;
      margin-right: 0.1rem;
      float: left;
      input {
        width: 3.3rem;
        height: 0.47rem;
        outline: none;
        padding: 0;
        margin: 0.08rem 0 0 0;
        // background-color: #fff;
        border: solid 0.02rem #fff;
        border-radius: 0.1rem;
        padding-left: 0.1rem;
        color: #fff;
      }
      input::-webkit-input-placeholder {
        color: #999999;
        font-size: 0.24rem;
        //    padding-left: 0.2rem;
      }
    }
    .imgbox {
      width: 3.5rem;
      height: 5.6rem;
      background-color: #fff;
      padding: 0 0.05rem;
      float: left;
      position: relative;
      // overflow: hidden;
      .imgs {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        background-color: #999999;
        span {
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.5rem;
          position: absolute;
          top: 0.1rem;
          right: 0.1rem;
          font-size: 0.24rem;
          color: #fff;
        }
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .upbox {
        width: 1.3rem;
        height: 0.5rem;
        // background-color: pink;
        border: solid 0.01rem #fff;
        border-radius: 0.5rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        span {
          color: #fff;
          font-size: 0.24rem;
          line-height: 0.45rem;
        }
        .upflies {
          width: 1.3rem;
          height: 0.5rem;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
      }
      .dwimg {
        width: 1.7rem;
        height: 1.7rem;
        background-color: #999;
        border: solid 0.05rem #fff;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        overflow: hidden;
        color: #fff;
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        span {
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.5rem;
          position: absolute;
          top: 0rem;
          left: 0.6rem;
          font-size: 0.24rem;
          color: #fff;
        }
        .upboxone {
          width: 100%;
          height: 100%;
          line-height: 1.6rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          overflow: hidden;
          .upfliesone {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
          }
        }
      }
      .imgone {
        left: -0.2rem;
      }
      .imgtwo {
        right: -0.1rem;
      }
      .imgthree {
        width: 1.5rem;
        height: 1.5rem;
        background-color: #999;
        border: solid 0.05rem #fff;
        border-radius: 50%;
        position: absolute;
        bottom: 0.1rem;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        overflow: hidden;
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        span {
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.5rem;
          position: absolute;
          top: 0rem;
          left: 0.5rem;
          font-size: 0.24rem;
          color: #fff;
        }

        .upboxthree {
          width: 100%;
          height: 100%;
          line-height: 1.4rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          overflow: hidden;
          .upfliesthree {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
          }
        }
      }
    }
  }
  .content {
    width: 7.5rem;
    padding: 0 0.2rem;
    overflow: hidden;
    ul {
      li {
        margin: 0.2rem 0;
        width: 3.5rem;
        height: 3.1rem;
        float: left;
        //   background-color: pink;
        .move{
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.5rem;
          position: absolute;
          top: 0.1rem;
          right: 0.1rem;
          font-size: 0.24rem;
          color: #fff;
        }
        .upimgbox {
          width: 3.5;
          height: 2.6rem;
          border: solid 0.1rem #fff;
          background-color: #999;
          position: relative;
          overflow: hidden;
          img{
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .upimgfilebox {
            width: 1.3rem;
            height: 0.5rem;
            border-radius: 0.5rem;
            border: solid 0.01rem #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            span {
              color: #fff;
              font-size: 0.24rem;
              line-height: 0.45rem;
            }
            .upimgfiles {
              width: 1.3rem;
              height: 0.5rem;
              border-radius: 0.5rem;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0;
            }
          }
        }
        .activep {
          width: 3.5rem;
          height: 0.5rem;
          border: solid 0.01rem #fff;
          padding: 0 0.2rem;
          display: flex;
          justify-content: space-between;
          span {
            line-height: 0.5rem;
            color: #fff;
            input {
              width: 0.7rem;
              height: 0.4rem;
              margin: 0;
              padding: 0 0 0 0.1rem;
              outline: none;
              display: inline-block;
              background-color: #fff;
              border: none;
              border-radius: 0.1rem;
              //   color: #999;
            }
          }
        }
      }
      li:nth-child(2n + 1) {
        margin-right: 0.1rem;
      }
    }
  }
  .footer {
    width: 7.5rem;
    height: 1.5rem;
    padding: 0.1rem 0.2rem;
    // background-color: #64110a;
    .imgsbox {
      width: 1.2rem;
      height: 1.2rem;
      background-color: #fff;
      padding: 0.1rem;
      float: left;
      position: relative;
      overflow: hidden;
       img{
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
         .move{
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
        width: 1rem;
        height: 1rem;
        // border: solid 0.1rem #fff;
        background-color: #999;
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        line-height: 0.5rem;
        span {
          color: #fff;
          // line-height: 0.4rem;
        }
        .upewmimg {
          width: 1rem;
          height: 1rem;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
      }
    }
    .messagebox {
      width: 5.9rem;
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
        border: none;
        padding: 0;
        left: 0;
        padding-left: 0.1rem;
      }
      .adress {
        width: 5.5rem;
        height: 0.5rem;
        margin-top: 0.1rem;
        background-color: #fff;
        border-radius: 0.1rem;
        outline: none;
        border: none;
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
    width: 7.5rem;
    height: 0.88rem;
    // background-color: #64110a;
    display: flex;
    justify-content: space-between;
    padding: 0.15rem 0.3rem;

    span {
      width: 3rem;
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.3rem;
      color: #fff;
      border-radius: 0.5rem;
      border: solid 0.02rem #fff;
    }
  }
   .guidebox{
    width: 7.5rem;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.6);
    .imgboxs{
      width: 5.3rem;
      height: 5.2rem;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-74%);
      img{
        width: 100%;
      }
      .btn{
        width: 5.3rem;
        height:0.9rem ;
        position: absolute;
        bottom: 0.2rem;
        left: 0;
        display: flex;
        justify-content: space-around;
        span{
          width: 2.2rem;
          height: 0.88rem;
          display: block;
          border-radius: 0.88rem;
          line-height: 0.88rem;
          background-color: #FFCB2C;
          color: #6E3C06;
        }
      }
      .colose{
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        border:solid 0.02rem #fff;
        color: #fff;
        text-align: center;
        line-height: 0.36rem;
        position: absolute;
        top:0;
        right: 0;
        font-size: 0.24rem;
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
