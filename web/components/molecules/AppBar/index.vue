<template>
  <v-app-bar
    fixed
    flat
    app
    :style="
      $vuetify.theme.dark === true
        ? 'background: #171821;'
        : 'background: #F4F3FA;'
    "
  >
    <v-app-bar-nav-icon
      v-if="
        $route.name !== 'login' &&
          $route.name !== 'register' &&
          $route.name !== 'forgotPassword' &&
          $route.name !== 'confirmationRegister' &&
          $route.name !== 'confirmationEmail'
      "
      @click.stop="handleDrawerClickClose"
    />

    <!-- <img
      class="image-logo"
      :src="require('~/assets/images/logo.png')"
      alt="Mapa de Duelistas"
    /> -->

    <span
      class="mobile-text-rules"
      style="
        font-weight: bold;
        font-size: 22px;
        color: #8164c3;
        font-family: 'Righteous', cursive;
      "
    >
      DMP - Mapa de Duelistas
    </span>

    <v-spacer />

    <v-btn
      rounded
      outlined
      dark
      :color="$vuetify.theme.dark === true ? '#5541C7' : '#9A8BF9'"
      style="
        margin-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      "
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon style="margin-right: 0.5rem">
        {{
          $vuetify.theme.dark === true
            ? 'mdi-moon-waning-crescent'
            : 'mdi-weather-sunny'
        }}
      </v-icon>
      <span class="mobile-text-rules">
        {{ $vuetify.theme.dark === true ? 'Tema Escuro' : 'Tema Claro' }}
      </span>
    </v-btn>

    <v-tooltip bottom color="#5541C7">
      <template #activator="{ on, attrs }">
        <v-btn
          v-if="
            $route.name !== 'login' &&
              $route.name !== 'register' &&
              $route.name !== 'forgotPassword' &&
              $route.name !== 'confirmationRegister' &&
              $route.name !== 'confirmationEmail'
          "
          icon
          v-bind="attrs"
          @click="redirect"
          v-on="on"
        >
          <v-icon> mdi-home </v-icon>
        </v-btn>
      </template>
      <span>Ir para página principal</span>
    </v-tooltip>

    <v-tooltip bottom color="#5541C7">
      <template #activator="{ on, attrs }">
        <v-btn
          v-if="
            $route.name !== 'login' &&
              $route.name !== 'register' &&
              $route.name !== 'forgotPassword' &&
              $route.name !== 'confirmationRegister' &&
              $route.name !== 'confirmationEmail'
          "
          icon
          style="margin-right: 1rem"
          v-bind="attrs"
          to="/login"
          v-on="on"
        >
          <v-icon> mdi-logout </v-icon>
        </v-btn>
      </template>
      <span>Sair</span>
    </v-tooltip>

    <div
      v-if="
        $route.name !== 'login' &&
          $route.name !== 'register' &&
          $route.name !== 'forgotPassword' &&
          $route.name !== 'confirmationRegister' &&
          $route.name !== 'confirmationEmail'
      "
      class="avatar-details"
      style="margin-left: 0.5rem"
    >
      <div style="text-align: right; line-height: 1">
        <h3 class="font-weight-bold" style="font-size: 18px; color: #9a8bf9">
          {{ user.name }}
        </h3>

        <span style="font-size: 14px">
          {{ user.category }}
        </span>
      </div>

      <div
        style="
          background-color: #c8c8c8;
          width: 1px;
          height: 40px;
          margin-left: 1rem;
          margin-right: 1rem;
        "
      />

      <div style="border: 3px solid #5541c7; border-radius: 50%">
        <v-avatar size="40">
          <v-img
            src="https://ms.yugipedia.com//thumb/c/c5/Crow-DGUpdate.png/300px-Crow-DGUpdate.png"
            alt="Avatar"
          />
        </v-avatar>
      </div>
    </div>

    <div
      v-if="
        $route.name !== 'login' &&
          $route.name !== 'register' &&
          $route.name !== 'forgotPassword' &&
          $route.name !== 'confirmationRegister' &&
          $route.name !== 'confirmationEmail'
      "
      class="mobile-rules"
      style="border: 3px solid #5541c7; border-radius: 50%"
    >
      <v-avatar size="40">
        <v-img
          src="https://ms.yugipedia.com//thumb/c/c5/Crow-DGUpdate.png/300px-Crow-DGUpdate.png"
          alt="Avatar"
        />
      </v-avatar>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
interface User {
  id: number
  name: string
  category: string
  access: string
  avatar_url: string
}
@Component({})
export default class AppBarComponent extends Vue {
  user: User | null = {
    id: 1,
    name: 'Kuboh',
    category: 'Duelista ADM',
    access: 'ADM',
    avatar_url:
      'https://static.wikia.nocookie.net/yugioh/images/3/34/Yuto.png/revision/latest?cb=20190520034819'
  }

  handleDrawerClickClose () {
    this.$emit('drawer-click-close')
  }

  redirect () {
    location.replace(this.$store.getters.getUrlBase || '/')
  }
}
</script>

<style lang="scss">
.header-dark-backgroud {
  background: #22252c;
}
.header-light-backgroud {
  background: #f0ebe7;
}
.image-logo {
  max-width: 120px;
  max-height: 120px;
  margin-left: 1rem;
}
.avatar-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0.2rem 1rem;
  /* border: 1px solid #C8C8C8;
	border-radius: 20px; */
}
.mobile-rules {
  display: none;
}
@media (max-width: 600px) {
  .mobile-rules {
    display: flex;
  }
  .avatar-details,
  .image-logo {
    display: none;
  }
  .mobile-text-rules {
    display: none;
  }
}
</style>
