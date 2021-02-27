<template>
  <div>
    <h1>Jobs</h1>
    <ul>
      <li v-for="story in this['hndata/previews']"
        v-bind:key="story.id">
        <!-- TODO: Make the preview component for each story -->
        <a v-bind:href="story.url" v-text="story.title"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  created: async function () {
    const type = this.type
    await this['hndata/fetchPreviews']({ type })
  },
  data () {
    return {
      type: 'jobstories'
    }
  },
  computed: {
    ...mapGetters([
      'hndata/previews'
    ])
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
