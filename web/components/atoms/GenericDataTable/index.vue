<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class GenericDataTableComponent extends Vue {
  @Prop({ default: [], type: Array })
  headers!: Array<object>

  @Prop({ default: [], type: Array })
  desserts!: Array<object>

  editedIndex = -1
  editedItem = {
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  }

  editItem (item: any) {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
  }

  deleteItem (item: any) {
    this.editedIndex = this.desserts.indexOf(item)
    this.editedItem = Object.assign({}, item)
  }

}
</script>

<style lang="scss" scoped>

</style>
