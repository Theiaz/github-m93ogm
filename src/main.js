import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Page from "./views/Page.vue";
import Previous from "./components/Previous.vue";
import Next from "./components/Next.vue";

const app = createApp(App);

const routes = [
  {
    path: "/",
    component: Page,
    children: [
      {
        name: "previous",
        path: "previous",
        component: Previous,
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
