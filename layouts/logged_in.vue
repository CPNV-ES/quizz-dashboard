<template>
  <div id="logged_in">
    <nav
      class="navbar is-light"
      role="navigation"
      aria-label="main navigation">

      <div class="container">

        <div
          id="navbarBasicExample"
          class="navbar-menu">
          <div class="navbar-start">

            <nuxt-link
              :to="{ name: 'dashboard-quizzes-list'}"
              class="navbar-item">
              Liste des quizz
            </nuxt-link>

            <a class="navbar-item">
              Listes des questions
            </a>

          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-dark">
                  Se deconnecter
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </nav>

    <nuxt/>
  </div>
</template>
