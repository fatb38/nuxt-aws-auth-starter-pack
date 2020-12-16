<template>
  <v-container>
    <div class="d-flex flex-column justify-center mt-4">
      <v-alert
        outlined
        text
        color="success"
        border="left"
        dense
      >
        Welcome to the home page <span class="blue--text">{{ $auth.email }}</span><br>
        You're logged in !
      </v-alert>
      <v-btn
        small
        block
        color="secondary"
        @click="performLogout"
      >
        Logout
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('auth', ['logout']),

    async performLogout () {
      await this.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
div {
  width: 300px;
}
</style>
