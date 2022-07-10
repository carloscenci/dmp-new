import Vue from 'vue'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader
import {loadingBBox} from 'vuelayers/lib/ol-ext'
import { Feature } from 'vuelayers'
import { Overlay } from 'vuelayers'
import { IconStyle } from 'vuelayers'


Vue.use(VueLayers)
Vue.use(loadingBBox)
Vue.use(Feature)
Vue.use(Overlay)
Vue.use(IconStyle)

Vue.prototype.$loadingBBox = () => {
    return loadingBBox
}
