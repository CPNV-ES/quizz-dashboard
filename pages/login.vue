<template>
  <section class="hero is-info is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Connexion
        </h1>
        <div class="columns">

          <div class="column is-half">

            <b-field>
              <b-input
                v-model="username"
                :loading="loading"
                placeholder="Nom d'utilisateur"
                icon="account"
                size="is-medium"/>
            </b-field>

            <b-field
              grouped>
              <b-input
                v-model="password"
                :loading="loading"
                placeholder="Mot de passe"
                type="password"
                icon="lock"
                value="iwantmytreasure"
                size="is-medium"
                expanded/>
              <p class="control">
                <button
                  class="button is-dark is-medium"
                  @click="logIn()">
                  GO !
                </button>
              </p>
            </b-field>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'logged_out',
  data () {
    return {
      loading: false,
      username: '',
      password: ''
    }
  },
  methods: {
    async logIn () {
      try {
        this.loading = true
        let data = await this.$axios.$post('/api/login', {
          username: this.username,
          password: this.password
        })
        this.$toast.open({
            duration: 3000,
            message: `Connexion réussie, bienvenue !`,
            type: 'is-success'
        })
        this.$axios.setHeader('quizz-token', data.token)
        this.$router.push({ name: 'dashboard'})
      } catch (e) {
        if (e.response) {
          this.$toast.open({
              duration: 5000,
              message: `Nom d'utilisateur ou mot de passe inconnu`,
              type: 'is-warning'
          })
        } else {
          this.$toast.open({
              duration: 5000,
              message: `Une erreur est survenue, le serveur est inacsesible !`,
              type: 'is-danger'
          })
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
