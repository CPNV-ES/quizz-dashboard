<template>
  <div class="section">
    <div class="container">
      <div class="columns is-multiline">
        <UserBox
          v-for="user of users"
          :key="user.id"
          :user="user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserBox from '@/components/users/UserBox'

export default {
  components: {
    UserBox
  },
  async asyncData ({ $axios }) {
    let datas = await $axios.$get('/api/users')
    return { users: datas.users }
  }
}
</script>
