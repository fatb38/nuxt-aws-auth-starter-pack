import Vue from 'vue'

class AuthService {
  constructor (store) {
    this.$store = store
  }

  get isAuthenticated () {
    return this.$store.state.auth.isAuthenticated
  }

  get user () {
    return this.$store.state.auth.user
  }

  get profilePicture () {
    if (this.user) {
      return this.user.attributes.picture
    }
  }

  get email () {
    if (this.user) {
      return this.user.attributes.email
    }
  }
}

export default async ({ store }) => {
  Vue.prototype.$auth = new AuthService(store)
  await store.dispatch('auth/load')
}
