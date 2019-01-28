<template>
  <div class="section">
    <div class="container">
      <div class="box">
        <div class="columns">
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
              Crée par : <strong>{{ quizz.created_by }}</strong>
            </p>
          </div>
        </div>
        <!-- List of questions -->
        <div class="columns">
          <div class="column">
            <h3 class="title is-6">Questions du quizz :</h3>
          </div>
        </div>
        <div class="columns is-multiline">
          <div
            v-for="question of quizz.questions"
            :key="question.id"
            class="column is-6">
            <span class="tag is-light">
              {{ question.question }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionBox from '@/components/questions/QuestionBox'

export default {
  components: {
    QuestionBox
  },
  async asyncData ({ $axios, params }) {
    let datas = await $axios.$get(`/api/quizzes/${params.quizz}`)
    return { quizz: datas }
  }
}
</script>
