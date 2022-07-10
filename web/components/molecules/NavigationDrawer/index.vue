<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :style="$vuetify.theme.dark === true ? 'background: #21222D;' : 'background: #E4E2F1;'"
      app
    >
      <v-list-item style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 1.5rem; text-align: center">
          <!-- <v-img
            style="max-width: 130px;"
            :src="require('~/assets/images/logo.png')"
            alt="DMP"
          /> -->
          <div style="border: 5px solid #5541C7; border-radius: 50%;">
            <v-avatar size="120">
              <v-img
                src="https://ms.yugipedia.com//thumb/c/c5/Crow-DGUpdate.png/300px-Crow-DGUpdate.png"
                alt="Avatar"
              />
            </v-avatar>
          </div>
        <div style="margin-top: 1rem; margin-bottom: -2rem;">
          <h3
            class="font-weight-bold" style="color: #9A8BF9;">
            {{user.name}}
          </h3>

          <span class="font-weight-bold">
            <v-icon>mdi-cards-outline</v-icon>
            {{user.category}}
          </span>
        </div>
      </v-list-item>

      <v-list-item  style="display: flex; align-items: center; justify-content: space-around">

        <v-tooltip bottom color="#2A1E6F">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon
              fab
              :style="$vuetify.theme.dark === true ? 'background: #3B3866' : 'background: #D1CEDF;'"
              v-if="handleAccessRouterCheck('/profile')"
              to="/profile"
            >
              <v-icon>mdi-account-star</v-icon>
            </v-btn>
          </template>
          <span>Meu Perfil</span>
        </v-tooltip>

        <v-tooltip bottom color="#2A1E6F">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon
              fab
              :style="$vuetify.theme.dark === true ? 'background: #3B3866' : 'background: #D1CEDF;'"
              v-if="handleAccessRouterCheck('/decks/list')"
              @click="$router.push(`/decks/detail/${1}`)"
            >
              <v-icon>mdi-cards-variant</v-icon>
            </v-btn>
          </template>
          <span>Deck Principal</span>
        </v-tooltip>

        <v-tooltip bottom color="#2A1E6F">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon
              fab
              :style="$vuetify.theme.dark === true ? 'background: #3B3866' : 'background: #D1CEDF;'"
              v-if="handleAccessRouterCheck('/stores')"
              to="/stores"
            >
              <v-icon>mdi-storefront</v-icon>
            </v-btn>
          </template>
          <span>Lojas Favoritas</span>
        </v-tooltip>

      </v-list-item>

      <br>

      <v-list nav dense shaped style="padding: 1rem;">
        <div>
          <span style="font-size: 14px; font-weight: 600; color: #9A8BF9;">Menu principal</span>
        </div>
        <br>
        <!-- <v-list-item v-if="handleAccessRouterCheck('/profile')" router exact to="/profile" :color="$vuetify.theme.dark === true ? '#9A8BF9;' : '#5845CB;'">
          <v-list-item-icon>
            <v-icon>mdi-account-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Meu Perfil</v-list-item-title>
        </v-list-item> -->

        <v-list-item
          v-if="handleAccessRouterCheck('/')"
          router
          exact
          to="/"
          :color="$vuetify.theme.dark === true ? '#9A8BF9;' : '#5845CB;'"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Página Principal</v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if="handleAccessRouterCheck('/map')"
          router
          exact
          to="/map"
          :color="$vuetify.theme.dark === true ? '#9A8BF9;' : '#5845CB;'"
        >
          <v-list-item-icon>
            <v-icon>mdi-map</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Mapa</v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if="handleAccessRouterCheck('/tournaments')"
          router
          exact
          to="/tournaments"
          :color="$vuetify.theme.dark === true ? '#9A8BF9;' : '#5845CB;'"
        >
          <v-list-item-icon>
            <v-icon>mdi-trophy</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Torneios</v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if="
            handleAccessRouterCheck('/players')
          "
          router
          exact
          to="/players"
          :color="$vuetify.theme.dark === true ? '#9A8BF9;' : '#5845CB;'"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Duelistas</v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if="
            handleAccessRouterCheck('/stores')
          "
          router
          exact
          to="/stores"
          :color="$vuetify.theme.dark === true ? '#9A8BF9;' : '#5845CB;'"
        >
          <v-list-item-icon>
            <v-icon>mdi-store-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Lojas</v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if="
            handleAccessRouterCheck('/decks/list')
          "
          router
          exact
          to="/decks/list"
          :color="$vuetify.theme.dark === true ? '#9A8BF9;' : '#5845CB;'"
        >
          <v-list-item-icon>
            <v-icon>mdi-cards-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Lista de Decks</v-list-item-title>
        </v-list-item>

        <v-list-item
          v-if="
            handleAccessRouterCheck('/supporters')
          "
          router
          exact
          to="/supporters"
          :color="$vuetify.theme.dark === true ? '#9A8BF9;' : '#5845CB;'"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Apoiadores</v-list-item-title>
        </v-list-item>

        <!-- <v-list-item
          v-if="handleAccessRouterCheck('/admin')"
          router
          exact
          to="/admin"
          :color="$vuetify.theme.dark === true ? '#9A8BF9;' : '#5845CB;'"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-lock</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Administrativo</v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
interface User {
  id: number;
  name: string;
  category: string;
  access: string;
  avatar_url: string;
}
interface AccessDrawer {
  key_router: string
  access: string[]
}
@Component({})
export default class NavigationDrawerComponent extends Vue {
  @Prop({ type: Boolean, default: false })
  drawer!: boolean
  access_drawer: AccessDrawer[] = [
    {
      key_router: '/',
      access: ['ADM', 'LOJA', 'DUELISTA'],
    },
    {
      key_router: '/profile',
      access: ['ADM', 'LOJA', 'DUELISTA'],
    },
    {
      key_router: '/map',
      access: ['ADM', 'LOJA', 'DUELISTA'],
    },
    {
      key_router: '/tournaments',
      access: ['ADM', 'LOJA', 'DUELISTA'],
    },
    {
      key_router: '/players',
      access: ['ADM', 'LOJA', 'DUELISTA'],
    },
    {
      key_router: '/stores',
      access: ['ADM', 'LOJA', 'DUELISTA'],
    },
    {
      key_router: '/decks/list',
      access: ['ADM', 'LOJA', 'DUELISTA'],
    },
    {
      key_router: '/supporters',
      access: ['ADM', 'LOJA', 'DUELISTA'],
    },
    {
      key_router: '/admin',
      access: ['ADM'],
    },
  ]
  user: User | null = {
    id: 1,
    name: 'Kuboh',
    category: 'Duelista ADM',
    access: 'ADM',
    avatar_url: 'https://static.wikia.nocookie.net/yugioh/images/3/34/Yuto.png/revision/latest?cb=20190520034819'
  }
  // user: User | null = null
  handleAccessRouterCheck(key_router: string): boolean {
    const router: AccessDrawer | undefined = this.access_drawer.find(
      (rtr) => rtr.key_router === key_router
    )
    if (!router) {
      return false
    }
    const access_user = this.user?.access
    if (!access_user) {
      return false
    }
    return router.access.some((acc) => acc === access_user)
  }
  redirectDeck(id: number) {
    this.$router.push(`/decks/detail/${1}`)
  }
}
</script>


<style lang="scss">
.navigation-drawer-custom {
  border-radius: 0 5% 5% 0;
}
.footer-tag-version {
  font-size: 16px;
  margin-left: 64px;
  font-weight: 600;
}
/*
.header-drawer-details {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin-top: 1rem;
} */
</style>
