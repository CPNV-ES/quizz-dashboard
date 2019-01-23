<template>
  <div class="section">
    <div class="container">
      <QuestionBox
        v-for="question of questions"
        :key="question.id"
        :question="question"/>
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
  }
}
</script>
