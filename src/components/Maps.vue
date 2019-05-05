<template>
  <div class="maps">
      <!-- <mt-header title="编辑商品">
            <span slot="left" @click="goback">
                <mt-button icon="back"></mt-button>
            </span>
             <mt-button slot="right" @click="ok">保存</mt-button>
        </mt-header> -->
        <!-- <div class="sousou">
           <input type="text" id="suggestId" name="address_detail" placeholder="请输入地址" v-model="address_detail" class="input_style">
           <span @click="ok">保存</span>
        </div> -->
   
     <div>
          <div id="allmap" ref="allmap"></div>
     </div>

  </div>
</template>
 
<script>
import { Toast } from 'mint-ui';
export default {
  // name: 'App',
  data() {
    return {
      address_detail: null, //详细地址
      center: { lng: 116.404, lat: 39.915 },
      // myaddress:{lng:'',lat:''}
      lng: "",
      lat: "",
      n:{},
      userlocation:''
    };
  },
  created() {},
  methods: {
    map() {
      let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
      let point = new BMap.Point(this.center.lng, this.center.lat);
      map.centerAndZoom(point, 11); // 初始化地图,设置中心点坐标和地图级别
      map.addControl(
        new BMap.MapTypeControl({
          //添加地图类型控件
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      //---------
      var th = this;
      // 创建一个自动完成的对象
      // var ac = new BMap.Autocomplete({ //建立一个自动完成的对象
      //   input: "suggestId",
      //   location: map
      // });
      // var myValue;
      // ac.addEventListener("onconfirm", function(e) {
      //   //鼠标点击下拉列表后的事件   失去焦点时触发
      //     var _value = e.item.value;
      //     myValue =
      //       _value.province +
      //       _value.city +
      //       _value.district +
      //       _value.street +
      //       _value.business;
      //     // this.address_detail = myValue;
      //     setPlace();
       
        
      // });
      // function setPlace() {
      //   map.clearOverlays(); //清除地图上所有覆盖物
      //   function myFun() {
      //     th.userlocation = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果(坐标)
      //     map.centerAndZoom(th.userlocation, 18);
      //     map.addOverlay(new BMap.Marker(th.userlocation)); //添加标注
      //   let geocoder= new BMap.Geocoder();  //创建地址解析器的实例
      //   geocoder.getLocation(th.userlocation,rs=>{
      //     // console.log(rs.address)
      //     th.address_detail = rs.address;
      //   })
      //   }

      //   var local = new BMap.LocalSearch(map, {
      //     //智能搜索
      //     onSearchComplete: myFun
      //   });
      //   local.search(myValue);
      //   //测试输出坐标（指的是输入框最后确定地点的经纬度）
      //   map.addEventListener("click", function(e) {
      //     //经度
      //     console.log(th.userlocation.lng);
      //     //维度
      //     console.log(th.userlocation.lat);
      //     th.center.lng = th.userlocation.lng
      //     th.center.lat = th.userlocation.lat 
      //   });
       
      // }
      //----------------------------------------------
    //   //  点击定位 获取经纬度
    //     map.addEventListener("click", function (e) {//地图右键单击事件，左键为click
    //     console.log(123)
    //     map.clearOverlays();//添加标注前清空以前的所有标注
    //     this.position = e.point.lng + "," + e.point.lat;
    //     console.log(this.position)
    //     var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));        // 创建标注     
    //     map.addOverlay(marker);
    //     // 上传到公共管理模块
    //     // if(this.position){
    //       // this.$store.state.position =this.position
    //       th.$store.commit('mapposition',this.position)
    //     // }
    // });
    //  // TODO: 触摸移动时触发此事件 此时开启可以拖动。虽然刚初始化该地图不可以拖动，但是可以触发拖动事件。
    //     map.addEventListener("touchmove", function (e) {
    //       map.enableDragging();
    //     });
    //     // TODO: 触摸结束时触发次此事件  此时开启禁止拖动
    //     map.addEventListener("touchend", function (e) {
    //       map.disableDragging();
    //     });
    //     map.disableDragging();
 
    //     map.enableScrollWheelZoom(true);
      //定位自己的位置--------------------------------
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          // alert('您的位置：'+r.point.lng+','+r.point.lat);
          th.lng = r.point.lng;
          th.lat = r.point.lat;
          // 根据坐标得到地址描述
          //开车导航
          var myGeo = new BMap.Geocoder();
          console.log(th.lat, th.lng);
          // var positions = th.lat +','+ th.lng 
          localStorage.setItem('storeLat',th.lat)
          localStorage.setItem('storeLong',th.lng)
          myGeo.getLocation(new BMap.Point(th.lng, th.lat), function(result) {
            if (result) {
              // console.log(result);
              localStorage.setItem('city',result.addressComponents.city)
              localStorage.setItem('district',result.addressComponents.district)
              localStorage.setItem('province',result.addressComponents.province)
              var driving = new BMap.DrivingRoute(map, {
                renderOptions: {
                  map: map,
                  panel: "results",
                  autoViewport: true
                }
              });
              // console.log(th.address_detail);
              driving.search(result, th.address_detail);
            }
          });
        } else {
          alert("failed" + this.getStatus());
        }
      });
    },
    goback(){
      // this.$router.push({
      //   path:'/mycard/initstoremessage'
      // })
      this.$router.go(-1)
    },
    ok() {
      this.map();
      if(this.address_detail != null){
        Toast('保存成功')
        // 把地址传到公共管理模块
       
        this.$router.push({
          path:'mycard/initstoremessage'
        })
        console.log(this.address_detail)
        this.$store.commit('addressmap',this.address_detail)
        // this.$store.state.address = this.address_detail
        this.$store.state.lng = this.center.lng //输入的坐标
         this.$store.state.lat = this.center.lat //输入的坐标
      }
    }
  },
  mounted() {
    this.map();
  },
  // watch:{
  //   address_detail(newval){
  //     console.log(newval)
  //   }
  // }
};
</script>
 
<style >
/* .maps{
  height:13.3rem ;
  background-color: #fff;
} */
#allmap {
  /* height: 500px; */
  overflow: hidden;
}
/* .mint-header {
  width: 7.5rem;
  height: 0.88rem;
  line-height: 0.88rem;
  padding: 0 0.4rem;
  background-color: #fff;
  color: #333333;
  font-size: 0.3rem;
}
.mint-header .mint-button {
  height: 0.88rem;
  font-size: 0.2rem;
  color: #ff8200;
} */
/* .sousou{
  width: 7.5rem;
  height: 0.88rem;
  padding: 0 0.4rem;
  line-height: 0.88rem;
  text-align: left;
  margin: 0.2rem 0;
  box-shadow:0.01rem 0rem 0.05rem #ccc;
} */
/* .sousou input{
  padding: 0;
  margin: 0;
  width: 5rem;
  height: 0.6rem;
  outline: none;
  margin: auto 0;
}
.sousou span{
  line-height: 0.88rem;
  float: right;
  
}
.sousou input::-webkit-input-placeholder {
  font-size: 0.24rem;
  font-family: NotoSansHans-Regular;
  font-weight: 400;
  color: rgba(204, 204, 204, 1);
} */
</style>