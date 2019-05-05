<template>
  <div class="tabbarbox">
    <router-view></router-view>  
    <yd-tabbar fixed class="tabbar" active-color="#FF7C12">

        <yd-tabbar-item :title="item.title" :link="item.linkTo" v-for="(item,index) in tabbar" :key="index" :active="item.active">
            <i slot="icon" :class=item.activeClass v-if="item.active"></i>
            <i slot="icon" :class=item.normalClass v-else></i>
        </yd-tabbar-item>

    </yd-tabbar>
    
   
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      tabbar: [
        {
          title: "首页",
          normalClass: "iconfont icon-icon_home_n",
          activeClass: "iconfont icon-icon_home_p",
          linkTo: "/home",
          active: true
        },
        {
          title: "发布",
          normalClass: "iconfont icon-icon_issue_n",
          activeClass: "iconfont icon-icon_issue_p",
          linkTo: "/release",
          active: false
        },
        {
          title: "商学院",
          normalClass: "iconfont icon-xueshimao",
          activeClass: "iconfont icon-xueshimao1",
          linkTo: "/School",
          active: false
        },
         {
          title: "购物车",
          normalClass: "iconfont icon-gouwuche1",
          activeClass: "iconfont icon-gouwuche2 ",
          linkTo: "/ShoppingCart",
          active: false
        },
        {
          title: "我的",
          normalClass: "iconfont icon-icon_my_n",
          activeClass: "iconfont icon-icon_my_p",
          linkTo: "/my",
          active: false
        }
      ]
    };
  },
  created(){
    let path = this.$route.path
    var tabbar = this.tabbar;
      for (var i = 0; i < tabbar.length; i++) {
        if (tabbar[i].linkTo == path) {
          tabbar[i].active = true;
        } else {
          tabbar[i].active = false;
        }
      }
  },
  watch: {
    //根据路由变化来改变样式
    "$route.path": function(val) {
      console.log(val)
      var tabbar = this.tabbar;
      //console.log(val);
      for (var i = 0; i < tabbar.length; i++) {
        if (tabbar[i].linkTo == val) {
          tabbar[i].active = true;
        } else {
          tabbar[i].active = false;
        }
      }
      this.tabbar = tabbar;
    },
    // 深度观察监听
    deep: true
  }
};
</script>

<style lang="scss" scoped>
.tabbarbox{
  width: 7.5rem;
  height: 100%;
  padding-bottom:1rem; 
.tabbar {
  height: 1rem;
  max-width: 750px;
  margin: 0 auto;
  font-size: 0.22rem;
  .iconfont {
    font-size: 0.44rem;
    text-align: center;
  }
  .icon-xueyuan{
    font-size: 0.6rem;
  }
  .icon-xueyuan1:before{
    font-size: 0.6rem;
  }
}
.yd-tabbar-fixed{
  left: auto;
}
}
</style>