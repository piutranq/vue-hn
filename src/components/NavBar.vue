<template>
  <div>
    <span v-for="route in routes" :key="route.path">
      <router-link class="routerLink"
        v-bind:to="route.path" v-text="route.display"/>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    routes () {
      return this.$router.options.routes
        .filter(e => e.category === 'navbar')
    }
  }
}
</script>

<style scope lang="scss">
.routerLink {
  padding-left: 0.5em;
  padding-right: 0.5em;
}
</style>
