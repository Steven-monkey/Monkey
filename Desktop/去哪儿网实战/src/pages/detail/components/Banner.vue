<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <div class="iconfont banner-icon">&#xe631;</div>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :gallaryImgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClick"></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";
export default {
  name: "DetailBanner",
  props: ["sightName", "bannerImg", "gallaryImgs"],
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClick() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-img {
  width: 100%;
}

.banner-info {
  display: flex;
  position: absolute;
  left: 20px;
  right: 0;
  bottom: 10px;
  line-height: 0.6rem;
  color: #fff;
  font-size: 14px;
}

.banner-number {
  padding: 0 0.4rem;
  line-height: 0.6rem;
  height: 0.4rem;
}

.banner-icon {
  position: absolute;
  right: 30px;
  font-size: 16px;
  color: #fff;
}
</style>