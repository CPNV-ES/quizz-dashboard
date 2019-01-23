<template>
  <div class="box">
    <div class="columns">
      <div class="column">
        <h2 class="title">
          {{ question.question }}
        </h2>
        <ul>
          <li
            v-for="answer of question.answers"
            :key="answer.name">
            <p v-if="answer.value == 'true'">
              <strong
                class="has-text-success">
                {{ answer.name }}
              </strong>
            </p>
            <p v-else>
              <strong
                class="has-text-error">
                {{ answer.name }}
              </strong>
            </p>
          </li>
        </ul>
      </div>
      <div class="column is-2">
        <p class="has-text-right">
          Crée par : <strong>{{ question.created_by.username }}</strong>
        </p>
      </div>
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
