<template>
  <div class="section">
    <div class="container">
      <div class="box">
        <!-- Quizz name -->
        <div class="columns">
          <div class="column">
            <b-field label="Titre du quizz :">
              <b-input
                v-model="quizz.title"
                size="is-large"
              />
            </b-field>
          </div>
        </div>
        <!-- Quizz description -->
        <div class="columns">
          <div class="column">
            <b-field
              label="Description :"
            >
              <b-input
                v-model="quizz.description"
                size="is-medium"
                maxlength="200"
                type="textarea"
              />
            </b-field>
          </div>
        </div>
        <!-- Picture -->
        <div class="columns">
          <div class="column is-9">
            <b-field
              label="Image"
              message="Doit être un url valide vers une image."
            >
              <b-input
                v-model="quizz.image"
              />
            </b-field>
          </div>
          <div class="column is-3">
            <figure class="box">
              <img
                :src="quizz.image"
              >
            </figure>
          </div>
        </div>
        <!-- List of questions -->
        <div class="columns">
          <div class="column">
            <h3 class="title is-6">
              Selectionnez les questions <i>deux minimum</i> :
            </h3>
          </div>
        </div>
        <div class="columns is-multiline">
          <div
            v-for="question of questions"
            :key="question.id"
            class="column is-4"
          >
            <button
              :class="{ 'is-success': quizz.questions.includes(question.id) }"
              class="button is-light is-small"
              @click="selectQuestion(question.id)"
            >
              {{ question.question }}
            </button>
          </div>
        </div>
        <!-- SAVE BUTTON -->
        <div class="columns is-centered">
          <div class="column is-narrow">
            <button
              class="button is-success"
              @click="saveQuizz()"
            >
              <b-icon icon="content-save" />
              <span>Sauvegarder</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    let quizz = await $axios.$get(`/api/quizzes/${params.quizz}`)
    // Change the format of questions
    quizz.questions = quizz.questions.map(e => e.id)
    let datas = await $axios.$get('/api/questions')
    return { questions: datas.questions, quizz: quizz }
  },
  methods: {
    selectQuestion (id) {
      console.log(this.quizz.questions.includes(id))
      if (this.quizz.questions.includes(id)) {
        // Remove the element
        this.quizz.questions = this.quizz.questions.filter(e => e != id)
      } else {
        // Add the question to the array
        this.quizz.questions.push(id)
      }
    },
    async saveQuizz () {
      try {
        await this.$axios.$patch(`/api/quizzes/${this.quizz.id}`, this.quizz)
        this.$toast.open({
            duration: 3000,
            message: `Quizz correctement mis a jour !`,
            type: 'is-success'
        })
        this.$router.push({ name: 'dashboard-quizzes-list'})
      } catch (e) {
        console.error(e)
        this.$toast.open({
          duration: 5000,
          message: `Une erreur est survenue, le serveur est inacsesible !`,
          type: 'is-danger'
        })
      }
    }
  }
}
</script>
