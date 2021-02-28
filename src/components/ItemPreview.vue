<template>
<div>
  <a :href='item.url' v-text='item.title'/>
</div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
</style>
