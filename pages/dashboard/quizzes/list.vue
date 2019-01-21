<template>
  <div class="section">
    <div class="container">
      <div
        v-for="quizz of quizzes"
        :key="quizz.id"
        class="box">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    let datas = await $axios.$get('/api/quizzes')
    return { quizzes: datas.quizzes }
  }
}
</script>
