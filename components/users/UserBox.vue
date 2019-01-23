<template>
  <div class="column is-half">
    <div class="box">
      <h2 class="title">
        {{ user.username }}
      </h2>
      <div class="tags are-medium">
        <span
          v-if="user.admin"
          class="tag is-link">
          Administrateur
        </span>
        <span
          v-if="user.creator"
          class="tag is-info">
          Créateur
        </span>
        <span
          v-if="user.guest"
          class="tag is-primary">
          Invité
        </span>
      </div>
      <h3 class="title is-6">Ajouter un role</h3>
      <b-field>
        <p class="control">
          <b-dropdown
            v-model="role">
            <button
              slot="trigger"
              class="button">
              <template v-if="role == 'admin'">
                <span>Administrateur</span>
              </template>
              <template v-else-if="role == 'creator'">
                <span>Créateur</span>
              </template>
              <template v-else-if="role == 'guest'">
                <span>Invité</span>
              </template>
              <template v-else>
                <span>Selectionnez</span>
              </template>
              <b-icon icon="menu-down"/>
            </button>
            <b-dropdown-item value="admin">Administrateur</b-dropdown-item>
            <b-dropdown-item value="creator">Créateur</b-dropdown-item>
            <b-dropdown-item value="guest">Invité</b-dropdown-item>
          </b-dropdown>
        </p>
        <p class="control">
          <button
            :loading="loading"
            class="button is-dark"
            @click="addRole()">
            <b-icon icon="plus-box"/>
            <span>Ajouter</span>
          </button>
        </p>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      role: null,
      loading: false
    }
  },
  methods: {
    async addRole () {
      if (this.role === null) {
        this.$toast.open({
          duration: 3000,
          message: `Sélectionnez un role`,
          type: 'is-warning'
        })
      } else {
        try {
          this.loading = true
          await this.$axios.$patch(`/api/make-${this.role}/${this.user.id}`)
          this.user[this.role] = true
        } catch (e) {
          if (e.response) {
            this.$toast.open({
                duration: 5000,
                message: `Un erreur est survenue.`,
                type: 'is-warning'
            })
          } else {
            this.$toast.open({
                duration: 5000,
                message: `Une erreur est survenue, le serveur est inacsesible !`,
                type: 'is-danger'
            })
          }
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>
