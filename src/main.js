import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";

//Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueGoogleMaps, {
  load: {
    key: "YOUR_API_KEY_COMES_HERE",
  },
});

app.mount("#app");
