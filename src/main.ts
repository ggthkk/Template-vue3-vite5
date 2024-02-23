import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./index.css";

const app = createApp(App);

import naive from "naive-ui";
const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

app.use(router); // Use Vue Router
app.use(naive); // Use Naive UI
app.use(createPinia()); // Use Pinia store
app.mount("#app"); // Mount the app to the element with ID "app"
