<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="inc">Increment</button>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const counter = computed(function () {
      return store.getters.counter;
    });
    function inc() {
      store.dispatch("increment");
    }
    return { inc, counter };
  },
};
</script>
