import { Auth } from 'aws-amplify'

export const state = () => ({
  isAuthenticated: false,
  user: null
})

export const mutations = {
  set (state, user) {
    state.isAuthenticated = !!user
    state.user = user
  }
}

export const actions = {
  async load ({ commit }) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      commit('set', user)
      return user
    } catch (error) {
      commit('set', null)
    }
  },

  async login ({ commit }, { username, password }) {
    const user = await Auth.signIn(username, password)
    if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      return {
        message: 'NEW_PASSWORD_REQUIRED',
        user
      }
    }
    commit('set', user)
    return user
  },

  async logout ({ commit }) {
    await Auth.signOut()
    commit('set', null)
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
      commit('set', currentUser)
      return currentUser
    } catch (error) {
      commit('set', null)
    }
  }
}
