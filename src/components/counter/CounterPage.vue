<template>
  <div>
    <h1>{{ user.name }}</h1>
    <h1>{{ counter }}</h1>
    <button @click="inc">Increment</button>
    <button @click="show('TEst')">Show Alert</button>
    <!-- <button @click="changeName('TEst')">Change Name</button> -->
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
export default {
  setup() {
    const store = useStore();
    const user = reactive(store.getters.user);
    const user2 = computed(function () {
      return store.getters.user;
    });
    console.log(user2);
    const counter = computed(function () {
      return store.getters.counter;
    });
    function inc() {
      store.dispatch("increment");
    }
    // function changeName(text) {
    //   user.name = text;
    // }
    return { inc, counter, user };
  },
};
</script>
