import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import BaseSearch from "./components/UI/BaseSearch.vue";
import BaseContainer from "./components/UI/BaseContainer.vue";
import CounterPage from "./components/counter/CounterPage.vue";
import HomePage from "./components/homepage/HomePage.vue";
import App from "./App.vue";
import logger from "./components/mixins/logger";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/counter", component: CounterPage },
  ],
});
const store = createStore({
  state() {
    return {
      counter: 0,
      user: {
        name: "Trung",
        age: 30,
      },
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    user(state) {
      return state.user;
    },
  },
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mixin(logger);

app.component("base-search", BaseSearch);
app.component("base-container", BaseContainer);

app.mount("#app");
