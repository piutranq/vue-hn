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
    this.fetchSubmittedPreviews({
      id: this.$route.params.id,
      page: this.$route.params.page
    })
  },
  computed: {
    ...mapGetters({
      previews: 'hndata/previews'
    })
  },
  methods: {
    ...mapActions({
      fetchSubmittedPreviews: 'hndata/fetchSubmittedPreviews'
    })
  },
  watch: {
    '$route.params.id' () {
      this.fetchSubmittedPreviews({
        id: this.$route.params.id,
        page: this.$route.params.page
      })
    }
  }
}
</script>

<style>

</style>
