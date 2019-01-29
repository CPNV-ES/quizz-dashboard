<template>
  <div class="box">
    <div class="columns">
      <div class="column">
        <h2 class="title">
          {{ question.question }}
        </h2>
        <div class="tags is-medium">
          <span
            v-for="answer of question.answers"
            :key="answer.name"
            :class="{ 'is-success': answer.value == true || answer.value == 'true' }"
            class="tag"
          >
            {{ answer.name }}
          </span>
        </div>
      </div>
      <div
        v-if="question.created_by"
        class="column is-3"
      >
        <p class="has-text-right">
          Crée par : <strong>{{ question.created_by.username }}</strong>
        </p>
      </div>
    </div>
    <div class="field has-addons">
      <p class="control">
        <nuxt-link
          :to="{ name: 'dashboard-questions-question', params: { question: question.id }}"
          class="button is-info"
        >
          <b-icon icon="content-copy" />
          <span>Modifier</span>
        </nuxt-link>
      </p>
      <p class="control">
        <button
          :class="{ 'is-loading': loading }"
          class="button is-danger"
          @click="removeQuestion()"
        >
          <b-icon icon="delete" />
          <span>Supprimer</span>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
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
    async removeQuestion () {
      try {
        this.loading = true
        await this.$axios.$delete(`/api/questions/${this.question.id}`)
        this.$toast.open({
            duration: 3000,
            message: `La question à bien été supprimée !`,
            type: 'is-success'
        })
        this.$emit('questionDeleted')
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
