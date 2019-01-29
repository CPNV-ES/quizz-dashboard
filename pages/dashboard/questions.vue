<template>
  <div id="questions">
    <section class="hero is-success is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Les Questions
          </h1>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <nuxt-link
                :to="{ name: 'dashboard-questions-list'}"
                tag="li"
              >
                <a>Liste</a>
              </nuxt-link>
              <nuxt-link
                :to="{ name: 'dashboard-questions-create'}"
                tag="li"
              >
                <a>Créer une question</a>
              </nuxt-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <nuxt-child />
  </div>
</template>
