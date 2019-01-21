<template>
  <div id="quizzes">
    <section class="hero is-info">

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
              <li class="is-active"><a>Tous</a></li>
              <li><a>Créer</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <nuxt-child/>
  </div>
</template>
