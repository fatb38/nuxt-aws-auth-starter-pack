import Vue from 'vue'
import { Store } from 'vuex'
import { RootState } from '~/models/store'
import { IUserAttributes } from '~/models/auth'

class AuthService {
  $store: Store<RootState>

  constructor (store: Store<RootState>) {
    this.$store = store
  }

  get isAuthenticated (): boolean {
    return this.$store.state.auth.isAuthenticated
  }

  get user (): IUserAttributes {
    return this.$store.state.auth.user?.attributes as IUserAttributes
  }
}

export default async ({ store }: { store: Store<RootState> }) => {
  Vue.prototype.$auth = new AuthService(store)
  await store.dispatch('auth/load')
}
