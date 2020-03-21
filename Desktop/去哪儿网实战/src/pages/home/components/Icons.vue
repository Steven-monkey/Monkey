<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon" v-for="(item, index) in list" :key="index">
          <div class="icon-img">
            <img class="icon-img-cotent" :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.title}}</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-cotent"
              src="http://s.qunarzz.com/homenode/images/touchheader/package.png"
              alt
            />
          </div>
          <p class="icon-desc">度假</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons>>> .swiper-slide-active {
  height: 0;
  padding-bottom: 40%;
}

.icons {
  margin-top: 0.1rem;
}

.icon {
  position: relative;
  overflow: hidden;
  height: 0;
  width: 20%;
  float: left;
  padding-bottom: 20%;
}

.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.22rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

.icon-img-cotent {
  display: block;
  margin: 0 auto;
  height: 100%;
}

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 0.44rem;
  text-align: center;
  line-height: 0.44rem;
  color: $darkTextColor;
  ellipsis();
}
</style>