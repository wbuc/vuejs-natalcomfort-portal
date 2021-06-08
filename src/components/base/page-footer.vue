<template>
  <v-layout class="pr-1">
    <slot></slot>
  </v-layout>
</template>

<script>
export default {
  name: "component.layout.form.footer",
  props: {
    title: { type: String, required: false },
    flat: { type: Boolean, default: true },
    dense: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
</style>