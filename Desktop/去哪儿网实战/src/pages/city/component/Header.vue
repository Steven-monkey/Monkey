<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <span class="iconfont header-back">&#xe779;</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<!--1rem = html front-size = 50px-->
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  overflow: hidden;
  position: relative;
  height: $headerHigth;
  line-height: $headerHigth;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
}

.header-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
</style>