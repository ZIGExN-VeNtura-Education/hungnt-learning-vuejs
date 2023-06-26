import { defineStore } from "pinia";

export const useAuthentication = defineStore('authentication', {
  persist: true,
  state: () => {
    return { user: null, loggedIn: false }
  },
  getters: {
    notLoggedIn(state) { return !state.loggedIn }
  },
  actions: {
    login({ user }) {
      this.loggedIn = true
      this.user = user
    }
  }
})
