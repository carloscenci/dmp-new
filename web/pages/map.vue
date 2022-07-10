<template>
  <div class="principal-content-details">
    <map-template />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MapTemplate from '~/components/templates/MapTemplate/index.vue';

@Component({
  components: {
    'map-template': MapTemplate
  }
})
export default class MapPage extends Vue {
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
