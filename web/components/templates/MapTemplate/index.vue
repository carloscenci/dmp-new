<template xmlns:>
  <div>
    <v-container>
      <div>
        <v-row
          align="center"
        >
          <v-col cols="12" sm="4">
            <label style="color: #fff">Nome do Duelista</label>
            <v-autocomplete
              v-model="duelistName"
              :items="itemsDuelists"
              item-text="name"
              item-value="name"
              rounded
              dense
              placeholder="Duelista"
              solo
              no-data-text="Sem dados"
              clear-icon="mdi-close"
              clearable
            >
              <template v-slot:item="data">
                <v-list-item-avatar>
                  <v-img
                    :src="data.item.avatar_url"
                    :alt="data.item.name"
                  />
                </v-list-item-avatar>
                 <v-list-item-content>
                  <v-list-item-title
                    v-html="data.item.name"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="data.item.classification"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>
           <v-col cols="12" sm="4">
            <label style="color: #fff">Estado</label>
            <v-autocomplete
              v-model="stateName"
              :items="stateItems"
              item-text="name"
              item-value="name"
              rounded
              dense
              placeholder="Nome do Estado"
              solo
              no-data-text="Sem dados"
              clear-icon="mdi-close"
              clearable
              @change="filterMap(stateName)"
            ></v-autocomplete>
          </v-col>
           <v-col cols="12" sm="4">
            <label style="color: #fff">Cidade</label>
            <v-autocomplete
              v-model="cityName"
              :items="cityItems"
              item-text="name"
              item-value="name"
              rounded
              dense
              placeholder="Nome da Cidade"
              solo
              no-data-text="Sem dados"
              clear-icon="mdi-close"
              clearable
              @change="filterMap(cityName)"
            ></v-autocomplete>
          </v-col>
        </v-row>
     </div>
        <!-- <no-ssr> -->
      <vl-map
        ref="map"
        v-if="!reloading"
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        style="height: 800px"
        @pointermove="onMapPointerMove" :style="{cursor: mapCursor}"
        @click="clickCoordinate = $event.coordinate"

      >
        <vl-view
          :zoom.sync="zoom"
          :center.sync="center"
          :rotation.sync="rotation"
        ></vl-view>

        <vl-layer-tile>
            <vl-source-osm></vl-source-osm>
        </vl-layer-tile>

        <vl-interaction-select :features.sync="selectedFeatures">
          <template slot-scope="select">
            <vl-overlay
              class="feature-popup"
              v-for="feature in select.features"
              :key="feature.id"
              :id="feature.id"
              :position="feature.geometry.coordinates"
              :auto-pan="true"
              :auto-pan-animation="{ duration: 300 }"
            >
              <template slot-scope="popup">
                <v-card shaped style="background: #21222D;">
                  <v-card-title style="background: #4A4872;">
                    <div>
                      <v-icon style="margin-right: 0.5rem;">mdi-cards-outline</v-icon>
                      <span style="font-size: 16px;">
                        {{feature.properties ? feature.properties.name : "Sem nome especificado"}}
                      </span>
                    </div>

                    <v-spacer></v-spacer>

                    <v-tooltip bottom color="#8164C3">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          x-small
                          fab
                          class="success"
                          @click="$router.push(`/profile/${feature.properties.id}`)"
                        >
                          <v-icon>mdi-account</v-icon>
                        </v-btn>
                      </template>
                      <span>Ver Perfil</span>
                    </v-tooltip>

                  </v-card-title>
                  <v-card-text>
                    <div style="margin-top: 1rem;">
                      <p>
                        <strong>Deck Favorito: </strong>
                        {{feature.properties ? feature.properties.deck : "Sem nome especificado"}}
                      </p>
                      <p>
                        <strong>Cidade: </strong>
                        {{feature.properties ? feature.properties.city : "Sem nome especificado"}}
                      </p>
                      <p>
                        <strong>Estado: </strong>
                        {{feature.properties ? feature.properties.state : "Sem nome especificado"}}
                      </p>
                      <p>
                        <strong>Contato: </strong>
                        {{feature.properties ? feature.properties.contact : "Sem nome especificado"}}
                      </p>
                    </div>
                  </v-card-text>
                </v-card>
              </template>
            </vl-overlay>
          </template>
        </vl-interaction-select>

        <vl-layer-vector>
          <vl-feature
            ref="marker"
            :features.sync="selectedFeatures"
            v-for="feature in features"
            :key="feature.id"
            :id="feature.id"
            :properties="feature.properties"
          >
            <vl-geom-point :coordinates="feature.geometry.coordinates"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon
                :src="require(`@/assets/markers/${feature.properties.image}`)" :scale="0.7"
              ></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </vl-layer-vector>
      </vl-map>
        <!-- </no-ssr> -->
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
// import loadingBBox from 'plugins/vuelayers'
// const { gmapApi } = require("vue2-google-maps");
@Component({
  // computed: {
  //   google: gmapApi,
  // },
})
export default class MapTemplate extends Vue {
  menu = false
  useUrlFunction = true
  zoom = 3
  center = [-4099916.392369529, -631774.6808228357]
  rotation = 0
  geolocPosition = undefined
  clickCoordinate = undefined
  selectedFeatures = []
  reloading = false
  selected = []
  mapCursor = 'default'
  drawType = undefined
  duelistName = ""
  stateName = ""
  cityName = ""
  itemsDuelists = [
    {
      id: 1,
      avatar_url: 'https://ms.yugipedia.com//thumb/c/c5/Crow-DGUpdate.png/300px-Crow-DGUpdate.png',
      name: 'Kuboh',
      classification: 'Duelista ADM'
    },
    {
      id: 2,
      avatar_url: 'https://pm1.narvii.com/6808/5ad11c645fff49253c6472d9431ca494dec66c06v2_hq.jpg',
      name: 'Fulano',
      classification: 'Duelista'
    }
  ]
  cityItems = [
    {
      id: 1,
      name: 'Cidade Tal'
    },
    {
      id: 2,
      name: 'Exemplo'
    }
  ]
  stateItems = [
    {
      id: 1,
      name: 'RN'
    },
    {
      id: 2,
      name: 'SP'
    }
  ]
  features: Array<object> = []
  @Watch('duelistName')
  onChangeDuelistName(name: string){
    this.listDuelistMap()
    if(!name) {
      return this.listDuelistMap()
    }
    if(name) {
      const nameSelect = this.features.filter((item: any) => item.properties.name == name)
      return this.features = nameSelect
    }
  }
  @Watch('stateName')
  onChangeState(name: string){
    this.listDuelistMap()
    if(!name) {
      return this.listDuelistMap()
    }
    if(name) {
      const nameSelect = this.features.filter((item: any) => item.properties.state == name)
      return this.features = nameSelect
    }
  }
  @Watch('cityName')
  onChangeCity(name: string){
    this.listDuelistMap()
    if(!name) {
      return this.listDuelistMap()
    }
    if(name) {
      const nameSelect = this.features.filter((item: any) => item.properties.city == name)
      return this.features = nameSelect
    }
  }
  changeMap() {
    this.useUrlFunction = !this.useUrlFunction
    this.reloading = true
    this.$nextTick(() => {
        this.reloading = false
    })
  }
  loadingStrategyFactory() {
    // @ts-ignore
    return this.$loadingBBox()
  }
  onMapPointerMove ({ pixel }: any) {
    // @ts-ignore
    let hit = this.$refs.map.forEachFeatureAtPixel(pixel, () => true)
    if (hit) {
      this.mapCursor = 'pointer'
    } else {
      this.mapCursor = 'default'
    }
  }
  async filterMap(name: string) {
    if(!name){
      return this.features
    } else {
      let nameSelect = this.features.filter((item: any) => item.properties.name == name)
      let city = this.features.filter((item: any) => item.properties.city == name)
      let state = this.features.filter((item: any) => item.properties.state == name)
      if(nameSelect.length > 0){
        return this.features = nameSelect
      }
      else if(city.length > 0){
        return this.features = city
      }

      else if(state.length > 0){
        return this.features = state
      }
      else {
        return this.features
      }
    }
  }

  async listDuelistMap() {
    const newFeatures = [
    {
      type: "Feature",
      id: "markerfsa",
      "properties": {
        "image": "obelisk.png",
        "name": "Kuboh",
        deck: "Blackwing",
        city: "Cidade Tal",
        state: "RN",
        contact: "11999999999",
        id: 1
      },
      geometry: {
        type: "Point",
        coordinates: [-4099916.392369529, -631774.6808228357],
      },
    },
    {
      type: "Feature",
      id: "marker1",
      "properties": {
        "image": "slifer.png",
        "name": "Fulano",
        deck: "Blackwing",
        city: "Exemplo",
        state: "SP",
        contact: "11999999999",
        id: 2
      },
      geometry: {
        type: "Point",
        coordinates: [ -4678175.421733953, -1308913.0523179919],
      },
    },
    {
      type: "Feature",
      id: "marker2",
      "properties": {
        "image": "exodia.png",
        "name": "Fulano",
        deck: "Blackwing",
        city: "Exemplo",
        state: "SP",
        contact: "11999999999",
        id: 3
      },
      geometry: {
        type: "Point",
        coordinates: [-5498253.377120916, -2981212.9926978443],
      },
    },
    {
      type: "Feature",
      id: "marker3",
      "properties": {
        "image": "ra.png",
        "name": "Fulano",
        deck: "Blackwing",
        city: "Exemplo",
        state: "SP",
        contact: "11999999999",
        id: 4
      },
      geometry: {
        type: "Point",
        coordinates: [-6040032.038249338, -2331348.1502489722 ],
      },
    },
    {
      type: "Feature",
      id: "marker4",
      "properties": {
        "image": "horakhty.png",
        "name": "Fulano",
        deck: "Blackwing",
        city: "Exemplo",
        state: "SP",
        contact: "11999999999",
        id: 5
      },
      geometry: {
        type: "Point",
        coordinates: [ -6051718.068845108, -146845.6018967811 ],
      },
    },
  ]
    return this.features = newFeatures
  }

  created() {
    this.listDuelistMap()
  }
}
</script>

<style lang="scss" scoped>
.holds-the-iframe {
  background: url("@/assets/images/loading3.gif") center center no-repeat;
  width: 100%;
}
.feature-popup {
  left: -50px;
  bottom: 12px;
  width: 20em;
  max-width: none;
  &:after, &:before {
    top: 100%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  &:after {
    border-top-color: white;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
  }
  &:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
  }
  .card-content {
    max-height: 20em;
    overflow: auto;
  }
  .content {
    word-break: break-all;
  }
}
.card-title-details {
  display: flex;
  align-items: center;
  justify-content: center
}
</style>
