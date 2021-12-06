<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { HummingtestSample } from "@/entry.esm";
import { HbButton } from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    HummingtestSample,
    HbButton,
  },
});
</script>

<template>
  <div id="app" class="v-application">
    <hummingtest-sample />
    <HbButton />
    <HelloWorld />
  </div>
</template>
