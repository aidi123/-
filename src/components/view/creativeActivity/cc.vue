<template></template>
<script>
export default {
  data() {
    return {
      boj: {
        businessName: "张三的店",
        title: "春山早行",
        description: "限时优惠",
        activityTime: "2019.1.29-2019.2.1",
        commodityDescription: "全场8折",
        commodityName: "乐呵呵",
        activityInfoList: [
          { conditions: "满200", obtain: "减30", sequence: 1 },
          { conditions: "满300", obtain: "减50", sequence: 2 }
        ],
        imgUrl: "http://www.zgstg.cn/2019-01-16/bg@2x.png",
        detailedImgUrl:
          "http://www.zgstg.cn/2019-01-16/img_18@2x.png,http://www.zgstg.cn/2019-01-16/img_1 @2x.png,http://www.zgstg.cn/2019-01-16/img_4@2x.png",
        commodities: [
          {
            originalPrice: "11",
            activityPrice: "1",
            imgUrl: "http://www.zgstg.cn/2019-01-16/img_m3@2x.png"
          },
          {
            originalPrice: "22",
            activityPrice: "2",
            imgUrl: "http://www.zgstg.cn/2019-01-16/img_6@2x.png"
          },
          {
            originalPrice: "22",
            activityPrice: "2",
            imgUrl: "http://www.zgstg.cn/2019-01-16/cr_banner5.png"
          },
          {
            originalPrice: "33",
            activityPrice: "3",
            imgUrl: "http://www.zgstg.cn/2019-01-16/cr_banner3.png"
          },
          {
            originalPrice: "222",
            activityPrice: "111",
            imgUrl: "http://www.zgstg.cn/2019-01-16/cr_banner2.png"
          },
          {
            originalPrice: "9999",
            activityPrice: "999",
            imgUrl: "http://www.zgstg.cn/2019-01-16/img_19@2x.png"
          }
        ],
        commodityUrl: "http://www.zgstg.cn/2019-01-16/img_14@2x.png",
        mobile: "15846542365",
        address: "街道口",
        type: 5,
        userId: "530152683907056641"
      }
    };
  },
  methods: {
    init() {}
  }
};
</script>
