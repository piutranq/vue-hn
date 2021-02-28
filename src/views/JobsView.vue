<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="item in this.previews" :key="item.id">
      <item-preview :item="item"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ItemPreview from '@/components/ItemPreview'

export default {
  components: { ItemPreview },
  async created () {
    const type = this.type
    await this.fetchPreviews({ type })
  },
  data: () => ({
    type: 'jobstories'
  }),
  computed: {
    ...mapGetters({
      previews: 'hndata/previews'
    })
  },
  methods: {
    ...mapActions({
      fetchPreviews: 'hndata/fetchPreviews'
    })
  }
}
</script>

<style>

</style>
