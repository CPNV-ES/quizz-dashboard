<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title">
            {{ question.question }}
          </h2>
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
