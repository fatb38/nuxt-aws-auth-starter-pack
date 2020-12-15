<template>
  <v-card
    width="400"
    class="login-card"
    elevation="8"
  >
    <v-card-title>
      Amazon Cognito Sign In
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="isValid" @submit.prevent="">
        <v-text-field
          v-model="credentials.username"
          :rules="[rules.required, rules.email]"
          type="email"
          label="Email"
          outlined
          dense
          color="primary lighten-1"
          background-color="white"
        />
        <v-text-field
          v-model="credentials.password"
          :rules="[rules.required]"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          outlined
          dense
          color="primary lighten-1"
          background-color="white"
          @keyup.enter="login"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
      <nuxt-link to="/password_reset">
        Forgot password ?
      </nuxt-link>
    </v-card-text>
    <v-card-actions class="pa-4">
      <v-btn
        :disabled="!isValid"
        :loading="pending"
        color="success"
        small
        block
        @click.native="login"
      >
        Sign In
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { FormValidationRules } from '~/helpers/utils'

export default {
  data () {
    return {
      isValid: false,
      pending: false,
      showPassword: false,
      credentials: {
        username: '',
        password: ''
      },
      rules: FormValidationRules,
      user: null
    }
  },

  methods: {
    async login () {
      this.pending = true
      try {
        await this.$store.dispatch('auth/login', this.credentials)
        this.$router.push('/')
      } catch ({ message }) {
        console.error(message)
      } finally {
        this.pending = false
      }
    }
  }
}
</script>

<style scoped>
.login-card {
  margin: 100px auto;
  border-radius: 8px;
}
</style>
