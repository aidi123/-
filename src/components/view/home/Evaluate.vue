<template>
  <div>
    <mt-header title="评价">
      <mt-button slot="left">取消</mt-button>
      <mt-button slot="right" @click="toast">保存</mt-button>
    </mt-header>
    <div class="body-div">
      <div class="store">
        <img src alt>
        <div>
          <p>优衣库专卖店</p>
          <span>
            女装 SUPIMA COTTON圆领T恤(短袖) 404
            136 优衣库UNIQLO
          </span>
          <p>
            <span>汉口北</span>
            <span>满减优惠</span>
            <span>320m</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      datetime0: "",
      datetime7: ""
    };
  },
  methods: {
    toast() {
      Toast({
        message: "保存成功",
        iconClass: "iconfont icon-tijiao",
        duration: 5000
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-header {
  height: 0.88rem;
  background: #ff7c12;
  padding: 0 0.25rem;
  color: #fff;
  /deep/ .mint-header-title {
    font-size: 0.32rem;
  }
  /deep/ .mint-button-text {
    font-size: 0.24rem;
  }
  /deep/ .mintui.mintui-back {
    font-size: 0.3rem;
  }
}
// .body-div {
// }
</style>


