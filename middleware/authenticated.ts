import { Context } from '@nuxt/types'

export default function ({ store, redirect, route }: Context) {
  if (!store.state.auth.isAuthenticated && route.name === 'login') {
    return
  }
  if (!store.state.auth.isAuthenticated) {
    return redirect('/login')
  }
}
