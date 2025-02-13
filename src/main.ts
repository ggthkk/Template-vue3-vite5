import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

const app = createApp(App);

import naive from "naive-ui";
const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

import i18n from "./plugins/vue-i18n";

// pinia & pinia-plugin-persistedstate
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(
  createPersistedState({
    storage: sessionStorage,
  })
);

app.use(router); // Use Vue Router
app.use(naive); // Use Naive UI
app.use(i18n);
app.use(pinia);

app.use(createPinia()); // Use Pinia store
app.mount("#app"); // Mount the app to the element with ID "app"
