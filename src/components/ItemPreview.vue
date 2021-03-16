<template>
<div>
  <div>
    <a :href='item.url' v-text='item.title'/>
  </div>
  <div>
    <small class='info'>
      {{ this.item.score }} {{ this.suffixScore }}
      by <a :href='item.url' v-text='this.item.by'/>
      {{ this.fmtDate }}
    </small>
  </div>
</div>
</template>

<script>
import { formatDistance } from 'date-fns'

export default {
  props: ['item'],
  computed: {
    suffixKids () {
      switch (this.kids.length) {
        case 1: return 'comment'
        default: return 'comments'
      }
    },
    suffixScore () {
      switch (Math.abs(this.item.score)) {
        case 1: return 'point'
        default: return 'points'
      }
    },
    fmtDate () {
      const itemDate = new Date(this.item.time * 1000)
      return formatDistance(itemDate, new Date(), { addSuffix: true })
    }
  }
}
</script>

<style>
</style>
