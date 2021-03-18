<template>
  <div>
    <h1>{{ this.$route.name }}</h1>
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
    this.fetchPreviews({ type: this.$route.name })
  },
  computed: {
    ...mapGetters({
      previews: 'hndata/previews'
    })
  },
  methods: {
    ...mapActions({
      fetchPreviews: 'hndata/fetchPreviews'
    })
  },
  watch: {
    '$route.name' () {
      this.fetchPreviews({ type: this.$route.name })
    }
  }
}
</script>

<style>

</style>
