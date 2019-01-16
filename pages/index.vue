<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          QUIZZ - dashboard
        </h1>
        <h2 class="subtitle">
          Connectez-vous a l'interface d'administration<br> et créez/éditez des quizz !
        </h2>
        <div>
          <nuxt-link
            :to="{ name: 'login' }"
            class="button is-light">
            <span>Se connecter !</span>
            <b-icon icon="account"/>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'logged_out'
}
</script>
