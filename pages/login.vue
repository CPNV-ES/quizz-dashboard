<template>
  <section class="hero is-light is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Connexion
        </h1>
        <div class="columns">

          <div class="column is-half">

            <b-field
              label="Nom d'utilisateur">
              <b-input
                value="johnsilver"
                icon="account"
                size="is-medium"
                maxlength="30"/>
            </b-field>

            <b-field
              grouped>
              <b-field>
                <b-input
                  type="password"
                  icon="lock"
                  value="iwantmytreasure"
                  size="is-medium"
                  password-reveal/>
              </b-field>
              <b-field>
                <button class="button is-info is-medium">Search</button>
              </b-field>
            </b-field>

            <button
              class="button is-light">
              <b-icon icon="check"/>
              <span>Connexion</span>
            </button>

          </div>

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
