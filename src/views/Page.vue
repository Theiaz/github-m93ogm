<template>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
  <router-link v-if="hasPrevPage" :to="{ name: 'previous' }">
    <span>Previous</span>
  </router-link>
  <router-link v-if="hasNextPage" :to="{ name: 'next' }">
    <span>Next</span>
  </router-link>
  <router-view />
</template>

<script>
import { useMouse } from "../composables/useMouse.js";

export default {
  name: "Page",
  setup() {
    const { x, y } = useMouse();

    return { x, y }; // this lines causes the failing
  },
  computed: {
    hasPrevPage() {
      return this.$route.name === "next";
    },
    hasNextPage() {
      return this.$route.name === "previous";
    },
  },
};
</script>
