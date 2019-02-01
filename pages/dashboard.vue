<template>
  <nuxt-child />
</template>

<script>
export default {
  layout: 'logged_in',
  // Specifiy the middleware to use for the dashboard page (and all the children routes)
  middleware: 'auth'
}
</script>
