<template>
  <transition class="fade">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: "FadeAnimation"
};
</script>
<style lang="stylus" scoped>
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
</style>