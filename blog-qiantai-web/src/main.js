// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import MyComponent from './components/MyComponent'
import './http';
import 'vuetify/dist/vuetify.min.css'
import qs from 'qs'
import './assets/material.css'
/*导入element-ui*/
import {Popover,Button,Input,Divider,Tabs,TabPane,Select,Option} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/*导入fontawesome图标*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);


Vue.component(Popover.name,Popover);
Vue.component(Button.name,Button);
Vue.component(Input.name,Input);
Vue.component(Divider.name,Divider);
Vue.component(Tabs.name,Tabs);
Vue.component(TabPane.name,TabPane);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);

Vue.use(Vuetify, { theme: {
    primary: "#FF80AB",
    secondary: "#3949AB",
    accent: "#FF80AB",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }});
Vue.use(MyComponent)
Vue.prototype.$qs = qs;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
