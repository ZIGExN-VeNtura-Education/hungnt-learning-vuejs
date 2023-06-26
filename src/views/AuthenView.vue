<script setup>
  import LoginForm from '../components/LoginForm.vue'
  import VDashboard from '../components/VDashboard.vue'
  document.title = 'Authentication'
</script>
<script>
  import { mapState } from 'pinia';
  import { useAuthentication } from '../stores/session'

  export default {
    computed: {
      ...mapState(useAuthentication, ['loggedIn', 'user'])
    }
  }
</script>

<template>
  <main>
    <LoginForm v-if="useAuthentication().notLoggedIn"/>
    <VDashboard :user="user" v-else/>
  </main>
</template>
