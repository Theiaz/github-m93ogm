<template>
  <router-view />
  <router-link :to="{ name: next }">
    <span>Next</span>
  </router-link>
  <div class="wrapper">
    <HelloWorld msg="You did it!" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: { HelloWorld },
};
</script>
