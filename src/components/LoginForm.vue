<template>
  <div id="login\-form">
    <h1>Authentication</h1>
    <p>Fill out this form to login.</p>
    <br>
    <hr>
    <br>

    <p class="err">{{ errorText }}</p>
    <form @submit.prevent="processAuthen">
      <div class="form-field">
        <label for="email">Email</label>
        <br>
        <input v-model="email" type="email" placeholder="Enter your email" id="email" name="email" required>
      </div>

      <div class="form-field">
        <label for="email">Password</label>
        <br>
        <input v-model="password" type="password" placeholder="Enter your password" id="pwd" name="pwd" required>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { useAuthentication } from '../stores/session'
import { mapState, mapActions } from 'pinia';

export default {
  data() {
    return { email: '', password: '', errorText: ''}
  },
  computed: {
    ...mapState(useAuthentication, ['loggedIn'])
  },
  methods: {
    ...mapActions(useAuthentication, ['login']),
    processAuthen() {
      const fkEmail = 'hungnt@zigexn.vn'
      const fkPasswork = '12345678'
      if (this.email == fkEmail, this.password == fkPasswork){
        this.login({ user: { email: this.email, password: this.password } })
      } else {
        this.errorText = 'Wrong email or password!'
      }
    }
  }
}
</script>