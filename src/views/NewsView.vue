<template>
  <div>
    <h1>News</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created: async function () {
    const type = 'newstories'
    await this['hndata/fetchPreviews']({ type })
    // console.log(this.$store.state.hndata.previews)
  },
  methods: {
    ...mapActions([
      'hndata/fetchPreviews'
    ])
  }
}
</script>

<style>

</style>
