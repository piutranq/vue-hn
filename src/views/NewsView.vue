<template>
  <div>
    <h1>News</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created: async function () {
    await this['hndata/fetchNewStories']()
    await this['hndata/fetchPreviews']()
    console.log(this.$store.state.hndata.previews)
  },
  methods: {
    ...mapActions([
      'hndata/fetchNewStories',
      'hndata/fetchPreviews'
    ])
  }
}
</script>

<style>

</style>
