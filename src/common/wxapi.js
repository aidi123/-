import wx from 'weixin-js-sdk'
// import Vue from 'vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)	
// let _th = this
// _th.$http.post('http://10.10.10.136:9080/test/token').then(res=>{
//   console.log(123)
// })
function getJSSDK(url, dataForWeixin) {
  console.log(123)
  this.$http.post('http://10.10.10.136:9080/test/token').then(res=>{
   console.log(res)
    wx.config({
      debug: false, // 开启调试模式
      appId: 'wxe5032680ba98d730', // 必填，公众号的唯一标识
      timestamp:res.body.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.body.noncestr, // 必填，生成签名的随机串
      signature: res.body.signature, // 必填，签名，见附录1
      jsApiList:res.body.jsapi_ticket  // 必填，需要使用的JS接口列表
    })
    wx.ready(function () {
      wx.onMenuShareAppMessage({
        title: dataForWeixin.title,
        desc: dataForWeixin.desc,
        link: dataForWeixin.linkurl,
        imgUrl: dataForWeixin.img,
        trigger: function trigger(res) { },
        success: function success(res) {
          console.log('已分享');
        },
        cancel: function cancel(res) {
          console.log('已取消');
        },
        fail: function fail(res) {
          alert(JSON.stringify(res));
        }
      });
      // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareTimeline({
        title: dataForWeixin.title,
        link: dataForWeixin.linkurl,
        imgUrl: dataForWeixin.img,
        trigger: function trigger(res) {
          // alert('用户点击分享到朋友圈');
        },
        success: function success(res) {
          //alert('已分享');
        },
        cancel: function cancel(res) {
          //alert('已取消');
        },
        fail: function fail(res) {
          alert(JSON.stringify(res));
        }
      });
  // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareQQ({
        title: dataForWeixin.title,
        desc: dataForWeixin.desc,
        link: dataForWeixin.linkurl,
        imgUrl: dataForWeixin.img,
        trigger: function trigger(res) {
          //alert('用户点击分享到QQ');
        },
        complete: function complete(res) {
          alert(JSON.stringify(res));
        },
        success: function success(res) {
          //alert('已分享');
        },
        cancel: function cancel(res) {
          //alert('已取消');
        },
        fail: function fail(res) {
          //alert(JSON.stringify(res));
        }
      });
      // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareWeibo({
        title: dataForWeixin.title,
        desc: dataForWeixin.desc,
        link: dataForWeixin.linkurl,
        imgUrl: dataForWeixin.img,
        trigger: function trigger(res) {
          //alert('用户点击分享到微博');
        },
        complete: function complete(res) {
          // alert(JSON.stringify(res));
        },
        success: function success(res) {
          //alert('已分享');
        },
        cancel: function cancel(res) {
          // alert('已取消');
        },
        fail: function fail(res) {
        // alert(JSON.stringify(res));
        }
      });
    })
    wx.error(function (res) {
      alert("微信验证失败");
    });
  })
  // http.get('/OAutho/JsSdkConfig?url=' + encodeURIComponent(url)).then(res => {
  // })
}
export default {
  // 获取JSSDK
  getJSSDK: getJSSDK
}
