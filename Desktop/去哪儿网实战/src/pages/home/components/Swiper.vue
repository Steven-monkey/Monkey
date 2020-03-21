<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSWiper">
      <!-- slides -->
      <swiper-slide v-for="item in list " :key="item.id">
        <img :src="item.imgUrl" class="wrapper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          direction: "vertical",
          slidesPerView: 1,
          observer: true,
          observeParents: true
        }
      }
    };
  },
  computed: {
    showSWiper() {
      return this.list.length;
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper-img {
  width: 100%;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 30.4%;
  background-color: #ccc;
}

.wrapper>>>.swiper-pagination-bullet-active {
  background: #ffffff;
}
</style>