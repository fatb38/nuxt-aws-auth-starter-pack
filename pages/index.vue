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
        Welcome to the home page <span class="primary--text">{{ $auth.email }}</span><br>
        You're logged in !
      </v-alert>
      <v-btn
        small
        block
        color="primary lighten-1"
        @click="$store.dispatch('auth/logout')"
      >
        Logout
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
div {
  width: 300px;
}
</style>
