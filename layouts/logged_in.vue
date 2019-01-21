<template>
  <div id="logged_in">
    <nav
      class="navbar is-light"
      role="navigation"
      aria-label="main navigation">

      <div
        id="navbarBasicExample"
        class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Listes des quizz
          </a>

          <a class="navbar-item">
            Documentation
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
    </nav>
    <nuxt/>
  </div>
</template>
