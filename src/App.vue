<template>
  <div id="app">
    <nav-bar class="compNavBar"/>
    <router-view class="compRouterView"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import 'normalize-scss';
@import 'milligram-scss';

.compNavBar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 3em;
  top: 0;
}
.compRouterView {
  margin-top: 3em;
}
</style>
