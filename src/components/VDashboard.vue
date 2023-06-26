<template>
  <div>
    <p>Hello {{ user.email }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      default: null
    }
  }
}
</script>
