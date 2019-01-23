<template>
  <div id="quizzes">
    <section class="hero is-info is-bold">

      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Les Quizz
          </h1>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <nuxt-link
                :to="{ name: 'dashboard-quizzes-list'}"
                tag="li">
                <a>Tous</a>
              </nuxt-link>
              <nuxt-link
                :to="{ name: 'dashboard-quizzes-create'}"
                tag="li">
                <a>Créer un quizz</a>
              </nuxt-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <nuxt-child/>
  </div>
</template>
