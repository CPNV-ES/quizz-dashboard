<template>
  <div class="section">
    <div class="container">
      <QuestionBox
        v-for="question of questions"
        :key="question.id"
        :question="question"
        @questionDeleted="removeQuestion(question.id)"
      />
    </div>
  </div>
</template>

<script>
import QuestionBox from '@/components/questions/QuestionBox'

export default {
  components: {
    QuestionBox
  },
  async asyncData ({ $axios }) {
    let datas = await $axios.$get('/api/questions')
    return { questions: datas.questions }
  },
  methods: {
    removeQuestion (id) {
      this.questions = this.questions.filter(e => e.id != id)
    }
  }
}
</script>
