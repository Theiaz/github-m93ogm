<template>
  <div class="greetings">
    <div>Mouse position is at: {{ x }}, {{ y }}</div>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import { useMouse } from "../composables/useMouse.js";

export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { x, y } = useMouse();

    return { x, y }; // this lines causes the failing
  },
};
</script>
