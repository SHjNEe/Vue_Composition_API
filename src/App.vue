<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="getUserAge">Count</button>
  </section>
</template>

<!-- <script>
import { ref } from "vue";
export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    const userName = ref("Maximilan");
    console.log(userName);
    setTimeout(() => {
      userName.value = "Test";
    }, 2000);
    return {
      userName,
    };
  },
};
</script> -->

<script setup>
import { reactive, toRefs } from "vue";
// import { ref } from "vue";

// const user = ref({
//   name: "Trung",
//   age: 30,
// });
const user = reactive({
  name: "Trung",
  age: 30,
});
const userRef = toRefs(user);
//Change reactive to ref
console.log(userRef.name.value);
function getUserAge() {
  //Ref case
  // user.value.age++;

  user.age++;
}
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
