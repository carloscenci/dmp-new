<template>
  <div>
    <v-btn
      :block="block"
      :dark="dark"
      :depressed="depressed"
      :disabled="disabled"
      :fab="fab"
      :icon="icon"
      :loading="loading"
      :outlined="outlined"
      :to="path"
      :class="[`.button-${color}`]"
    >
      {{text}}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class GenericButtonComponent extends Vue {
  @Prop({ default: 'button', type: String })
  text!: String

  @Prop({ default: '', type: String })
  path!: String

  @Prop({ default: 'purple', type: String })
  color!: String

  @Prop({ default: false, type: Boolean })
  block!: Boolean

  @Prop({ default: false, type: Boolean })
  dark!: Boolean

  @Prop({ default: false, type: Boolean })
  depressed!: Boolean

  @Prop({ default: false, type: Boolean })
  disabled!: Boolean

  @Prop({ default: false, type: Boolean })
  fab!: Boolean

  @Prop({ default: false, type: Boolean })
  icon!: Boolean

  @Prop({ default: false, type: Boolean })
  loading!: Boolean

  @Prop({ default: false, type: Boolean })
  outlined!: Boolean
}
</script>

<style lang="scss" scoped>
$colors: (
  normal: #fff,
  primary: #7166FF,
  inactive: #eee,
  active: #fff
);

@each $color, $value in $colors {
  .state-#{$color} {
    color: $value;
    &:hover {
      color: darken($value, 15%);
    }
    &:active {
      color: darken($value, 30%);
    }
  }
}
</style>
