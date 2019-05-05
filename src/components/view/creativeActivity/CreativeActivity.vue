<template>
  <div class="box">
    <header>
      <i class="iconfont icon-fanhui" @click="goback">返回</i>
    </header>
    <div class="choosebox one">
      <div class="title">
        <p class="right-line"></p>
        <span>电子传单</span>
        <p class="left-line"></p>
      </div>
      <div class="content">
        <ul>
          <router-link :to="'/creativeActivity/leafletscreative/'+1" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan7.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/leafletscreative/' +2" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan8.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/leafletscreative/' + 3" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan6.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/leafletscreative/' + 4" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan5.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/leafletscreative/' + 5" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan9.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="choosebox">
      <div class="title">
        <p class="right-line"></p>
        <span>电子传单</span>
        <p class="left-line"></p>
      </div>
      <div class="content">
        <ul>
          <router-link :to="'/creativeActivity/leafletscreativetwo/'+2" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan7.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/leafletscreativetwo/' +3" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan8.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/leafletscreativetwo/' + 4" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan6.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/leafletscreativetwo/' + 5" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan5.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/leafletscreativetwo/' + 6" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan9.png" alt>
              <span class="newgoods">电子传单</span>
            </div>
            <p>我要制作</p>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="choosebox fristbox">
      <div class="title">
        <p class="right-line"></p>
        <span>新品推荐活动区</span>
        <p class="left-line"></p>
      </div>
      <div class="content">
        <ul>
          <router-link :to="'/creativeActivity/releaseNew/' + 1" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan1.png" alt>
              <span class="newgoods">新品推荐</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/releaseNew/' + 2" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan2.png" alt>
              <span class="newgoods">新品推荐</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/releaseNew/' + 3" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan3.png" alt>
              <span class="newgoods">新品推荐</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/releaseNew/' + 4" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan4.png" alt>
              <span class="newgoods">新品推荐</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link :to="'/creativeActivity/releaseNew/' + 5" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan5.png" alt>
              <span class="newgoods">新品推荐</span>
            </div>
            <p>我要制作</p>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="choosebox secondbox">
      <div class="title">
        <p class="right-line"></p>
        <span>拼团活动区</span>
        <p class="left-line"></p>
      </div>
      <div class="content">
        <ul>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan6.png" alt>
              <span class="newgoods">拼团活动</span>
            </div>
            <p>我要制作</p>
          </li>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan7.png" alt>
              <span class="newgoods">拼团活动</span>
            </div>
            <p>我要制作</p>
          </li>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan8.png" alt>
              <span class="newgoods">拼团活动</span>
            </div>
            <p>我要制作</p>
          </li>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan9.png" alt>
              <span class="newgoods">拼团活动</span>
            </div>
            <p>我要制作</p>
          </li>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan10.png" alt>
              <span class="newgoods">拼团活动</span>
            </div>
            <p>我要制作</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="choosebox thirdbox">
      <div class="title">
        <p class="right-line"></p>
        <span>砍价活动区</span>
        <p class="left-line"></p>
      </div>
      <div class="content">
        <ul>
          <router-link :to="'/creativeActivity/CreateKanJia/'+1" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan11.png" alt>
              <span class="newgoods">砍价活动</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link to="/creativeActivity/CreateKanJia/2" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan12.png" alt>
              <span class="newgoods">砍价活动</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link to="/creativeActivity/CreateKanJia/3" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan13.png" alt>
              <span class="newgoods">砍价活动</span>
            </div>
            <p>我要制作</p>
          </router-link>
          <router-link to="/creativeActivity/CreateKanJia/4" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan14.png" alt>
              <span class="newgoods">砍价活动</span>
            </div>
            <p>我要制作</p>
          </router-link >
          <router-link to="/creativeActivity/CreateKanJia/5" tag="li">
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan15.png" alt>
              <span class="newgoods">砍价活动</span>
            </div>
            <p>我要制作</p>
          </router-link >
        </ul>
      </div>
    </div>
    <div class="choosebox fourthbox">
      <div class="title">
        <p class="right-line"></p>
        <span>秒杀活动区</span>
        <p class="left-line"></p>
      </div>
      <div class="content">
        <ul>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan3.png" alt>
              <span class="newgoods">秒杀活动</span>
            </div>
            <p>我要制作</p>
          </li>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan4.png" alt>
              <span class="newgoods">秒杀活动</span>
            </div>
            <p>我要制作</p>
          </li>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan5.png" alt>
              <span class="newgoods">秒杀活动</span>
            </div>
            <p>我要制作</p>
          </li>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan6.png" alt>
              <span class="newgoods">秒杀活动</span>
            </div>
            <p>我要制作</p>
          </li>
          <li>
            <div class="imgbox">
              <img src="../../../assets/img/cr_yuan7.png" alt>
              <span class="newgoods">秒杀活动</span>
            </div>
            <p>我要制作</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  destroyed: function() {
    if (JSON.parse(sessionStorage.getItem("obj"))) {
      sessionStorage.removeItem("obj");
    }
    if (JSON.parse(sessionStorage.getItem("obj2"))) {
      sessionStorage.removeItem("obj2");
    }
    if (JSON.parse(sessionStorage.getItem("leafletList"))) {
      sessionStorage.removeItem("leafletList");
    }
    if (JSON.parse(sessionStorage.getItem("leafletListtwo"))) {
      sessionStorage.removeItem("leafletListtwo");
    }
  },
  methods: {
    goback() {
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 7.5rem;
  // height: 100%;
  padding: 0 0.2rem;
  background-image: url(../../../assets/img/bg@2x.png);
  background-size: 7.5rem 100%;
  background-repeat: no-repeat;
  overflow: hidden;
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
  .one {
    margin-top: 1rem;
  }
  .choosebox {
    width: 7.1rem;
    // height:2.6rem;
    margin-bottom: 0.2rem;
    background-color: #fff;
    .title {
      display: flex;
      height: 0.92rem;
      justify-content: center;
      align-items: center;
      p {
        height: 1px;
        width: 2rem;
      }
      .left-line {
        background: linear-gradient(to left, #fff, #ff7c12);
      }
      .right-line {
        background: linear-gradient(to right, #fff, #ff7c12);
      }
      span {
        font-size: 0.3rem;
        font-family: NotoSansHans-Regular;
        color: #ff7c12;
        padding: 0 0.2rem;
      }
    }
    .content {
      width: 100%;
      ul {
        padding: 0 0.25rem;
        display: flex;
        justify-content: Flex-start;
        flex-wrap: wrap;
        li {
          width: 1.2rem;
          margin: 0.05rem;
          .imgbox {
            width: 0.9rem;
            height: 0.9rem;
            margin: 0 auto;
            margin-bottom: 0.1rem;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
            span {
              width: 0.7rem;
              height: 0.6rem;
              position: absolute;
              top: 50%;
              left: 50%;
              color: #fff;
              //    left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          p {
            width: 1rem;

            color: #ff7c12;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

