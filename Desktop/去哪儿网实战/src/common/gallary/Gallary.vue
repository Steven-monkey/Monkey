<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
          <img :src="item" class="gallary-img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallary",
  props: ["gallaryImgs"],
  data() {
    return {
      swiperOption: {
        loop: true,
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        observer: true,
        observeParents: true
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination {
  position: static;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
}

.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.gallary-img {
  width: 100%;
}

.swiper-pagination {
  color: #ffffff;
  bottom: -2rem;
}
</style>