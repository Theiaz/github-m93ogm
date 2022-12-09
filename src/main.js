import { createApp } from "vue";

import App from "./App.vue";
import Current from "./components/Current.vue";
import Next from "./components/Next.vue";

const app = createApp(App);

const routes = [
  {
    path: "/",
    component: App,
    children: [
      {
        name: "current",
        path: "",
        component: Current,
      },
      {
        name: "next",
        path: "next",
        component: Next,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.mount("#app");
