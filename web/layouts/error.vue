<template>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center">
      <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
      >
        <h1 v-if="error.statusCode === 404" style="font-size: 30px; color: #E64930;">
          {{ pageNotFound }}
          <br>
          <span style="font-size: 20px; color: gray">
            Por favor, tente novamente retornando para a página principal.
          </span>
        </h1>
        <h1 v-else style="font-size: 30px; color: #E64930;">
          {{ otherError }}
          <br>
          <span style="font-size: 20px; color: gray">
            Por favor, tente novamente retornando para a página principal.
          </span>
        </h1>
      </div>
      <div style="width: 70vw; margin-top: -2rem;">
        <img
            v-if="$vuetify.theme.dark === true"
            :src="require('~/assets/images/error.gif')"
            max-width="60vw"
            width="50%"
            alt="Error"
          />

          <img
            v-if="$vuetify.theme.dark === false"
            :src="require('~/assets/images/error1.gif')"
            max-width="60vw"
            width="50%"
            alt="Error"
          />
      </div>

      <v-btn rounded class="info" to="/" style="margin-top: -8rem;">
        Retornar a página principal
      </v-btn>

    </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Página não encontrada!',
      otherError: 'Ocorreu um erro!'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
