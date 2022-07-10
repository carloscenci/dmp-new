<template>
  <div class="principal-content-details">
    <login-template />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LoginTemplate from '~/components/templates/LoginTemplate/index.vue';

@Component({
  components: {
    'login-template': LoginTemplate
  }
})
export default class LoginPage extends Vue {
}
</script>

<style lang="scss">
.principal-content-details {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
}
</style>
