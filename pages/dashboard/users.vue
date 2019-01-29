<template>
  <div id="quizzes">
    <section class="hero is-warning is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Utilisateurs
          </h1>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <nuxt-link
                :to="{ name: 'dashboard-users-list'}"
                tag="li"
              >
                <a>Tous</a>
              </nuxt-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <nuxt-child />
  </div>
</template>
