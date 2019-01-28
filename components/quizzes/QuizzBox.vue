<template>
  <div class="box">
    <div class="columns">
      <div class="column is-3">
        <img
          :src="quizz.image"
          :alt="quizz.tile"
          width="100%">
      </div>
      <div class="column">
        <h2 class="title">
          {{ quizz.title }}
        </h2>
        <p>
          {{ quizz.description }}
        </p>
      </div>
      <div class="column is-2">
        <p class="has-text-right">
          Crée par : <strong>{{ quizz.created_by.username }}</strong>
        </p>
      </div>
    </div>
    <div class="columns">
      <div class="column"/>
      <div class="column is-narrow">
        <div class="field has-addons">
          <p class="control">
            <nuxt-link
              :to="{ name: 'dashboard-quizzes-quizz', params: { quizz: quizz.id }}"
              class="button is-link">
              <b-icon icon="magnify"/>
              <span>Détails</span>
            </nuxt-link>
          </p>
          <p class="control">
            <nuxt-link
              :to="{ name: 'dashboard-quizzes-quizz-edit', params: { quizz: quizz.id }}"
              class="button is-info">
              <b-icon icon="content-copy"/>
              <span>Modifier</span>
            </nuxt-link>
          </p>
          <p class="control">
            <button
              :class="{ 'is-loading': loading }"
              class="button is-danger"
              @click="removeQuizz()">
              <b-icon icon="delete"/>
              <span>Supprimer</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quizz: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async removeQuizz () {
      try {
        this.loading = true
        await this.$axios.$delete(`/api/quizzes/${this.quizz.id}`)
        this.$toast.open({
            duration: 3000,
            message: `Le quizz à bien été supprimée !`,
            type: 'is-success'
        })
        this.$emit('quizzDeleted')
      } catch (e) {
        console.error(e)
        this.$toast.open({
          duration: 5000,
          message: `Une erreur est survenue, le serveur est inacsesible !`,
          type: 'is-danger'
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
