<template>
  <v-alert
    v-if="errors.length"
    color="error"
    class="body-2 font-weight-light mt-1"
    style="width: 100%"
    prominent
    outlined
    dense
    type="warning"
  >
    <template v-slot:prepend
      ><v-icon color="error" right>mdi-information-outline</v-icon></template
    >
    <ul style="list-style: none">
      <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
    </ul></v-alert
  >
</template>

<script>
export default {
  name: "Base.Error.Message",
  props: {
    errors: { type: Array, default: () => [] },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>