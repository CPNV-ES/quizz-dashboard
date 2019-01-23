<template>
  <div id="logged_in">
    <nav
      class="navbar is-light"
      role="navigation"
      aria-label="main navigation">

      <div class="container">

        <div
          id="navbarBasicExample"
          class="navbar-menu">
          <div class="navbar-start">

            <nuxt-link
              :to="{ name: 'dashboard-quizzes-list'}"
              class="navbar-item">
              Liste des quizz
            </nuxt-link>

            <nuxt-link
              :to="{ name: 'dashboard-questions-list'}"
              class="navbar-item">
              Listes des questions
            </nuxt-link>

          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a
                  class="button is-dark"
                  @click="logOut()">
                  Se deconnecter
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </nav>

    <nuxt/>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    async logOut () {
      localStorage.removeItem('quizz-token')
      this.$toast.open({
          duration: 3000,
          message: `Vous avez correctement été déconnecté !`,
          type: 'is-success'
      })
      this.$router.push({ name: 'index'})
    }
  }
}
</script>
