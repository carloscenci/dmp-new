<template>
  <v-app dark>
    <AppBar />
    <v-main id="__root">
      <v-container fluid>
        <Nuxt />
        <notifications
          class="vue-notification-group-success"
          group="success"
          position="bottom right"
        />
        <notifications
          class="vue-notification-group-error"
          group="error"
          position="bottom right"
        />
        <notifications
          class="vue-notification-group-info"
          group="info"
          position="bottom right"
        />
        <notifications
          class="vue-notification-group-warn"
          group="warn"
          position="bottom right"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class DefaultLayout extends Vue {
  drawer: boolean = true
}
</script>

<style lang="scss">
* {
  background: #171821;
  margin: 0;
  padding: 0;
}
.v-application {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
.vue-notification-group-success {
  .vue-notification-template {
    background: #459d5c;
    border-left-color: #42a85f;
    font-size: 14px;
  }
}
.vue-notification-group-error {
  .vue-notification-template {
    background: #e54d42;
    border-left-color: #b82e24;
    font-size: 14px;
  }
}
.vue-notification-group-info {
  .vue-notification-template {
    background: #3fa3ad;
    border-left: 5px solid #072f5f;
    font-size: 14px;
  }
}
.vue-notification-group-warn {
  .vue-notification-template {
    background: #ff8d2c;
    border-left-color: #f48a06;
    font-size: 14px;
  }
}
</style>
