<template>
  <div>
    <h1>User</h1>
    <ul>
      <li>user: {{ this.user.id }}</li>
      <li>created: {{ this.fmtUserCreated }}</li>
      <li>karma: {{ this.user.karma }}</li>
      <li>about: {{ this.user.about }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { format } from 'date-fns'

export default {
  async created () {
    const id = this.$route.params.id
    await this.fetchUser({ id })
  },
  computed: {
    ...mapGetters({
      user: 'hndata/user'
    }),
    fmtUserCreated () {
      const userCreated = new Date(this.user.created * 1000)
      return format(userCreated, 'yyyy-MM-dd')
    }
  },
  methods: {
    ...mapActions({
      fetchUser: 'hndata/fetchUser'
    })
  }
}
</script>

<style scope lang="scss">
ul {
  list-style: none
}
</style>
