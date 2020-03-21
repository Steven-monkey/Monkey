<template>
  <div>
    <div class="recommend-title">
      <a class="recommend-link-left" href="#">当季热门度假</a>
      <ul>
        <li class="item" v-for="(item, index) in list" :key="index">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  position: relative;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}

.recommend-link-left {
  display: block;
  padding-bottom: 0;
  padding-left: 0;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 40.5%;
}

.item {
  overflow: hidden;
  flex: 1;
  width: 100%;
  height: auto;
}

.item-img {
  width: 100%;
  padding: 0.1rem 0.1rem 0 0;
}

.item-info {
  flex: 1;
  line-height: 0.54rem;
  font-size: 0.32rem;
  min-width: 0;
}

.item-desc {
  line-height: 0.4rem;
  color: #cccccc;
  ellipsis();
}
</style>