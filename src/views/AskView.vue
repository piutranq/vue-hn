<template>
  <div>
    <h1>Ask</h1>
    <div v-for="item in this.previews" :key="item.id">
      <item-preview :item="item"/>
    </div>
  </div>
</template>

<script>
import ItemPreview from '@/components/ItemPreview.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { ItemPreview },
  async created () {
    const type = this.type
    await this.fetchPreviews({ type })
  },
  data: () => ({
    type: 'askstories'
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
