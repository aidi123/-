<template>
  <div class="bg">
    <mt-header title="用户协议">
      <router-link to="Register" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <p>在使用本系统的所有功能之前，请您务必仔细阅读并透彻理解本声明。您可以选择不使用本系统，但如果您使用本系统，您的使用行为将被视为对本声明全部内容的认可。</p>
      <p>免责声明： 鉴于本系统使用非人工检索/分析方式，无法确定您输入的条件进行是否合法，所以本系统对检索/分析出的结果不承担责任。如果因以本系统的检索/分析结果作为任何商业行为或者学术研究的依据而产生不良后果，本系统不承担任何法律责任。</p>
      <p>关于隐私权： 访问者在本系统注册时提供的一些个人资料，本系统除您本人同意外不会将用户的任何资料以任何方式泄露给第三方。当政府部门、司法机关等依照法定程序要求本系统披露个人资料时，本系统将根据执法单位之要求或为公共安全之目的提供个人资料，在此情况下的披露，本系统不承担任何责任。</p>
      <p>关于版权：</p>
      <p>一、 凡本系统注明“IKE”、“实体GO”的所有作品，其版权属于本系统所有。其他媒体、网站或个人转载使用时不得进行商业性的原版原式的转载，也不得歪曲和篡改本系统所发布的内容。</p>
      <p>二、 被本系统授权使用的单位，不应超越授权范围。</p>
      <p>三、 本系统提供的资料如与相关纸质文本不符，以纸质文本为准。</p>
      <p>四、 如因作品内容、版权和其它问题需要同本系统联系的，请在本系统发布该作品后的30日内进行。</p>
      <p>关于解释权： 本系统之声明以及其修改权、更新权及最终解释权均属本站所有。</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.bg{
height: 100%;
background: #ff7c12;
.mint-header {
  height: 0.88rem;
  background: #ff7c12;
  padding: 0 0.25rem;
  color: #fff;
  /deep/ .mint-header-title {
    font-size: 0.32rem;
  }
  /deep/ .mintui.mintui-back {
    font-size: 0.3rem;
  }
}
.content {
  width: 7rem;
  margin: 0 auto;
  background: #fff;
  border-radius: 0.1rem;
  text-align: left;
  padding: 0.2rem;
  p{
    margin-bottom: .3rem;
  }
}
}
</style>

	
	
		