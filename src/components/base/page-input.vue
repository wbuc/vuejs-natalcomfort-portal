<template>
  <div :class="{ 'mb-3': !dense, 'mb-1': dense }" style="width: 100%">
    <v-list-item-title
      class="font-weight-light no-cursor"
      :class="{ title: !dense, 'subtitle-1': dense }"
      >{{ title }}</v-list-item-title
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "page.input.control",
  props: {
    title: { type: String, required: false },
    dense: { type: Boolean, default: true },
  },
};
</script>

<style scoped>
.no-cursor {
  cursor: default;
}
</style>