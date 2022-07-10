<template>
  <div>
    oi
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class LoginTemplate extends Vue {
}
</script>

<style lang="scss">
.box-elevation-transition {
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
}
.box-elevation-transition::after {
  content: '';
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.box-elevation-transition:hover {
  -webkit-transform: scale(1.2, 1.2);
  transform: scale(1.2, 1.2);
}
.box-elevation-transition:hover::after {
  opacity: 1;
}
</style>
