import { Auth } from 'aws-amplify'

export const state = () => ({
  isAuthenticated: false,
  user: null,
  pending: false
})

export const mutations = {
  setUser (state, user) {
    state.isAuthenticated = !!user
    state.user = user
  },

  setPending (state, status) {
    state.pending = status
  }
}

export const actions = {
  async load ({ commit }) {
    try {
      commit('setPending', true)
      const user = await Auth.currentAuthenticatedUser()
      commit('setUser', user)
    } catch (error) {
      commit('setUser', null)
    } finally {
      commit('setPending', false)
    }
  },

  async login ({ commit }, { username, password }) {
    try {
      commit('setPending', true)
      const user = await Auth.signIn(username, password)
      commit('setUser', user)
    } finally {
      commit('setPending', false)
    }
  },

  async logout ({ commit }) {
    await Auth.signOut()
    commit('setUser', null)
  },

  async register (_, { email, password }) {
    return await Auth.signUp({ username: email, password })
  },

  async confirmRegistration (_, { email, code }) {
    return await Auth.confirmSignIn(email, code)
  },

  async forgotPassword (_, username) {
    return await Auth.forgotPassword(username)
  },

  async confirmNewPassword (_, { username, code, password }) {
    return await Auth.forgotPasswordSubmit(username, code, password)
  },

  async changePassword ({ commit }, { user, password }) {
    try {
      await Auth.completeNewPassword(user, password)
      const currentUser = await Auth.currentAuthenticatedUser()
      commit('setUser', currentUser)
    } catch (error) {
      commit('setUser', null)
    }
  }
}
