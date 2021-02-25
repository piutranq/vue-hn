<template>
  <div>
    <h1>News</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created: async function () {
    const data = await this['hndata/fetchNewStories'](true)
    console.log(this.$store.state.hndata.stories)
    console.log(data)
  },
  methods: {
    ...mapActions([
      'hndata/fetchNewStories'
    ])
  }
}
</script>

<style>

</style>
