<template>
  <div class="section">
    <div class="container">
      <QuizzBox
        v-for="quizz of quizzes"
        :key="quizz.id"
        :quizz="quizz"
        @quizzDeleted="removeQuizz(quizz.id)"
      />
    </div>
  </div>
</template>

<script>
import QuizzBox from '@/components/quizzes/QuizzBox'

export default {
  components: { QuizzBox },
  async asyncData ({ $axios }) {
    let datas = await $axios.$get('/api/quizzes')
    return { quizzes: datas.quizzes }
  },
  methods: {
    removeQuizz (id) {
      this.quizzes = this.quizzes.filter(e => e.id != id)
    }
  }
}
</script>
