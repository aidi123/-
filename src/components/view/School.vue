<template>
  <div class="school">
    <mt-header title="商学院">
      <router-link to="/home/audioupload" slot="right">
        <mt-button>发布</mt-button>
      </router-link>
    </mt-header>
    <div class="box">
      <img src="../../assets/img/banner.png" alt class="img">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">实体经营学习</mt-tab-item>
        <mt-tab-item id="2" class="boxtwo">活动方案</mt-tab-item>
        <mt-tab-item id="3">实体GO应用学习</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="recruitment">
            <li class="list" v-for="(item,index) in fileList" :key="index">
              <div class="radio">
                <img :src="item.fileImg" alt>
                <div class="radiobox" ref="btn">
                  <audio :src="item.fileUrl" class="start" :id="'audio' + item.id"></audio>
                  <i
                    class="iconfont icon-bofang"
                    @click="playAudio(item.id,index)"
                    :id="'change'+item.id"
                  ></i>
                  <i
                    class="iconfont icon-zanting1"
                    style="display:none"
                    @click="pauseAudio(item.id,index)"
                    :id="'changes'+item.id"
                  ></i>
                </div>
              </div>
              <div class="title">
                <p>{{item.fileName}}</p>
                <p>主讲老师：{{item.fileContent}}</p>
              </div>
            </li>
            <!-- <li class="more1">加载更多</li> -->
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul>
            <li class="more">敬请期待</li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <ul>
            <li class="more">敬请期待</li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
// import { InfiniteScroll } from 'mint-ui';
// import {loadMore} from 'mint-ui'
export default {
  data() {
    return {
      selected: "1",
      //   city:'',
      //   recruitments:[],
      url: "",
      //   loading:false,
      page: 1,
      total: 10,
      fileList: [],
      //   pages:1,
      //   jobList:[],
      //   topStatus:'',
      //   page2:1,
      flag: true,
      // audio:'',
      change: "",
      changes: ""
    };
  },
  created() {
    this.initlist();
  },
  methods: {
    initlist() {
      var to = localStorage.getItem("mytoken");
      if (!to) {
        this.$router.push({ path: "/login" });
      }
      this.url = this.$store.state.url;
      let urls = this.url + ":8000/course/page";
      this.$http
        .post(urls, { pageNum: this.page, pageSize: this.total })
        .then(res => {
          if (res.body.code === 200) {
            let _this = this;
            var arr = [];
            for (var i = 0; i < res.body.result.list.length; i++) {
              res.body.result.list[i].change = 1;
              this.fileList = res.body.result.list;
            }
          }
        });
    },

    playAudio(id, index) {
      if (this.change) {
        this.change.style.display = "block";
      }
      if (this.changes) {
        this.changes.style.display = "none";
      }
      if (this.audio) {
        this.audio.pause();
      }
      this.fileList[index].chang = 0;
      let audio = (this.audio = document.getElementById("audio" + id));
      audio.play();
      let change = (this.change = document.getElementById("change" + id));
      let changes = (this.changes = document.getElementById("changes" + id));
      change.style.display = "none";
      changes.style.display = "block";
    },
    pauseAudio(id, index) {
      let audio = (this.audio = document.getElementById("audio" + id));
      //   this.flag = !this.flag
      audio.pause();
      let change = (this.change = document.getElementById("change" + id));
      let changes = (this.changes = document.getElementById("changes" + id));
      change.style.display = "block";
      changes.style.display = "none";
    }
  },
  watch: {
    playAudio: {}
  }
};
</script>
<style lang="scss" scoped>
.school {
  width: 7.5rem;
  height: 100%;
  background: #ff7c12;
  .mint-header {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 7.5rem;
    height: 0.88rem;
    background: #ff7c12;
    padding: 0 0.25rem;
    //border-bottom: 1px solid #dbd9d9;
    /deep/ .mint-header-title {
      font-size: 0.32rem;
      color: #fff;
    }
    .mint-button {
      width: 1.08rem;
      height: 0.5rem;
      border-radius: 0.25rem;
      background: #fff;
      /deep/ .mint-button-text {
        font-size: 0.24rem;
        color: #ff7c12;
      }
    }
  }
  .box {
    padding: 0 0.25rem;
    padding-top: 1rem;
    background: #ff7c12;
    color: #fff;
    margin-bottom: 1.2rem;
    .img {
      width: 100%;
      height: 2rem;
      border-radius: 0.05rem;
      display: block;
      margin-bottom: 0.2rem;
    }
    .mint-navbar {
      border: 1px solid #fff;
      border-radius: 0.1rem;
      overflow: hidden;
      .mint-tab-item {
        padding: 0;
        height: 0.88rem;
        line-height: 0.6rem;
        background: #ff7c12;
        /deep/ .mint-tab-item-label {
          line-height: 0.88rem;
          height: 0.88rem;
          font-size: 0.24rem;
          color: #fff;
        }
      }
      .boxtwo {
        border-left: solid 1px #fff;
        border-right: solid 1px #fff;
      }
      .mint-tab-item.is-selected {
        background: #fff;
        border: none;
        /deep/ .mint-tab-item-label {
          color: #ff8200;
        }
      }
    }
    // /deep/ .mint-tab-container-item{
    //     height: 10rem;
    //     overflow-y: auto;
    //   }
    .recommend {
      line-height: 0.88rem;
      font-size: 0.3rem;
      color: #fff;
    }
    .recruitment {
      overflow-y: auto;
      height: 11rem;
      margin-top: 0.2rem;
      .list {
        width: 7rem;
        height: 2rem;
        padding: 0.2rem;
        margin-bottom: 0.2rem;
        border: solid 1px #fff;
        .radio {
          width: 2rem;
          height: 1.5rem;
          float: left;
          background-color: pink;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .radiobox {
            width: 0.6rem;
            height: 0.6rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .icon-bofang {
              font-size: 0.5rem;
            }
            .icon-zanting1 {
              font-size: 0.5rem;
            }
            .start {
              position: absolute;
              top: 0;
              left: 0;
              // width: 100%;
              // height: 100%;
            }
          }
        }
        .title {
          width: 4.5rem;
          height: 1.5rem;
          float: left;
          padding: 0.2rem;
          p {
            text-align: left;
            font-size: 0.24rem;
            line-height: 0.42rem;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .more {
        font-size: 0.3rem;
      }
    }
    .job {
      overflow-y: auto;
      height: 10rem;
    }
  }
  .iconfont {
    font-size: 0.24rem;
  }
}
</style>



