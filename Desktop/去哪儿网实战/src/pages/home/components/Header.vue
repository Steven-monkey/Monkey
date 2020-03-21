<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe779;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.doubleCity}}
        <span class="iconfont arrow-icon">&#xe771;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "homeHeader",
  computed: {
    ...mapState(["city"]),
    ...mapGetters(["doubleCity"])
  }
};
</script>
<!--1rem = html front-size = 50px-->

<style lang="stylus" scope>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: $headerHigth;
  background-color: $bgColor;
  color: #ffffff;
}

.header-left {
  width: 0.64rem;
  float: left;
}

.back-icon {
  text-align: center;
  font-size: 0.4rem;
  padding-left: 0.1rem;
}

.header-input {
  flex: 1;
  background: #fff;
  height: 0.64rem;
  margin-top: 0.12rem;
  line-height: 0.64rem;
  margin-left: 0.12rem;
  border-radius: 0.1rem;
  color: #cccccc;
  padding-left: 0.2rem;
}

.header-right {
  min-width: 1.04rem;
  float: right;
  text-align: center;
  color: #fff;
}

.arrow-icon {
  margin-left: -0.05rem;
  font-size: 0.24rem;
}
</style>