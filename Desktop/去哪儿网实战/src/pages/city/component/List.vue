<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(city,key) in cities" :key="key" ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem in city"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import BScroll from "@better-scroll/core";
export default {
  name: "CityList",
  props: ["hot-cities", "cities", "letter"],
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 2,
        click: true,
        scrollY: true,
        bounce: false
      });
    });
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang="stylus">
@import '~styles/varibles.styl';

.list {
  overflow: hidden;
  position: absolute;
  // height: 100%;
  top: 1.58rem;
  right: 0;
  bottom: 0;
}

.border-topbottom::before {
  border-color: #ccc;
}

.border-topbottom::after {
  border-color: #ccc;
}

.title {
  line-height: 0.4rem;
  background: #eee;
  padding-left: 0.2rem;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
}

.button-wrapper {
  float: left;
  width: 33.33%;
}

.button {
  margin: 0.1rem;
  padding: 0.1rem;
  text-align: center;
  border: 0.02rem solid #ccc;
  border-radius: 0.06rem;
}

.item {
  line-height: 0.54rem;
  padding-left: 0.2rem;
}

.border-botton::after {
  border-color: #ccc;
}
</style>