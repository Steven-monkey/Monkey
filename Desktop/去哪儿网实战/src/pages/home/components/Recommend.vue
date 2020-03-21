<template>
  <div>
    <div class="recommend-title">
      <a class="recommend-link-left" href="#">今日特惠</a>
      <a class="recommend-link-right" href="#">
        更多特惠
        <i>></i>
      </a>
      <ul>
        <router-link
          tag="li"
          class="item"
          v-for="(item, index) in list"
          :key="index"
          :to="'/detail/'+item.id"
        >
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.address}}</p>
            <p class="item-desc">{{item.title}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  position: relative;
  margin-top: 0.2rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}

.recommend-link-left {
  display: block;
  background-color: #17c0c8;
  color: #ffffff;
  border: 1px solid #17c0c8;
  padding-bottom: 0;
  width: 75px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
}

.recommend-link-right {
  position: absolute;
  right: 5px;
  top: 0;
}

.recommend-link-right i {
  font-size: 10px;
  background-color: #17c0c8;
  border-radius: 100%;
  color: #ffffff;
}

.item {
  overflow: hidden;
  display: flex;
  width: 100%;
  height: auto;
}

.item-img {
  width: 150px;
  height: 80px;
  padding: 0.1rem;
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

.item-button {
  line-height: 0.44rem;
  margin-top: 0.16rem;
  background: #ff9300;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
}
</style>