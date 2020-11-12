export default function ({ store, redirect, route }) {
  if (!store.state.auth.isAuthenticated && route.name === 'login') {
    return
  }
  if (!store.state.auth.isAuthenticated) {
    return redirect('/login')
  }
}
