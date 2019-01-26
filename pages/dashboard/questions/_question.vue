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
            <button class="button is-info">
              <b-icon icon="plus-box"/>
              <span>Ajouter</span>
            </button>
          </div>
        </div>
        <!-- Answers list -->
        <div class="columns is-multiline">
          <div
            v-for="answer in question.answers"
            :key="answer"
            class="column is-12">
            <b-field grouped>
              <b-input
                :value="question.answers[0].name"
                placeholder="Reponce"
                expanded/>
              <p class="control">
                <button class="button is-danger">
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
  }
}
</script>
