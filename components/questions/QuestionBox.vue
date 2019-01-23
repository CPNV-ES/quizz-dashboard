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
            :class="{ 'is-success': answer.value == 'true' }"
            class="tag">
            {{ answer.name }}
          </span>
        </div>
      </div>
      <div class="column is-3">
        <p class="has-text-right">
          Crée par : <strong>{{ question.created_by.username }}</strong>
        </p>
      </div>
    </div>
    <div class="field has-addons">
      <p class="control">
        <nuxt-link
          :to="{ name: 'dashboard-questions-question', params: { question: question.id }}"
          class="button is-info">
          <b-icon icon="content-copy"/>
          <span>Modifier</span>
        </nuxt-link>
      </p>
      <p class="control">
        <a class="button is-danger">
          <b-icon icon="delete"/>
          <span>Supprimer</span>
        </a>
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
  }
}
</script>
