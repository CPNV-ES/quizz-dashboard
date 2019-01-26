<template>
  <div class="section">
    <div class="container">
      <div class="box">
        <!-- Question -->
        <div class="columns">
          <div class="column">
            <b-field label="Question :">
              <b-input
                v-model="question.question"
                size="is-large"
                value="Kevin Garvey"/>
            </b-field>
          </div>
        </div>
        <!-- Add answer -->
        <div class="columns">
          <div class="column">
            <h3 class="title is-6">Réponces :</h3>
          </div>
          <div class="column is-narrow">
            <button
              class="button is-info"
              @click="addAnswer()">
              <b-icon icon="plus-box"/>
              <span>Ajouter</span>
            </button>
          </div>
        </div>
        <!-- Answers list -->
        <div class="columns is-multiline">
          <div
            v-for="(item, index) in question.answers"
            :key="index"
            class="column is-12">
            <b-field grouped>
              <b-input
                v-model="question.answers[index].name"
                placeholder="Reponce"
                expanded/>
              <p class="control">
                <button
                  v-if="question.answers[index].value === true || question.answers[index].value === 'true'"
                  class="button is-success"
                  @click="flipAnswer(index)">
                  <b-icon icon="checkbox-marked"/>
                  <span>Répnse correcte</span>
                </button>
                <button
                  v-else
                  class="button is-danger"
                  @click="flipAnswer(index)">
                  <b-icon icon="close-box"/>
                  <span>Répnse fause</span>
                </button>
              </p>
              <p class="control">
                <button
                  class="button is-danger"
                  @click="removeAnswer(index)">
                  <b-icon icon="delete"/>
                </button>
              </p>
            </b-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    let datas = await $axios.$get(`/api/questions/${params.question}`)
    return { question: datas.question }
  },
  methods: {
    addAnswer () {
      if (this.question.answers.length < 4) {
        this.question.answers.push({
          name: "",
          value: false
        })
      } else {
        this.$toast.open({
          duration: 3000,
          message: `Le nombre maximum de réponces possibles est atteint !`,
          type: 'is-warning'
        })
      }
    },
    removeAnswer (index) {
      this.question.answers.splice(index, 1)
    },
    flipAnswer (index) {
      this.question.answers[index].value = !this.question.answers[index].value
    }
  }
}
</script>
